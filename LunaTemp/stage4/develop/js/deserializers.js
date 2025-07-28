var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointSpring' )
  var i537 = data
  i536.spring = i537[0]
  i536.damper = i537[1]
  i536.targetPosition = i537[2]
  return i536
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointMotor' )
  var i539 = data
  i538.m_TargetVelocity = i539[0]
  i538.m_Force = i539[1]
  i538.m_FreeSpin = i539[2]
  return i538
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointLimits' )
  var i541 = data
  i540.m_Min = i541[0]
  i540.m_Max = i541[1]
  i540.m_Bounciness = i541[2]
  i540.m_BounceMinVelocity = i541[3]
  i540.m_ContactDistance = i541[4]
  i540.minBounce = i541[5]
  i540.maxBounce = i541[6]
  return i540
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointDrive' )
  var i543 = data
  i542.m_PositionSpring = i543[0]
  i542.m_PositionDamper = i543[1]
  i542.m_MaximumForce = i543[2]
  i542.m_UseAcceleration = i543[3]
  return i542
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i545 = data
  i544.m_Spring = i545[0]
  i544.m_Damper = i545[1]
  return i544
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i547 = data
  i546.m_Limit = i547[0]
  i546.m_Bounciness = i547[1]
  i546.m_ContactDistance = i547[2]
  return i546
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i549 = data
  i548.m_ExtremumSlip = i549[0]
  i548.m_ExtremumValue = i549[1]
  i548.m_AsymptoteSlip = i549[2]
  i548.m_AsymptoteValue = i549[3]
  i548.m_Stiffness = i549[4]
  return i548
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i551 = data
  i550.m_LowerAngle = i551[0]
  i550.m_UpperAngle = i551[1]
  return i550
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i553 = data
  i552.m_MotorSpeed = i553[0]
  i552.m_MaximumMotorTorque = i553[1]
  return i552
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i555 = data
  i554.m_DampingRatio = i555[0]
  i554.m_Frequency = i555[1]
  i554.m_Angle = i555[2]
  return i554
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i557 = data
  i556.m_LowerTranslation = i557[0]
  i556.m_UpperTranslation = i557[1]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i558 = root || new pc.UnityMaterial()
  var i559 = data
  i558.name = i559[0]
  request.r(i559[1], i559[2], 0, i558, 'shader')
  i558.renderQueue = i559[3]
  i558.enableInstancing = !!i559[4]
  var i561 = i559[5]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i561[i + 0]) );
  }
  i558.floatParameters = i560
  var i563 = i559[6]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i563[i + 0]) );
  }
  i558.colorParameters = i562
  var i565 = i559[7]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i565[i + 0]) );
  }
  i558.vectorParameters = i564
  var i567 = i559[8]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i567[i + 0]) );
  }
  i558.textureParameters = i566
  var i569 = i559[9]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i569[i + 0]) );
  }
  i558.materialFlags = i568
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i573 = data
  i572.name = i573[0]
  i572.value = i573[1]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i577 = data
  i576.name = i577[0]
  i576.value = new pc.Color(i577[1], i577[2], i577[3], i577[4])
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i581 = data
  i580.name = i581[0]
  i580.value = new pc.Vec4( i581[1], i581[2], i581[3], i581[4] )
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i585 = data
  i584.name = i585[0]
  request.r(i585[1], i585[2], 0, i584, 'value')
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i589 = data
  i588.name = i589[0]
  i588.enabled = !!i589[1]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i591 = data
  i590.name = i591[0]
  i590.width = i591[1]
  i590.height = i591[2]
  i590.mipmapCount = i591[3]
  i590.anisoLevel = i591[4]
  i590.filterMode = i591[5]
  i590.hdr = !!i591[6]
  i590.format = i591[7]
  i590.wrapMode = i591[8]
  i590.alphaIsTransparency = !!i591[9]
  i590.alphaSource = i591[10]
  i590.graphicsFormat = i591[11]
  i590.sRGBTexture = !!i591[12]
  i590.desiredColorSpace = i591[13]
  i590.wrapU = i591[14]
  i590.wrapV = i591[15]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i593 = data
  i592.name = i593[0]
  i592.atlasId = i593[1]
  i592.mipmapCount = i593[2]
  i592.hdr = !!i593[3]
  i592.size = i593[4]
  i592.anisoLevel = i593[5]
  i592.filterMode = i593[6]
  var i595 = i593[7]
  var i594 = []
  for(var i = 0; i < i595.length; i += 4) {
    i594.push( UnityEngine.Rect.MinMaxRect(i595[i + 0], i595[i + 1], i595[i + 2], i595[i + 3]) );
  }
  i592.rects = i594
  i592.wrapU = i593[8]
  i592.wrapV = i593[9]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i599 = data
  i598.name = i599[0]
  i598.index = i599[1]
  i598.startup = !!i599[2]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i601 = data
  i600.position = new pc.Vec3( i601[0], i601[1], i601[2] )
  i600.scale = new pc.Vec3( i601[3], i601[4], i601[5] )
  i600.rotation = new pc.Quat(i601[6], i601[7], i601[8], i601[9])
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i603 = data
  i602.enabled = !!i603[0]
  i602.aspect = i603[1]
  i602.orthographic = !!i603[2]
  i602.orthographicSize = i603[3]
  i602.backgroundColor = new pc.Color(i603[4], i603[5], i603[6], i603[7])
  i602.nearClipPlane = i603[8]
  i602.farClipPlane = i603[9]
  i602.fieldOfView = i603[10]
  i602.depth = i603[11]
  i602.clearFlags = i603[12]
  i602.cullingMask = i603[13]
  i602.rect = i603[14]
  request.r(i603[15], i603[16], 0, i602, 'targetTexture')
  i602.usePhysicalProperties = !!i603[17]
  i602.focalLength = i603[18]
  i602.sensorSize = new pc.Vec2( i603[19], i603[20] )
  i602.lensShift = new pc.Vec2( i603[21], i603[22] )
  i602.gateFit = i603[23]
  i602.commandBufferCount = i603[24]
  i602.cameraType = i603[25]
  return i602
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i604 = root || request.c( 'CameraAspectFitter' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'targetSprite')
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i607 = data
  i606.name = i607[0]
  i606.tagId = i607[1]
  i606.enabled = !!i607[2]
  i606.isStatic = !!i607[3]
  i606.layer = i607[4]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i609 = data
  i608.enabled = !!i609[0]
  i608.type = i609[1]
  i608.color = new pc.Color(i609[2], i609[3], i609[4], i609[5])
  i608.cullingMask = i609[6]
  i608.intensity = i609[7]
  i608.range = i609[8]
  i608.spotAngle = i609[9]
  i608.shadows = i609[10]
  i608.shadowNormalBias = i609[11]
  i608.shadowBias = i609[12]
  i608.shadowStrength = i609[13]
  i608.shadowResolution = i609[14]
  i608.lightmapBakeType = i609[15]
  i608.renderMode = i609[16]
  request.r(i609[17], i609[18], 0, i608, 'cookie')
  i608.cookieSize = i609[19]
  return i608
}

