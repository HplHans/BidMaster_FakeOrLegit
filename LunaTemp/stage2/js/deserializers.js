var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointSpring' )
  var i551 = data
  i550.spring = i551[0]
  i550.damper = i551[1]
  i550.targetPosition = i551[2]
  return i550
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointMotor' )
  var i553 = data
  i552.m_TargetVelocity = i553[0]
  i552.m_Force = i553[1]
  i552.m_FreeSpin = i553[2]
  return i552
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.JointLimits' )
  var i555 = data
  i554.m_Min = i555[0]
  i554.m_Max = i555[1]
  i554.m_Bounciness = i555[2]
  i554.m_BounceMinVelocity = i555[3]
  i554.m_ContactDistance = i555[4]
  i554.minBounce = i555[5]
  i554.maxBounce = i555[6]
  return i554
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.JointDrive' )
  var i557 = data
  i556.m_PositionSpring = i557[0]
  i556.m_PositionDamper = i557[1]
  i556.m_MaximumForce = i557[2]
  i556.m_UseAcceleration = i557[3]
  return i556
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i559 = data
  i558.m_Spring = i559[0]
  i558.m_Damper = i559[1]
  return i558
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i561 = data
  i560.m_Limit = i561[0]
  i560.m_Bounciness = i561[1]
  i560.m_ContactDistance = i561[2]
  return i560
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i563 = data
  i562.m_ExtremumSlip = i563[0]
  i562.m_ExtremumValue = i563[1]
  i562.m_AsymptoteSlip = i563[2]
  i562.m_AsymptoteValue = i563[3]
  i562.m_Stiffness = i563[4]
  return i562
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i565 = data
  i564.m_LowerAngle = i565[0]
  i564.m_UpperAngle = i565[1]
  return i564
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i567 = data
  i566.m_MotorSpeed = i567[0]
  i566.m_MaximumMotorTorque = i567[1]
  return i566
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i569 = data
  i568.m_DampingRatio = i569[0]
  i568.m_Frequency = i569[1]
  i568.m_Angle = i569[2]
  return i568
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i571 = data
  i570.m_LowerTranslation = i571[0]
  i570.m_UpperTranslation = i571[1]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i572 = root || new pc.UnityMaterial()
  var i573 = data
  i572.name = i573[0]
  request.r(i573[1], i573[2], 0, i572, 'shader')
  i572.renderQueue = i573[3]
  i572.enableInstancing = !!i573[4]
  var i575 = i573[5]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i575[i + 0]) );
  }
  i572.floatParameters = i574
  var i577 = i573[6]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i577[i + 0]) );
  }
  i572.colorParameters = i576
  var i579 = i573[7]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i579[i + 0]) );
  }
  i572.vectorParameters = i578
  var i581 = i573[8]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i581[i + 0]) );
  }
  i572.textureParameters = i580
  var i583 = i573[9]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i583[i + 0]) );
  }
  i572.materialFlags = i582
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i587 = data
  i586.name = i587[0]
  i586.value = i587[1]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i591 = data
  i590.name = i591[0]
  i590.value = new pc.Color(i591[1], i591[2], i591[3], i591[4])
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i595 = data
  i594.name = i595[0]
  i594.value = new pc.Vec4( i595[1], i595[2], i595[3], i595[4] )
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i599 = data
  i598.name = i599[0]
  request.r(i599[1], i599[2], 0, i598, 'value')
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i603 = data
  i602.name = i603[0]
  i602.enabled = !!i603[1]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i605 = data
  i604.name = i605[0]
  i604.width = i605[1]
  i604.height = i605[2]
  i604.mipmapCount = i605[3]
  i604.anisoLevel = i605[4]
  i604.filterMode = i605[5]
  i604.hdr = !!i605[6]
  i604.format = i605[7]
  i604.wrapMode = i605[8]
  i604.alphaIsTransparency = !!i605[9]
  i604.alphaSource = i605[10]
  i604.graphicsFormat = i605[11]
  i604.sRGBTexture = !!i605[12]
  i604.desiredColorSpace = i605[13]
  i604.wrapU = i605[14]
  i604.wrapV = i605[15]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i607 = data
  i606.name = i607[0]
  i606.atlasId = i607[1]
  i606.mipmapCount = i607[2]
  i606.hdr = !!i607[3]
  i606.size = i607[4]
  i606.anisoLevel = i607[5]
  i606.filterMode = i607[6]
  var i609 = i607[7]
  var i608 = []
  for(var i = 0; i < i609.length; i += 4) {
    i608.push( UnityEngine.Rect.MinMaxRect(i609[i + 0], i609[i + 1], i609[i + 2], i609[i + 3]) );
  }
  i606.rects = i608
  i606.wrapU = i607[8]
  i606.wrapV = i607[9]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i613 = data
  i612.name = i613[0]
  i612.index = i613[1]
  i612.startup = !!i613[2]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i615 = data
  i614.position = new pc.Vec3( i615[0], i615[1], i615[2] )
  i614.scale = new pc.Vec3( i615[3], i615[4], i615[5] )
  i614.rotation = new pc.Quat(i615[6], i615[7], i615[8], i615[9])
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i617 = data
  i616.enabled = !!i617[0]
  i616.aspect = i617[1]
  i616.orthographic = !!i617[2]
  i616.orthographicSize = i617[3]
  i616.backgroundColor = new pc.Color(i617[4], i617[5], i617[6], i617[7])
  i616.nearClipPlane = i617[8]
  i616.farClipPlane = i617[9]
  i616.fieldOfView = i617[10]
  i616.depth = i617[11]
  i616.clearFlags = i617[12]
  i616.cullingMask = i617[13]
  i616.rect = i617[14]
  request.r(i617[15], i617[16], 0, i616, 'targetTexture')
  i616.usePhysicalProperties = !!i617[17]
  i616.focalLength = i617[18]
  i616.sensorSize = new pc.Vec2( i617[19], i617[20] )
  i616.lensShift = new pc.Vec2( i617[21], i617[22] )
  i616.gateFit = i617[23]
  i616.commandBufferCount = i617[24]
  i616.cameraType = i617[25]
  return i616
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i618 = root || request.c( 'CameraAspectFitter' )
  var i619 = data
  request.r(i619[0], i619[1], 0, i618, 'targetSprite')
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i621 = data
  i620.name = i621[0]
  i620.tagId = i621[1]
  i620.enabled = !!i621[2]
  i620.isStatic = !!i621[3]
  i620.layer = i621[4]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i623 = data
  i622.enabled = !!i623[0]
  i622.type = i623[1]
  i622.color = new pc.Color(i623[2], i623[3], i623[4], i623[5])
  i622.cullingMask = i623[6]
  i622.intensity = i623[7]
  i622.range = i623[8]
  i622.spotAngle = i623[9]
  i622.shadows = i623[10]
  i622.shadowNormalBias = i623[11]
  i622.shadowBias = i623[12]
  i622.shadowStrength = i623[13]
  i622.shadowResolution = i623[14]
  i622.lightmapBakeType = i623[15]
  i622.renderMode = i623[16]
  request.r(i623[17], i623[18], 0, i622, 'cookie')
  i622.cookieSize = i623[19]
  return i622
}

