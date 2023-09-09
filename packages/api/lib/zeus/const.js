/* eslint-disable */
export const AllTypesProps = {
    Query: {
        auth: {}
    },
    AuthorizeQuery: {
        GetRepositoryInformation: {}
    },
    AuthorizeMutation: {
        getRepository: {}
    },
    PublicQuery: {
        GenerateGithubOAuthLink: {},
        GenerateGithubJWT: {}
    }
};
export const ReturnTypes = {
    Query: {
        auth: "AuthorizeQuery",
        public: "PublicQuery"
    },
    Mutation: {
        auth: "AuthorizeMutation"
    },
    AuthorizeQuery: {
        GetRepositoryInformation: "Repository"
    },
    AuthorizeMutation: {
        getRepository: "Repository"
    },
    PublicQuery: {
        GenerateGithubOAuthLink: "String",
        GenerateGithubJWT: "String"
    },
    Repository: {
        id: "String",
        fullName: "String",
        private: "Boolean",
        owner: "User",
        contributors: "User",
        createdAt: "String",
        pushedAt: "String",
        updatedAt: "String",
        archived: "Boolean",
        license: "License",
        stars: "Int",
        forks: "Int",
        open_issues: "Int",
        watchers: "Int"
    },
    User: {
        login: "String",
        id: "String",
        avatarUrl: "String",
        profileUrl: "String",
        isAdmin: "String"
    },
    License: {
        name: "String",
        key: "String"
    }
};
export const Ops = {
    query: "Query",
    mutation: "Mutation"
};
