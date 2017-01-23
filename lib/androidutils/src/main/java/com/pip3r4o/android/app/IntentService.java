package com.pip3r4o.android.app;

/**
 * Created by pkanev on 1/21/2017.
 */

public abstract class IntentService extends android.app.IntentService {
    /**
     * Creates an IntentService.  Invoked by your subclass's constructor.
     *
     * @param name Used to name the worker thread, important only for debugging.
     */
    public IntentService(String name) {
        super(name);
    }

    /**
     * Creates an IntentService.  Invoked by your subclass's constructor.
     */
    public IntentService() {
        super("NativeScriptIntentService");
    }
}
