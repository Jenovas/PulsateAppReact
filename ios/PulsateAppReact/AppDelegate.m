/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <PULPulsate/PULPulsate.h>
#import <Fabric/Fabric.h>
#import <Crashlytics/Crashlytics.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"PulsateAppReact"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  PULAuthorizationData* authData = [[PULAuthorizationData alloc] initWithAppId:@"2242f8d4f39368691ad0e5e632eab814f374658d1916c5bba69cc08e8749543d" andAppKey:@"3b28e82f9efaafeba512014fb986ef855efbba6c79760f204d2845938c2a0a65" validationError:nil];
  PULPulsateManager* manager = [PULPulsateFactory getInstanceWithAuthorizationData:authData withLocationEnabled:YES withPushEnabled:YES withLaunchOptions:launchOptions withPulsateAppDelegate:YES andPulsateNotificationDelegate:YES error:nil];
  [manager startPulsateSession:^(BOOL success, NSError * _Nullable error) {
    
  }];
  [Fabric with:@[[Crashlytics class]]];
  return YES;
}

@end
