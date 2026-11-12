import getUser from "./queries/getUser";

import loginUser from "./mutations/loginUser";

export default {
    Query: {
        ...getUser.Query
    },
    Mutation: {
        ...loginUser.Mutation
    }
}