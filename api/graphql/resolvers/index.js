import userResolvers from "./userResolvers/userResolvers";

export default{
    Query: {
        ...userResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation
    }
}