Deserializers["GameManager"] = function (request, data, root) {
  var i610 = root || request.c( 'GameManager' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'endPanel')
  request.r(i611[2], i611[3], 0, i610, 'endPanelAnimator')
  request.r(i611[4], i611[5], 0, i610, 'scoreTxt')
  i610.end = !!i611[6]
  i610.endPlay = !!i611[7]
  request.r(i611[8], i611[9], 0, i610, 'hand')
  request.r(i611[10], i611[11], 0, i610, 'message2')
  request.r(i611[12], i611[13], 0, i610, 'animator')
  i610.enableSound = !!i611[14]
  var i613 = i611[15]
  var i612 = new (System.Collections.Generic.List$1(Bridge.ns('DataObject')))
  for(var i = 0; i < i613.length; i += 2) {
  request.r(i613[i + 0], i613[i + 1], 1, i612, '')
  }
  i610.items = i612
  i610.level = i611[16]
  i610.animPos = i611[17]
  request.r(i611[18], i611[19], 0, i610, 'itemsParent')
  request.r(i611[20], i611[21], 0, i610, 'startClickHandler')
  i610.itemValue = i611[22]
  var i615 = i611[23]
  var i614 = []
  for(var i = 0; i < i615.length; i += 2) {
  request.r(i615[i + 0], i615[i + 1], 2, i614, '')
  }
  i610.biddersBubble = i614
  request.r(i611[24], i611[25], 0, i610, 'btnGroup')
  request.r(i611[26], i611[27], 0, i610, 'biddersLossTxt')
  request.r(i611[28], i611[29], 0, i610, 'biddersLossPlus')
  request.r(i611[30], i611[31], 0, i610, 'playersLoss')
  request.r(i611[32], i611[33], 0, i610, 'playersPlus')
  request.r(i611[34], i611[35], 0, i610, 'AuthenticImg')
  request.r(i611[36], i611[37], 0, i610, 'profitImg')
  request.r(i611[38], i611[39], 0, i610, 'fakeImg')
  request.r(i611[40], i611[41], 0, i610, 'cashTxt')
  request.r(i611[42], i611[43], 0, i610, 'failBidCanvas')
  request.r(i611[44], i611[45], 0, i610, 'failPassCanvas')
  i610.win = !!i611[46]
  i610.fail = !!i611[47]
  i610.bidFail = !!i611[48]
  i610.passFail = !!i611[49]
  i610.currentScore = i611[50]
  return i610
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i620 = root || request.c( 'TaskManager' )
  var i621 = data
  return i620
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i622 = root || request.c( 'AudioManager' )
  var i623 = data
  request.r(i623[0], i623[1], 0, i622, 'library')
  i622.sfxPoolSize = i623[2]
  i622.enableSound = !!i623[3]
  return i622
}

Deserializers["DataManager"] = function (request, data, root) {
  var i624 = root || request.c( 'DataManager' )
  var i625 = data
  var i627 = i625[0]
  var i626 = new (System.Collections.Generic.List$1(Bridge.ns('SingleDataEntry')))
  for(var i = 0; i < i627.length; i += 1) {
    i626.add(request.d('SingleDataEntry', i627[i + 0]));
  }
  i624.singleEntries = i626
  var i629 = i625[1]
  var i628 = new (System.Collections.Generic.List$1(Bridge.ns('ListDataEntry')))
  for(var i = 0; i < i629.length; i += 1) {
    i628.add(request.d('ListDataEntry', i629[i + 0]));
  }
  i624.listEntries = i628
  return i624
}

Deserializers["SingleDataEntry"] = function (request, data, root) {
  var i632 = root || request.c( 'SingleDataEntry' )
  var i633 = data
  i632.key = i633[0]
  request.r(i633[1], i633[2], 0, i632, 'value')
  return i632
}

Deserializers["ListDataEntry"] = function (request, data, root) {
  var i636 = root || request.c( 'ListDataEntry' )
  var i637 = data
  i636.key = i637[0]
  var i639 = i637[1]
  var i638 = new (System.Collections.Generic.List$1(Bridge.ns('DataObject')))
  for(var i = 0; i < i639.length; i += 2) {
  request.r(i639[i + 0], i639[i + 1], 1, i638, '')
  }
  i636.values = i638
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i641 = data
  i640.enabled = !!i641[0]
  request.r(i641[1], i641[2], 0, i640, 'sharedMaterial')
  var i643 = i641[3]
  var i642 = []
  for(var i = 0; i < i643.length; i += 2) {
  request.r(i643[i + 0], i643[i + 1], 2, i642, '')
  }
  i640.sharedMaterials = i642
  i640.receiveShadows = !!i641[4]
  i640.shadowCastingMode = i641[5]
  i640.sortingLayerID = i641[6]
  i640.sortingOrder = i641[7]
  i640.lightmapIndex = i641[8]
  i640.lightmapSceneIndex = i641[9]
  i640.lightmapScaleOffset = new pc.Vec4( i641[10], i641[11], i641[12], i641[13] )
  i640.lightProbeUsage = i641[14]
  i640.reflectionProbeUsage = i641[15]
  i640.color = new pc.Color(i641[16], i641[17], i641[18], i641[19])
  request.r(i641[20], i641[21], 0, i640, 'sprite')
  i640.flipX = !!i641[22]
  i640.flipY = !!i641[23]
  i640.drawMode = i641[24]
  i640.size = new pc.Vec2( i641[25], i641[26] )
  i640.tileMode = i641[27]
  i640.adaptiveModeThreshold = i641[28]
  i640.maskInteraction = i641[29]
  i640.spriteSortPoint = i641[30]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i647 = data
  i646.pivot = new pc.Vec2( i647[0], i647[1] )
  i646.anchorMin = new pc.Vec2( i647[2], i647[3] )
  i646.anchorMax = new pc.Vec2( i647[4], i647[5] )
  i646.sizeDelta = new pc.Vec2( i647[6], i647[7] )
  i646.anchoredPosition3D = new pc.Vec3( i647[8], i647[9], i647[10] )
  i646.rotation = new pc.Quat(i647[11], i647[12], i647[13], i647[14])
  i646.scale = new pc.Vec3( i647[15], i647[16], i647[17] )
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i649 = data
  i648.enabled = !!i649[0]
  i648.planeDistance = i649[1]
  i648.referencePixelsPerUnit = i649[2]
  i648.isFallbackOverlay = !!i649[3]
  i648.renderMode = i649[4]
  i648.renderOrder = i649[5]
  i648.sortingLayerName = i649[6]
  i648.sortingOrder = i649[7]
  i648.scaleFactor = i649[8]
  request.r(i649[9], i649[10], 0, i648, 'worldCamera')
  i648.overrideSorting = !!i649[11]
  i648.pixelPerfect = !!i649[12]
  i648.targetDisplay = i649[13]
  i648.overridePixelPerfect = !!i649[14]
  return i648
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i651 = data
  i650.m_UiScaleMode = i651[0]
  i650.m_ReferencePixelsPerUnit = i651[1]
  i650.m_ScaleFactor = i651[2]
  i650.m_ReferenceResolution = new pc.Vec2( i651[3], i651[4] )
  i650.m_ScreenMatchMode = i651[5]
  i650.m_MatchWidthOrHeight = i651[6]
  i650.m_PhysicalUnit = i651[7]
  i650.m_FallbackScreenDPI = i651[8]
  i650.m_DefaultSpriteDPI = i651[9]
  i650.m_DynamicPixelsPerUnit = i651[10]
  i650.m_PresetInfoIsWorld = !!i651[11]
  return i650
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i653 = data
  i652.m_IgnoreReversedGraphics = !!i653[0]
  i652.m_BlockingObjects = i653[1]
  i652.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i653[2] )
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i655 = data
  i654.cullTransparentMesh = !!i655[0]
  return i654
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.UI.Image' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'm_Sprite')
  i656.m_Type = i657[2]
  i656.m_PreserveAspect = !!i657[3]
  i656.m_FillCenter = !!i657[4]
  i656.m_FillMethod = i657[5]
  i656.m_FillAmount = i657[6]
  i656.m_FillClockwise = !!i657[7]
  i656.m_FillOrigin = i657[8]
  i656.m_UseSpriteMesh = !!i657[9]
  i656.m_PixelsPerUnitMultiplier = i657[10]
  request.r(i657[11], i657[12], 0, i656, 'm_Material')
  i656.m_Maskable = !!i657[13]
  i656.m_Color = new pc.Color(i657[14], i657[15], i657[16], i657[17])
  i656.m_RaycastTarget = !!i657[18]
  i656.m_RaycastPadding = new pc.Vec4( i657[19], i657[20], i657[21], i657[22] )
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i659 = data
  i658.m_Alpha = i659[0]
  i658.m_Interactable = !!i659[1]
  i658.m_BlocksRaycasts = !!i659[2]
  i658.m_IgnoreParentGroups = !!i659[3]
  i658.enabled = !!i659[4]
  return i658
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i660 = root || request.c( 'CanvasGroupAnimator' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'canvasGroup')
  i660.animateFade = !!i661[2]
  i660.triggerOnStart = !!i661[3]
  i660.isLooping = !!i661[4]
  i660.fadeTo = i661[5]
  i660.fadeDuration = i661[6]
  i660.fadeEaseType = i661[7]
  return i660
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.UI.Button' )
  var i663 = data
  i662.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i663[0], i662.m_OnClick)
  i662.m_Navigation = request.d('UnityEngine.UI.Navigation', i663[1], i662.m_Navigation)
  i662.m_Transition = i663[2]
  i662.m_Colors = request.d('UnityEngine.UI.ColorBlock', i663[3], i662.m_Colors)
  i662.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i663[4], i662.m_SpriteState)
  i662.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i663[5], i662.m_AnimationTriggers)
  i662.m_Interactable = !!i663[6]
  request.r(i663[7], i663[8], 0, i662, 'm_TargetGraphic')
  return i662
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i665 = data
  i664.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i665[0], i664.m_PersistentCalls)
  return i664
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i667 = data
  var i669 = i667[0]
  var i668 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i669.length; i += 1) {
    i668.add(request.d('UnityEngine.Events.PersistentCall', i669[i + 0]));
  }
  i666.m_Calls = i668
  return i666
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'm_Target')
  i672.m_TargetAssemblyTypeName = i673[2]
  i672.m_MethodName = i673[3]
  i672.m_Mode = i673[4]
  i672.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i673[5], i672.m_Arguments)
  i672.m_CallState = i673[6]
  return i672
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'm_ObjectArgument')
  i674.m_ObjectArgumentAssemblyTypeName = i675[2]
  i674.m_IntArgument = i675[3]
  i674.m_FloatArgument = i675[4]
  i674.m_StringArgument = i675[5]
  i674.m_BoolArgument = !!i675[6]
  return i674
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i677 = data
  i676.m_Mode = i677[0]
  i676.m_WrapAround = !!i677[1]
  request.r(i677[2], i677[3], 0, i676, 'm_SelectOnUp')
  request.r(i677[4], i677[5], 0, i676, 'm_SelectOnDown')
  request.r(i677[6], i677[7], 0, i676, 'm_SelectOnLeft')
  request.r(i677[8], i677[9], 0, i676, 'm_SelectOnRight')
  return i676
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i679 = data
  i678.m_NormalColor = new pc.Color(i679[0], i679[1], i679[2], i679[3])
  i678.m_HighlightedColor = new pc.Color(i679[4], i679[5], i679[6], i679[7])
  i678.m_PressedColor = new pc.Color(i679[8], i679[9], i679[10], i679[11])
  i678.m_SelectedColor = new pc.Color(i679[12], i679[13], i679[14], i679[15])
  i678.m_DisabledColor = new pc.Color(i679[16], i679[17], i679[18], i679[19])
  i678.m_ColorMultiplier = i679[20]
  i678.m_FadeDuration = i679[21]
  return i678
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'm_HighlightedSprite')
  request.r(i681[2], i681[3], 0, i680, 'm_PressedSprite')
  request.r(i681[4], i681[5], 0, i680, 'm_SelectedSprite')
  request.r(i681[6], i681[7], 0, i680, 'm_DisabledSprite')
  return i680
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i683 = data
  i682.m_NormalTrigger = i683[0]
  i682.m_HighlightedTrigger = i683[1]
  i682.m_PressedTrigger = i683[2]
  i682.m_SelectedTrigger = i683[3]
  i682.m_DisabledTrigger = i683[4]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'animatorController')
  request.r(i685[2], i685[3], 0, i684, 'avatar')
  i684.updateMode = i685[4]
  i684.hasTransformHierarchy = !!i685[5]
  i684.applyRootMotion = !!i685[6]
  var i687 = i685[7]
  var i686 = []
  for(var i = 0; i < i687.length; i += 2) {
  request.r(i687[i + 0], i687[i + 1], 2, i686, '')
  }
  i684.humanBones = i686
  i684.enabled = !!i685[8]
  return i684
}

