package com.baumblatt.capacitor.firebase.auth.handlers;

import android.content.Intent;

import com.baumblatt.capacitor.firebase.auth.BbeIoCapacitorFirebaseAuth;
import com.getcapacitor.JSObject;
import com.getcapacitor.PluginCall;
import com.google.firebase.auth.AuthCredential;
import com.google.firebase.auth.FirebaseUser;

public interface ProviderHandler {
    void init(BbeIoCapacitorFirebaseAuth plugin);

    void signIn(PluginCall call);
    void signOut();

    int getRequestCode();
    void handleOnActivityResult(int requestCode, int resultCode, Intent data);

    boolean isAuthenticated();

    void fillResult(JSObject object);
}
