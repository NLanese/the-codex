import { UserInputError } from "apollo-server-errors";
import prisma from "@prismaDB";

var CryptoJS = require("crypto-js");


export const handleAuth = async (clientToken) => {
  console.log("Handling Auth")
  try {
      //////////////
      // SECURITY //
      //////////////

      // Decrypt the client side token
      let bytes = CryptoJS.AES.decrypt(clientToken, process.env.AUTH_KEY);
      let decryptedToken = bytes.toString(CryptoJS.enc.Utf8);
  
      // Get the list of potential tokens
      const potentialExistingTokens = await prisma.authToken.findMany({
        where: {
          token: decryptedToken,
          active: true,
        },
      });

      console.log("1")
      
      // Loop through all existing tokens to find specific token to this user
      let userAuthToken = null;
      potentialExistingTokens.map((tokenObject) => {
        if (tokenObject.token === decryptedToken) {
          userAuthToken = tokenObject;
        }
      });

      console.log("2")

      ///////////////////////////////
      // Returns token and User ID //
      ///////////////////////////////
  
      // If there is a Token, process it
      if (userAuthToken) {
  
        // Checks the Validity of the Token
        let ageRange = new Date().getTime + 10000
        ageRange = new Date(ageRange)

        // Expired Token
        console.log("3")
        if (userAuthToken.createdAt <= ageRange) {
          console.log(userAuthToken.createdAt, " Is older than ", ageRange)
            await prisma.authToken.update({
                where: {
                    id: userAuthToken.id,
                },
                data: {
                    active: false,
                },
            });
            console.log("4")
            console.log("expired")
            return null;
        } 
  
        // Valid Token, updated CreatedAt to make it active for another hour
        else {
          console.log("4")
          await prisma.authToken.update({
            where: {
              id: userAuthToken.id,
            },
            data: {
              createdAt: new Date(),
            },
          });
        }
  
  
        // Get the user object and return into the apollo context
        console.log("5")
        const user = await prisma.user.findUnique({
          where: {
            id: userAuthToken.userID,
          },
          select: {
            id: true,
            role: true
          }
        })
        .catch(error => {
            throw new UserInputError("There was an error getting the User Data associated with this token.")
        });
  
        const authObject = {tokenID: userAuthToken.id, userID: user.id, userRole: user.role}
        return authObject;

      } 
  
      // No Valid Token
      else {
        throw new UserInputError("Token Authentication Error. Try logging out and back in.");
        return false
      }
    } catch (error) {
      console.log("Auth error")
      console.log(error)
      throw new UserInputError("Token Authentication Error. Try logging out and back in.");
      return false
    }
};