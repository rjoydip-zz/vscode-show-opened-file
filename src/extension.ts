'use strict';
import { window, ExtensionContext, commands, workspace } from 'vscode';
import { StatusBarUI } from './StatusbarUi';
import { ShowOpenedFile } from './showOpenedFile';

export function activate(context: ExtensionContext) {

    ShowOpenedFile.init();

    context.subscriptions.push(commands
        .registerCommand('extension.showOpenedFile.go', (fileUri) => {
            workspace.saveAll().then(() => {
                let text = ShowOpenedFile.go();
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
    window.showInformationMessage("Deactivate Show Opened File Extension");
}