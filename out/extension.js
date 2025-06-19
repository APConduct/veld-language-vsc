"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
function activate(context) {
    console.log('Veld language extension is now active!');
    // Register document formatting provider
    const formattingProvider = vscode.languages.registerDocumentFormattingEditProvider('veld', {
        provideDocumentFormattingEdits(_document) {
            // This is a placeholder for future formatting logic
            // Using underscore prefix to indicate unused parameter (TypeScript convention)
            // For now, we'll just return an empty array (no formatting changes)
            return [];
        }
    });
    // Register hover provider
    const hoverProvider = vscode.languages.registerHoverProvider('veld', {
        provideHover(_document, _position) {
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
function deactivate() { }
//# sourceMappingURL=extension.js.map