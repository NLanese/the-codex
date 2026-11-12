import prisma from "@prismaDB";
import { UserInputError } from "apollo-server-errors";

import makeRandomAuthString from "../../../../helpers/TokenHelpers/makeRandomAuthString";

var CryptoJS = require("crypto-js");

export default {
    Mutation: {
        loginUser: async (_, {username, password}) => {

            console.log("========================\n  Login User\n-----------------------\n")
            console.log("Params...")
            console.log(
                username, "\n",
                password, "\n",
            )

            ///////////////////////////////////
            // Finds Potenial Users to Login //
            ///////////////////////////////////

            console.log("Finding user...")
            let potentialUsers = []
            username = username.toUpperCase()

            let userByEmail = await prisma.user.findUnique({
                where: {
                    email: username
                },
                select: {
                    id: true,
                    password: true
                }
            })
            if (userByEmail){ potentialUsers.push(userByEmail) }

            let userByAlias = await prisma.user.findUnique({
                where: {
                    username: username
                },
                select: {
                    id: true,
                    password: true
                }
            })
            if (userByAlias){ potentialUsers.push(userByAlias) }
            console.log("User(s) found: ", potentialUsers)

            //////////////////////////////////////
            // Tries password against each user //
            //////////////////////////////////////
            if (potentialUsers.length === 0){
                throw new UserInputError("No Emails or Aliases by that name")
            }
            let loginUser
            potentialUsers.forEach(user => {
                console.log("Checking password against user...")

                // Pass Decrption
                let bytes = CryptoJS.AES.decrypt(
                    user.password,
                    process.env.PASSWORD_SECRET_KEY
                )
                let decryptedPassword = bytes.toString(CryptoJS.enc.Utf8)
                if (decryptedPassword === password){
                    console.log("Password match found!")
                    loginUser = user
                }
            })

            //////////////////////////////////////////////
            // Failed Login || Success - Token Creation //
            //////////////////////////////////////////////
            if (!loginUser){
                throw new UserInputError("Invalid Password")
            }
            
            // Clears all old User Tokens
            console.log("Deleting any stray tokens")
            await prisma.authToken.deleteMany({
                where: {
                    userID: loginUser.id
                }
            })

            // Creates new user Token
            console.log("Creating new token")
            const authToken = await prisma.authToken.create({
                data: {
                    active: true,
                    token: makeRandomAuthString(),
                    user: {
                        connect: {
                            id: loginUser.id
                        }
                    }
                }
            })

            // Encrypts Token from Auth Token Instance
            console.log("Creating Encrypted User Token")
            const encryptedToken = CryptoJS.AES.encrypt(
                authToken.token,
                process.env.AUTH_KEY
              ).toString();

            // Returns Token to be used in Query. 
            console.log("Returning encryption")
            console.log("      DONE       \n=======================\n")
            return{token: encryptedToken}

        }
    }
}