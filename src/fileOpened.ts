import { workspace, window } from 'vscode';
import { StatusBarUI } from './statusBarUI';
import { Config } from './config';

export class FilesOpened {

    public static init() {

        console.log("fileOpened.AlertOnLoad", Config.getAlertOnLoad);
        console.log("fileOpened.StatusbarOnLoad", Config.getStatusBarOnLoad);

        if(Config.getAlertOnLoad) {
            window.showInformationMessage('File opened working'); 
        }
    
        if(Config.getStatusBarOnLoad) {
            StatusBarUI.Init();
        }
        
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