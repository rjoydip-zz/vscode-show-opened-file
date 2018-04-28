'use strict';
import { window, ExtensionContext, StatusBarAlignment, commands, workspace } from 'vscode';
import { StatusBarUI } from './StatusbarUi';
import { WorkshopFilesOpened } from './workshopFilesOpened';

import { InitialActiveStage } from "./initialStage";

export function activate(context: ExtensionContext) {

    context.subscriptions.push(commands
        .registerCommand('extension.cmd', (fileUri) => {
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
}