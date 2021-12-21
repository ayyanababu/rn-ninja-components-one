//
//  RNNinjaComponentsOneModule.swift
//  RNNinjaComponentsOneModule
//
//  Copyright © 2021 raja kopparthi. All rights reserved.
//

import Foundation

@objc(RNNinjaComponentsOneModule)
class RNNinjaComponentsOneModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
