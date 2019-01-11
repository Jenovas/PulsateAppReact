//
//  NotificationService.m
//  PulsateAppReactNSE
//
//  Created by Rafael Skubisz on 1/10/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "NotificationService.h"

static NSString* const PulsateAttachmentUrl = @"au";
static NSString* const PulsateAttachmentType = @"at";

@interface NotificationService ()

@property (nonatomic, strong) void (^contentHandler)(UNNotificationContent *contentToDeliver);
@property (nonatomic, strong) UNMutableNotificationContent *bestAttemptContent;
@property (nonatomic, strong) UNMutableNotificationContent *notificationContent;

@end

@implementation NotificationService

- (void)didReceiveNotificationRequest:(UNNotificationRequest *)request withContentHandler:(void (^)(UNNotificationContent * _Nonnull))contentHandler {
  self.contentHandler = contentHandler;
  self.bestAttemptContent = [request.content mutableCopy];
  self.notificationContent = [request.content mutableCopy];
  
  if (request.content.userInfo == nil) {
    [self defaultPushHandler];
    return;
  }
  
  if (request.content.userInfo[PulsateAttachmentType] == nil || request.content.userInfo[PulsateAttachmentUrl] == nil) {
    [self defaultPushHandler];
    return;
  }
  
  NSString* pulsateAttachment = request.content.userInfo[PulsateAttachmentUrl];
  NSString* pulsateAttachmentType = request.content.userInfo[PulsateAttachmentType];
  NSString *suffix = [@"." stringByAppendingString:pulsateAttachmentType];
  NSURL *pulsateAttachmentUrl = [NSURL URLWithString:pulsateAttachment];
  
  NSURLSession *session = [NSURLSession sessionWithConfiguration:[NSURLSessionConfiguration defaultSessionConfiguration]];
  [[session downloadTaskWithURL:pulsateAttachmentUrl
              completionHandler:^(NSURL *url, NSURLResponse *response, NSError *error) {
                if (error != nil) {
                  [self defaultPushHandler];
                  return;
                } else {
                  NSFileManager *fileManager = [NSFileManager defaultManager];
                  NSURL *typedUrl = [NSURL fileURLWithPath:[url.path stringByAppendingString:suffix]];
                  [fileManager moveItemAtURL:url toURL:typedUrl error:&error];
                  
                  NSError *error = nil;
                  UNNotificationAttachment *attachment = [UNNotificationAttachment attachmentWithIdentifier:@"" URL:typedUrl options:nil error:&error];
                  if (attachment == nil) {
                    [self defaultPushHandler];
                    return;
                  }
                  self.bestAttemptContent.attachments = [NSArray arrayWithObjects:attachment, nil] ;
                  self.contentHandler(self.bestAttemptContent);
                }
              }] resume];
}

- (void)serviceExtensionTimeWillExpire {
  // Called just before the extension will be terminated by the system.
  // Use this as an opportunity to deliver your "best attempt" at modified content, otherwise the original push payload will be used.
  self.contentHandler(self.bestAttemptContent);
}

- (void)defaultPushHandler {
  self.contentHandler(self.bestAttemptContent);
}

@end