Deserializers["PromtPopUp"] = function (request, data, root) {
  var i690 = root || request.c( 'PromtPopUp' )
  var i691 = data
  i690.fake = !!i691[0]
  i690.DestroyGameObject = !!i691[1]
  return i690
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i692 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i693 = data
  i692.m_hasFontAssetChanged = !!i693[0]
  request.r(i693[1], i693[2], 0, i692, 'm_baseMaterial')
  i692.m_maskOffset = new pc.Vec4( i693[3], i693[4], i693[5], i693[6] )
  i692.m_text = i693[7]
  i692.m_isRightToLeft = !!i693[8]
  request.r(i693[9], i693[10], 0, i692, 'm_fontAsset')
  request.r(i693[11], i693[12], 0, i692, 'm_sharedMaterial')
  var i695 = i693[13]
  var i694 = []
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 2, i694, '')
  }
  i692.m_fontSharedMaterials = i694
  request.r(i693[14], i693[15], 0, i692, 'm_fontMaterial')
  var i697 = i693[16]
  var i696 = []
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 2, i696, '')
  }
  i692.m_fontMaterials = i696
  i692.m_fontColor32 = UnityEngine.Color32.ConstructColor(i693[17], i693[18], i693[19], i693[20])
  i692.m_fontColor = new pc.Color(i693[21], i693[22], i693[23], i693[24])
  i692.m_enableVertexGradient = !!i693[25]
  i692.m_colorMode = i693[26]
  i692.m_fontColorGradient = request.d('TMPro.VertexGradient', i693[27], i692.m_fontColorGradient)
  request.r(i693[28], i693[29], 0, i692, 'm_fontColorGradientPreset')
  request.r(i693[30], i693[31], 0, i692, 'm_spriteAsset')
  i692.m_tintAllSprites = !!i693[32]
  request.r(i693[33], i693[34], 0, i692, 'm_StyleSheet')
  i692.m_TextStyleHashCode = i693[35]
  i692.m_overrideHtmlColors = !!i693[36]
  i692.m_faceColor = UnityEngine.Color32.ConstructColor(i693[37], i693[38], i693[39], i693[40])
  i692.m_fontSize = i693[41]
  i692.m_fontSizeBase = i693[42]
  i692.m_fontWeight = i693[43]
  i692.m_enableAutoSizing = !!i693[44]
  i692.m_fontSizeMin = i693[45]
  i692.m_fontSizeMax = i693[46]
  i692.m_fontStyle = i693[47]
  i692.m_HorizontalAlignment = i693[48]
  i692.m_VerticalAlignment = i693[49]
  i692.m_textAlignment = i693[50]
  i692.m_characterSpacing = i693[51]
  i692.m_wordSpacing = i693[52]
  i692.m_lineSpacing = i693[53]
  i692.m_lineSpacingMax = i693[54]
  i692.m_paragraphSpacing = i693[55]
  i692.m_charWidthMaxAdj = i693[56]
  i692.m_enableWordWrapping = !!i693[57]
  i692.m_wordWrappingRatios = i693[58]
  i692.m_overflowMode = i693[59]
  request.r(i693[60], i693[61], 0, i692, 'm_linkedTextComponent')
  request.r(i693[62], i693[63], 0, i692, 'parentLinkedComponent')
  i692.m_enableKerning = !!i693[64]
  i692.m_enableExtraPadding = !!i693[65]
  i692.checkPaddingRequired = !!i693[66]
  i692.m_isRichText = !!i693[67]
  i692.m_parseCtrlCharacters = !!i693[68]
  i692.m_isOrthographic = !!i693[69]
  i692.m_isCullingEnabled = !!i693[70]
  i692.m_horizontalMapping = i693[71]
  i692.m_verticalMapping = i693[72]
  i692.m_uvLineOffset = i693[73]
  i692.m_geometrySortingOrder = i693[74]
  i692.m_IsTextObjectScaleStatic = !!i693[75]
  i692.m_VertexBufferAutoSizeReduction = !!i693[76]
  i692.m_useMaxVisibleDescender = !!i693[77]
  i692.m_pageToDisplay = i693[78]
  i692.m_margin = new pc.Vec4( i693[79], i693[80], i693[81], i693[82] )
  i692.m_isUsingLegacyAnimationComponent = !!i693[83]
  i692.m_isVolumetricText = !!i693[84]
  request.r(i693[85], i693[86], 0, i692, 'm_Material')
  i692.m_Maskable = !!i693[87]
  i692.m_Color = new pc.Color(i693[88], i693[89], i693[90], i693[91])
  i692.m_RaycastTarget = !!i693[92]
  i692.m_RaycastPadding = new pc.Vec4( i693[93], i693[94], i693[95], i693[96] )
  return i692
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i698 = root || request.c( 'TMPro.VertexGradient' )
  var i699 = data
  i698.topLeft = new pc.Color(i699[0], i699[1], i699[2], i699[3])
  i698.topRight = new pc.Color(i699[4], i699[5], i699[6], i699[7])
  i698.bottomLeft = new pc.Color(i699[8], i699[9], i699[10], i699[11])
  i698.bottomRight = new pc.Color(i699[12], i699[13], i699[14], i699[15])
  return i698
}

