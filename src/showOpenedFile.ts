import { workspace, window } from 'vscode';

import { StatusBarUI } from './statusBarUI';
import { Config } from './config';

export class ShowOpenedFile {

    public static init() {

        if (Config.getAlertOnLoad) {
            window.showInformationMessage('Show Opened File working');
        }

        if (Config.getStatusBarOnLoad) {
            StatusBarUI.Init();
        }

        // workspace text document event 
        workspace.onDidOpenTextDocument(() => {
            // console.log("onDidOpenTextDocument");
            StatusBarUI.Init();
        });

        workspace.onDidCloseTextDocument(() => {
            // console.log("onDidCloseTextDocument");
            StatusBarUI.Init();
        });

    }

    public static go() {
        let text = '';
        const textDoc = workspace.textDocuments.filter(doc => doc.uri.scheme === 'file');
        const textDocLen = textDoc.length;

        if (textDocLen) {
            text = `${textDocLen === 1 ? textDocLen + ' file opened' : textDocLen + ' files opened'}`;
        } else {
            text = 'No file opened';
        }

        return text;
    }
}