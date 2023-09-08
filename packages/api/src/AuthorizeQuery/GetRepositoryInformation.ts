import { FieldResolveInput } from 'stucco-js';
import { ModelTypes, resolverFor } from '../zeus/index.js';
import { Octokit } from 'octokit';

const prepareUserPayload = (resp: any): ModelTypes['User'] => ({
  avatarUrl: resp.avatar_url,
  id: resp.id,
  isAdmin: resp.site_admin,
  login: resp.login,
  profileUrl: resp.url,
});

const preparePayload = (resp: any): ModelTypes['Repository'] => ({
  id: resp.id,
  fullName: resp.full_name,
  private: resp.private,
  createdAt: resp.created_at,
  pushedAt: resp.pushed_at,
  updatedAt: resp.updated_at,
  archived: resp.archived,
  forks: resp.forks_count,
  stars: resp.stargazers_count,
  watchers: resp.watchers_count,
  open_issues: resp.open_issues_count,
  contributors: undefined,
  owner: prepareUserPayload(resp.owner),
  ...(resp.license && {
    license: {
      key: resp.license.key,
      name: resp.license.name,
    },
  }),
});

export const handler = async (input: FieldResolveInput) =>
  resolverFor('AuthorizeQuery', 'GetRepositoryInformation', async (args, src) => {
    const octokit = new Octokit({
      auth: src.token,
    });
    const payload = await octokit
      .request(`GET /repos/${args.owner}/${args.repository}`, {
        owner: args.owner,
        repository: args.repository,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      })
      .then((r) => r.data);
    const collaborators = await octokit.request(`/repos/${args.owner}/${args.repository}/collaborators`, {
      owner: args.owner,
      repository: args.repository,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    const contributors: ModelTypes['User'][] = collaborators.data.map((u: any) => prepareUserPayload(u));
    return { ...preparePayload(payload), contributors };
  })(input.arguments, input.source);
