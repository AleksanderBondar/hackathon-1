import * as vscode from "vscode";

const commandGenerator =
  (context: vscode.ExtensionContext, name: string, callback: () => void) =>
  () => {
    let dispose = vscode.commands.registerCommand(`fosscode.${name}`, callback);
    context.subscriptions.push(dispose);
  };

export function activate(context: vscode.ExtensionContext) {
  commandGenerator(context, "helloWorld", () => {
    vscode.window.showInformationMessage("Hello World from HelloWorld!");
    const extensionUri = vscode.Uri.parse("vscode://myExtension.open");
    vscode.env.openExternal(extensionUri);
  });
}

export function deactivate() {}
