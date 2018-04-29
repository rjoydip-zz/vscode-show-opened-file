import { StatusBarItem, window, StatusBarAlignment } from 'vscode';
import { ShowOpenedFile } from "./showOpenedFile";

export class StatusBarUI {

    private static _statusBarItem: StatusBarItem;

    private static get statusbar() {
        if (!StatusBarUI._statusBarItem) {
            StatusBarUI._statusBarItem = window.createStatusBarItem(StatusBarAlignment.Right, 100);
            this.statusbar.show();
        }

        return StatusBarUI._statusBarItem;
    }

    public static Init() {
        StatusBarUI.working('loading...');
        setTimeout(function () {
            let text = ShowOpenedFile.go();
            StatusBarUI.statusbar.text = `$(file) ${text}`;
            StatusBarUI.statusbar.command = 'extension.showOpenedFile.go';
            StatusBarUI.statusbar.tooltip = text;
        }, 1000);
    }

    private static working(workingMsg: string = 'Working on it...') {
        StatusBarUI.statusbar.text = `$(pulse) ${workingMsg}`;
        StatusBarUI.statusbar.tooltip = 'In case if it takes long time, try to close all browser window.';
    }

    public static dispose() {
        StatusBarUI.statusbar.dispose();
    }
}