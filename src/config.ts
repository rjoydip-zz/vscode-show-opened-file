'use strict';

import { workspace } from 'vscode';

export class Config {

    public static get configuration() {
        return workspace.getConfiguration('fileOpened.settings');
    }

    public static getSettings<T>(val: string): T {
        return Config.configuration.get(val) as T;
    }

    public static get getAlertOnLoad(): string {
        return Config.getSettings<string>('AlertOnLoad');
    }
}