Deserializers["GameManager"] = function (request, data, root) {
  var i624 = root || request.c( 'GameManager' )
  var i625 = data
  i624.SIP = !!i625[0]
  request.r(i625[1], i625[2], 0, i624, 'endPanel')
  request.r(i625[3], i625[4], 0, i624, 'endPanelAnimator')
  request.r(i625[5], i625[6], 0, i624, 'levelImageSwitcher')
  request.r(i625[7], i625[8], 0, i624, 'scoreTxt')
  i624.end = !!i625[9]
  i624.endPlay = !!i625[10]
  request.r(i625[11], i625[12], 0, i624, 'hand')
  request.r(i625[13], i625[14], 0, i624, 'message2')
  request.r(i625[15], i625[16], 0, i624, 'animator')
  i624.enableSound = !!i625[17]
  var i627 = i625[18]
  var i626 = new (System.Collections.Generic.List$1(Bridge.ns('DataObject')))
  for(var i = 0; i < i627.length; i += 2) {
  request.r(i627[i + 0], i627[i + 1], 1, i626, '')
  }
  i624.items = i626
  i624.level = i625[19]
  i624.animPos = i625[20]
  request.r(i625[21], i625[22], 0, i624, 'itemsParent')
  request.r(i625[23], i625[24], 0, i624, 'startClickHandler')
  i624.itemValue = i625[25]
  var i629 = i625[26]
  var i628 = []
  for(var i = 0; i < i629.length; i += 2) {
  request.r(i629[i + 0], i629[i + 1], 2, i628, '')
  }
  i624.biddersBubble = i628
  request.r(i625[27], i625[28], 0, i624, 'promptBubble')
  request.r(i625[29], i625[30], 0, i624, 'btnGroup')
  request.r(i625[31], i625[32], 0, i624, 'biddersLossTxt')
  request.r(i625[33], i625[34], 0, i624, 'biddersLossPlus')
  request.r(i625[35], i625[36], 0, i624, 'playersLoss')
  request.r(i625[37], i625[38], 0, i624, 'playersPlus')
  request.r(i625[39], i625[40], 0, i624, 'AuthenticImg')
  request.r(i625[41], i625[42], 0, i624, 'profitImg')
  request.r(i625[43], i625[44], 0, i624, 'fakeImg')
  request.r(i625[45], i625[46], 0, i624, 'cashTxt')
  request.r(i625[47], i625[48], 0, i624, 'failBidCanvas')
  request.r(i625[49], i625[50], 0, i624, 'failPassCanvas')
  i624.win = !!i625[51]
  i624.fail = !!i625[52]
  i624.bidFail = !!i625[53]
  i624.passFail = !!i625[54]
  i624.conditionMet = !!i625[55]
  request.r(i625[56], i625[57], 0, i624, 'audioManager')
  i624.currentScore = i625[58]
  var i631 = i625[59]
  var i630 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i631.length; i += 2) {
  request.r(i631[i + 0], i631[i + 1], 1, i630, '')
  }
  i624.auctionItems = i630
  return i624
}

Deserializers["LevelImageSwitcher"] = function (request, data, root) {
  var i638 = root || request.c( 'LevelImageSwitcher' )
  var i639 = data
  var i641 = i639[0]
  var i640 = []
  for(var i = 0; i < i641.length; i += 2) {
  request.r(i641[i + 0], i641[i + 1], 2, i640, '')
  }
  i638.levelImages = i640
  var i643 = i639[1]
  var i642 = []
  for(var i = 0; i < i643.length; i += 2) {
  request.r(i643[i + 0], i643[i + 1], 2, i642, '')
  }
  i638.itemImages = i642
  return i638
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i646 = root || request.c( 'TaskManager' )
  var i647 = data
  return i646
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i648 = root || request.c( 'AudioManager' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'gameManager')
  request.r(i649[2], i649[3], 0, i648, 'library')
  i648.sfxPoolSize = i649[4]
  i648.enableSound = !!i649[5]
  return i648
}

Deserializers["DataManager"] = function (request, data, root) {
  var i650 = root || request.c( 'DataManager' )
  var i651 = data
  var i653 = i651[0]
  var i652 = new (System.Collections.Generic.List$1(Bridge.ns('SingleDataEntry')))
  for(var i = 0; i < i653.length; i += 1) {
    i652.add(request.d('SingleDataEntry', i653[i + 0]));
  }
  i650.singleEntries = i652
  var i655 = i651[1]
  var i654 = new (System.Collections.Generic.List$1(Bridge.ns('ListDataEntry')))
  for(var i = 0; i < i655.length; i += 1) {
    i654.add(request.d('ListDataEntry', i655[i + 0]));
  }
  i650.listEntries = i654
  return i650
}

Deserializers["SingleDataEntry"] = function (request, data, root) {
  var i658 = root || request.c( 'SingleDataEntry' )
  var i659 = data
  i658.key = i659[0]
  request.r(i659[1], i659[2], 0, i658, 'value')
  return i658
}

Deserializers["ListDataEntry"] = function (request, data, root) {
  var i662 = root || request.c( 'ListDataEntry' )
  var i663 = data
  i662.key = i663[0]
  var i665 = i663[1]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('DataObject')))
  for(var i = 0; i < i665.length; i += 2) {
  request.r(i665[i + 0], i665[i + 1], 1, i664, '')
  }
  i662.values = i664
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i667 = data
  i666.enabled = !!i667[0]
  request.r(i667[1], i667[2], 0, i666, 'sharedMaterial')
  var i669 = i667[3]
  var i668 = []
  for(var i = 0; i < i669.length; i += 2) {
  request.r(i669[i + 0], i669[i + 1], 2, i668, '')
  }
  i666.sharedMaterials = i668
  i666.receiveShadows = !!i667[4]
  i666.shadowCastingMode = i667[5]
  i666.sortingLayerID = i667[6]
  i666.sortingOrder = i667[7]
  i666.lightmapIndex = i667[8]
  i666.lightmapSceneIndex = i667[9]
  i666.lightmapScaleOffset = new pc.Vec4( i667[10], i667[11], i667[12], i667[13] )
  i666.lightProbeUsage = i667[14]
  i666.reflectionProbeUsage = i667[15]
  i666.color = new pc.Color(i667[16], i667[17], i667[18], i667[19])
  request.r(i667[20], i667[21], 0, i666, 'sprite')
  i666.flipX = !!i667[22]
  i666.flipY = !!i667[23]
  i666.drawMode = i667[24]
  i666.size = new pc.Vec2( i667[25], i667[26] )
  i666.tileMode = i667[27]
  i666.adaptiveModeThreshold = i667[28]
  i666.maskInteraction = i667[29]
  i666.spriteSortPoint = i667[30]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i673 = data
  i672.pivot = new pc.Vec2( i673[0], i673[1] )
  i672.anchorMin = new pc.Vec2( i673[2], i673[3] )
  i672.anchorMax = new pc.Vec2( i673[4], i673[5] )
  i672.sizeDelta = new pc.Vec2( i673[6], i673[7] )
  i672.anchoredPosition3D = new pc.Vec3( i673[8], i673[9], i673[10] )
  i672.rotation = new pc.Quat(i673[11], i673[12], i673[13], i673[14])
  i672.scale = new pc.Vec3( i673[15], i673[16], i673[17] )
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i675 = data
  i674.enabled = !!i675[0]
  i674.planeDistance = i675[1]
  i674.referencePixelsPerUnit = i675[2]
  i674.isFallbackOverlay = !!i675[3]
  i674.renderMode = i675[4]
  i674.renderOrder = i675[5]
  i674.sortingLayerName = i675[6]
  i674.sortingOrder = i675[7]
  i674.scaleFactor = i675[8]
  request.r(i675[9], i675[10], 0, i674, 'worldCamera')
  i674.overrideSorting = !!i675[11]
  i674.pixelPerfect = !!i675[12]
  i674.targetDisplay = i675[13]
  i674.overridePixelPerfect = !!i675[14]
  return i674
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i677 = data
  i676.m_UiScaleMode = i677[0]
  i676.m_ReferencePixelsPerUnit = i677[1]
  i676.m_ScaleFactor = i677[2]
  i676.m_ReferenceResolution = new pc.Vec2( i677[3], i677[4] )
  i676.m_ScreenMatchMode = i677[5]
  i676.m_MatchWidthOrHeight = i677[6]
  i676.m_PhysicalUnit = i677[7]
  i676.m_FallbackScreenDPI = i677[8]
  i676.m_DefaultSpriteDPI = i677[9]
  i676.m_DynamicPixelsPerUnit = i677[10]
  i676.m_PresetInfoIsWorld = !!i677[11]
  return i676
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i679 = data
  i678.m_IgnoreReversedGraphics = !!i679[0]
  i678.m_BlockingObjects = i679[1]
  i678.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i679[2] )
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i681 = data
  i680.cullTransparentMesh = !!i681[0]
  return i680
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.UI.Image' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'm_Sprite')
  i682.m_Type = i683[2]
  i682.m_PreserveAspect = !!i683[3]
  i682.m_FillCenter = !!i683[4]
  i682.m_FillMethod = i683[5]
  i682.m_FillAmount = i683[6]
  i682.m_FillClockwise = !!i683[7]
  i682.m_FillOrigin = i683[8]
  i682.m_UseSpriteMesh = !!i683[9]
  i682.m_PixelsPerUnitMultiplier = i683[10]
  request.r(i683[11], i683[12], 0, i682, 'm_Material')
  i682.m_Maskable = !!i683[13]
  i682.m_Color = new pc.Color(i683[14], i683[15], i683[16], i683[17])
  i682.m_RaycastTarget = !!i683[18]
  i682.m_RaycastPadding = new pc.Vec4( i683[19], i683[20], i683[21], i683[22] )
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i685 = data
  i684.m_Alpha = i685[0]
  i684.m_Interactable = !!i685[1]
  i684.m_BlocksRaycasts = !!i685[2]
  i684.m_IgnoreParentGroups = !!i685[3]
  i684.enabled = !!i685[4]
  return i684
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i686 = root || request.c( 'CanvasGroupAnimator' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'canvasGroup')
  i686.animateFade = !!i687[2]
  i686.triggerOnStart = !!i687[3]
  i686.isLooping = !!i687[4]
  i686.fadeTo = i687[5]
  i686.fadeDuration = i687[6]
  i686.fadeEaseType = i687[7]
  return i686
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.UI.Button' )
  var i689 = data
  i688.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i689[0], i688.m_OnClick)
  i688.m_Navigation = request.d('UnityEngine.UI.Navigation', i689[1], i688.m_Navigation)
  i688.m_Transition = i689[2]
  i688.m_Colors = request.d('UnityEngine.UI.ColorBlock', i689[3], i688.m_Colors)
  i688.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i689[4], i688.m_SpriteState)
  i688.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i689[5], i688.m_AnimationTriggers)
  i688.m_Interactable = !!i689[6]
  request.r(i689[7], i689[8], 0, i688, 'm_TargetGraphic')
  return i688
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i691 = data
  i690.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i691[0], i690.m_PersistentCalls)
  return i690
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i693 = data
  var i695 = i693[0]
  var i694 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i695.length; i += 1) {
    i694.add(request.d('UnityEngine.Events.PersistentCall', i695[i + 0]));
  }
  i692.m_Calls = i694
  return i692
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'm_Target')
  i698.m_TargetAssemblyTypeName = i699[2]
  i698.m_MethodName = i699[3]
  i698.m_Mode = i699[4]
  i698.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i699[5], i698.m_Arguments)
  i698.m_CallState = i699[6]
  return i698
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'm_ObjectArgument')
  i700.m_ObjectArgumentAssemblyTypeName = i701[2]
  i700.m_IntArgument = i701[3]
  i700.m_FloatArgument = i701[4]
  i700.m_StringArgument = i701[5]
  i700.m_BoolArgument = !!i701[6]
  return i700
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i703 = data
  i702.m_Mode = i703[0]
  i702.m_WrapAround = !!i703[1]
  request.r(i703[2], i703[3], 0, i702, 'm_SelectOnUp')
  request.r(i703[4], i703[5], 0, i702, 'm_SelectOnDown')
  request.r(i703[6], i703[7], 0, i702, 'm_SelectOnLeft')
  request.r(i703[8], i703[9], 0, i702, 'm_SelectOnRight')
  return i702
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i705 = data
  i704.m_NormalColor = new pc.Color(i705[0], i705[1], i705[2], i705[3])
  i704.m_HighlightedColor = new pc.Color(i705[4], i705[5], i705[6], i705[7])
  i704.m_PressedColor = new pc.Color(i705[8], i705[9], i705[10], i705[11])
  i704.m_SelectedColor = new pc.Color(i705[12], i705[13], i705[14], i705[15])
  i704.m_DisabledColor = new pc.Color(i705[16], i705[17], i705[18], i705[19])
  i704.m_ColorMultiplier = i705[20]
  i704.m_FadeDuration = i705[21]
  return i704
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'm_HighlightedSprite')
  request.r(i707[2], i707[3], 0, i706, 'm_PressedSprite')
  request.r(i707[4], i707[5], 0, i706, 'm_SelectedSprite')
  request.r(i707[6], i707[7], 0, i706, 'm_DisabledSprite')
  return i706
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i709 = data
  i708.m_NormalTrigger = i709[0]
  i708.m_HighlightedTrigger = i709[1]
  i708.m_PressedTrigger = i709[2]
  i708.m_SelectedTrigger = i709[3]
  i708.m_DisabledTrigger = i709[4]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'animatorController')
  request.r(i711[2], i711[3], 0, i710, 'avatar')
  i710.updateMode = i711[4]
  i710.hasTransformHierarchy = !!i711[5]
  i710.applyRootMotion = !!i711[6]
  var i713 = i711[7]
  var i712 = []
  for(var i = 0; i < i713.length; i += 2) {
  request.r(i713[i + 0], i713[i + 1], 2, i712, '')
  }
  i710.humanBones = i712
  i710.enabled = !!i711[8]
  return i710
}

