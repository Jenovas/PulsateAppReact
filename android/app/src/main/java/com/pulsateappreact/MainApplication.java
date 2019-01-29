package com.pulsateappreact;

import android.app.Application;
import android.content.Context;
import android.support.multidex.MultiDex;

import com.crashlytics.android.Crashlytics;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.pulsatehq.external.pulsate.factory.PulsateFactory;
import com.pulsatehq.external.pulsate.manager.IPulsateManager;
import com.pulsatehq.internal.Pulsate;

import io.fabric.sdk.android.Fabric;
import java.util.Arrays;
import java.util.List;

import com.pulsatehq.internal.pulsate.managers.PulsateManager;
import com.pulsatehq.internal.util.AuthorizationData;
import com.reactlibrary.RNPulsateSdkReactPackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new RNPulsateSdkReactPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  protected void attachBaseContext(Context base) {
      super.attachBaseContext(base);
      MultiDex.install(base);
  }

  @Override
  public void onCreate() {
      super.onCreate();
      Fabric.with(this, new Crashlytics());
      Pulsate.install(this);
      AuthorizationData authData = new AuthorizationData("62bbc49537b9fba458b1ad9fc7a12a0c5c476ae8f15a548a75f5a05f54971ef2", "a7e0536a153e7ce80ca6ee8ebfd71dca23eeff7d6020dd031c9ab9dfd1b7dd13", "164686352256");
      IPulsateManager mPulsateManager = PulsateFactory.getInstance();
      mPulsateManager.setAuthorizationData(authData);
      SoLoader.init(this, /* native exopackage */ false);
  }
}
