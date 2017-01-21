declare module com {
    export module pip3r4o {
        export module android {
            export module app {
                export class IntentService {
                    constructor();
                    constructor(name: string);
                    onCreate?(): void;
                    onDestroy?(): void;
                    onStart?(intent: any, startId: number);
                    onStartCommand?(intent: any, flags: number, startId: number): number;
                    setIntentRedelivery?(enabled: boolean): void;
                    onHandleIntent(intent: any): void;
                    stopSelf?(): void;
                    stopSelf?(startId: number): void;
                }
            }
        }
    }
}