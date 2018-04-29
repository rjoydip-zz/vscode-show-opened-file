import { workspace } from 'vscode';

export class FilesOpened {
    static opened() {
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