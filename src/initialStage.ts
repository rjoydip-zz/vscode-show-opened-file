import { StatusBarUI } from "./statusBarUI";

export class InitialActiveStage {
    
    constructor() {
        StatusBarUI.Init();
    }

    public static dispose() {
        StatusBarUI.dispose();
    }
}