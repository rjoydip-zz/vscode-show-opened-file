'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // vscode.window.showInformationMessage('View structure working');
    let disposable = vscode.commands.registerCommand('extension.cmd', () => {
        console.log(vscode.workspace);
        if(vscode.workspace.textDocuments.length) {
            vscode.window.showInformationMessage(`Workspace has ${vscode.workspace.textDocuments.length === 1 ? vscode.workspace.textDocuments.length + ' file': vscode.workspace.textDocuments.length + ' files'}`);
        } else {
            vscode.window.showInformationMessage('Workspace has no file');
        }        
    });
    context.subscriptions.push(disposable);
}

export function deactivate() {
    console.log('deactivate');
}