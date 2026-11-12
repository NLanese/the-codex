import { UserInputError } from "apollo-server-errors";
import prisma from "@prismaDB";


export default {
    Query: {
        getUser: async (_, {}, context) => {

            console.log("========================\n  Get User\n-----------------------\n")


            /////////////////
            // LOGIN CHECK //
            console.log("CONTEXT:::")
            console.log(context)
            if (!context.userID) throw new UserInputError("You are not currently logged in! Please Login");

            ///////////////////////////
            // GRABS USER AND FIELDS //
            return await prisma.user.findUnique({
                where: {
                    id: context.userID
                },
                select: {
                    id: true,
                    email: true,
                    username: true
                }
            })
        }
    }
}