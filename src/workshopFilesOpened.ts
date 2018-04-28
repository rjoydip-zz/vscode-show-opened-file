import { window, StatusBarAlignment, workspace } from 'vscode';

export class WorkshopFilesOpened {
    static opened() {
        let text = '';
        if (workspace.textDocuments.length) {
            text = `Workspace has ${workspace.textDocuments.length === 1 ? workspace.textDocuments.length + ' file opened' : workspace.textDocuments.length + ' files opened'}`;
        } else {
            text = 'Workspace has no file opened';
        }
        return text;
    }
}