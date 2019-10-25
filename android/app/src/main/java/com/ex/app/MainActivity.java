package com.ex.app;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.ahm.capacitor.camera.preview.CameraPreview;
import jp.rdlabo.capacitor.plugin.facebook.FacebookLogin;
import com.jonoj.plugin.FusedLocation;
import co.fitcom.fingerprintauth.FingerPrintAuthPlugin;
import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(CameraPreview.class);
      add(FacebookLogin.class);
      add(FingerPrintAuthPlugin.class);
      add(FusedLocation.class);
    }});
  }
}
