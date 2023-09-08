import { getEnv } from './envs.js';
const { sign } = pkg;
import pkg from 'jsonwebtoken';
export const getUserInfo = async (url, token) => fetch(`${url}`, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
}).then((response) => response.json());
export const getGithubInfo = async (url, token) => fetch(`${url}`, {
    headers: {
        Authorization: `Bearer ${token}`,
        'X-GitHub-Api-Version': '2023-11-28',
        Accept: 'application/vnd.github+json',
    },
}).then((response) => response.json());
export const getJwtAndRefreshToken = (id, refreshTokenId) => {
    const JWT_SECRET = getEnv('JWT_SECRET');
    const JWT_TOKEN_EXPIRATION_IN_SECONDS = process.env['JWT_TOKEN_EXPIRATION_IN_SECONDS'];
    const expiresIn = JWT_TOKEN_EXPIRATION_IN_SECONDS ? parseInt(JWT_TOKEN_EXPIRATION_IN_SECONDS) : 60 * 60 * 24;
    return {
        jwtToken: sign({ userId: id }, JWT_SECRET, {
            expiresIn,
        }),
        refreshToken: sign({ tokenId: refreshTokenId, sub: id }, JWT_SECRET),
    };
};
