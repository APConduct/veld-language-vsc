import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Veld language extension is now active!');

  // Register document formatting provider
  const formattingProvider = vscode.languages.registerDocumentFormattingEditProvider('veld', {
    provideDocumentFormattingEdits(_document: vscode.TextDocument): vscode.TextEdit[] {
      // This is a placeholder for future formatting logic
      // Using underscore prefix to indicate unused parameter (TypeScript convention)
      // For now, we'll just return an empty array (no formatting changes)
      return [];
    }
  });

  // Register hover provider
  const hoverProvider = vscode.languages.registerHoverProvider('veld', {
    provideHover(_document: vscode.TextDocument, _position: vscode.Position) {
      // This is a placeholder for future hover logic
      // Using underscore prefix to indicate unused parameters
      
      // For example, in the future you might:
      // 1. Get the word at position
      // 2. Look up documentation for that word
      // 3. Return markdown content in a hover

      return null;
    }
  });

  // Add providers to subscriptions
  context.subscriptions.push(formattingProvider, hoverProvider);
}

export function deactivate() {}
