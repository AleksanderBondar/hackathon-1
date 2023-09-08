export declare const getUserInfo: (url: string, token: string) => Promise<Record<string, any>>;
export declare const getGithubInfo: (url: string, token: string) => Promise<Record<string, string>>;
export declare const getJwtAndRefreshToken: (id: string, refreshTokenId: string) => {
    jwtToken: string;
    refreshToken: string;
};