Deserializers["PromtPopUp"] = function (request, data, root) {
  var i716 = root || request.c( 'PromtPopUp' )
  var i717 = data
  i716.fake = !!i717[0]
  i716.DestroyGameObject = !!i717[1]
  return i716
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i718 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i719 = data
  i718.m_hasFontAssetChanged = !!i719[0]
  request.r(i719[1], i719[2], 0, i718, 'm_baseMaterial')
  i718.m_maskOffset = new pc.Vec4( i719[3], i719[4], i719[5], i719[6] )
  i718.m_text = i719[7]
  i718.m_isRightToLeft = !!i719[8]
  request.r(i719[9], i719[10], 0, i718, 'm_fontAsset')
  request.r(i719[11], i719[12], 0, i718, 'm_sharedMaterial')
  var i721 = i719[13]
  var i720 = []
  for(var i = 0; i < i721.length; i += 2) {
  request.r(i721[i + 0], i721[i + 1], 2, i720, '')
  }
  i718.m_fontSharedMaterials = i720
  request.r(i719[14], i719[15], 0, i718, 'm_fontMaterial')
  var i723 = i719[16]
  var i722 = []
  for(var i = 0; i < i723.length; i += 2) {
  request.r(i723[i + 0], i723[i + 1], 2, i722, '')
  }
  i718.m_fontMaterials = i722
  i718.m_fontColor32 = UnityEngine.Color32.ConstructColor(i719[17], i719[18], i719[19], i719[20])
  i718.m_fontColor = new pc.Color(i719[21], i719[22], i719[23], i719[24])
  i718.m_enableVertexGradient = !!i719[25]
  i718.m_colorMode = i719[26]
  i718.m_fontColorGradient = request.d('TMPro.VertexGradient', i719[27], i718.m_fontColorGradient)
  request.r(i719[28], i719[29], 0, i718, 'm_fontColorGradientPreset')
  request.r(i719[30], i719[31], 0, i718, 'm_spriteAsset')
  i718.m_tintAllSprites = !!i719[32]
  request.r(i719[33], i719[34], 0, i718, 'm_StyleSheet')
  i718.m_TextStyleHashCode = i719[35]
  i718.m_overrideHtmlColors = !!i719[36]
  i718.m_faceColor = UnityEngine.Color32.ConstructColor(i719[37], i719[38], i719[39], i719[40])
  i718.m_fontSize = i719[41]
  i718.m_fontSizeBase = i719[42]
  i718.m_fontWeight = i719[43]
  i718.m_enableAutoSizing = !!i719[44]
  i718.m_fontSizeMin = i719[45]
  i718.m_fontSizeMax = i719[46]
  i718.m_fontStyle = i719[47]
  i718.m_HorizontalAlignment = i719[48]
  i718.m_VerticalAlignment = i719[49]
  i718.m_textAlignment = i719[50]
  i718.m_characterSpacing = i719[51]
  i718.m_wordSpacing = i719[52]
  i718.m_lineSpacing = i719[53]
  i718.m_lineSpacingMax = i719[54]
  i718.m_paragraphSpacing = i719[55]
  i718.m_charWidthMaxAdj = i719[56]
  i718.m_enableWordWrapping = !!i719[57]
  i718.m_wordWrappingRatios = i719[58]
  i718.m_overflowMode = i719[59]
  request.r(i719[60], i719[61], 0, i718, 'm_linkedTextComponent')
  request.r(i719[62], i719[63], 0, i718, 'parentLinkedComponent')
  i718.m_enableKerning = !!i719[64]
  i718.m_enableExtraPadding = !!i719[65]
  i718.checkPaddingRequired = !!i719[66]
  i718.m_isRichText = !!i719[67]
  i718.m_parseCtrlCharacters = !!i719[68]
  i718.m_isOrthographic = !!i719[69]
  i718.m_isCullingEnabled = !!i719[70]
  i718.m_horizontalMapping = i719[71]
  i718.m_verticalMapping = i719[72]
  i718.m_uvLineOffset = i719[73]
  i718.m_geometrySortingOrder = i719[74]
  i718.m_IsTextObjectScaleStatic = !!i719[75]
  i718.m_VertexBufferAutoSizeReduction = !!i719[76]
  i718.m_useMaxVisibleDescender = !!i719[77]
  i718.m_pageToDisplay = i719[78]
  i718.m_margin = new pc.Vec4( i719[79], i719[80], i719[81], i719[82] )
  i718.m_isUsingLegacyAnimationComponent = !!i719[83]
  i718.m_isVolumetricText = !!i719[84]
  request.r(i719[85], i719[86], 0, i718, 'm_Material')
  i718.m_Maskable = !!i719[87]
  i718.m_Color = new pc.Color(i719[88], i719[89], i719[90], i719[91])
  i718.m_RaycastTarget = !!i719[92]
  i718.m_RaycastPadding = new pc.Vec4( i719[93], i719[94], i719[95], i719[96] )
  return i718
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i724 = root || request.c( 'TMPro.VertexGradient' )
  var i725 = data
  i724.topLeft = new pc.Color(i725[0], i725[1], i725[2], i725[3])
  i724.topRight = new pc.Color(i725[4], i725[5], i725[6], i725[7])
  i724.bottomLeft = new pc.Color(i725[8], i725[9], i725[10], i725[11])
  i724.bottomRight = new pc.Color(i725[12], i725[13], i725[14], i725[15])
  return i724
}

