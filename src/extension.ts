'use strict';
import { window, ExtensionContext, commands, workspace } from 'vscode';
import { Config } from './config';
import { StatusBarUI } from './StatusbarUi';
import { WorkshopFilesOpened } from './workshopFilesOpened';

export function activate(context: ExtensionContext) {

    console.log("workshopFilesOpened.settings.AlertOnLoad", Config.getAlertOnLoad);

    StatusBarUI.Init();
    context.subscriptions.push(commands
        .registerCommand('extension.workshopFilesOpened.go', (fileUri) => {
            workspace.saveAll().then(() => {
                let text = WorkshopFilesOpened.opened();
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
    window.showInformationMessage("Deactivate");
}