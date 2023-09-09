import * as vscode from "vscode";
import { TestView } from "./view/TestView";
import { generateReadme } from "./utils";
import { Credentials } from "./credentials";

const commandGenerator = (
  context: vscode.ExtensionContext,
  name: string,
  callback: () => void
) => {
  let dispose = vscode.commands.registerCommand(`fosscode.${name}`, callback);
  context.subscriptions.push(dispose);
};

export async function activate(context: vscode.ExtensionContext) {
  const credentials = new Credentials();
  await credentials.initialize(context);

  commandGenerator(context, "helloWorld", () => {
    vscode.window.showInformationMessage("Hello World from HelloWorld!");
  });

  const disposable = vscode.commands.registerCommand(
    "fosscode.getGitHubUser",
    async () => {
      /**
       * Octokit (https://github.com/octokit/rest.js#readme) is a library for making REST API
       * calls to GitHub. It provides convenient typings that can be helpful for using the API.
       *
       * Documentation on GitHub's REST API can be found here: https://docs.github.com/en/rest
       */
      const octokit = await credentials.getOctokit();
      const userInfo = await octokit.users.getAuthenticated();

      vscode.window.showInformationMessage(
        `Logged into GitHub as ${userInfo.data.login}`
      );
    }
  );

  context.subscriptions.push(disposable);

  new TestView(context);

  commandGenerator(context, "generateReadme", () => {
    generateReadme(credentials);
  });
}

export function deactivate() {}
