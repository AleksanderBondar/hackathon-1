import { FieldResolveInput } from 'stucco-js';
import { resolverFor } from '../zeus/index.js';
import { getEnv } from '../utils/envs.js';

const scopes: string[] = ['repo', 'read:org', 'user'];

export const handler = async (input: FieldResolveInput) =>
  resolverFor('PublicQuery', 'GenerateGithubOAuthLink', async (setup) => {
    const sc = scopes.reduce((pv, cv) => pv + cv + '%20', '');
    return (
      `https://github.com/login/oauth/authorize?scope=${sc}` +
      `&client_id=${getEnv('GITHUB_APPLICATION_CLIENT_ID')}${setup.state ? '&state=' + setup.state : ``}&redirect_uri=${
        setup.redirectUri ? setup.redirectUri : getEnv('GITHUB_REDIRECT_URI')
      }`
    );
  })(input.arguments);