Deserializers["SetConditionMet"] = function (request, data, root) {
  var i726 = root || request.c( 'SetConditionMet' )
  var i727 = data
  return i726
}

Deserializers["FloatingTextEffect"] = function (request, data, root) {
  var i728 = root || request.c( 'FloatingTextEffect' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'textMeshProUGUI')
  request.r(i729[2], i729[3], 0, i728, 'textMeshPro')
  i728.floatDistance = i729[4]
  i728.duration = i729[5]
  return i728
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'm_FirstSelected')
  i730.m_sendNavigationEvents = !!i731[2]
  i730.m_DragThreshold = i731[3]
  return i730
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i733 = data
  i732.m_HorizontalAxis = i733[0]
  i732.m_VerticalAxis = i733[1]
  i732.m_SubmitButton = i733[2]
  i732.m_CancelButton = i733[3]
  i732.m_InputActionsPerSecond = i733[4]
  i732.m_RepeatDelay = i733[5]
  i732.m_ForceModuleActive = !!i733[6]
  i732.m_SendPointerHoverToParent = !!i733[7]
  return i732
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i734 = root || request.c( 'ButtonPulse' )
  var i735 = data
  i734.scaleAmount = i735[0]
  i734.pulseDuration = i735[1]
  return i734
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i736 = root || request.c( 'StartClickHandler' )
  var i737 = data
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i739 = data
  i738.ambientIntensity = i739[0]
  i738.reflectionIntensity = i739[1]
  i738.ambientMode = i739[2]
  i738.ambientLight = new pc.Color(i739[3], i739[4], i739[5], i739[6])
  i738.ambientSkyColor = new pc.Color(i739[7], i739[8], i739[9], i739[10])
  i738.ambientGroundColor = new pc.Color(i739[11], i739[12], i739[13], i739[14])
  i738.ambientEquatorColor = new pc.Color(i739[15], i739[16], i739[17], i739[18])
  i738.fogColor = new pc.Color(i739[19], i739[20], i739[21], i739[22])
  i738.fogEndDistance = i739[23]
  i738.fogStartDistance = i739[24]
  i738.fogDensity = i739[25]
  i738.fog = !!i739[26]
  request.r(i739[27], i739[28], 0, i738, 'skybox')
  i738.fogMode = i739[29]
  var i741 = i739[30]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i741[i + 0]) );
  }
  i738.lightmaps = i740
  i738.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i739[31], i738.lightProbes)
  i738.lightmapsMode = i739[32]
  i738.mixedBakeMode = i739[33]
  i738.environmentLightingMode = i739[34]
  i738.ambientProbe = new pc.SphericalHarmonicsL2(i739[35])
  i738.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i739[36])
  i738.useReferenceAmbientProbe = !!i739[37]
  request.r(i739[38], i739[39], 0, i738, 'customReflection')
  request.r(i739[40], i739[41], 0, i738, 'defaultReflection')
  i738.defaultReflectionMode = i739[42]
  i738.defaultReflectionResolution = i739[43]
  i738.sunLightObjectId = i739[44]
  i738.pixelLightCount = i739[45]
  i738.defaultReflectionHDR = !!i739[46]
  i738.hasLightDataAsset = !!i739[47]
  i738.hasManualGenerate = !!i739[48]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'lightmapColor')
  request.r(i745[2], i745[3], 0, i744, 'lightmapDirection')
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i746 = root || new UnityEngine.LightProbes()
  var i747 = data
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i755 = data
  var i757 = i755[0]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i757.length; i += 1) {
    i756.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i757[i + 0]));
  }
  i754.ShaderCompilationErrors = i756
  i754.name = i755[1]
  i754.guid = i755[2]
  var i759 = i755[3]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( i759[i + 0] );
  }
  i754.shaderDefinedKeywords = i758
  var i761 = i755[4]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i761[i + 0]) );
  }
  i754.passes = i760
  var i763 = i755[5]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i763[i + 0]) );
  }
  i754.usePasses = i762
  var i765 = i755[6]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i765[i + 0]) );
  }
  i754.defaultParameterValues = i764
  request.r(i755[7], i755[8], 0, i754, 'unityFallbackShader')
  i754.readDepth = !!i755[9]
  i754.isCreatedByShaderGraph = !!i755[10]
  i754.compiled = !!i755[11]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i769 = data
  i768.shaderName = i769[0]
  i768.errorMessage = i769[1]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i774 = root || new pc.UnityShaderPass()
  var i775 = data
  i774.id = i775[0]
  i774.subShaderIndex = i775[1]
  i774.name = i775[2]
  i774.passType = i775[3]
  i774.grabPassTextureName = i775[4]
  i774.usePass = !!i775[5]
  i774.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[6], i774.zTest)
  i774.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[7], i774.zWrite)
  i774.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[8], i774.culling)
  i774.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i775[9], i774.blending)
  i774.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i775[10], i774.alphaBlending)
  i774.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[11], i774.colorWriteMask)
  i774.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[12], i774.offsetUnits)
  i774.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[13], i774.offsetFactor)
  i774.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[14], i774.stencilRef)
  i774.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[15], i774.stencilReadMask)
  i774.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[16], i774.stencilWriteMask)
  i774.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i775[17], i774.stencilOp)
  i774.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i775[18], i774.stencilOpFront)
  i774.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i775[19], i774.stencilOpBack)
  var i777 = i775[20]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i777[i + 0]) );
  }
  i774.tags = i776
  var i779 = i775[21]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( i779[i + 0] );
  }
  i774.passDefinedKeywords = i778
  var i781 = i775[22]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i781[i + 0]) );
  }
  i774.passDefinedKeywordGroups = i780
  var i783 = i775[23]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i783[i + 0]) );
  }
  i774.variants = i782
  var i785 = i775[24]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i785[i + 0]) );
  }
  i774.excludedVariants = i784
  i774.hasDepthReader = !!i775[25]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i787 = data
  i786.val = i787[0]
  i786.name = i787[1]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i789 = data
  i788.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i789[0], i788.src)
  i788.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i789[1], i788.dst)
  i788.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i789[2], i788.op)
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i791 = data
  i790.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[0], i790.pass)
  i790.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[1], i790.fail)
  i790.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[2], i790.zFail)
  i790.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[3], i790.comp)
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i795 = data
  i794.name = i795[0]
  i794.value = i795[1]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i799 = data
  var i801 = i799[0]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( i801[i + 0] );
  }
  i798.keywords = i800
  i798.hasDiscard = !!i799[1]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i805 = data
  i804.passId = i805[0]
  i804.subShaderIndex = i805[1]
  var i807 = i805[2]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( i807[i + 0] );
  }
  i804.keywords = i806
  i804.vertexProgram = i805[3]
  i804.fragmentProgram = i805[4]
  i804.exportedForWebGl2 = !!i805[5]
  i804.readDepth = !!i805[6]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'shader')
  i810.pass = i811[2]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i815 = data
  i814.name = i815[0]
  i814.type = i815[1]
  i814.value = new pc.Vec4( i815[2], i815[3], i815[4], i815[5] )
  i814.textureValue = i815[6]
  i814.shaderPropertyFlag = i815[7]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i817 = data
  i816.name = i817[0]
  request.r(i817[1], i817[2], 0, i816, 'texture')
  i816.aabb = i817[3]
  i816.vertices = i817[4]
  i816.triangles = i817[5]
  i816.textureRect = UnityEngine.Rect.MinMaxRect(i817[6], i817[7], i817[8], i817[9])
  i816.packedRect = UnityEngine.Rect.MinMaxRect(i817[10], i817[11], i817[12], i817[13])
  i816.border = new pc.Vec4( i817[14], i817[15], i817[16], i817[17] )
  i816.transparency = i817[18]
  i816.bounds = i817[19]
  i816.pixelsPerUnit = i817[20]
  i816.textureWidth = i817[21]
  i816.textureHeight = i817[22]
  i816.nativeSize = new pc.Vec2( i817[23], i817[24] )
  i816.pivot = new pc.Vec2( i817[25], i817[26] )
  i816.textureRectOffset = new pc.Vec2( i817[27], i817[28] )
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i819 = data
  i818.name = i819[0]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i821 = data
  i820.name = i821[0]
  i820.wrapMode = i821[1]
  i820.isLooping = !!i821[2]
  i820.length = i821[3]
  var i823 = i821[4]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i823[i + 0]) );
  }
  i820.curves = i822
  var i825 = i821[5]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i825[i + 0]) );
  }
  i820.events = i824
  i820.halfPrecision = !!i821[6]
  i820._frameRate = i821[7]
  i820.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i821[8], i820.localBounds)
  i820.hasMuscleCurves = !!i821[9]
  var i827 = i821[10]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( i827[i + 0] );
  }
  i820.clipMuscleConstant = i826
  i820.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i821[11], i820.clipBindingConstant)
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i831 = data
  i830.path = i831[0]
  i830.hash = i831[1]
  i830.componentType = i831[2]
  i830.property = i831[3]
  i830.keys = i831[4]
  var i833 = i831[5]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i833[i + 0]) );
  }
  i830.objectReferenceKeys = i832
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i837 = data
  i836.time = i837[0]
  request.r(i837[1], i837[2], 0, i836, 'value')
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i841 = data
  i840.functionName = i841[0]
  i840.floatParameter = i841[1]
  i840.intParameter = i841[2]
  i840.stringParameter = i841[3]
  request.r(i841[4], i841[5], 0, i840, 'objectReferenceParameter')
  i840.time = i841[6]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i843 = data
  i842.center = new pc.Vec3( i843[0], i843[1], i843[2] )
  i842.extends = new pc.Vec3( i843[3], i843[4], i843[5] )
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i847 = data
  var i849 = i847[0]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( i849[i + 0] );
  }
  i846.genericBindings = i848
  var i851 = i847[1]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( i851[i + 0] );
  }
  i846.pptrCurveMapping = i850
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i853 = data
  i852.name = i853[0]
  i852.ascent = i853[1]
  i852.originalLineHeight = i853[2]
  i852.fontSize = i853[3]
  var i855 = i853[4]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i855[i + 0]) );
  }
  i852.characterInfo = i854
  request.r(i853[5], i853[6], 0, i852, 'texture')
  i852.originalFontSize = i853[7]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i859 = data
  i858.index = i859[0]
  i858.advance = i859[1]
  i858.bearing = i859[2]
  i858.glyphWidth = i859[3]
  i858.glyphHeight = i859[4]
  i858.minX = i859[5]
  i858.maxX = i859[6]
  i858.minY = i859[7]
  i858.maxY = i859[8]
  i858.uvBottomLeftX = i859[9]
  i858.uvBottomLeftY = i859[10]
  i858.uvBottomRightX = i859[11]
  i858.uvBottomRightY = i859[12]
  i858.uvTopLeftX = i859[13]
  i858.uvTopLeftY = i859[14]
  i858.uvTopRightX = i859[15]
  i858.uvTopRightY = i859[16]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i861 = data
  i860.name = i861[0]
  var i863 = i861[1]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i863[i + 0]) );
  }
  i860.layers = i862
  var i865 = i861[2]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i865[i + 0]) );
  }
  i860.parameters = i864
  i860.animationClips = i861[3]
  i860.avatarUnsupported = i861[4]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i869 = data
  i868.name = i869[0]
  i868.defaultWeight = i869[1]
  i868.blendingMode = i869[2]
  i868.avatarMask = i869[3]
  i868.syncedLayerIndex = i869[4]
  i868.syncedLayerAffectsTiming = !!i869[5]
  i868.syncedLayers = i869[6]
  i868.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i869[7], i868.stateMachine)
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i871 = data
  i870.id = i871[0]
  i870.name = i871[1]
  i870.path = i871[2]
  var i873 = i871[3]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i873[i + 0]) );
  }
  i870.states = i872
  var i875 = i871[4]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i875[i + 0]) );
  }
  i870.machines = i874
  var i877 = i871[5]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i877[i + 0]) );
  }
  i870.entryStateTransitions = i876
  var i879 = i871[6]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i879[i + 0]) );
  }
  i870.exitStateTransitions = i878
  var i881 = i871[7]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i881[i + 0]) );
  }
  i870.anyStateTransitions = i880
  i870.defaultStateId = i871[8]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i885 = data
  i884.id = i885[0]
  i884.name = i885[1]
  i884.cycleOffset = i885[2]
  i884.cycleOffsetParameter = i885[3]
  i884.cycleOffsetParameterActive = !!i885[4]
  i884.mirror = !!i885[5]
  i884.mirrorParameter = i885[6]
  i884.mirrorParameterActive = !!i885[7]
  i884.motionId = i885[8]
  i884.nameHash = i885[9]
  i884.fullPathHash = i885[10]
  i884.speed = i885[11]
  i884.speedParameter = i885[12]
  i884.speedParameterActive = !!i885[13]
  i884.tag = i885[14]
  i884.tagHash = i885[15]
  i884.writeDefaultValues = !!i885[16]
  var i887 = i885[17]
  var i886 = []
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 2, i886, '')
  }
  i884.behaviours = i886
  var i889 = i885[18]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i889[i + 0]) );
  }
  i884.transitions = i888
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i895 = data
  i894.fullPath = i895[0]
  i894.canTransitionToSelf = !!i895[1]
  i894.duration = i895[2]
  i894.exitTime = i895[3]
  i894.hasExitTime = !!i895[4]
  i894.hasFixedDuration = !!i895[5]
  i894.interruptionSource = i895[6]
  i894.offset = i895[7]
  i894.orderedInterruption = !!i895[8]
  i894.destinationStateId = i895[9]
  i894.isExit = !!i895[10]
  i894.mute = !!i895[11]
  i894.solo = !!i895[12]
  var i897 = i895[13]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i897[i + 0]) );
  }
  i894.conditions = i896
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i903 = data
  i902.destinationStateId = i903[0]
  i902.isExit = !!i903[1]
  i902.mute = !!i903[2]
  i902.solo = !!i903[3]
  var i905 = i903[4]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i905[i + 0]) );
  }
  i902.conditions = i904
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i909 = data
  i908.defaultBool = !!i909[0]
  i908.defaultFloat = i909[1]
  i908.defaultInt = i909[2]
  i908.name = i909[3]
  i908.nameHash = i909[4]
  i908.type = i909[5]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i911 = data
  i910.name = i911[0]
  i910.bytes64 = i911[1]
  i910.data = i911[2]
  return i910
}