Deserializers["FloatingTextEffect"] = function (request, data, root) {
  var i700 = root || request.c( 'FloatingTextEffect' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'textMeshProUGUI')
  request.r(i701[2], i701[3], 0, i700, 'textMeshPro')
  i700.floatDistance = i701[4]
  i700.duration = i701[5]
  return i700
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'm_FirstSelected')
  i702.m_sendNavigationEvents = !!i703[2]
  i702.m_DragThreshold = i703[3]
  return i702
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i705 = data
  i704.m_HorizontalAxis = i705[0]
  i704.m_VerticalAxis = i705[1]
  i704.m_SubmitButton = i705[2]
  i704.m_CancelButton = i705[3]
  i704.m_InputActionsPerSecond = i705[4]
  i704.m_RepeatDelay = i705[5]
  i704.m_ForceModuleActive = !!i705[6]
  i704.m_SendPointerHoverToParent = !!i705[7]
  return i704
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i706 = root || request.c( 'ButtonPulse' )
  var i707 = data
  i706.scaleAmount = i707[0]
  i706.pulseDuration = i707[1]
  return i706
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i708 = root || request.c( 'StartClickHandler' )
  var i709 = data
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i711 = data
  i710.ambientIntensity = i711[0]
  i710.reflectionIntensity = i711[1]
  i710.ambientMode = i711[2]
  i710.ambientLight = new pc.Color(i711[3], i711[4], i711[5], i711[6])
  i710.ambientSkyColor = new pc.Color(i711[7], i711[8], i711[9], i711[10])
  i710.ambientGroundColor = new pc.Color(i711[11], i711[12], i711[13], i711[14])
  i710.ambientEquatorColor = new pc.Color(i711[15], i711[16], i711[17], i711[18])
  i710.fogColor = new pc.Color(i711[19], i711[20], i711[21], i711[22])
  i710.fogEndDistance = i711[23]
  i710.fogStartDistance = i711[24]
  i710.fogDensity = i711[25]
  i710.fog = !!i711[26]
  request.r(i711[27], i711[28], 0, i710, 'skybox')
  i710.fogMode = i711[29]
  var i713 = i711[30]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i713[i + 0]) );
  }
  i710.lightmaps = i712
  i710.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i711[31], i710.lightProbes)
  i710.lightmapsMode = i711[32]
  i710.mixedBakeMode = i711[33]
  i710.environmentLightingMode = i711[34]
  i710.ambientProbe = new pc.SphericalHarmonicsL2(i711[35])
  i710.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i711[36])
  i710.useReferenceAmbientProbe = !!i711[37]
  request.r(i711[38], i711[39], 0, i710, 'customReflection')
  request.r(i711[40], i711[41], 0, i710, 'defaultReflection')
  i710.defaultReflectionMode = i711[42]
  i710.defaultReflectionResolution = i711[43]
  i710.sunLightObjectId = i711[44]
  i710.pixelLightCount = i711[45]
  i710.defaultReflectionHDR = !!i711[46]
  i710.hasLightDataAsset = !!i711[47]
  i710.hasManualGenerate = !!i711[48]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'lightmapColor')
  request.r(i717[2], i717[3], 0, i716, 'lightmapDirection')
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i718 = root || new UnityEngine.LightProbes()
  var i719 = data
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i727 = data
  var i729 = i727[0]
  var i728 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i729.length; i += 1) {
    i728.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i729[i + 0]));
  }
  i726.ShaderCompilationErrors = i728
  i726.name = i727[1]
  i726.guid = i727[2]
  var i731 = i727[3]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( i731[i + 0] );
  }
  i726.shaderDefinedKeywords = i730
  var i733 = i727[4]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i733[i + 0]) );
  }
  i726.passes = i732
  var i735 = i727[5]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i735[i + 0]) );
  }
  i726.usePasses = i734
  var i737 = i727[6]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i737[i + 0]) );
  }
  i726.defaultParameterValues = i736
  request.r(i727[7], i727[8], 0, i726, 'unityFallbackShader')
  i726.readDepth = !!i727[9]
  i726.isCreatedByShaderGraph = !!i727[10]
  i726.compiled = !!i727[11]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i741 = data
  i740.shaderName = i741[0]
  i740.errorMessage = i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i746 = root || new pc.UnityShaderPass()
  var i747 = data
  i746.id = i747[0]
  i746.subShaderIndex = i747[1]
  i746.name = i747[2]
  i746.passType = i747[3]
  i746.grabPassTextureName = i747[4]
  i746.usePass = !!i747[5]
  i746.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[6], i746.zTest)
  i746.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[7], i746.zWrite)
  i746.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[8], i746.culling)
  i746.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i747[9], i746.blending)
  i746.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i747[10], i746.alphaBlending)
  i746.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[11], i746.colorWriteMask)
  i746.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[12], i746.offsetUnits)
  i746.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[13], i746.offsetFactor)
  i746.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[14], i746.stencilRef)
  i746.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[15], i746.stencilReadMask)
  i746.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[16], i746.stencilWriteMask)
  i746.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i747[17], i746.stencilOp)
  i746.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i747[18], i746.stencilOpFront)
  i746.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i747[19], i746.stencilOpBack)
  var i749 = i747[20]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i749[i + 0]) );
  }
  i746.tags = i748
  var i751 = i747[21]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( i751[i + 0] );
  }
  i746.passDefinedKeywords = i750
  var i753 = i747[22]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i753[i + 0]) );
  }
  i746.passDefinedKeywordGroups = i752
  var i755 = i747[23]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i755[i + 0]) );
  }
  i746.variants = i754
  var i757 = i747[24]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i757[i + 0]) );
  }
  i746.excludedVariants = i756
  i746.hasDepthReader = !!i747[25]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i759 = data
  i758.val = i759[0]
  i758.name = i759[1]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i761 = data
  i760.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[0], i760.src)
  i760.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[1], i760.dst)
  i760.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[2], i760.op)
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i763 = data
  i762.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[0], i762.pass)
  i762.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[1], i762.fail)
  i762.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[2], i762.zFail)
  i762.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[3], i762.comp)
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i767 = data
  i766.name = i767[0]
  i766.value = i767[1]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i771 = data
  var i773 = i771[0]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( i773[i + 0] );
  }
  i770.keywords = i772
  i770.hasDiscard = !!i771[1]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i777 = data
  i776.passId = i777[0]
  i776.subShaderIndex = i777[1]
  var i779 = i777[2]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( i779[i + 0] );
  }
  i776.keywords = i778
  i776.vertexProgram = i777[3]
  i776.fragmentProgram = i777[4]
  i776.exportedForWebGl2 = !!i777[5]
  i776.readDepth = !!i777[6]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'shader')
  i782.pass = i783[2]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i787 = data
  i786.name = i787[0]
  i786.type = i787[1]
  i786.value = new pc.Vec4( i787[2], i787[3], i787[4], i787[5] )
  i786.textureValue = i787[6]
  i786.shaderPropertyFlag = i787[7]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i789 = data
  i788.name = i789[0]
  request.r(i789[1], i789[2], 0, i788, 'texture')
  i788.aabb = i789[3]
  i788.vertices = i789[4]
  i788.triangles = i789[5]
  i788.textureRect = UnityEngine.Rect.MinMaxRect(i789[6], i789[7], i789[8], i789[9])
  i788.packedRect = UnityEngine.Rect.MinMaxRect(i789[10], i789[11], i789[12], i789[13])
  i788.border = new pc.Vec4( i789[14], i789[15], i789[16], i789[17] )
  i788.transparency = i789[18]
  i788.bounds = i789[19]
  i788.pixelsPerUnit = i789[20]
  i788.textureWidth = i789[21]
  i788.textureHeight = i789[22]
  i788.nativeSize = new pc.Vec2( i789[23], i789[24] )
  i788.pivot = new pc.Vec2( i789[25], i789[26] )
  i788.textureRectOffset = new pc.Vec2( i789[27], i789[28] )
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i791 = data
  i790.name = i791[0]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i793 = data
  i792.name = i793[0]
  i792.wrapMode = i793[1]
  i792.isLooping = !!i793[2]
  i792.length = i793[3]
  var i795 = i793[4]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i795[i + 0]) );
  }
  i792.curves = i794
  var i797 = i793[5]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i797[i + 0]) );
  }
  i792.events = i796
  i792.halfPrecision = !!i793[6]
  i792._frameRate = i793[7]
  i792.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i793[8], i792.localBounds)
  i792.hasMuscleCurves = !!i793[9]
  var i799 = i793[10]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( i799[i + 0] );
  }
  i792.clipMuscleConstant = i798
  i792.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i793[11], i792.clipBindingConstant)
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i803 = data
  i802.path = i803[0]
  i802.hash = i803[1]
  i802.componentType = i803[2]
  i802.property = i803[3]
  i802.keys = i803[4]
  var i805 = i803[5]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i805[i + 0]) );
  }
  i802.objectReferenceKeys = i804
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i809 = data
  i808.time = i809[0]
  request.r(i809[1], i809[2], 0, i808, 'value')
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i813 = data
  i812.functionName = i813[0]
  i812.floatParameter = i813[1]
  i812.intParameter = i813[2]
  i812.stringParameter = i813[3]
  request.r(i813[4], i813[5], 0, i812, 'objectReferenceParameter')
  i812.time = i813[6]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i815 = data
  i814.center = new pc.Vec3( i815[0], i815[1], i815[2] )
  i814.extends = new pc.Vec3( i815[3], i815[4], i815[5] )
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i819 = data
  var i821 = i819[0]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( i821[i + 0] );
  }
  i818.genericBindings = i820
  var i823 = i819[1]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( i823[i + 0] );
  }
  i818.pptrCurveMapping = i822
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i825 = data
  i824.name = i825[0]
  i824.ascent = i825[1]
  i824.originalLineHeight = i825[2]
  i824.fontSize = i825[3]
  var i827 = i825[4]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i827[i + 0]) );
  }
  i824.characterInfo = i826
  request.r(i825[5], i825[6], 0, i824, 'texture')
  i824.originalFontSize = i825[7]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i831 = data
  i830.index = i831[0]
  i830.advance = i831[1]
  i830.bearing = i831[2]
  i830.glyphWidth = i831[3]
  i830.glyphHeight = i831[4]
  i830.minX = i831[5]
  i830.maxX = i831[6]
  i830.minY = i831[7]
  i830.maxY = i831[8]
  i830.uvBottomLeftX = i831[9]
  i830.uvBottomLeftY = i831[10]
  i830.uvBottomRightX = i831[11]
  i830.uvBottomRightY = i831[12]
  i830.uvTopLeftX = i831[13]
  i830.uvTopLeftY = i831[14]
  i830.uvTopRightX = i831[15]
  i830.uvTopRightY = i831[16]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i833 = data
  i832.name = i833[0]
  var i835 = i833[1]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i835[i + 0]) );
  }
  i832.layers = i834
  var i837 = i833[2]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i837[i + 0]) );
  }
  i832.parameters = i836
  i832.animationClips = i833[3]
  i832.avatarUnsupported = i833[4]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i841 = data
  i840.name = i841[0]
  i840.defaultWeight = i841[1]
  i840.blendingMode = i841[2]
  i840.avatarMask = i841[3]
  i840.syncedLayerIndex = i841[4]
  i840.syncedLayerAffectsTiming = !!i841[5]
  i840.syncedLayers = i841[6]
  i840.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i841[7], i840.stateMachine)
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i843 = data
  i842.id = i843[0]
  i842.name = i843[1]
  i842.path = i843[2]
  var i845 = i843[3]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i845[i + 0]) );
  }
  i842.states = i844
  var i847 = i843[4]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i847[i + 0]) );
  }
  i842.machines = i846
  var i849 = i843[5]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i849[i + 0]) );
  }
  i842.entryStateTransitions = i848
  var i851 = i843[6]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i851[i + 0]) );
  }
  i842.exitStateTransitions = i850
  var i853 = i843[7]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i853[i + 0]) );
  }
  i842.anyStateTransitions = i852
  i842.defaultStateId = i843[8]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i857 = data
  i856.id = i857[0]
  i856.name = i857[1]
  i856.cycleOffset = i857[2]
  i856.cycleOffsetParameter = i857[3]
  i856.cycleOffsetParameterActive = !!i857[4]
  i856.mirror = !!i857[5]
  i856.mirrorParameter = i857[6]
  i856.mirrorParameterActive = !!i857[7]
  i856.motionId = i857[8]
  i856.nameHash = i857[9]
  i856.fullPathHash = i857[10]
  i856.speed = i857[11]
  i856.speedParameter = i857[12]
  i856.speedParameterActive = !!i857[13]
  i856.tag = i857[14]
  i856.tagHash = i857[15]
  i856.writeDefaultValues = !!i857[16]
  var i859 = i857[17]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i856.behaviours = i858
  var i861 = i857[18]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i861[i + 0]) );
  }
  i856.transitions = i860
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i867 = data
  i866.fullPath = i867[0]
  i866.canTransitionToSelf = !!i867[1]
  i866.duration = i867[2]
  i866.exitTime = i867[3]
  i866.hasExitTime = !!i867[4]
  i866.hasFixedDuration = !!i867[5]
  i866.interruptionSource = i867[6]
  i866.offset = i867[7]
  i866.orderedInterruption = !!i867[8]
  i866.destinationStateId = i867[9]
  i866.isExit = !!i867[10]
  i866.mute = !!i867[11]
  i866.solo = !!i867[12]
  var i869 = i867[13]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i869[i + 0]) );
  }
  i866.conditions = i868
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i875 = data
  i874.destinationStateId = i875[0]
  i874.isExit = !!i875[1]
  i874.mute = !!i875[2]
  i874.solo = !!i875[3]
  var i877 = i875[4]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i877[i + 0]) );
  }
  i874.conditions = i876
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i881 = data
  i880.defaultBool = !!i881[0]
  i880.defaultFloat = i881[1]
  i880.defaultInt = i881[2]
  i880.name = i881[3]
  i880.nameHash = i881[4]
  i880.type = i881[5]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i883 = data
  i882.name = i883[0]
  i882.bytes64 = i883[1]
  i882.data = i883[2]
  return i882
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i884 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i885 = data
  i884.hashCode = i885[0]
  request.r(i885[1], i885[2], 0, i884, 'material')
  i884.materialHashCode = i885[3]
  request.r(i885[4], i885[5], 0, i884, 'atlas')
  i884.normalStyle = i885[6]
  i884.normalSpacingOffset = i885[7]
  i884.boldStyle = i885[8]
  i884.boldSpacing = i885[9]
  i884.italicStyle = i885[10]
  i884.tabSize = i885[11]
  i884.m_Version = i885[12]
  i884.m_SourceFontFileGUID = i885[13]
  request.r(i885[14], i885[15], 0, i884, 'm_SourceFontFile_EditorRef')
  request.r(i885[16], i885[17], 0, i884, 'm_SourceFontFile')
  i884.m_AtlasPopulationMode = i885[18]
  i884.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i885[19], i884.m_FaceInfo)
  var i887 = i885[20]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i887.length; i += 1) {
    i886.add(request.d('UnityEngine.TextCore.Glyph', i887[i + 0]));
  }
  i884.m_GlyphTable = i886
  var i889 = i885[21]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i889.length; i += 1) {
    i888.add(request.d('TMPro.TMP_Character', i889[i + 0]));
  }
  i884.m_CharacterTable = i888
  var i891 = i885[22]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i884.m_AtlasTextures = i890
  i884.m_AtlasTextureIndex = i885[23]
  i884.m_IsMultiAtlasTexturesEnabled = !!i885[24]
  i884.m_ClearDynamicDataOnBuild = !!i885[25]
  var i893 = i885[26]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(request.d('UnityEngine.TextCore.GlyphRect', i893[i + 0]));
  }
  i884.m_UsedGlyphRects = i892
  var i895 = i885[27]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i895.length; i += 1) {
    i894.add(request.d('UnityEngine.TextCore.GlyphRect', i895[i + 0]));
  }
  i884.m_FreeGlyphRects = i894
  i884.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i885[28], i884.m_fontInfo)
  i884.m_AtlasWidth = i885[29]
  i884.m_AtlasHeight = i885[30]
  i884.m_AtlasPadding = i885[31]
  i884.m_AtlasRenderMode = i885[32]
  var i897 = i885[33]
  var i896 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i897.length; i += 1) {
    i896.add(request.d('TMPro.TMP_Glyph', i897[i + 0]));
  }
  i884.m_glyphInfoList = i896
  i884.m_KerningTable = request.d('TMPro.KerningTable', i885[34], i884.m_KerningTable)
  i884.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i885[35], i884.m_FontFeatureTable)
  var i899 = i885[36]
  var i898 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i899.length; i += 2) {
  request.r(i899[i + 0], i899[i + 1], 1, i898, '')
  }
  i884.fallbackFontAssets = i898
  var i901 = i885[37]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i901.length; i += 2) {
  request.r(i901[i + 0], i901[i + 1], 1, i900, '')
  }
  i884.m_FallbackFontAssetTable = i900
  i884.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i885[38], i884.m_CreationSettings)
  var i903 = i885[39]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('TMPro.TMP_FontWeightPair', i903[i + 0]) );
  }
  i884.m_FontWeightTable = i902
  var i905 = i885[40]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('TMPro.TMP_FontWeightPair', i905[i + 0]) );
  }
  i884.fontWeights = i904
  return i884
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i907 = data
  i906.m_FaceIndex = i907[0]
  i906.m_FamilyName = i907[1]
  i906.m_StyleName = i907[2]
  i906.m_PointSize = i907[3]
  i906.m_Scale = i907[4]
  i906.m_UnitsPerEM = i907[5]
  i906.m_LineHeight = i907[6]
  i906.m_AscentLine = i907[7]
  i906.m_CapLine = i907[8]
  i906.m_MeanLine = i907[9]
  i906.m_Baseline = i907[10]
  i906.m_DescentLine = i907[11]
  i906.m_SuperscriptOffset = i907[12]
  i906.m_SuperscriptSize = i907[13]
  i906.m_SubscriptOffset = i907[14]
  i906.m_SubscriptSize = i907[15]
  i906.m_UnderlineOffset = i907[16]
  i906.m_UnderlineThickness = i907[17]
  i906.m_StrikethroughOffset = i907[18]
  i906.m_StrikethroughThickness = i907[19]
  i906.m_TabWidth = i907[20]
  return i906
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i911 = data
  i910.m_Index = i911[0]
  i910.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i911[1], i910.m_Metrics)
  i910.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i911[2], i910.m_GlyphRect)
  i910.m_Scale = i911[3]
  i910.m_AtlasIndex = i911[4]
  i910.m_ClassDefinitionType = i911[5]
  return i910
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i913 = data
  i912.m_Width = i913[0]
  i912.m_Height = i913[1]
  i912.m_HorizontalBearingX = i913[2]
  i912.m_HorizontalBearingY = i913[3]
  i912.m_HorizontalAdvance = i913[4]
  return i912
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i915 = data
  i914.m_X = i915[0]
  i914.m_Y = i915[1]
  i914.m_Width = i915[2]
  i914.m_Height = i915[3]
  return i914
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i918 = root || request.c( 'TMPro.TMP_Character' )
  var i919 = data
  i918.m_ElementType = i919[0]
  i918.m_Unicode = i919[1]
  i918.m_GlyphIndex = i919[2]
  i918.m_Scale = i919[3]
  return i918
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i924 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i925 = data
  i924.Name = i925[0]
  i924.PointSize = i925[1]
  i924.Scale = i925[2]
  i924.CharacterCount = i925[3]
  i924.LineHeight = i925[4]
  i924.Baseline = i925[5]
  i924.Ascender = i925[6]
  i924.CapHeight = i925[7]
  i924.Descender = i925[8]
  i924.CenterLine = i925[9]
  i924.SuperscriptOffset = i925[10]
  i924.SubscriptOffset = i925[11]
  i924.SubSize = i925[12]
  i924.Underline = i925[13]
  i924.UnderlineThickness = i925[14]
  i924.strikethrough = i925[15]
  i924.strikethroughThickness = i925[16]
  i924.TabWidth = i925[17]
  i924.Padding = i925[18]
  i924.AtlasWidth = i925[19]
  i924.AtlasHeight = i925[20]
  return i924
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i928 = root || request.c( 'TMPro.TMP_Glyph' )
  var i929 = data
  i928.id = i929[0]
  i928.x = i929[1]
  i928.y = i929[2]
  i928.width = i929[3]
  i928.height = i929[4]
  i928.xOffset = i929[5]
  i928.yOffset = i929[6]
  i928.xAdvance = i929[7]
  i928.scale = i929[8]
  return i928
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i930 = root || request.c( 'TMPro.KerningTable' )
  var i931 = data
  var i933 = i931[0]
  var i932 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i933.length; i += 1) {
    i932.add(request.d('TMPro.KerningPair', i933[i + 0]));
  }
  i930.kerningPairs = i932
  return i930
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i936 = root || request.c( 'TMPro.KerningPair' )
  var i937 = data
  i936.xOffset = i937[0]
  i936.m_FirstGlyph = i937[1]
  i936.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i937[2], i936.m_FirstGlyphAdjustments)
  i936.m_SecondGlyph = i937[3]
  i936.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i937[4], i936.m_SecondGlyphAdjustments)
  i936.m_IgnoreSpacingAdjustments = !!i937[5]
  return i936
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i938 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i939 = data
  var i941 = i939[0]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i941.length; i += 1) {
    i940.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i941[i + 0]));
  }
  i938.m_GlyphPairAdjustmentRecords = i940
  return i938
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i944 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i945 = data
  i944.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i945[0], i944.m_FirstAdjustmentRecord)
  i944.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i945[1], i944.m_SecondAdjustmentRecord)
  i944.m_FeatureLookupFlags = i945[2]
  return i944
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i948 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i949 = data
  i948.sourceFontFileName = i949[0]
  i948.sourceFontFileGUID = i949[1]
  i948.pointSizeSamplingMode = i949[2]
  i948.pointSize = i949[3]
  i948.padding = i949[4]
  i948.packingMode = i949[5]
  i948.atlasWidth = i949[6]
  i948.atlasHeight = i949[7]
  i948.characterSetSelectionMode = i949[8]
  i948.characterSequence = i949[9]
  i948.referencedFontAssetGUID = i949[10]
  i948.referencedTextAssetGUID = i949[11]
  i948.fontStyle = i949[12]
  i948.fontStyleModifier = i949[13]
  i948.renderMode = i949[14]
  i948.includeFontFeatures = !!i949[15]
  return i948
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i952 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'regularTypeface')
  request.r(i953[2], i953[3], 0, i952, 'italicTypeface')
  return i952
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i954 = root || request.c( 'AudioLibrary' )
  var i955 = data
  var i957 = i955[0]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i957.length; i += 1) {
    i956.add(request.d('AudioLibrary+ClipEntry', i957[i + 0]));
  }
  i954.clips = i956
  return i954
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i960 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i961 = data
  i960.key = i961[0]
  i960.channel = i961[1]
  request.r(i961[2], i961[3], 0, i960, 'clip')
  i960.volume = i961[4]
  i960.loop = !!i961[5]
  return i960
}

