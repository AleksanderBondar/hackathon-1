import { resolverFor } from '../zeus/index.js';
import { getEnv } from '../utils/envs.js';
import { getUserInfo } from '../utils/github.js';
export const handler = async (input) => resolverFor('PublicQuery', 'GenerateGithubJWT', async (args) => {
    const githubData = new URLSearchParams();
    githubData.append('code', args.code);
    githubData.append('client_id', getEnv('GITHUB_APPLICATION_CLIENT_ID'));
    githubData.append('client_secret', getEnv('GITHUB_APPLICATION_CLIENT_SECRET'));
    githubData.append('redirect_uri', args.redirectUri);
    const githubResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        body: githubData,
    }).then((response) => response.text());
    const github_access_token = githubResponse.split('&scope')[0].substring(13);
    console.log(github_access_token);
    const githubProfile = await getUserInfo('https://api.github.com/user', github_access_token);
    if (!githubProfile)
        throw new Error('cannot fetch github profile');
    const githubEmails = await getUserInfo('https://api.github.com/user/emails', github_access_token);
    if (!githubEmails.length)
        throw new Error('email length empty');
    const primaryEmail = githubEmails.find((email) => email.primary === true).email;
    const email = githubProfile.email || primaryEmail;
    if (!email)
        throw new Error('email empty');
    return github_access_token;
})(input.arguments);
