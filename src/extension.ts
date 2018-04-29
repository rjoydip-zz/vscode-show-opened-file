import { window, ExtensionContext, commands } from 'vscode';
import { ShowOpenedFile } from './showOpenedFile';

export function activate(context: ExtensionContext) {

    ShowOpenedFile.init();

    context.subscriptions.push(commands
        .registerCommand('extension.showOpenedFile.go', (fileUri) => {
            let text = ShowOpenedFile.go();
            window.showInformationMessage(text);
        })
    );
}

export function deactivate() {
    window.showInformationMessage("Deactivate Show Opened File Extension");
}