Deserializers["DataObject"] = function (request, data, root) {
  var i962 = root || request.c( 'DataObject' )
  var i963 = data
  i962.level = i963[0]
  i962.name = i963[1]
  i962.assetValue = i963[2]
  i962.isLegit = !!i963[3]
  request.r(i963[4], i963[5], 0, i962, 'icon')
  i962.bidder1Bid = i963[6]
  i962.bidder2Bid = i963[7]
  i962.bidder3Bid = i963[8]
  i962.playerBid = i963[9]
  return i962
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i964 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i965 = data
  i964.useSafeMode = !!i965[0]
  i964.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i965[1], i964.safeModeOptions)
  i964.timeScale = i965[2]
  i964.unscaledTimeScale = i965[3]
  i964.useSmoothDeltaTime = !!i965[4]
  i964.maxSmoothUnscaledTime = i965[5]
  i964.rewindCallbackMode = i965[6]
  i964.showUnityEditorReport = !!i965[7]
  i964.logBehaviour = i965[8]
  i964.drawGizmos = !!i965[9]
  i964.defaultRecyclable = !!i965[10]
  i964.defaultAutoPlay = i965[11]
  i964.defaultUpdateType = i965[12]
  i964.defaultTimeScaleIndependent = !!i965[13]
  i964.defaultEaseType = i965[14]
  i964.defaultEaseOvershootOrAmplitude = i965[15]
  i964.defaultEasePeriod = i965[16]
  i964.defaultAutoKill = !!i965[17]
  i964.defaultLoopType = i965[18]
  i964.debugMode = !!i965[19]
  i964.debugStoreTargetId = !!i965[20]
  i964.showPreviewPanel = !!i965[21]
  i964.storeSettingsLocation = i965[22]
  i964.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i965[23], i964.modules)
  i964.createASMDEF = !!i965[24]
  i964.showPlayingTweens = !!i965[25]
  i964.showPausedTweens = !!i965[26]
  return i964
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i966 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i967 = data
  i966.logBehaviour = i967[0]
  i966.nestedTweenFailureBehaviour = i967[1]
  return i966
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i968 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i969 = data
  i968.showPanel = !!i969[0]
  i968.audioEnabled = !!i969[1]
  i968.physicsEnabled = !!i969[2]
  i968.physics2DEnabled = !!i969[3]
  i968.spriteEnabled = !!i969[4]
  i968.uiEnabled = !!i969[5]
  i968.textMeshProEnabled = !!i969[6]
  i968.tk2DEnabled = !!i969[7]
  i968.deAudioEnabled = !!i969[8]
  i968.deUnityExtendedEnabled = !!i969[9]
  i968.epoOutlineEnabled = !!i969[10]
  return i968
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i970 = root || request.c( 'TMPro.TMP_Settings' )
  var i971 = data
  i970.m_enableWordWrapping = !!i971[0]
  i970.m_enableKerning = !!i971[1]
  i970.m_enableExtraPadding = !!i971[2]
  i970.m_enableTintAllSprites = !!i971[3]
  i970.m_enableParseEscapeCharacters = !!i971[4]
  i970.m_EnableRaycastTarget = !!i971[5]
  i970.m_GetFontFeaturesAtRuntime = !!i971[6]
  i970.m_missingGlyphCharacter = i971[7]
  i970.m_warningsDisabled = !!i971[8]
  request.r(i971[9], i971[10], 0, i970, 'm_defaultFontAsset')
  i970.m_defaultFontAssetPath = i971[11]
  i970.m_defaultFontSize = i971[12]
  i970.m_defaultAutoSizeMinRatio = i971[13]
  i970.m_defaultAutoSizeMaxRatio = i971[14]
  i970.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i971[15], i971[16] )
  i970.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i971[17], i971[18] )
  i970.m_autoSizeTextContainer = !!i971[19]
  i970.m_IsTextObjectScaleStatic = !!i971[20]
  var i973 = i971[21]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 1, i972, '')
  }
  i970.m_fallbackFontAssets = i972
  i970.m_matchMaterialPreset = !!i971[22]
  request.r(i971[23], i971[24], 0, i970, 'm_defaultSpriteAsset')
  i970.m_defaultSpriteAssetPath = i971[25]
  i970.m_enableEmojiSupport = !!i971[26]
  i970.m_MissingCharacterSpriteUnicode = i971[27]
  i970.m_defaultColorGradientPresetsPath = i971[28]
  request.r(i971[29], i971[30], 0, i970, 'm_defaultStyleSheet')
  i970.m_StyleSheetsResourcePath = i971[31]
  request.r(i971[32], i971[33], 0, i970, 'm_leadingCharacters')
  request.r(i971[34], i971[35], 0, i970, 'm_followingCharacters')
  i970.m_UseModernHangulLineBreakingRules = !!i971[36]
  return i970
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i974 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i975 = data
  i974.hashCode = i975[0]
  request.r(i975[1], i975[2], 0, i974, 'material')
  i974.materialHashCode = i975[3]
  request.r(i975[4], i975[5], 0, i974, 'spriteSheet')
  var i977 = i975[6]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i977.length; i += 1) {
    i976.add(request.d('TMPro.TMP_Sprite', i977[i + 0]));
  }
  i974.spriteInfoList = i976
  var i979 = i975[7]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 1, i978, '')
  }
  i974.fallbackSpriteAssets = i978
  i974.m_Version = i975[8]
  i974.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i975[9], i974.m_FaceInfo)
  var i981 = i975[10]
  var i980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i981.length; i += 1) {
    i980.add(request.d('TMPro.TMP_SpriteCharacter', i981[i + 0]));
  }
  i974.m_SpriteCharacterTable = i980
  var i983 = i975[11]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i983.length; i += 1) {
    i982.add(request.d('TMPro.TMP_SpriteGlyph', i983[i + 0]));
  }
  i974.m_SpriteGlyphTable = i982
  return i974
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.TMP_Sprite' )
  var i987 = data
  i986.name = i987[0]
  i986.hashCode = i987[1]
  i986.unicode = i987[2]
  i986.pivot = new pc.Vec2( i987[3], i987[4] )
  request.r(i987[5], i987[6], 0, i986, 'sprite')
  i986.id = i987[7]
  i986.x = i987[8]
  i986.y = i987[9]
  i986.width = i987[10]
  i986.height = i987[11]
  i986.xOffset = i987[12]
  i986.yOffset = i987[13]
  i986.xAdvance = i987[14]
  i986.scale = i987[15]
  return i986
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i992 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i993 = data
  i992.m_Name = i993[0]
  i992.m_HashCode = i993[1]
  i992.m_ElementType = i993[2]
  i992.m_Unicode = i993[3]
  i992.m_GlyphIndex = i993[4]
  i992.m_Scale = i993[5]
  return i992
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i996 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'sprite')
  i996.m_Index = i997[2]
  i996.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i997[3], i996.m_Metrics)
  i996.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i997[4], i996.m_GlyphRect)
  i996.m_Scale = i997[5]
  i996.m_AtlasIndex = i997[6]
  i996.m_ClassDefinitionType = i997[7]
  return i996
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i998 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i999 = data
  var i1001 = i999[0]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.add(request.d('TMPro.TMP_Style', i1001[i + 0]));
  }
  i998.m_StyleList = i1000
  return i998
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1004 = root || request.c( 'TMPro.TMP_Style' )
  var i1005 = data
  i1004.m_Name = i1005[0]
  i1004.m_HashCode = i1005[1]
  i1004.m_OpeningDefinition = i1005[2]
  i1004.m_ClosingDefinition = i1005[3]
  i1004.m_OpeningTagArray = i1005[4]
  i1004.m_ClosingTagArray = i1005[5]
  i1004.m_OpeningTagUnicodeArray = i1005[6]
  i1004.m_ClosingTagUnicodeArray = i1005[7]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1007 = data
  var i1009 = i1007[0]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1009[i + 0]) );
  }
  i1006.files = i1008
  i1006.componentToPrefabIds = i1007[1]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1013 = data
  i1012.path = i1013[0]
  request.r(i1013[1], i1013[2], 0, i1012, 'unityObject')
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1015 = data
  var i1017 = i1015[0]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1017[i + 0]) );
  }
  i1014.scriptsExecutionOrder = i1016
  var i1019 = i1015[1]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1019[i + 0]) );
  }
  i1014.sortingLayers = i1018
  var i1021 = i1015[2]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1021[i + 0]) );
  }
  i1014.cullingLayers = i1020
  i1014.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1015[3], i1014.timeSettings)
  i1014.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1015[4], i1014.physicsSettings)
  i1014.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1015[5], i1014.physics2DSettings)
  i1014.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1015[6], i1014.qualitySettings)
  i1014.enableRealtimeShadows = !!i1015[7]
  i1014.enableAutoInstancing = !!i1015[8]
  i1014.enableDynamicBatching = !!i1015[9]
  i1014.lightmapEncodingQuality = i1015[10]
  i1014.desiredColorSpace = i1015[11]
  var i1023 = i1015[12]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( i1023[i + 0] );
  }
  i1014.allTags = i1022
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1027 = data
  i1026.name = i1027[0]
  i1026.value = i1027[1]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1031 = data
  i1030.id = i1031[0]
  i1030.name = i1031[1]
  i1030.value = i1031[2]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1035 = data
  i1034.id = i1035[0]
  i1034.name = i1035[1]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1037 = data
  i1036.fixedDeltaTime = i1037[0]
  i1036.maximumDeltaTime = i1037[1]
  i1036.timeScale = i1037[2]
  i1036.maximumParticleTimestep = i1037[3]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1039 = data
  i1038.gravity = new pc.Vec3( i1039[0], i1039[1], i1039[2] )
  i1038.defaultSolverIterations = i1039[3]
  i1038.bounceThreshold = i1039[4]
  i1038.autoSyncTransforms = !!i1039[5]
  i1038.autoSimulation = !!i1039[6]
  var i1041 = i1039[7]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1041[i + 0]) );
  }
  i1038.collisionMatrix = i1040
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1045 = data
  i1044.enabled = !!i1045[0]
  i1044.layerId = i1045[1]
  i1044.otherLayerId = i1045[2]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'material')
  i1046.gravity = new pc.Vec2( i1047[2], i1047[3] )
  i1046.positionIterations = i1047[4]
  i1046.velocityIterations = i1047[5]
  i1046.velocityThreshold = i1047[6]
  i1046.maxLinearCorrection = i1047[7]
  i1046.maxAngularCorrection = i1047[8]
  i1046.maxTranslationSpeed = i1047[9]
  i1046.maxRotationSpeed = i1047[10]
  i1046.baumgarteScale = i1047[11]
  i1046.baumgarteTOIScale = i1047[12]
  i1046.timeToSleep = i1047[13]
  i1046.linearSleepTolerance = i1047[14]
  i1046.angularSleepTolerance = i1047[15]
  i1046.defaultContactOffset = i1047[16]
  i1046.autoSimulation = !!i1047[17]
  i1046.queriesHitTriggers = !!i1047[18]
  i1046.queriesStartInColliders = !!i1047[19]
  i1046.callbacksOnDisable = !!i1047[20]
  i1046.reuseCollisionCallbacks = !!i1047[21]
  i1046.autoSyncTransforms = !!i1047[22]
  var i1049 = i1047[23]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1049[i + 0]) );
  }
  i1046.collisionMatrix = i1048
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1053 = data
  i1052.enabled = !!i1053[0]
  i1052.layerId = i1053[1]
  i1052.otherLayerId = i1053[2]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1055 = data
  var i1057 = i1055[0]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1057[i + 0]) );
  }
  i1054.qualityLevels = i1056
  var i1059 = i1055[1]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( i1059[i + 0] );
  }
  i1054.names = i1058
  i1054.shadows = i1055[2]
  i1054.anisotropicFiltering = i1055[3]
  i1054.antiAliasing = i1055[4]
  i1054.lodBias = i1055[5]
  i1054.shadowCascades = i1055[6]
  i1054.shadowDistance = i1055[7]
  i1054.shadowmaskMode = i1055[8]
  i1054.shadowProjection = i1055[9]
  i1054.shadowResolution = i1055[10]
  i1054.softParticles = !!i1055[11]
  i1054.softVegetation = !!i1055[12]
  i1054.activeColorSpace = i1055[13]
  i1054.desiredColorSpace = i1055[14]
  i1054.masterTextureLimit = i1055[15]
  i1054.maxQueuedFrames = i1055[16]
  i1054.particleRaycastBudget = i1055[17]
  i1054.pixelLightCount = i1055[18]
  i1054.realtimeReflectionProbes = !!i1055[19]
  i1054.shadowCascade2Split = i1055[20]
  i1054.shadowCascade4Split = new pc.Vec3( i1055[21], i1055[22], i1055[23] )
  i1054.streamingMipmapsActive = !!i1055[24]
  i1054.vSyncCount = i1055[25]
  i1054.asyncUploadBufferSize = i1055[26]
  i1054.asyncUploadTimeSlice = i1055[27]
  i1054.billboardsFaceCameraPosition = !!i1055[28]
  i1054.shadowNearPlaneOffset = i1055[29]
  i1054.streamingMipmapsMemoryBudget = i1055[30]
  i1054.maximumLODLevel = i1055[31]
  i1054.streamingMipmapsAddAllCameras = !!i1055[32]
  i1054.streamingMipmapsMaxLevelReduction = i1055[33]
  i1054.streamingMipmapsRenderersPerFrame = i1055[34]
  i1054.resolutionScalingFixedDPIFactor = i1055[35]
  i1054.streamingMipmapsMaxFileIORequests = i1055[36]
  i1054.currentQualityLevel = i1055[37]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1065 = data
  i1064.mode = i1065[0]
  i1064.parameter = i1065[1]
  i1064.threshold = i1065[2]
  return i1064
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1066 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1067 = data
  i1066.xPlacement = i1067[0]
  i1066.yPlacement = i1067[1]
  i1066.xAdvance = i1067[2]
  i1066.yAdvance = i1067[3]
  return i1066
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1068 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1069 = data
  i1068.m_GlyphIndex = i1069[0]
  i1068.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1069[1], i1068.m_GlyphValueRecord)
  return i1068
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1070 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1071 = data
  i1070.m_XPlacement = i1071[0]
  i1070.m_YPlacement = i1071[1]
  i1070.m_XAdvance = i1071[2]
  i1070.m_YAdvance = i1071[3]
  return i1070
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[54],"55":[3],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[3],"79":[80],"81":[82],"83":[82],"21":[12],"6":[3],"84":[57],"85":[12],"86":[80,12],"13":[12,25],"87":[12],"88":[25,12],"89":[80],"90":[25,12],"91":[12],"92":[12],"93":[12],"24":[21],"26":[25,12],"94":[12],"23":[21],"95":[12],"96":[12],"97":[12],"98":[12],"99":[12],"100":[12],"101":[12],"102":[12],"103":[12],"104":[25,12],"105":[12],"106":[12],"107":[12],"108":[12],"109":[25,12],"110":[12],"111":[34],"112":[34],"35":[34],"113":[34],"114":[3],"115":[3]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAspectFitter","UnityEngine.SpriteRenderer","UnityEngine.Light","GameManager","UnityEngine.GameObject","CanvasGroupAnimator","UnityEngine.RectTransform","TMPro.TextMeshProUGUI","TaskManager","AudioManager","AudioLibrary","DataManager","DataObject","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.CanvasGroup","UnityEngine.UI.Button","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","PromtPopUp","TMPro.TMP_FontAsset","FloatingTextEffect","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ButtonPulse","StartClickHandler","UnityEngine.Cubemap","UnityEngine.Font","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bullet","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "BidWars2-CosplayRequest";

Deserializers.lunaInitializationTime = "07/07/2025 06:34:45";

Deserializers.lunaDaysRunning = "1.3";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "LegitOrFake";

Deserializers.lunaAppID = "31210";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1745";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4371";

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

Deserializers.buildID = "06207e82-370b-4c02-bd9e-3d0ba839b48f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