Deserializers["DataObject"] = function (request, data, root) {
  var i912 = root || request.c( 'DataObject' )
  var i913 = data
  i912.level = i913[0]
  i912.name = i913[1]
  i912.assetValue = i913[2]
  i912.isLegit = !!i913[3]
  request.r(i913[4], i913[5], 0, i912, 'icon')
  i912.bidder1Bid = i913[6]
  i912.bidder2Bid = i913[7]
  i912.bidder3Bid = i913[8]
  i912.playerBid = i913[9]
  return i912
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i914 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i915 = data
  i914.hashCode = i915[0]
  request.r(i915[1], i915[2], 0, i914, 'material')
  i914.materialHashCode = i915[3]
  request.r(i915[4], i915[5], 0, i914, 'atlas')
  i914.normalStyle = i915[6]
  i914.normalSpacingOffset = i915[7]
  i914.boldStyle = i915[8]
  i914.boldSpacing = i915[9]
  i914.italicStyle = i915[10]
  i914.tabSize = i915[11]
  i914.m_Version = i915[12]
  i914.m_SourceFontFileGUID = i915[13]
  request.r(i915[14], i915[15], 0, i914, 'm_SourceFontFile_EditorRef')
  request.r(i915[16], i915[17], 0, i914, 'm_SourceFontFile')
  i914.m_AtlasPopulationMode = i915[18]
  i914.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i915[19], i914.m_FaceInfo)
  var i917 = i915[20]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i917.length; i += 1) {
    i916.add(request.d('UnityEngine.TextCore.Glyph', i917[i + 0]));
  }
  i914.m_GlyphTable = i916
  var i919 = i915[21]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i919.length; i += 1) {
    i918.add(request.d('TMPro.TMP_Character', i919[i + 0]));
  }
  i914.m_CharacterTable = i918
  var i921 = i915[22]
  var i920 = []
  for(var i = 0; i < i921.length; i += 2) {
  request.r(i921[i + 0], i921[i + 1], 2, i920, '')
  }
  i914.m_AtlasTextures = i920
  i914.m_AtlasTextureIndex = i915[23]
  i914.m_IsMultiAtlasTexturesEnabled = !!i915[24]
  i914.m_ClearDynamicDataOnBuild = !!i915[25]
  var i923 = i915[26]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i923.length; i += 1) {
    i922.add(request.d('UnityEngine.TextCore.GlyphRect', i923[i + 0]));
  }
  i914.m_UsedGlyphRects = i922
  var i925 = i915[27]
  var i924 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i925.length; i += 1) {
    i924.add(request.d('UnityEngine.TextCore.GlyphRect', i925[i + 0]));
  }
  i914.m_FreeGlyphRects = i924
  i914.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i915[28], i914.m_fontInfo)
  i914.m_AtlasWidth = i915[29]
  i914.m_AtlasHeight = i915[30]
  i914.m_AtlasPadding = i915[31]
  i914.m_AtlasRenderMode = i915[32]
  var i927 = i915[33]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i927.length; i += 1) {
    i926.add(request.d('TMPro.TMP_Glyph', i927[i + 0]));
  }
  i914.m_glyphInfoList = i926
  i914.m_KerningTable = request.d('TMPro.KerningTable', i915[34], i914.m_KerningTable)
  i914.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i915[35], i914.m_FontFeatureTable)
  var i929 = i915[36]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 1, i928, '')
  }
  i914.fallbackFontAssets = i928
  var i931 = i915[37]
  var i930 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 1, i930, '')
  }
  i914.m_FallbackFontAssetTable = i930
  i914.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i915[38], i914.m_CreationSettings)
  var i933 = i915[39]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('TMPro.TMP_FontWeightPair', i933[i + 0]) );
  }
  i914.m_FontWeightTable = i932
  var i935 = i915[40]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('TMPro.TMP_FontWeightPair', i935[i + 0]) );
  }
  i914.fontWeights = i934
  return i914
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i937 = data
  i936.m_FaceIndex = i937[0]
  i936.m_FamilyName = i937[1]
  i936.m_StyleName = i937[2]
  i936.m_PointSize = i937[3]
  i936.m_Scale = i937[4]
  i936.m_UnitsPerEM = i937[5]
  i936.m_LineHeight = i937[6]
  i936.m_AscentLine = i937[7]
  i936.m_CapLine = i937[8]
  i936.m_MeanLine = i937[9]
  i936.m_Baseline = i937[10]
  i936.m_DescentLine = i937[11]
  i936.m_SuperscriptOffset = i937[12]
  i936.m_SuperscriptSize = i937[13]
  i936.m_SubscriptOffset = i937[14]
  i936.m_SubscriptSize = i937[15]
  i936.m_UnderlineOffset = i937[16]
  i936.m_UnderlineThickness = i937[17]
  i936.m_StrikethroughOffset = i937[18]
  i936.m_StrikethroughThickness = i937[19]
  i936.m_TabWidth = i937[20]
  return i936
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i941 = data
  i940.m_Index = i941[0]
  i940.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i941[1], i940.m_Metrics)
  i940.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i941[2], i940.m_GlyphRect)
  i940.m_Scale = i941[3]
  i940.m_AtlasIndex = i941[4]
  i940.m_ClassDefinitionType = i941[5]
  return i940
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i943 = data
  i942.m_Width = i943[0]
  i942.m_Height = i943[1]
  i942.m_HorizontalBearingX = i943[2]
  i942.m_HorizontalBearingY = i943[3]
  i942.m_HorizontalAdvance = i943[4]
  return i942
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i945 = data
  i944.m_X = i945[0]
  i944.m_Y = i945[1]
  i944.m_Width = i945[2]
  i944.m_Height = i945[3]
  return i944
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i948 = root || request.c( 'TMPro.TMP_Character' )
  var i949 = data
  i948.m_ElementType = i949[0]
  i948.m_Unicode = i949[1]
  i948.m_GlyphIndex = i949[2]
  i948.m_Scale = i949[3]
  return i948
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i954 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i955 = data
  i954.Name = i955[0]
  i954.PointSize = i955[1]
  i954.Scale = i955[2]
  i954.CharacterCount = i955[3]
  i954.LineHeight = i955[4]
  i954.Baseline = i955[5]
  i954.Ascender = i955[6]
  i954.CapHeight = i955[7]
  i954.Descender = i955[8]
  i954.CenterLine = i955[9]
  i954.SuperscriptOffset = i955[10]
  i954.SubscriptOffset = i955[11]
  i954.SubSize = i955[12]
  i954.Underline = i955[13]
  i954.UnderlineThickness = i955[14]
  i954.strikethrough = i955[15]
  i954.strikethroughThickness = i955[16]
  i954.TabWidth = i955[17]
  i954.Padding = i955[18]
  i954.AtlasWidth = i955[19]
  i954.AtlasHeight = i955[20]
  return i954
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i958 = root || request.c( 'TMPro.TMP_Glyph' )
  var i959 = data
  i958.id = i959[0]
  i958.x = i959[1]
  i958.y = i959[2]
  i958.width = i959[3]
  i958.height = i959[4]
  i958.xOffset = i959[5]
  i958.yOffset = i959[6]
  i958.xAdvance = i959[7]
  i958.scale = i959[8]
  return i958
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i960 = root || request.c( 'TMPro.KerningTable' )
  var i961 = data
  var i963 = i961[0]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i963.length; i += 1) {
    i962.add(request.d('TMPro.KerningPair', i963[i + 0]));
  }
  i960.kerningPairs = i962
  return i960
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i966 = root || request.c( 'TMPro.KerningPair' )
  var i967 = data
  i966.xOffset = i967[0]
  i966.m_FirstGlyph = i967[1]
  i966.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i967[2], i966.m_FirstGlyphAdjustments)
  i966.m_SecondGlyph = i967[3]
  i966.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i967[4], i966.m_SecondGlyphAdjustments)
  i966.m_IgnoreSpacingAdjustments = !!i967[5]
  return i966
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i969 = data
  var i971 = i969[0]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i971.length; i += 1) {
    i970.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i971[i + 0]));
  }
  i968.m_GlyphPairAdjustmentRecords = i970
  return i968
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i974 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i975 = data
  i974.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i975[0], i974.m_FirstAdjustmentRecord)
  i974.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i975[1], i974.m_SecondAdjustmentRecord)
  i974.m_FeatureLookupFlags = i975[2]
  return i974
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i979 = data
  i978.sourceFontFileName = i979[0]
  i978.sourceFontFileGUID = i979[1]
  i978.pointSizeSamplingMode = i979[2]
  i978.pointSize = i979[3]
  i978.padding = i979[4]
  i978.packingMode = i979[5]
  i978.atlasWidth = i979[6]
  i978.atlasHeight = i979[7]
  i978.characterSetSelectionMode = i979[8]
  i978.characterSequence = i979[9]
  i978.referencedFontAssetGUID = i979[10]
  i978.referencedTextAssetGUID = i979[11]
  i978.fontStyle = i979[12]
  i978.fontStyleModifier = i979[13]
  i978.renderMode = i979[14]
  i978.includeFontFeatures = !!i979[15]
  return i978
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i982 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'regularTypeface')
  request.r(i983[2], i983[3], 0, i982, 'italicTypeface')
  return i982
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i984 = root || request.c( 'AudioLibrary' )
  var i985 = data
  var i987 = i985[0]
  var i986 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i987.length; i += 1) {
    i986.add(request.d('AudioLibrary+ClipEntry', i987[i + 0]));
  }
  i984.clips = i986
  return i984
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i990 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i991 = data
  i990.key = i991[0]
  i990.channel = i991[1]
  request.r(i991[2], i991[3], 0, i990, 'clip')
  i990.volume = i991[4]
  i990.loop = !!i991[5]
  return i990
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i992 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i993 = data
  i992.useSafeMode = !!i993[0]
  i992.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i993[1], i992.safeModeOptions)
  i992.timeScale = i993[2]
  i992.unscaledTimeScale = i993[3]
  i992.useSmoothDeltaTime = !!i993[4]
  i992.maxSmoothUnscaledTime = i993[5]
  i992.rewindCallbackMode = i993[6]
  i992.showUnityEditorReport = !!i993[7]
  i992.logBehaviour = i993[8]
  i992.drawGizmos = !!i993[9]
  i992.defaultRecyclable = !!i993[10]
  i992.defaultAutoPlay = i993[11]
  i992.defaultUpdateType = i993[12]
  i992.defaultTimeScaleIndependent = !!i993[13]
  i992.defaultEaseType = i993[14]
  i992.defaultEaseOvershootOrAmplitude = i993[15]
  i992.defaultEasePeriod = i993[16]
  i992.defaultAutoKill = !!i993[17]
  i992.defaultLoopType = i993[18]
  i992.debugMode = !!i993[19]
  i992.debugStoreTargetId = !!i993[20]
  i992.showPreviewPanel = !!i993[21]
  i992.storeSettingsLocation = i993[22]
  i992.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i993[23], i992.modules)
  i992.createASMDEF = !!i993[24]
  i992.showPlayingTweens = !!i993[25]
  i992.showPausedTweens = !!i993[26]
  return i992
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i994 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i995 = data
  i994.logBehaviour = i995[0]
  i994.nestedTweenFailureBehaviour = i995[1]
  return i994
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i996 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i997 = data
  i996.showPanel = !!i997[0]
  i996.audioEnabled = !!i997[1]
  i996.physicsEnabled = !!i997[2]
  i996.physics2DEnabled = !!i997[3]
  i996.spriteEnabled = !!i997[4]
  i996.uiEnabled = !!i997[5]
  i996.textMeshProEnabled = !!i997[6]
  i996.tk2DEnabled = !!i997[7]
  i996.deAudioEnabled = !!i997[8]
  i996.deUnityExtendedEnabled = !!i997[9]
  i996.epoOutlineEnabled = !!i997[10]
  return i996
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i998 = root || request.c( 'TMPro.TMP_Settings' )
  var i999 = data
  i998.m_enableWordWrapping = !!i999[0]
  i998.m_enableKerning = !!i999[1]
  i998.m_enableExtraPadding = !!i999[2]
  i998.m_enableTintAllSprites = !!i999[3]
  i998.m_enableParseEscapeCharacters = !!i999[4]
  i998.m_EnableRaycastTarget = !!i999[5]
  i998.m_GetFontFeaturesAtRuntime = !!i999[6]
  i998.m_missingGlyphCharacter = i999[7]
  i998.m_warningsDisabled = !!i999[8]
  request.r(i999[9], i999[10], 0, i998, 'm_defaultFontAsset')
  i998.m_defaultFontAssetPath = i999[11]
  i998.m_defaultFontSize = i999[12]
  i998.m_defaultAutoSizeMinRatio = i999[13]
  i998.m_defaultAutoSizeMaxRatio = i999[14]
  i998.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i999[15], i999[16] )
  i998.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i999[17], i999[18] )
  i998.m_autoSizeTextContainer = !!i999[19]
  i998.m_IsTextObjectScaleStatic = !!i999[20]
  var i1001 = i999[21]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 1, i1000, '')
  }
  i998.m_fallbackFontAssets = i1000
  i998.m_matchMaterialPreset = !!i999[22]
  request.r(i999[23], i999[24], 0, i998, 'm_defaultSpriteAsset')
  i998.m_defaultSpriteAssetPath = i999[25]
  i998.m_enableEmojiSupport = !!i999[26]
  i998.m_MissingCharacterSpriteUnicode = i999[27]
  i998.m_defaultColorGradientPresetsPath = i999[28]
  request.r(i999[29], i999[30], 0, i998, 'm_defaultStyleSheet')
  i998.m_StyleSheetsResourcePath = i999[31]
  request.r(i999[32], i999[33], 0, i998, 'm_leadingCharacters')
  request.r(i999[34], i999[35], 0, i998, 'm_followingCharacters')
  i998.m_UseModernHangulLineBreakingRules = !!i999[36]
  return i998
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1002 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1003 = data
  i1002.hashCode = i1003[0]
  request.r(i1003[1], i1003[2], 0, i1002, 'material')
  i1002.materialHashCode = i1003[3]
  request.r(i1003[4], i1003[5], 0, i1002, 'spriteSheet')
  var i1005 = i1003[6]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.add(request.d('TMPro.TMP_Sprite', i1005[i + 0]));
  }
  i1002.spriteInfoList = i1004
  var i1007 = i1003[7]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 1, i1006, '')
  }
  i1002.fallbackSpriteAssets = i1006
  i1002.m_Version = i1003[8]
  i1002.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1003[9], i1002.m_FaceInfo)
  var i1009 = i1003[10]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.add(request.d('TMPro.TMP_SpriteCharacter', i1009[i + 0]));
  }
  i1002.m_SpriteCharacterTable = i1008
  var i1011 = i1003[11]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.add(request.d('TMPro.TMP_SpriteGlyph', i1011[i + 0]));
  }
  i1002.m_SpriteGlyphTable = i1010
  return i1002
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1014 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1015 = data
  i1014.name = i1015[0]
  i1014.hashCode = i1015[1]
  i1014.unicode = i1015[2]
  i1014.pivot = new pc.Vec2( i1015[3], i1015[4] )
  request.r(i1015[5], i1015[6], 0, i1014, 'sprite')
  i1014.id = i1015[7]
  i1014.x = i1015[8]
  i1014.y = i1015[9]
  i1014.width = i1015[10]
  i1014.height = i1015[11]
  i1014.xOffset = i1015[12]
  i1014.yOffset = i1015[13]
  i1014.xAdvance = i1015[14]
  i1014.scale = i1015[15]
  return i1014
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1020 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1021 = data
  i1020.m_Name = i1021[0]
  i1020.m_HashCode = i1021[1]
  i1020.m_ElementType = i1021[2]
  i1020.m_Unicode = i1021[3]
  i1020.m_GlyphIndex = i1021[4]
  i1020.m_Scale = i1021[5]
  return i1020
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1024 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'sprite')
  i1024.m_Index = i1025[2]
  i1024.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1025[3], i1024.m_Metrics)
  i1024.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1025[4], i1024.m_GlyphRect)
  i1024.m_Scale = i1025[5]
  i1024.m_AtlasIndex = i1025[6]
  i1024.m_ClassDefinitionType = i1025[7]
  return i1024
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1026 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1027 = data
  var i1029 = i1027[0]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.add(request.d('TMPro.TMP_Style', i1029[i + 0]));
  }
  i1026.m_StyleList = i1028
  return i1026
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1032 = root || request.c( 'TMPro.TMP_Style' )
  var i1033 = data
  i1032.m_Name = i1033[0]
  i1032.m_HashCode = i1033[1]
  i1032.m_OpeningDefinition = i1033[2]
  i1032.m_ClosingDefinition = i1033[3]
  i1032.m_OpeningTagArray = i1033[4]
  i1032.m_ClosingTagArray = i1033[5]
  i1032.m_OpeningTagUnicodeArray = i1033[6]
  i1032.m_ClosingTagUnicodeArray = i1033[7]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1035 = data
  var i1037 = i1035[0]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1037[i + 0]) );
  }
  i1034.files = i1036
  i1034.componentToPrefabIds = i1035[1]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1041 = data
  i1040.path = i1041[0]
  request.r(i1041[1], i1041[2], 0, i1040, 'unityObject')
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1043 = data
  var i1045 = i1043[0]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1045[i + 0]) );
  }
  i1042.scriptsExecutionOrder = i1044
  var i1047 = i1043[1]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1047[i + 0]) );
  }
  i1042.sortingLayers = i1046
  var i1049 = i1043[2]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1049[i + 0]) );
  }
  i1042.cullingLayers = i1048
  i1042.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1043[3], i1042.timeSettings)
  i1042.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1043[4], i1042.physicsSettings)
  i1042.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1043[5], i1042.physics2DSettings)
  i1042.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1043[6], i1042.qualitySettings)
  i1042.enableRealtimeShadows = !!i1043[7]
  i1042.enableAutoInstancing = !!i1043[8]
  i1042.enableDynamicBatching = !!i1043[9]
  i1042.lightmapEncodingQuality = i1043[10]
  i1042.desiredColorSpace = i1043[11]
  var i1051 = i1043[12]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( i1051[i + 0] );
  }
  i1042.allTags = i1050
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1055 = data
  i1054.name = i1055[0]
  i1054.value = i1055[1]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1059 = data
  i1058.id = i1059[0]
  i1058.name = i1059[1]
  i1058.value = i1059[2]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1063 = data
  i1062.id = i1063[0]
  i1062.name = i1063[1]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1065 = data
  i1064.fixedDeltaTime = i1065[0]
  i1064.maximumDeltaTime = i1065[1]
  i1064.timeScale = i1065[2]
  i1064.maximumParticleTimestep = i1065[3]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1067 = data
  i1066.gravity = new pc.Vec3( i1067[0], i1067[1], i1067[2] )
  i1066.defaultSolverIterations = i1067[3]
  i1066.bounceThreshold = i1067[4]
  i1066.autoSyncTransforms = !!i1067[5]
  i1066.autoSimulation = !!i1067[6]
  var i1069 = i1067[7]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1069[i + 0]) );
  }
  i1066.collisionMatrix = i1068
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1073 = data
  i1072.enabled = !!i1073[0]
  i1072.layerId = i1073[1]
  i1072.otherLayerId = i1073[2]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'material')
  i1074.gravity = new pc.Vec2( i1075[2], i1075[3] )
  i1074.positionIterations = i1075[4]
  i1074.velocityIterations = i1075[5]
  i1074.velocityThreshold = i1075[6]
  i1074.maxLinearCorrection = i1075[7]
  i1074.maxAngularCorrection = i1075[8]
  i1074.maxTranslationSpeed = i1075[9]
  i1074.maxRotationSpeed = i1075[10]
  i1074.baumgarteScale = i1075[11]
  i1074.baumgarteTOIScale = i1075[12]
  i1074.timeToSleep = i1075[13]
  i1074.linearSleepTolerance = i1075[14]
  i1074.angularSleepTolerance = i1075[15]
  i1074.defaultContactOffset = i1075[16]
  i1074.autoSimulation = !!i1075[17]
  i1074.queriesHitTriggers = !!i1075[18]
  i1074.queriesStartInColliders = !!i1075[19]
  i1074.callbacksOnDisable = !!i1075[20]
  i1074.reuseCollisionCallbacks = !!i1075[21]
  i1074.autoSyncTransforms = !!i1075[22]
  var i1077 = i1075[23]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1077[i + 0]) );
  }
  i1074.collisionMatrix = i1076
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1081 = data
  i1080.enabled = !!i1081[0]
  i1080.layerId = i1081[1]
  i1080.otherLayerId = i1081[2]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1083 = data
  var i1085 = i1083[0]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1085[i + 0]) );
  }
  i1082.qualityLevels = i1084
  var i1087 = i1083[1]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( i1087[i + 0] );
  }
  i1082.names = i1086
  i1082.shadows = i1083[2]
  i1082.anisotropicFiltering = i1083[3]
  i1082.antiAliasing = i1083[4]
  i1082.lodBias = i1083[5]
  i1082.shadowCascades = i1083[6]
  i1082.shadowDistance = i1083[7]
  i1082.shadowmaskMode = i1083[8]
  i1082.shadowProjection = i1083[9]
  i1082.shadowResolution = i1083[10]
  i1082.softParticles = !!i1083[11]
  i1082.softVegetation = !!i1083[12]
  i1082.activeColorSpace = i1083[13]
  i1082.desiredColorSpace = i1083[14]
  i1082.masterTextureLimit = i1083[15]
  i1082.maxQueuedFrames = i1083[16]
  i1082.particleRaycastBudget = i1083[17]
  i1082.pixelLightCount = i1083[18]
  i1082.realtimeReflectionProbes = !!i1083[19]
  i1082.shadowCascade2Split = i1083[20]
  i1082.shadowCascade4Split = new pc.Vec3( i1083[21], i1083[22], i1083[23] )
  i1082.streamingMipmapsActive = !!i1083[24]
  i1082.vSyncCount = i1083[25]
  i1082.asyncUploadBufferSize = i1083[26]
  i1082.asyncUploadTimeSlice = i1083[27]
  i1082.billboardsFaceCameraPosition = !!i1083[28]
  i1082.shadowNearPlaneOffset = i1083[29]
  i1082.streamingMipmapsMemoryBudget = i1083[30]
  i1082.maximumLODLevel = i1083[31]
  i1082.streamingMipmapsAddAllCameras = !!i1083[32]
  i1082.streamingMipmapsMaxLevelReduction = i1083[33]
  i1082.streamingMipmapsRenderersPerFrame = i1083[34]
  i1082.resolutionScalingFixedDPIFactor = i1083[35]
  i1082.streamingMipmapsMaxFileIORequests = i1083[36]
  i1082.currentQualityLevel = i1083[37]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1093 = data
  i1092.mode = i1093[0]
  i1092.parameter = i1093[1]
  i1092.threshold = i1093[2]
  return i1092
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1094 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1095 = data
  i1094.xPlacement = i1095[0]
  i1094.yPlacement = i1095[1]
  i1094.xAdvance = i1095[2]
  i1094.yAdvance = i1095[3]
  return i1094
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1096 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1097 = data
  i1096.m_GlyphIndex = i1097[0]
  i1096.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1097[1], i1096.m_GlyphValueRecord)
  return i1096
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1098 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1099 = data
  i1098.m_XPlacement = i1099[0]
  i1098.m_YPlacement = i1099[1]
  i1098.m_XAdvance = i1099[2]
  i1098.m_YAdvance = i1099[3]
  return i1098
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[56],"57":[3],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[3],"81":[82],"83":[84],"85":[84],"23":[14],"6":[3],"86":[59],"87":[14],"88":[82,14],"15":[14,27],"89":[14],"90":[27,14],"91":[82],"92":[27,14],"93":[14],"94":[14],"95":[14],"26":[23],"16":[27,14],"96":[14],"25":[23],"97":[14],"98":[14],"99":[14],"100":[14],"101":[14],"102":[14],"103":[14],"104":[14],"105":[14],"106":[27,14],"107":[14],"108":[14],"109":[14],"110":[14],"111":[27,14],"112":[14],"113":[36],"114":[36],"37":[36],"115":[36],"116":[3],"117":[3]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAspectFitter","UnityEngine.SpriteRenderer","UnityEngine.Light","GameManager","UnityEngine.GameObject","CanvasGroupAnimator","LevelImageSwitcher","DataObject","UnityEngine.RectTransform","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","TaskManager","AudioManager","AudioLibrary","DataManager","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.CanvasGroup","UnityEngine.UI.Button","UnityEngine.Animator","PromtPopUp","TMPro.TMP_FontAsset","SetConditionMet","UnityEditor.Animations.AnimatorController","FloatingTextEffect","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ButtonPulse","StartClickHandler","UnityEngine.Cubemap","UnityEngine.Font","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bullet","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "BidWars2-CosplayRequest";

Deserializers.lunaInitializationTime = "08/07/2025 05:28:30";

Deserializers.lunaDaysRunning = "3.9";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "SIP-LegitOrFake-2025-08-11";

Deserializers.lunaAppID = "32022";

Deserializers.projectId = "fb3dab522ff319d4ca458a16fd743c6d";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.9\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1744";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4363";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.BidWars2-CosplayRequest";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "94450845-b171-4a83-ba0b-c2bfde981a08";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

