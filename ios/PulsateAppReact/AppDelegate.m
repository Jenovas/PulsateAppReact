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
  
  PULAuthorizationData* authData = [[PULAuthorizationData alloc] initWithAppId:@"a5b39851c30a5b12553a9d6f13d37006eb9eabe1c4c6f21ceaa0c25abac33e4a" andAppKey:@"b2aff428f6c802c3833bbd857b303e93227d48dc7d4d0160789c4b7b53ba371c" validationError:nil];
  PULPulsateManager* manager = [PULPulsateFactory getInstanceWithAuthorizationData:authData withLocationEnabled:YES withPushEnabled:YES withLaunchOptions:launchOptions withPulsateAppDelegate:NO andPulsateNotificationDelegate:YES error:nil];
  [manager startPulsateSession:^(BOOL success, NSError * _Nullable error) {
    
  }];
  [Fabric with:@[[Crashlytics class]]];
  return YES;
}

@end
