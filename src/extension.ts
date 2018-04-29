'use strict';
import { window, ExtensionContext, commands, workspace } from 'vscode';
import { StatusBarUI } from './StatusbarUi';
import { FilesOpened } from './fileOpened';

export function activate(context: ExtensionContext) {

    FilesOpened.init();

    context.subscriptions.push(commands
        .registerCommand('extension.fileOpened.go', (fileUri) => {
            workspace.saveAll().then(() => {
                let text = FilesOpened.go();
                window.showInformationMessage(text);
                StatusBarUI.Init();
            });
        })
    );

    context.subscriptions.push(window
        .onDidChangeActiveTextEditor(() => {
            if (window.activeTextEditor === undefined) return;
            else StatusBarUI.Init();
        })
    );
}

export function deactivate() {
    console.log('deactivate editor');
    window.showInformationMessage("Deactivate File Opened Extension");
}