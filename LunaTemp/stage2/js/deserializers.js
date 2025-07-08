var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2680 = root || request.c( 'UnityEngine.JointSpring' )
  var i2681 = data
  i2680.spring = i2681[0]
  i2680.damper = i2681[1]
  i2680.targetPosition = i2681[2]
  return i2680
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2682 = root || request.c( 'UnityEngine.JointMotor' )
  var i2683 = data
  i2682.m_TargetVelocity = i2683[0]
  i2682.m_Force = i2683[1]
  i2682.m_FreeSpin = i2683[2]
  return i2682
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2684 = root || request.c( 'UnityEngine.JointLimits' )
  var i2685 = data
  i2684.m_Min = i2685[0]
  i2684.m_Max = i2685[1]
  i2684.m_Bounciness = i2685[2]
  i2684.m_BounceMinVelocity = i2685[3]
  i2684.m_ContactDistance = i2685[4]
  i2684.minBounce = i2685[5]
  i2684.maxBounce = i2685[6]
  return i2684
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2686 = root || request.c( 'UnityEngine.JointDrive' )
  var i2687 = data
  i2686.m_PositionSpring = i2687[0]
  i2686.m_PositionDamper = i2687[1]
  i2686.m_MaximumForce = i2687[2]
  i2686.m_UseAcceleration = i2687[3]
  return i2686
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2688 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2689 = data
  i2688.m_Spring = i2689[0]
  i2688.m_Damper = i2689[1]
  return i2688
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2690 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2691 = data
  i2690.m_Limit = i2691[0]
  i2690.m_Bounciness = i2691[1]
  i2690.m_ContactDistance = i2691[2]
  return i2690
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2692 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2693 = data
  i2692.m_ExtremumSlip = i2693[0]
  i2692.m_ExtremumValue = i2693[1]
  i2692.m_AsymptoteSlip = i2693[2]
  i2692.m_AsymptoteValue = i2693[3]
  i2692.m_Stiffness = i2693[4]
  return i2692
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2694 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2695 = data
  i2694.m_LowerAngle = i2695[0]
  i2694.m_UpperAngle = i2695[1]
  return i2694
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2696 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2697 = data
  i2696.m_MotorSpeed = i2697[0]
  i2696.m_MaximumMotorTorque = i2697[1]
  return i2696
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2698 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2699 = data
  i2698.m_DampingRatio = i2699[0]
  i2698.m_Frequency = i2699[1]
  i2698.m_Angle = i2699[2]
  return i2698
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2700 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2701 = data
  i2700.m_LowerTranslation = i2701[0]
  i2700.m_UpperTranslation = i2701[1]
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2702 = root || new pc.UnityMaterial()
  var i2703 = data
  i2702.name = i2703[0]
  request.r(i2703[1], i2703[2], 0, i2702, 'shader')
  i2702.renderQueue = i2703[3]
  i2702.enableInstancing = !!i2703[4]
  var i2705 = i2703[5]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2705[i + 0]) );
  }
  i2702.floatParameters = i2704
  var i2707 = i2703[6]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2707[i + 0]) );
  }
  i2702.colorParameters = i2706
  var i2709 = i2703[7]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2709[i + 0]) );
  }
  i2702.vectorParameters = i2708
  var i2711 = i2703[8]
  var i2710 = []
  for(var i = 0; i < i2711.length; i += 1) {
    i2710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2711[i + 0]) );
  }
  i2702.textureParameters = i2710
  var i2713 = i2703[9]
  var i2712 = []
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2713[i + 0]) );
  }
  i2702.materialFlags = i2712
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2717 = data
  i2716.name = i2717[0]
  i2716.value = i2717[1]
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2721 = data
  i2720.name = i2721[0]
  i2720.value = new pc.Color(i2721[1], i2721[2], i2721[3], i2721[4])
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2725 = data
  i2724.name = i2725[0]
  i2724.value = new pc.Vec4( i2725[1], i2725[2], i2725[3], i2725[4] )
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2729 = data
  i2728.name = i2729[0]
  request.r(i2729[1], i2729[2], 0, i2728, 'value')
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2733 = data
  i2732.name = i2733[0]
  i2732.enabled = !!i2733[1]
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2735 = data
  i2734.name = i2735[0]
  i2734.width = i2735[1]
  i2734.height = i2735[2]
  i2734.mipmapCount = i2735[3]
  i2734.anisoLevel = i2735[4]
  i2734.filterMode = i2735[5]
  i2734.hdr = !!i2735[6]
  i2734.format = i2735[7]
  i2734.wrapMode = i2735[8]
  i2734.alphaIsTransparency = !!i2735[9]
  i2734.alphaSource = i2735[10]
  i2734.graphicsFormat = i2735[11]
  i2734.sRGBTexture = !!i2735[12]
  i2734.desiredColorSpace = i2735[13]
  i2734.wrapU = i2735[14]
  i2734.wrapV = i2735[15]
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2737 = data
  i2736.name = i2737[0]
  i2736.atlasId = i2737[1]
  i2736.mipmapCount = i2737[2]
  i2736.hdr = !!i2737[3]
  i2736.size = i2737[4]
  i2736.anisoLevel = i2737[5]
  i2736.filterMode = i2737[6]
  var i2739 = i2737[7]
  var i2738 = []
  for(var i = 0; i < i2739.length; i += 4) {
    i2738.push( UnityEngine.Rect.MinMaxRect(i2739[i + 0], i2739[i + 1], i2739[i + 2], i2739[i + 3]) );
  }
  i2736.rects = i2738
  i2736.wrapU = i2737[8]
  i2736.wrapV = i2737[9]
  return i2736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2743 = data
  i2742.name = i2743[0]
  i2742.index = i2743[1]
  i2742.startup = !!i2743[2]
  return i2742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2745 = data
  i2744.position = new pc.Vec3( i2745[0], i2745[1], i2745[2] )
  i2744.scale = new pc.Vec3( i2745[3], i2745[4], i2745[5] )
  i2744.rotation = new pc.Quat(i2745[6], i2745[7], i2745[8], i2745[9])
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2747 = data
  i2746.enabled = !!i2747[0]
  i2746.aspect = i2747[1]
  i2746.orthographic = !!i2747[2]
  i2746.orthographicSize = i2747[3]
  i2746.backgroundColor = new pc.Color(i2747[4], i2747[5], i2747[6], i2747[7])
  i2746.nearClipPlane = i2747[8]
  i2746.farClipPlane = i2747[9]
  i2746.fieldOfView = i2747[10]
  i2746.depth = i2747[11]
  i2746.clearFlags = i2747[12]
  i2746.cullingMask = i2747[13]
  i2746.rect = i2747[14]
  request.r(i2747[15], i2747[16], 0, i2746, 'targetTexture')
  i2746.usePhysicalProperties = !!i2747[17]
  i2746.focalLength = i2747[18]
  i2746.sensorSize = new pc.Vec2( i2747[19], i2747[20] )
  i2746.lensShift = new pc.Vec2( i2747[21], i2747[22] )
  i2746.gateFit = i2747[23]
  i2746.commandBufferCount = i2747[24]
  i2746.cameraType = i2747[25]
  return i2746
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i2748 = root || request.c( 'CameraAspectFitter' )
  var i2749 = data
  request.r(i2749[0], i2749[1], 0, i2748, 'targetSprite')
  return i2748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2751 = data
  i2750.name = i2751[0]
  i2750.tagId = i2751[1]
  i2750.enabled = !!i2751[2]
  i2750.isStatic = !!i2751[3]
  i2750.layer = i2751[4]
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2753 = data
  i2752.enabled = !!i2753[0]
  i2752.type = i2753[1]
  i2752.color = new pc.Color(i2753[2], i2753[3], i2753[4], i2753[5])
  i2752.cullingMask = i2753[6]
  i2752.intensity = i2753[7]
  i2752.range = i2753[8]
  i2752.spotAngle = i2753[9]
  i2752.shadows = i2753[10]
  i2752.shadowNormalBias = i2753[11]
  i2752.shadowBias = i2753[12]
  i2752.shadowStrength = i2753[13]
  i2752.shadowResolution = i2753[14]
  i2752.lightmapBakeType = i2753[15]
  i2752.renderMode = i2753[16]
  request.r(i2753[17], i2753[18], 0, i2752, 'cookie')
  i2752.cookieSize = i2753[19]
  return i2752
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2754 = root || request.c( 'GameManager' )
  var i2755 = data
  request.r(i2755[0], i2755[1], 0, i2754, 'endPanel')
  request.r(i2755[2], i2755[3], 0, i2754, 'endPanelAnimator')
  request.r(i2755[4], i2755[5], 0, i2754, 'scoreTxt')
  i2754.end = !!i2755[6]
  i2754.endPlay = !!i2755[7]
  request.r(i2755[8], i2755[9], 0, i2754, 'hand')
  request.r(i2755[10], i2755[11], 0, i2754, 'message2')
  request.r(i2755[12], i2755[13], 0, i2754, 'animator')
  i2754.enableSound = !!i2755[14]
  var i2757 = i2755[15]
  var i2756 = new (System.Collections.Generic.List$1(Bridge.ns('DataObject')))
  for(var i = 0; i < i2757.length; i += 2) {
  request.r(i2757[i + 0], i2757[i + 1], 1, i2756, '')
  }
  i2754.items = i2756
  i2754.level = i2755[16]
  i2754.animPos = i2755[17]
  request.r(i2755[18], i2755[19], 0, i2754, 'itemsParent')
  request.r(i2755[20], i2755[21], 0, i2754, 'startClickHandler')
  i2754.itemValue = i2755[22]
  var i2759 = i2755[23]
  var i2758 = []
  for(var i = 0; i < i2759.length; i += 2) {
  request.r(i2759[i + 0], i2759[i + 1], 2, i2758, '')
  }
  i2754.biddersBubble = i2758
  request.r(i2755[24], i2755[25], 0, i2754, 'btnGroup')
  request.r(i2755[26], i2755[27], 0, i2754, 'biddersLossTxt')
  request.r(i2755[28], i2755[29], 0, i2754, 'biddersLossPlus')
  request.r(i2755[30], i2755[31], 0, i2754, 'playersLoss')
  request.r(i2755[32], i2755[33], 0, i2754, 'playersPlus')
  request.r(i2755[34], i2755[35], 0, i2754, 'AuthenticImg')
  request.r(i2755[36], i2755[37], 0, i2754, 'profitImg')
  request.r(i2755[38], i2755[39], 0, i2754, 'cashTxt')
  request.r(i2755[40], i2755[41], 0, i2754, 'failBidCanvas')
  request.r(i2755[42], i2755[43], 0, i2754, 'failPassCanvas')
  i2754.win = !!i2755[44]
  i2754.fail = !!i2755[45]
  i2754.bidFail = !!i2755[46]
  i2754.passFail = !!i2755[47]
  i2754.currentScore = i2755[48]
  return i2754
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i2764 = root || request.c( 'TaskManager' )
  var i2765 = data
  return i2764
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i2766 = root || request.c( 'AudioManager' )
  var i2767 = data
  request.r(i2767[0], i2767[1], 0, i2766, 'library')
  i2766.sfxPoolSize = i2767[2]
  i2766.enableSound = !!i2767[3]
  return i2766
}

Deserializers["DataManager"] = function (request, data, root) {
  var i2768 = root || request.c( 'DataManager' )
  var i2769 = data
  var i2771 = i2769[0]
  var i2770 = new (System.Collections.Generic.List$1(Bridge.ns('SingleDataEntry')))
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.add(request.d('SingleDataEntry', i2771[i + 0]));
  }
  i2768.singleEntries = i2770
  var i2773 = i2769[1]
  var i2772 = new (System.Collections.Generic.List$1(Bridge.ns('ListDataEntry')))
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.add(request.d('ListDataEntry', i2773[i + 0]));
  }
  i2768.listEntries = i2772
  return i2768
}

Deserializers["SingleDataEntry"] = function (request, data, root) {
  var i2776 = root || request.c( 'SingleDataEntry' )
  var i2777 = data
  i2776.key = i2777[0]
  request.r(i2777[1], i2777[2], 0, i2776, 'value')
  return i2776
}

Deserializers["ListDataEntry"] = function (request, data, root) {
  var i2780 = root || request.c( 'ListDataEntry' )
  var i2781 = data
  i2780.key = i2781[0]
  var i2783 = i2781[1]
  var i2782 = new (System.Collections.Generic.List$1(Bridge.ns('DataObject')))
  for(var i = 0; i < i2783.length; i += 2) {
  request.r(i2783[i + 0], i2783[i + 1], 1, i2782, '')
  }
  i2780.values = i2782
  return i2780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2785 = data
  i2784.enabled = !!i2785[0]
  request.r(i2785[1], i2785[2], 0, i2784, 'sharedMaterial')
  var i2787 = i2785[3]
  var i2786 = []
  for(var i = 0; i < i2787.length; i += 2) {
  request.r(i2787[i + 0], i2787[i + 1], 2, i2786, '')
  }
  i2784.sharedMaterials = i2786
  i2784.receiveShadows = !!i2785[4]
  i2784.shadowCastingMode = i2785[5]
  i2784.sortingLayerID = i2785[6]
  i2784.sortingOrder = i2785[7]
  i2784.lightmapIndex = i2785[8]
  i2784.lightmapSceneIndex = i2785[9]
  i2784.lightmapScaleOffset = new pc.Vec4( i2785[10], i2785[11], i2785[12], i2785[13] )
  i2784.lightProbeUsage = i2785[14]
  i2784.reflectionProbeUsage = i2785[15]
  i2784.color = new pc.Color(i2785[16], i2785[17], i2785[18], i2785[19])
  request.r(i2785[20], i2785[21], 0, i2784, 'sprite')
  i2784.flipX = !!i2785[22]
  i2784.flipY = !!i2785[23]
  i2784.drawMode = i2785[24]
  i2784.size = new pc.Vec2( i2785[25], i2785[26] )
  i2784.tileMode = i2785[27]
  i2784.adaptiveModeThreshold = i2785[28]
  i2784.maskInteraction = i2785[29]
  i2784.spriteSortPoint = i2785[30]
  return i2784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2791 = data
  i2790.pivot = new pc.Vec2( i2791[0], i2791[1] )
  i2790.anchorMin = new pc.Vec2( i2791[2], i2791[3] )
  i2790.anchorMax = new pc.Vec2( i2791[4], i2791[5] )
  i2790.sizeDelta = new pc.Vec2( i2791[6], i2791[7] )
  i2790.anchoredPosition3D = new pc.Vec3( i2791[8], i2791[9], i2791[10] )
  i2790.rotation = new pc.Quat(i2791[11], i2791[12], i2791[13], i2791[14])
  i2790.scale = new pc.Vec3( i2791[15], i2791[16], i2791[17] )
  return i2790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2793 = data
  i2792.enabled = !!i2793[0]
  i2792.planeDistance = i2793[1]
  i2792.referencePixelsPerUnit = i2793[2]
  i2792.isFallbackOverlay = !!i2793[3]
  i2792.renderMode = i2793[4]
  i2792.renderOrder = i2793[5]
  i2792.sortingLayerName = i2793[6]
  i2792.sortingOrder = i2793[7]
  i2792.scaleFactor = i2793[8]
  request.r(i2793[9], i2793[10], 0, i2792, 'worldCamera')
  i2792.overrideSorting = !!i2793[11]
  i2792.pixelPerfect = !!i2793[12]
  i2792.targetDisplay = i2793[13]
  i2792.overridePixelPerfect = !!i2793[14]
  return i2792
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2794 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2795 = data
  i2794.m_UiScaleMode = i2795[0]
  i2794.m_ReferencePixelsPerUnit = i2795[1]
  i2794.m_ScaleFactor = i2795[2]
  i2794.m_ReferenceResolution = new pc.Vec2( i2795[3], i2795[4] )
  i2794.m_ScreenMatchMode = i2795[5]
  i2794.m_MatchWidthOrHeight = i2795[6]
  i2794.m_PhysicalUnit = i2795[7]
  i2794.m_FallbackScreenDPI = i2795[8]
  i2794.m_DefaultSpriteDPI = i2795[9]
  i2794.m_DynamicPixelsPerUnit = i2795[10]
  i2794.m_PresetInfoIsWorld = !!i2795[11]
  return i2794
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2796 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2797 = data
  i2796.m_IgnoreReversedGraphics = !!i2797[0]
  i2796.m_BlockingObjects = i2797[1]
  i2796.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2797[2] )
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2799 = data
  i2798.cullTransparentMesh = !!i2799[0]
  return i2798
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2800 = root || request.c( 'UnityEngine.UI.Image' )
  var i2801 = data
  request.r(i2801[0], i2801[1], 0, i2800, 'm_Sprite')
  i2800.m_Type = i2801[2]
  i2800.m_PreserveAspect = !!i2801[3]
  i2800.m_FillCenter = !!i2801[4]
  i2800.m_FillMethod = i2801[5]
  i2800.m_FillAmount = i2801[6]
  i2800.m_FillClockwise = !!i2801[7]
  i2800.m_FillOrigin = i2801[8]
  i2800.m_UseSpriteMesh = !!i2801[9]
  i2800.m_PixelsPerUnitMultiplier = i2801[10]
  request.r(i2801[11], i2801[12], 0, i2800, 'm_Material')
  i2800.m_Maskable = !!i2801[13]
  i2800.m_Color = new pc.Color(i2801[14], i2801[15], i2801[16], i2801[17])
  i2800.m_RaycastTarget = !!i2801[18]
  i2800.m_RaycastPadding = new pc.Vec4( i2801[19], i2801[20], i2801[21], i2801[22] )
  return i2800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2803 = data
  i2802.m_Alpha = i2803[0]
  i2802.m_Interactable = !!i2803[1]
  i2802.m_BlocksRaycasts = !!i2803[2]
  i2802.m_IgnoreParentGroups = !!i2803[3]
  i2802.enabled = !!i2803[4]
  return i2802
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i2804 = root || request.c( 'CanvasGroupAnimator' )
  var i2805 = data
  request.r(i2805[0], i2805[1], 0, i2804, 'canvasGroup')
  i2804.animateFade = !!i2805[2]
  i2804.triggerOnStart = !!i2805[3]
  i2804.isLooping = !!i2805[4]
  i2804.fadeTo = i2805[5]
  i2804.fadeDuration = i2805[6]
  i2804.fadeEaseType = i2805[7]
  return i2804
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2806 = root || request.c( 'UnityEngine.UI.Button' )
  var i2807 = data
  i2806.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2807[0], i2806.m_OnClick)
  i2806.m_Navigation = request.d('UnityEngine.UI.Navigation', i2807[1], i2806.m_Navigation)
  i2806.m_Transition = i2807[2]
  i2806.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2807[3], i2806.m_Colors)
  i2806.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2807[4], i2806.m_SpriteState)
  i2806.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2807[5], i2806.m_AnimationTriggers)
  i2806.m_Interactable = !!i2807[6]
  request.r(i2807[7], i2807[8], 0, i2806, 'm_TargetGraphic')
  return i2806
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2808 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2809 = data
  i2808.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2809[0], i2808.m_PersistentCalls)
  return i2808
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2810 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2811 = data
  var i2813 = i2811[0]
  var i2812 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2813.length; i += 1) {
    i2812.add(request.d('UnityEngine.Events.PersistentCall', i2813[i + 0]));
  }
  i2810.m_Calls = i2812
  return i2810
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2816 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2817 = data
  request.r(i2817[0], i2817[1], 0, i2816, 'm_Target')
  i2816.m_TargetAssemblyTypeName = i2817[2]
  i2816.m_MethodName = i2817[3]
  i2816.m_Mode = i2817[4]
  i2816.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2817[5], i2816.m_Arguments)
  i2816.m_CallState = i2817[6]
  return i2816
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2818 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2819 = data
  request.r(i2819[0], i2819[1], 0, i2818, 'm_ObjectArgument')
  i2818.m_ObjectArgumentAssemblyTypeName = i2819[2]
  i2818.m_IntArgument = i2819[3]
  i2818.m_FloatArgument = i2819[4]
  i2818.m_StringArgument = i2819[5]
  i2818.m_BoolArgument = !!i2819[6]
  return i2818
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2820 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2821 = data
  i2820.m_Mode = i2821[0]
  i2820.m_WrapAround = !!i2821[1]
  request.r(i2821[2], i2821[3], 0, i2820, 'm_SelectOnUp')
  request.r(i2821[4], i2821[5], 0, i2820, 'm_SelectOnDown')
  request.r(i2821[6], i2821[7], 0, i2820, 'm_SelectOnLeft')
  request.r(i2821[8], i2821[9], 0, i2820, 'm_SelectOnRight')
  return i2820
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2822 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2823 = data
  i2822.m_NormalColor = new pc.Color(i2823[0], i2823[1], i2823[2], i2823[3])
  i2822.m_HighlightedColor = new pc.Color(i2823[4], i2823[5], i2823[6], i2823[7])
  i2822.m_PressedColor = new pc.Color(i2823[8], i2823[9], i2823[10], i2823[11])
  i2822.m_SelectedColor = new pc.Color(i2823[12], i2823[13], i2823[14], i2823[15])
  i2822.m_DisabledColor = new pc.Color(i2823[16], i2823[17], i2823[18], i2823[19])
  i2822.m_ColorMultiplier = i2823[20]
  i2822.m_FadeDuration = i2823[21]
  return i2822
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2824 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2825 = data
  request.r(i2825[0], i2825[1], 0, i2824, 'm_HighlightedSprite')
  request.r(i2825[2], i2825[3], 0, i2824, 'm_PressedSprite')
  request.r(i2825[4], i2825[5], 0, i2824, 'm_SelectedSprite')
  request.r(i2825[6], i2825[7], 0, i2824, 'm_DisabledSprite')
  return i2824
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2826 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2827 = data
  i2826.m_NormalTrigger = i2827[0]
  i2826.m_HighlightedTrigger = i2827[1]
  i2826.m_PressedTrigger = i2827[2]
  i2826.m_SelectedTrigger = i2827[3]
  i2826.m_DisabledTrigger = i2827[4]
  return i2826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2829 = data
  request.r(i2829[0], i2829[1], 0, i2828, 'animatorController')
  request.r(i2829[2], i2829[3], 0, i2828, 'avatar')
  i2828.updateMode = i2829[4]
  i2828.hasTransformHierarchy = !!i2829[5]
  i2828.applyRootMotion = !!i2829[6]
  var i2831 = i2829[7]
  var i2830 = []
  for(var i = 0; i < i2831.length; i += 2) {
  request.r(i2831[i + 0], i2831[i + 1], 2, i2830, '')
  }
  i2828.humanBones = i2830
  i2828.enabled = !!i2829[8]
  return i2828
}

Deserializers["PromtPopUp"] = function (request, data, root) {
  var i2834 = root || request.c( 'PromtPopUp' )
  var i2835 = data
  i2834.DestroyGameObject = !!i2835[0]
  return i2834
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2836 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2837 = data
  i2836.m_hasFontAssetChanged = !!i2837[0]
  request.r(i2837[1], i2837[2], 0, i2836, 'm_baseMaterial')
  i2836.m_maskOffset = new pc.Vec4( i2837[3], i2837[4], i2837[5], i2837[6] )
  i2836.m_text = i2837[7]
  i2836.m_isRightToLeft = !!i2837[8]
  request.r(i2837[9], i2837[10], 0, i2836, 'm_fontAsset')
  request.r(i2837[11], i2837[12], 0, i2836, 'm_sharedMaterial')
  var i2839 = i2837[13]
  var i2838 = []
  for(var i = 0; i < i2839.length; i += 2) {
  request.r(i2839[i + 0], i2839[i + 1], 2, i2838, '')
  }
  i2836.m_fontSharedMaterials = i2838
  request.r(i2837[14], i2837[15], 0, i2836, 'm_fontMaterial')
  var i2841 = i2837[16]
  var i2840 = []
  for(var i = 0; i < i2841.length; i += 2) {
  request.r(i2841[i + 0], i2841[i + 1], 2, i2840, '')
  }
  i2836.m_fontMaterials = i2840
  i2836.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2837[17], i2837[18], i2837[19], i2837[20])
  i2836.m_fontColor = new pc.Color(i2837[21], i2837[22], i2837[23], i2837[24])
  i2836.m_enableVertexGradient = !!i2837[25]
  i2836.m_colorMode = i2837[26]
  i2836.m_fontColorGradient = request.d('TMPro.VertexGradient', i2837[27], i2836.m_fontColorGradient)
  request.r(i2837[28], i2837[29], 0, i2836, 'm_fontColorGradientPreset')
  request.r(i2837[30], i2837[31], 0, i2836, 'm_spriteAsset')
  i2836.m_tintAllSprites = !!i2837[32]
  request.r(i2837[33], i2837[34], 0, i2836, 'm_StyleSheet')
  i2836.m_TextStyleHashCode = i2837[35]
  i2836.m_overrideHtmlColors = !!i2837[36]
  i2836.m_faceColor = UnityEngine.Color32.ConstructColor(i2837[37], i2837[38], i2837[39], i2837[40])
  i2836.m_fontSize = i2837[41]
  i2836.m_fontSizeBase = i2837[42]
  i2836.m_fontWeight = i2837[43]
  i2836.m_enableAutoSizing = !!i2837[44]
  i2836.m_fontSizeMin = i2837[45]
  i2836.m_fontSizeMax = i2837[46]
  i2836.m_fontStyle = i2837[47]
  i2836.m_HorizontalAlignment = i2837[48]
  i2836.m_VerticalAlignment = i2837[49]
  i2836.m_textAlignment = i2837[50]
  i2836.m_characterSpacing = i2837[51]
  i2836.m_wordSpacing = i2837[52]
  i2836.m_lineSpacing = i2837[53]
  i2836.m_lineSpacingMax = i2837[54]
  i2836.m_paragraphSpacing = i2837[55]
  i2836.m_charWidthMaxAdj = i2837[56]
  i2836.m_enableWordWrapping = !!i2837[57]
  i2836.m_wordWrappingRatios = i2837[58]
  i2836.m_overflowMode = i2837[59]
  request.r(i2837[60], i2837[61], 0, i2836, 'm_linkedTextComponent')
  request.r(i2837[62], i2837[63], 0, i2836, 'parentLinkedComponent')
  i2836.m_enableKerning = !!i2837[64]
  i2836.m_enableExtraPadding = !!i2837[65]
  i2836.checkPaddingRequired = !!i2837[66]
  i2836.m_isRichText = !!i2837[67]
  i2836.m_parseCtrlCharacters = !!i2837[68]
  i2836.m_isOrthographic = !!i2837[69]
  i2836.m_isCullingEnabled = !!i2837[70]
  i2836.m_horizontalMapping = i2837[71]
  i2836.m_verticalMapping = i2837[72]
  i2836.m_uvLineOffset = i2837[73]
  i2836.m_geometrySortingOrder = i2837[74]
  i2836.m_IsTextObjectScaleStatic = !!i2837[75]
  i2836.m_VertexBufferAutoSizeReduction = !!i2837[76]
  i2836.m_useMaxVisibleDescender = !!i2837[77]
  i2836.m_pageToDisplay = i2837[78]
  i2836.m_margin = new pc.Vec4( i2837[79], i2837[80], i2837[81], i2837[82] )
  i2836.m_isUsingLegacyAnimationComponent = !!i2837[83]
  i2836.m_isVolumetricText = !!i2837[84]
  request.r(i2837[85], i2837[86], 0, i2836, 'm_Material')
  i2836.m_Maskable = !!i2837[87]
  i2836.m_Color = new pc.Color(i2837[88], i2837[89], i2837[90], i2837[91])
  i2836.m_RaycastTarget = !!i2837[92]
  i2836.m_RaycastPadding = new pc.Vec4( i2837[93], i2837[94], i2837[95], i2837[96] )
  return i2836
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2842 = root || request.c( 'TMPro.VertexGradient' )
  var i2843 = data
  i2842.topLeft = new pc.Color(i2843[0], i2843[1], i2843[2], i2843[3])
  i2842.topRight = new pc.Color(i2843[4], i2843[5], i2843[6], i2843[7])
  i2842.bottomLeft = new pc.Color(i2843[8], i2843[9], i2843[10], i2843[11])
  i2842.bottomRight = new pc.Color(i2843[12], i2843[13], i2843[14], i2843[15])
  return i2842
}

Deserializers["FloatingTextEffect"] = function (request, data, root) {
  var i2844 = root || request.c( 'FloatingTextEffect' )
  var i2845 = data
  request.r(i2845[0], i2845[1], 0, i2844, 'textMeshProUGUI')
  request.r(i2845[2], i2845[3], 0, i2844, 'textMeshPro')
  i2844.floatDistance = i2845[4]
  i2844.duration = i2845[5]
  return i2844
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2846 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2847 = data
  request.r(i2847[0], i2847[1], 0, i2846, 'm_FirstSelected')
  i2846.m_sendNavigationEvents = !!i2847[2]
  i2846.m_DragThreshold = i2847[3]
  return i2846
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2848 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2849 = data
  i2848.m_HorizontalAxis = i2849[0]
  i2848.m_VerticalAxis = i2849[1]
  i2848.m_SubmitButton = i2849[2]
  i2848.m_CancelButton = i2849[3]
  i2848.m_InputActionsPerSecond = i2849[4]
  i2848.m_RepeatDelay = i2849[5]
  i2848.m_ForceModuleActive = !!i2849[6]
  i2848.m_SendPointerHoverToParent = !!i2849[7]
  return i2848
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i2850 = root || request.c( 'ButtonPulse' )
  var i2851 = data
  i2850.scaleAmount = i2851[0]
  i2850.pulseDuration = i2851[1]
  return i2850
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i2852 = root || request.c( 'StartClickHandler' )
  var i2853 = data
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2855 = data
  i2854.ambientIntensity = i2855[0]
  i2854.reflectionIntensity = i2855[1]
  i2854.ambientMode = i2855[2]
  i2854.ambientLight = new pc.Color(i2855[3], i2855[4], i2855[5], i2855[6])
  i2854.ambientSkyColor = new pc.Color(i2855[7], i2855[8], i2855[9], i2855[10])
  i2854.ambientGroundColor = new pc.Color(i2855[11], i2855[12], i2855[13], i2855[14])
  i2854.ambientEquatorColor = new pc.Color(i2855[15], i2855[16], i2855[17], i2855[18])
  i2854.fogColor = new pc.Color(i2855[19], i2855[20], i2855[21], i2855[22])
  i2854.fogEndDistance = i2855[23]
  i2854.fogStartDistance = i2855[24]
  i2854.fogDensity = i2855[25]
  i2854.fog = !!i2855[26]
  request.r(i2855[27], i2855[28], 0, i2854, 'skybox')
  i2854.fogMode = i2855[29]
  var i2857 = i2855[30]
  var i2856 = []
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2857[i + 0]) );
  }
  i2854.lightmaps = i2856
  i2854.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2855[31], i2854.lightProbes)
  i2854.lightmapsMode = i2855[32]
  i2854.mixedBakeMode = i2855[33]
  i2854.environmentLightingMode = i2855[34]
  i2854.ambientProbe = new pc.SphericalHarmonicsL2(i2855[35])
  i2854.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2855[36])
  i2854.useReferenceAmbientProbe = !!i2855[37]
  request.r(i2855[38], i2855[39], 0, i2854, 'customReflection')
  request.r(i2855[40], i2855[41], 0, i2854, 'defaultReflection')
  i2854.defaultReflectionMode = i2855[42]
  i2854.defaultReflectionResolution = i2855[43]
  i2854.sunLightObjectId = i2855[44]
  i2854.pixelLightCount = i2855[45]
  i2854.defaultReflectionHDR = !!i2855[46]
  i2854.hasLightDataAsset = !!i2855[47]
  i2854.hasManualGenerate = !!i2855[48]
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2861 = data
  request.r(i2861[0], i2861[1], 0, i2860, 'lightmapColor')
  request.r(i2861[2], i2861[3], 0, i2860, 'lightmapDirection')
  return i2860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2862 = root || new UnityEngine.LightProbes()
  var i2863 = data
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2871 = data
  var i2873 = i2871[0]
  var i2872 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2873.length; i += 1) {
    i2872.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2873[i + 0]));
  }
  i2870.ShaderCompilationErrors = i2872
  i2870.name = i2871[1]
  i2870.guid = i2871[2]
  var i2875 = i2871[3]
  var i2874 = []
  for(var i = 0; i < i2875.length; i += 1) {
    i2874.push( i2875[i + 0] );
  }
  i2870.shaderDefinedKeywords = i2874
  var i2877 = i2871[4]
  var i2876 = []
  for(var i = 0; i < i2877.length; i += 1) {
    i2876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2877[i + 0]) );
  }
  i2870.passes = i2876
  var i2879 = i2871[5]
  var i2878 = []
  for(var i = 0; i < i2879.length; i += 1) {
    i2878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2879[i + 0]) );
  }
  i2870.usePasses = i2878
  var i2881 = i2871[6]
  var i2880 = []
  for(var i = 0; i < i2881.length; i += 1) {
    i2880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2881[i + 0]) );
  }
  i2870.defaultParameterValues = i2880
  request.r(i2871[7], i2871[8], 0, i2870, 'unityFallbackShader')
  i2870.readDepth = !!i2871[9]
  i2870.isCreatedByShaderGraph = !!i2871[10]
  i2870.compiled = !!i2871[11]
  return i2870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2885 = data
  i2884.shaderName = i2885[0]
  i2884.errorMessage = i2885[1]
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2890 = root || new pc.UnityShaderPass()
  var i2891 = data
  i2890.id = i2891[0]
  i2890.subShaderIndex = i2891[1]
  i2890.name = i2891[2]
  i2890.passType = i2891[3]
  i2890.grabPassTextureName = i2891[4]
  i2890.usePass = !!i2891[5]
  i2890.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2891[6], i2890.zTest)
  i2890.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2891[7], i2890.zWrite)
  i2890.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2891[8], i2890.culling)
  i2890.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2891[9], i2890.blending)
  i2890.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2891[10], i2890.alphaBlending)
  i2890.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2891[11], i2890.colorWriteMask)
  i2890.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2891[12], i2890.offsetUnits)
  i2890.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2891[13], i2890.offsetFactor)
  i2890.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2891[14], i2890.stencilRef)
  i2890.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2891[15], i2890.stencilReadMask)
  i2890.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2891[16], i2890.stencilWriteMask)
  i2890.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2891[17], i2890.stencilOp)
  i2890.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2891[18], i2890.stencilOpFront)
  i2890.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2891[19], i2890.stencilOpBack)
  var i2893 = i2891[20]
  var i2892 = []
  for(var i = 0; i < i2893.length; i += 1) {
    i2892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2893[i + 0]) );
  }
  i2890.tags = i2892
  var i2895 = i2891[21]
  var i2894 = []
  for(var i = 0; i < i2895.length; i += 1) {
    i2894.push( i2895[i + 0] );
  }
  i2890.passDefinedKeywords = i2894
  var i2897 = i2891[22]
  var i2896 = []
  for(var i = 0; i < i2897.length; i += 1) {
    i2896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2897[i + 0]) );
  }
  i2890.passDefinedKeywordGroups = i2896
  var i2899 = i2891[23]
  var i2898 = []
  for(var i = 0; i < i2899.length; i += 1) {
    i2898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2899[i + 0]) );
  }
  i2890.variants = i2898
  var i2901 = i2891[24]
  var i2900 = []
  for(var i = 0; i < i2901.length; i += 1) {
    i2900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2901[i + 0]) );
  }
  i2890.excludedVariants = i2900
  i2890.hasDepthReader = !!i2891[25]
  return i2890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2903 = data
  i2902.val = i2903[0]
  i2902.name = i2903[1]
  return i2902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2905 = data
  i2904.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2905[0], i2904.src)
  i2904.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2905[1], i2904.dst)
  i2904.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2905[2], i2904.op)
  return i2904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2907 = data
  i2906.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2907[0], i2906.pass)
  i2906.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2907[1], i2906.fail)
  i2906.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2907[2], i2906.zFail)
  i2906.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2907[3], i2906.comp)
  return i2906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2911 = data
  i2910.name = i2911[0]
  i2910.value = i2911[1]
  return i2910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2915 = data
  var i2917 = i2915[0]
  var i2916 = []
  for(var i = 0; i < i2917.length; i += 1) {
    i2916.push( i2917[i + 0] );
  }
  i2914.keywords = i2916
  i2914.hasDiscard = !!i2915[1]
  return i2914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2921 = data
  i2920.passId = i2921[0]
  i2920.subShaderIndex = i2921[1]
  var i2923 = i2921[2]
  var i2922 = []
  for(var i = 0; i < i2923.length; i += 1) {
    i2922.push( i2923[i + 0] );
  }
  i2920.keywords = i2922
  i2920.vertexProgram = i2921[3]
  i2920.fragmentProgram = i2921[4]
  i2920.exportedForWebGl2 = !!i2921[5]
  i2920.readDepth = !!i2921[6]
  return i2920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2927 = data
  request.r(i2927[0], i2927[1], 0, i2926, 'shader')
  i2926.pass = i2927[2]
  return i2926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2931 = data
  i2930.name = i2931[0]
  i2930.type = i2931[1]
  i2930.value = new pc.Vec4( i2931[2], i2931[3], i2931[4], i2931[5] )
  i2930.textureValue = i2931[6]
  i2930.shaderPropertyFlag = i2931[7]
  return i2930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2933 = data
  i2932.name = i2933[0]
  request.r(i2933[1], i2933[2], 0, i2932, 'texture')
  i2932.aabb = i2933[3]
  i2932.vertices = i2933[4]
  i2932.triangles = i2933[5]
  i2932.textureRect = UnityEngine.Rect.MinMaxRect(i2933[6], i2933[7], i2933[8], i2933[9])
  i2932.packedRect = UnityEngine.Rect.MinMaxRect(i2933[10], i2933[11], i2933[12], i2933[13])
  i2932.border = new pc.Vec4( i2933[14], i2933[15], i2933[16], i2933[17] )
  i2932.transparency = i2933[18]
  i2932.bounds = i2933[19]
  i2932.pixelsPerUnit = i2933[20]
  i2932.textureWidth = i2933[21]
  i2932.textureHeight = i2933[22]
  i2932.nativeSize = new pc.Vec2( i2933[23], i2933[24] )
  i2932.pivot = new pc.Vec2( i2933[25], i2933[26] )
  i2932.textureRectOffset = new pc.Vec2( i2933[27], i2933[28] )
  return i2932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2935 = data
  i2934.name = i2935[0]
  return i2934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2937 = data
  i2936.name = i2937[0]
  i2936.wrapMode = i2937[1]
  i2936.isLooping = !!i2937[2]
  i2936.length = i2937[3]
  var i2939 = i2937[4]
  var i2938 = []
  for(var i = 0; i < i2939.length; i += 1) {
    i2938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2939[i + 0]) );
  }
  i2936.curves = i2938
  var i2941 = i2937[5]
  var i2940 = []
  for(var i = 0; i < i2941.length; i += 1) {
    i2940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2941[i + 0]) );
  }
  i2936.events = i2940
  i2936.halfPrecision = !!i2937[6]
  i2936._frameRate = i2937[7]
  i2936.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2937[8], i2936.localBounds)
  i2936.hasMuscleCurves = !!i2937[9]
  var i2943 = i2937[10]
  var i2942 = []
  for(var i = 0; i < i2943.length; i += 1) {
    i2942.push( i2943[i + 0] );
  }
  i2936.clipMuscleConstant = i2942
  i2936.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2937[11], i2936.clipBindingConstant)
  return i2936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2947 = data
  i2946.path = i2947[0]
  i2946.hash = i2947[1]
  i2946.componentType = i2947[2]
  i2946.property = i2947[3]
  i2946.keys = i2947[4]
  var i2949 = i2947[5]
  var i2948 = []
  for(var i = 0; i < i2949.length; i += 1) {
    i2948.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2949[i + 0]) );
  }
  i2946.objectReferenceKeys = i2948
  return i2946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2953 = data
  i2952.time = i2953[0]
  request.r(i2953[1], i2953[2], 0, i2952, 'value')
  return i2952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2957 = data
  i2956.functionName = i2957[0]
  i2956.floatParameter = i2957[1]
  i2956.intParameter = i2957[2]
  i2956.stringParameter = i2957[3]
  request.r(i2957[4], i2957[5], 0, i2956, 'objectReferenceParameter')
  i2956.time = i2957[6]
  return i2956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2959 = data
  i2958.center = new pc.Vec3( i2959[0], i2959[1], i2959[2] )
  i2958.extends = new pc.Vec3( i2959[3], i2959[4], i2959[5] )
  return i2958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2963 = data
  var i2965 = i2963[0]
  var i2964 = []
  for(var i = 0; i < i2965.length; i += 1) {
    i2964.push( i2965[i + 0] );
  }
  i2962.genericBindings = i2964
  var i2967 = i2963[1]
  var i2966 = []
  for(var i = 0; i < i2967.length; i += 1) {
    i2966.push( i2967[i + 0] );
  }
  i2962.pptrCurveMapping = i2966
  return i2962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2969 = data
  i2968.name = i2969[0]
  i2968.ascent = i2969[1]
  i2968.originalLineHeight = i2969[2]
  i2968.fontSize = i2969[3]
  var i2971 = i2969[4]
  var i2970 = []
  for(var i = 0; i < i2971.length; i += 1) {
    i2970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2971[i + 0]) );
  }
  i2968.characterInfo = i2970
  request.r(i2969[5], i2969[6], 0, i2968, 'texture')
  i2968.originalFontSize = i2969[7]
  return i2968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2975 = data
  i2974.index = i2975[0]
  i2974.advance = i2975[1]
  i2974.bearing = i2975[2]
  i2974.glyphWidth = i2975[3]
  i2974.glyphHeight = i2975[4]
  i2974.minX = i2975[5]
  i2974.maxX = i2975[6]
  i2974.minY = i2975[7]
  i2974.maxY = i2975[8]
  i2974.uvBottomLeftX = i2975[9]
  i2974.uvBottomLeftY = i2975[10]
  i2974.uvBottomRightX = i2975[11]
  i2974.uvBottomRightY = i2975[12]
  i2974.uvTopLeftX = i2975[13]
  i2974.uvTopLeftY = i2975[14]
  i2974.uvTopRightX = i2975[15]
  i2974.uvTopRightY = i2975[16]
  return i2974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2977 = data
  i2976.name = i2977[0]
  var i2979 = i2977[1]
  var i2978 = []
  for(var i = 0; i < i2979.length; i += 1) {
    i2978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2979[i + 0]) );
  }
  i2976.layers = i2978
  var i2981 = i2977[2]
  var i2980 = []
  for(var i = 0; i < i2981.length; i += 1) {
    i2980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2981[i + 0]) );
  }
  i2976.parameters = i2980
  i2976.animationClips = i2977[3]
  i2976.avatarUnsupported = i2977[4]
  return i2976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2985 = data
  i2984.name = i2985[0]
  i2984.defaultWeight = i2985[1]
  i2984.blendingMode = i2985[2]
  i2984.avatarMask = i2985[3]
  i2984.syncedLayerIndex = i2985[4]
  i2984.syncedLayerAffectsTiming = !!i2985[5]
  i2984.syncedLayers = i2985[6]
  i2984.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2985[7], i2984.stateMachine)
  return i2984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2987 = data
  i2986.id = i2987[0]
  i2986.name = i2987[1]
  i2986.path = i2987[2]
  var i2989 = i2987[3]
  var i2988 = []
  for(var i = 0; i < i2989.length; i += 1) {
    i2988.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2989[i + 0]) );
  }
  i2986.states = i2988
  var i2991 = i2987[4]
  var i2990 = []
  for(var i = 0; i < i2991.length; i += 1) {
    i2990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2991[i + 0]) );
  }
  i2986.machines = i2990
  var i2993 = i2987[5]
  var i2992 = []
  for(var i = 0; i < i2993.length; i += 1) {
    i2992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2993[i + 0]) );
  }
  i2986.entryStateTransitions = i2992
  var i2995 = i2987[6]
  var i2994 = []
  for(var i = 0; i < i2995.length; i += 1) {
    i2994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2995[i + 0]) );
  }
  i2986.exitStateTransitions = i2994
  var i2997 = i2987[7]
  var i2996 = []
  for(var i = 0; i < i2997.length; i += 1) {
    i2996.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2997[i + 0]) );
  }
  i2986.anyStateTransitions = i2996
  i2986.defaultStateId = i2987[8]
  return i2986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3001 = data
  i3000.id = i3001[0]
  i3000.name = i3001[1]
  i3000.cycleOffset = i3001[2]
  i3000.cycleOffsetParameter = i3001[3]
  i3000.cycleOffsetParameterActive = !!i3001[4]
  i3000.mirror = !!i3001[5]
  i3000.mirrorParameter = i3001[6]
  i3000.mirrorParameterActive = !!i3001[7]
  i3000.motionId = i3001[8]
  i3000.nameHash = i3001[9]
  i3000.fullPathHash = i3001[10]
  i3000.speed = i3001[11]
  i3000.speedParameter = i3001[12]
  i3000.speedParameterActive = !!i3001[13]
  i3000.tag = i3001[14]
  i3000.tagHash = i3001[15]
  i3000.writeDefaultValues = !!i3001[16]
  var i3003 = i3001[17]
  var i3002 = []
  for(var i = 0; i < i3003.length; i += 2) {
  request.r(i3003[i + 0], i3003[i + 1], 2, i3002, '')
  }
  i3000.behaviours = i3002
  var i3005 = i3001[18]
  var i3004 = []
  for(var i = 0; i < i3005.length; i += 1) {
    i3004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3005[i + 0]) );
  }
  i3000.transitions = i3004
  return i3000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3011 = data
  i3010.fullPath = i3011[0]
  i3010.canTransitionToSelf = !!i3011[1]
  i3010.duration = i3011[2]
  i3010.exitTime = i3011[3]
  i3010.hasExitTime = !!i3011[4]
  i3010.hasFixedDuration = !!i3011[5]
  i3010.interruptionSource = i3011[6]
  i3010.offset = i3011[7]
  i3010.orderedInterruption = !!i3011[8]
  i3010.destinationStateId = i3011[9]
  i3010.isExit = !!i3011[10]
  i3010.mute = !!i3011[11]
  i3010.solo = !!i3011[12]
  var i3013 = i3011[13]
  var i3012 = []
  for(var i = 0; i < i3013.length; i += 1) {
    i3012.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3013[i + 0]) );
  }
  i3010.conditions = i3012
  return i3010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3019 = data
  i3018.destinationStateId = i3019[0]
  i3018.isExit = !!i3019[1]
  i3018.mute = !!i3019[2]
  i3018.solo = !!i3019[3]
  var i3021 = i3019[4]
  var i3020 = []
  for(var i = 0; i < i3021.length; i += 1) {
    i3020.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3021[i + 0]) );
  }
  i3018.conditions = i3020
  return i3018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3025 = data
  i3024.defaultBool = !!i3025[0]
  i3024.defaultFloat = i3025[1]
  i3024.defaultInt = i3025[2]
  i3024.name = i3025[3]
  i3024.nameHash = i3025[4]
  i3024.type = i3025[5]
  return i3024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3027 = data
  i3026.name = i3027[0]
  i3026.bytes64 = i3027[1]
  i3026.data = i3027[2]
  return i3026
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3028 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3029 = data
  i3028.hashCode = i3029[0]
  request.r(i3029[1], i3029[2], 0, i3028, 'material')
  i3028.materialHashCode = i3029[3]
  request.r(i3029[4], i3029[5], 0, i3028, 'atlas')
  i3028.normalStyle = i3029[6]
  i3028.normalSpacingOffset = i3029[7]
  i3028.boldStyle = i3029[8]
  i3028.boldSpacing = i3029[9]
  i3028.italicStyle = i3029[10]
  i3028.tabSize = i3029[11]
  i3028.m_Version = i3029[12]
  i3028.m_SourceFontFileGUID = i3029[13]
  request.r(i3029[14], i3029[15], 0, i3028, 'm_SourceFontFile_EditorRef')
  request.r(i3029[16], i3029[17], 0, i3028, 'm_SourceFontFile')
  i3028.m_AtlasPopulationMode = i3029[18]
  i3028.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3029[19], i3028.m_FaceInfo)
  var i3031 = i3029[20]
  var i3030 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3031.length; i += 1) {
    i3030.add(request.d('UnityEngine.TextCore.Glyph', i3031[i + 0]));
  }
  i3028.m_GlyphTable = i3030
  var i3033 = i3029[21]
  var i3032 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3033.length; i += 1) {
    i3032.add(request.d('TMPro.TMP_Character', i3033[i + 0]));
  }
  i3028.m_CharacterTable = i3032
  var i3035 = i3029[22]
  var i3034 = []
  for(var i = 0; i < i3035.length; i += 2) {
  request.r(i3035[i + 0], i3035[i + 1], 2, i3034, '')
  }
  i3028.m_AtlasTextures = i3034
  i3028.m_AtlasTextureIndex = i3029[23]
  i3028.m_IsMultiAtlasTexturesEnabled = !!i3029[24]
  i3028.m_ClearDynamicDataOnBuild = !!i3029[25]
  var i3037 = i3029[26]
  var i3036 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3037.length; i += 1) {
    i3036.add(request.d('UnityEngine.TextCore.GlyphRect', i3037[i + 0]));
  }
  i3028.m_UsedGlyphRects = i3036
  var i3039 = i3029[27]
  var i3038 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3039.length; i += 1) {
    i3038.add(request.d('UnityEngine.TextCore.GlyphRect', i3039[i + 0]));
  }
  i3028.m_FreeGlyphRects = i3038
  i3028.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3029[28], i3028.m_fontInfo)
  i3028.m_AtlasWidth = i3029[29]
  i3028.m_AtlasHeight = i3029[30]
  i3028.m_AtlasPadding = i3029[31]
  i3028.m_AtlasRenderMode = i3029[32]
  var i3041 = i3029[33]
  var i3040 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3041.length; i += 1) {
    i3040.add(request.d('TMPro.TMP_Glyph', i3041[i + 0]));
  }
  i3028.m_glyphInfoList = i3040
  i3028.m_KerningTable = request.d('TMPro.KerningTable', i3029[34], i3028.m_KerningTable)
  i3028.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3029[35], i3028.m_FontFeatureTable)
  var i3043 = i3029[36]
  var i3042 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3043.length; i += 2) {
  request.r(i3043[i + 0], i3043[i + 1], 1, i3042, '')
  }
  i3028.fallbackFontAssets = i3042
  var i3045 = i3029[37]
  var i3044 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3045.length; i += 2) {
  request.r(i3045[i + 0], i3045[i + 1], 1, i3044, '')
  }
  i3028.m_FallbackFontAssetTable = i3044
  i3028.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3029[38], i3028.m_CreationSettings)
  var i3047 = i3029[39]
  var i3046 = []
  for(var i = 0; i < i3047.length; i += 1) {
    i3046.push( request.d('TMPro.TMP_FontWeightPair', i3047[i + 0]) );
  }
  i3028.m_FontWeightTable = i3046
  var i3049 = i3029[40]
  var i3048 = []
  for(var i = 0; i < i3049.length; i += 1) {
    i3048.push( request.d('TMPro.TMP_FontWeightPair', i3049[i + 0]) );
  }
  i3028.fontWeights = i3048
  return i3028
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3050 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3051 = data
  i3050.m_FaceIndex = i3051[0]
  i3050.m_FamilyName = i3051[1]
  i3050.m_StyleName = i3051[2]
  i3050.m_PointSize = i3051[3]
  i3050.m_Scale = i3051[4]
  i3050.m_UnitsPerEM = i3051[5]
  i3050.m_LineHeight = i3051[6]
  i3050.m_AscentLine = i3051[7]
  i3050.m_CapLine = i3051[8]
  i3050.m_MeanLine = i3051[9]
  i3050.m_Baseline = i3051[10]
  i3050.m_DescentLine = i3051[11]
  i3050.m_SuperscriptOffset = i3051[12]
  i3050.m_SuperscriptSize = i3051[13]
  i3050.m_SubscriptOffset = i3051[14]
  i3050.m_SubscriptSize = i3051[15]
  i3050.m_UnderlineOffset = i3051[16]
  i3050.m_UnderlineThickness = i3051[17]
  i3050.m_StrikethroughOffset = i3051[18]
  i3050.m_StrikethroughThickness = i3051[19]
  i3050.m_TabWidth = i3051[20]
  return i3050
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3054 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3055 = data
  i3054.m_Index = i3055[0]
  i3054.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3055[1], i3054.m_Metrics)
  i3054.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3055[2], i3054.m_GlyphRect)
  i3054.m_Scale = i3055[3]
  i3054.m_AtlasIndex = i3055[4]
  i3054.m_ClassDefinitionType = i3055[5]
  return i3054
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3056 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3057 = data
  i3056.m_Width = i3057[0]
  i3056.m_Height = i3057[1]
  i3056.m_HorizontalBearingX = i3057[2]
  i3056.m_HorizontalBearingY = i3057[3]
  i3056.m_HorizontalAdvance = i3057[4]
  return i3056
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3058 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3059 = data
  i3058.m_X = i3059[0]
  i3058.m_Y = i3059[1]
  i3058.m_Width = i3059[2]
  i3058.m_Height = i3059[3]
  return i3058
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3062 = root || request.c( 'TMPro.TMP_Character' )
  var i3063 = data
  i3062.m_ElementType = i3063[0]
  i3062.m_Unicode = i3063[1]
  i3062.m_GlyphIndex = i3063[2]
  i3062.m_Scale = i3063[3]
  return i3062
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3068 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3069 = data
  i3068.Name = i3069[0]
  i3068.PointSize = i3069[1]
  i3068.Scale = i3069[2]
  i3068.CharacterCount = i3069[3]
  i3068.LineHeight = i3069[4]
  i3068.Baseline = i3069[5]
  i3068.Ascender = i3069[6]
  i3068.CapHeight = i3069[7]
  i3068.Descender = i3069[8]
  i3068.CenterLine = i3069[9]
  i3068.SuperscriptOffset = i3069[10]
  i3068.SubscriptOffset = i3069[11]
  i3068.SubSize = i3069[12]
  i3068.Underline = i3069[13]
  i3068.UnderlineThickness = i3069[14]
  i3068.strikethrough = i3069[15]
  i3068.strikethroughThickness = i3069[16]
  i3068.TabWidth = i3069[17]
  i3068.Padding = i3069[18]
  i3068.AtlasWidth = i3069[19]
  i3068.AtlasHeight = i3069[20]
  return i3068
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3072 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3073 = data
  i3072.id = i3073[0]
  i3072.x = i3073[1]
  i3072.y = i3073[2]
  i3072.width = i3073[3]
  i3072.height = i3073[4]
  i3072.xOffset = i3073[5]
  i3072.yOffset = i3073[6]
  i3072.xAdvance = i3073[7]
  i3072.scale = i3073[8]
  return i3072
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3074 = root || request.c( 'TMPro.KerningTable' )
  var i3075 = data
  var i3077 = i3075[0]
  var i3076 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3077.length; i += 1) {
    i3076.add(request.d('TMPro.KerningPair', i3077[i + 0]));
  }
  i3074.kerningPairs = i3076
  return i3074
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3080 = root || request.c( 'TMPro.KerningPair' )
  var i3081 = data
  i3080.xOffset = i3081[0]
  i3080.m_FirstGlyph = i3081[1]
  i3080.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3081[2], i3080.m_FirstGlyphAdjustments)
  i3080.m_SecondGlyph = i3081[3]
  i3080.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3081[4], i3080.m_SecondGlyphAdjustments)
  i3080.m_IgnoreSpacingAdjustments = !!i3081[5]
  return i3080
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3082 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3083 = data
  var i3085 = i3083[0]
  var i3084 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3085.length; i += 1) {
    i3084.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3085[i + 0]));
  }
  i3082.m_GlyphPairAdjustmentRecords = i3084
  return i3082
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3088 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3089 = data
  i3088.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3089[0], i3088.m_FirstAdjustmentRecord)
  i3088.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3089[1], i3088.m_SecondAdjustmentRecord)
  i3088.m_FeatureLookupFlags = i3089[2]
  return i3088
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3092 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3093 = data
  i3092.sourceFontFileName = i3093[0]
  i3092.sourceFontFileGUID = i3093[1]
  i3092.pointSizeSamplingMode = i3093[2]
  i3092.pointSize = i3093[3]
  i3092.padding = i3093[4]
  i3092.packingMode = i3093[5]
  i3092.atlasWidth = i3093[6]
  i3092.atlasHeight = i3093[7]
  i3092.characterSetSelectionMode = i3093[8]
  i3092.characterSequence = i3093[9]
  i3092.referencedFontAssetGUID = i3093[10]
  i3092.referencedTextAssetGUID = i3093[11]
  i3092.fontStyle = i3093[12]
  i3092.fontStyleModifier = i3093[13]
  i3092.renderMode = i3093[14]
  i3092.includeFontFeatures = !!i3093[15]
  return i3092
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3096 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3097 = data
  request.r(i3097[0], i3097[1], 0, i3096, 'regularTypeface')
  request.r(i3097[2], i3097[3], 0, i3096, 'italicTypeface')
  return i3096
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i3098 = root || request.c( 'AudioLibrary' )
  var i3099 = data
  var i3101 = i3099[0]
  var i3100 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i3101.length; i += 1) {
    i3100.add(request.d('AudioLibrary+ClipEntry', i3101[i + 0]));
  }
  i3098.clips = i3100
  return i3098
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i3104 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i3105 = data
  i3104.key = i3105[0]
  i3104.channel = i3105[1]
  request.r(i3105[2], i3105[3], 0, i3104, 'clip')
  i3104.volume = i3105[4]
  i3104.loop = !!i3105[5]
  return i3104
}

Deserializers["DataObject"] = function (request, data, root) {
  var i3106 = root || request.c( 'DataObject' )
  var i3107 = data
  i3106.level = i3107[0]
  i3106.name = i3107[1]
  i3106.assetValue = i3107[2]
  i3106.isLegit = !!i3107[3]
  request.r(i3107[4], i3107[5], 0, i3106, 'icon')
  i3106.bidder1Bid = i3107[6]
  i3106.bidder2Bid = i3107[7]
  i3106.bidder3Bid = i3107[8]
  i3106.playerBid = i3107[9]
  return i3106
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3108 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3109 = data
  i3108.useSafeMode = !!i3109[0]
  i3108.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3109[1], i3108.safeModeOptions)
  i3108.timeScale = i3109[2]
  i3108.unscaledTimeScale = i3109[3]
  i3108.useSmoothDeltaTime = !!i3109[4]
  i3108.maxSmoothUnscaledTime = i3109[5]
  i3108.rewindCallbackMode = i3109[6]
  i3108.showUnityEditorReport = !!i3109[7]
  i3108.logBehaviour = i3109[8]
  i3108.drawGizmos = !!i3109[9]
  i3108.defaultRecyclable = !!i3109[10]
  i3108.defaultAutoPlay = i3109[11]
  i3108.defaultUpdateType = i3109[12]
  i3108.defaultTimeScaleIndependent = !!i3109[13]
  i3108.defaultEaseType = i3109[14]
  i3108.defaultEaseOvershootOrAmplitude = i3109[15]
  i3108.defaultEasePeriod = i3109[16]
  i3108.defaultAutoKill = !!i3109[17]
  i3108.defaultLoopType = i3109[18]
  i3108.debugMode = !!i3109[19]
  i3108.debugStoreTargetId = !!i3109[20]
  i3108.showPreviewPanel = !!i3109[21]
  i3108.storeSettingsLocation = i3109[22]
  i3108.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3109[23], i3108.modules)
  i3108.createASMDEF = !!i3109[24]
  i3108.showPlayingTweens = !!i3109[25]
  i3108.showPausedTweens = !!i3109[26]
  return i3108
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3110 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3111 = data
  i3110.logBehaviour = i3111[0]
  i3110.nestedTweenFailureBehaviour = i3111[1]
  return i3110
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3112 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3113 = data
  i3112.showPanel = !!i3113[0]
  i3112.audioEnabled = !!i3113[1]
  i3112.physicsEnabled = !!i3113[2]
  i3112.physics2DEnabled = !!i3113[3]
  i3112.spriteEnabled = !!i3113[4]
  i3112.uiEnabled = !!i3113[5]
  i3112.textMeshProEnabled = !!i3113[6]
  i3112.tk2DEnabled = !!i3113[7]
  i3112.deAudioEnabled = !!i3113[8]
  i3112.deUnityExtendedEnabled = !!i3113[9]
  i3112.epoOutlineEnabled = !!i3113[10]
  return i3112
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3114 = root || request.c( 'TMPro.TMP_Settings' )
  var i3115 = data
  i3114.m_enableWordWrapping = !!i3115[0]
  i3114.m_enableKerning = !!i3115[1]
  i3114.m_enableExtraPadding = !!i3115[2]
  i3114.m_enableTintAllSprites = !!i3115[3]
  i3114.m_enableParseEscapeCharacters = !!i3115[4]
  i3114.m_EnableRaycastTarget = !!i3115[5]
  i3114.m_GetFontFeaturesAtRuntime = !!i3115[6]
  i3114.m_missingGlyphCharacter = i3115[7]
  i3114.m_warningsDisabled = !!i3115[8]
  request.r(i3115[9], i3115[10], 0, i3114, 'm_defaultFontAsset')
  i3114.m_defaultFontAssetPath = i3115[11]
  i3114.m_defaultFontSize = i3115[12]
  i3114.m_defaultAutoSizeMinRatio = i3115[13]
  i3114.m_defaultAutoSizeMaxRatio = i3115[14]
  i3114.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3115[15], i3115[16] )
  i3114.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3115[17], i3115[18] )
  i3114.m_autoSizeTextContainer = !!i3115[19]
  i3114.m_IsTextObjectScaleStatic = !!i3115[20]
  var i3117 = i3115[21]
  var i3116 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3117.length; i += 2) {
  request.r(i3117[i + 0], i3117[i + 1], 1, i3116, '')
  }
  i3114.m_fallbackFontAssets = i3116
  i3114.m_matchMaterialPreset = !!i3115[22]
  request.r(i3115[23], i3115[24], 0, i3114, 'm_defaultSpriteAsset')
  i3114.m_defaultSpriteAssetPath = i3115[25]
  i3114.m_enableEmojiSupport = !!i3115[26]
  i3114.m_MissingCharacterSpriteUnicode = i3115[27]
  i3114.m_defaultColorGradientPresetsPath = i3115[28]
  request.r(i3115[29], i3115[30], 0, i3114, 'm_defaultStyleSheet')
  i3114.m_StyleSheetsResourcePath = i3115[31]
  request.r(i3115[32], i3115[33], 0, i3114, 'm_leadingCharacters')
  request.r(i3115[34], i3115[35], 0, i3114, 'm_followingCharacters')
  i3114.m_UseModernHangulLineBreakingRules = !!i3115[36]
  return i3114
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3118 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3119 = data
  i3118.hashCode = i3119[0]
  request.r(i3119[1], i3119[2], 0, i3118, 'material')
  i3118.materialHashCode = i3119[3]
  request.r(i3119[4], i3119[5], 0, i3118, 'spriteSheet')
  var i3121 = i3119[6]
  var i3120 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3121.length; i += 1) {
    i3120.add(request.d('TMPro.TMP_Sprite', i3121[i + 0]));
  }
  i3118.spriteInfoList = i3120
  var i3123 = i3119[7]
  var i3122 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3123.length; i += 2) {
  request.r(i3123[i + 0], i3123[i + 1], 1, i3122, '')
  }
  i3118.fallbackSpriteAssets = i3122
  i3118.m_Version = i3119[8]
  i3118.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3119[9], i3118.m_FaceInfo)
  var i3125 = i3119[10]
  var i3124 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3125.length; i += 1) {
    i3124.add(request.d('TMPro.TMP_SpriteCharacter', i3125[i + 0]));
  }
  i3118.m_SpriteCharacterTable = i3124
  var i3127 = i3119[11]
  var i3126 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3127.length; i += 1) {
    i3126.add(request.d('TMPro.TMP_SpriteGlyph', i3127[i + 0]));
  }
  i3118.m_SpriteGlyphTable = i3126
  return i3118
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3130 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3131 = data
  i3130.name = i3131[0]
  i3130.hashCode = i3131[1]
  i3130.unicode = i3131[2]
  i3130.pivot = new pc.Vec2( i3131[3], i3131[4] )
  request.r(i3131[5], i3131[6], 0, i3130, 'sprite')
  i3130.id = i3131[7]
  i3130.x = i3131[8]
  i3130.y = i3131[9]
  i3130.width = i3131[10]
  i3130.height = i3131[11]
  i3130.xOffset = i3131[12]
  i3130.yOffset = i3131[13]
  i3130.xAdvance = i3131[14]
  i3130.scale = i3131[15]
  return i3130
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3136 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3137 = data
  i3136.m_Name = i3137[0]
  i3136.m_HashCode = i3137[1]
  i3136.m_ElementType = i3137[2]
  i3136.m_Unicode = i3137[3]
  i3136.m_GlyphIndex = i3137[4]
  i3136.m_Scale = i3137[5]
  return i3136
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3140 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3141 = data
  request.r(i3141[0], i3141[1], 0, i3140, 'sprite')
  i3140.m_Index = i3141[2]
  i3140.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3141[3], i3140.m_Metrics)
  i3140.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3141[4], i3140.m_GlyphRect)
  i3140.m_Scale = i3141[5]
  i3140.m_AtlasIndex = i3141[6]
  i3140.m_ClassDefinitionType = i3141[7]
  return i3140
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3142 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3143 = data
  var i3145 = i3143[0]
  var i3144 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3145.length; i += 1) {
    i3144.add(request.d('TMPro.TMP_Style', i3145[i + 0]));
  }
  i3142.m_StyleList = i3144
  return i3142
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3148 = root || request.c( 'TMPro.TMP_Style' )
  var i3149 = data
  i3148.m_Name = i3149[0]
  i3148.m_HashCode = i3149[1]
  i3148.m_OpeningDefinition = i3149[2]
  i3148.m_ClosingDefinition = i3149[3]
  i3148.m_OpeningTagArray = i3149[4]
  i3148.m_ClosingTagArray = i3149[5]
  i3148.m_OpeningTagUnicodeArray = i3149[6]
  i3148.m_ClosingTagUnicodeArray = i3149[7]
  return i3148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3151 = data
  var i3153 = i3151[0]
  var i3152 = []
  for(var i = 0; i < i3153.length; i += 1) {
    i3152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3153[i + 0]) );
  }
  i3150.files = i3152
  i3150.componentToPrefabIds = i3151[1]
  return i3150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3157 = data
  i3156.path = i3157[0]
  request.r(i3157[1], i3157[2], 0, i3156, 'unityObject')
  return i3156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3159 = data
  var i3161 = i3159[0]
  var i3160 = []
  for(var i = 0; i < i3161.length; i += 1) {
    i3160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3161[i + 0]) );
  }
  i3158.scriptsExecutionOrder = i3160
  var i3163 = i3159[1]
  var i3162 = []
  for(var i = 0; i < i3163.length; i += 1) {
    i3162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3163[i + 0]) );
  }
  i3158.sortingLayers = i3162
  var i3165 = i3159[2]
  var i3164 = []
  for(var i = 0; i < i3165.length; i += 1) {
    i3164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3165[i + 0]) );
  }
  i3158.cullingLayers = i3164
  i3158.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3159[3], i3158.timeSettings)
  i3158.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3159[4], i3158.physicsSettings)
  i3158.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3159[5], i3158.physics2DSettings)
  i3158.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3159[6], i3158.qualitySettings)
  i3158.enableRealtimeShadows = !!i3159[7]
  i3158.enableAutoInstancing = !!i3159[8]
  i3158.enableDynamicBatching = !!i3159[9]
  i3158.lightmapEncodingQuality = i3159[10]
  i3158.desiredColorSpace = i3159[11]
  var i3167 = i3159[12]
  var i3166 = []
  for(var i = 0; i < i3167.length; i += 1) {
    i3166.push( i3167[i + 0] );
  }
  i3158.allTags = i3166
  return i3158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3171 = data
  i3170.name = i3171[0]
  i3170.value = i3171[1]
  return i3170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3175 = data
  i3174.id = i3175[0]
  i3174.name = i3175[1]
  i3174.value = i3175[2]
  return i3174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3179 = data
  i3178.id = i3179[0]
  i3178.name = i3179[1]
  return i3178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3181 = data
  i3180.fixedDeltaTime = i3181[0]
  i3180.maximumDeltaTime = i3181[1]
  i3180.timeScale = i3181[2]
  i3180.maximumParticleTimestep = i3181[3]
  return i3180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3183 = data
  i3182.gravity = new pc.Vec3( i3183[0], i3183[1], i3183[2] )
  i3182.defaultSolverIterations = i3183[3]
  i3182.bounceThreshold = i3183[4]
  i3182.autoSyncTransforms = !!i3183[5]
  i3182.autoSimulation = !!i3183[6]
  var i3185 = i3183[7]
  var i3184 = []
  for(var i = 0; i < i3185.length; i += 1) {
    i3184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3185[i + 0]) );
  }
  i3182.collisionMatrix = i3184
  return i3182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3189 = data
  i3188.enabled = !!i3189[0]
  i3188.layerId = i3189[1]
  i3188.otherLayerId = i3189[2]
  return i3188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3191 = data
  request.r(i3191[0], i3191[1], 0, i3190, 'material')
  i3190.gravity = new pc.Vec2( i3191[2], i3191[3] )
  i3190.positionIterations = i3191[4]
  i3190.velocityIterations = i3191[5]
  i3190.velocityThreshold = i3191[6]
  i3190.maxLinearCorrection = i3191[7]
  i3190.maxAngularCorrection = i3191[8]
  i3190.maxTranslationSpeed = i3191[9]
  i3190.maxRotationSpeed = i3191[10]
  i3190.baumgarteScale = i3191[11]
  i3190.baumgarteTOIScale = i3191[12]
  i3190.timeToSleep = i3191[13]
  i3190.linearSleepTolerance = i3191[14]
  i3190.angularSleepTolerance = i3191[15]
  i3190.defaultContactOffset = i3191[16]
  i3190.autoSimulation = !!i3191[17]
  i3190.queriesHitTriggers = !!i3191[18]
  i3190.queriesStartInColliders = !!i3191[19]
  i3190.callbacksOnDisable = !!i3191[20]
  i3190.reuseCollisionCallbacks = !!i3191[21]
  i3190.autoSyncTransforms = !!i3191[22]
  var i3193 = i3191[23]
  var i3192 = []
  for(var i = 0; i < i3193.length; i += 1) {
    i3192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3193[i + 0]) );
  }
  i3190.collisionMatrix = i3192
  return i3190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3197 = data
  i3196.enabled = !!i3197[0]
  i3196.layerId = i3197[1]
  i3196.otherLayerId = i3197[2]
  return i3196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3199 = data
  var i3201 = i3199[0]
  var i3200 = []
  for(var i = 0; i < i3201.length; i += 1) {
    i3200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3201[i + 0]) );
  }
  i3198.qualityLevels = i3200
  var i3203 = i3199[1]
  var i3202 = []
  for(var i = 0; i < i3203.length; i += 1) {
    i3202.push( i3203[i + 0] );
  }
  i3198.names = i3202
  i3198.shadows = i3199[2]
  i3198.anisotropicFiltering = i3199[3]
  i3198.antiAliasing = i3199[4]
  i3198.lodBias = i3199[5]
  i3198.shadowCascades = i3199[6]
  i3198.shadowDistance = i3199[7]
  i3198.shadowmaskMode = i3199[8]
  i3198.shadowProjection = i3199[9]
  i3198.shadowResolution = i3199[10]
  i3198.softParticles = !!i3199[11]
  i3198.softVegetation = !!i3199[12]
  i3198.activeColorSpace = i3199[13]
  i3198.desiredColorSpace = i3199[14]
  i3198.masterTextureLimit = i3199[15]
  i3198.maxQueuedFrames = i3199[16]
  i3198.particleRaycastBudget = i3199[17]
  i3198.pixelLightCount = i3199[18]
  i3198.realtimeReflectionProbes = !!i3199[19]
  i3198.shadowCascade2Split = i3199[20]
  i3198.shadowCascade4Split = new pc.Vec3( i3199[21], i3199[22], i3199[23] )
  i3198.streamingMipmapsActive = !!i3199[24]
  i3198.vSyncCount = i3199[25]
  i3198.asyncUploadBufferSize = i3199[26]
  i3198.asyncUploadTimeSlice = i3199[27]
  i3198.billboardsFaceCameraPosition = !!i3199[28]
  i3198.shadowNearPlaneOffset = i3199[29]
  i3198.streamingMipmapsMemoryBudget = i3199[30]
  i3198.maximumLODLevel = i3199[31]
  i3198.streamingMipmapsAddAllCameras = !!i3199[32]
  i3198.streamingMipmapsMaxLevelReduction = i3199[33]
  i3198.streamingMipmapsRenderersPerFrame = i3199[34]
  i3198.resolutionScalingFixedDPIFactor = i3199[35]
  i3198.streamingMipmapsMaxFileIORequests = i3199[36]
  i3198.currentQualityLevel = i3199[37]
  return i3198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3209 = data
  i3208.mode = i3209[0]
  i3208.parameter = i3209[1]
  i3208.threshold = i3209[2]
  return i3208
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3210 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3211 = data
  i3210.xPlacement = i3211[0]
  i3210.yPlacement = i3211[1]
  i3210.xAdvance = i3211[2]
  i3210.yAdvance = i3211[3]
  return i3210
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3212 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3213 = data
  i3212.m_GlyphIndex = i3213[0]
  i3212.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3213[1], i3212.m_GlyphValueRecord)
  return i3212
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3214 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3215 = data
  i3214.m_XPlacement = i3215[0]
  i3214.m_YPlacement = i3215[1]
  i3214.m_XAdvance = i3215[2]
  i3214.m_YAdvance = i3215[3]
  return i3214
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[54],"55":[3],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[3],"79":[80],"81":[82],"83":[82],"21":[12],"6":[3],"84":[57],"85":[12],"86":[80,12],"13":[12,25],"87":[12],"88":[25,12],"89":[80],"90":[25,12],"91":[12],"92":[12],"93":[12],"24":[21],"26":[25,12],"94":[12],"23":[21],"95":[12],"96":[12],"97":[12],"98":[12],"99":[12],"100":[12],"101":[12],"102":[12],"103":[12],"104":[25,12],"105":[12],"106":[12],"107":[12],"108":[12],"109":[25,12],"110":[12],"111":[34],"112":[34],"35":[34],"113":[34],"114":[3],"115":[3]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAspectFitter","UnityEngine.SpriteRenderer","UnityEngine.Light","GameManager","UnityEngine.GameObject","CanvasGroupAnimator","UnityEngine.RectTransform","TMPro.TextMeshProUGUI","TaskManager","AudioManager","AudioLibrary","DataManager","DataObject","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.CanvasGroup","UnityEngine.UI.Button","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","PromtPopUp","TMPro.TMP_FontAsset","FloatingTextEffect","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ButtonPulse","StartClickHandler","UnityEngine.Cubemap","UnityEngine.Font","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bullet","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "BidWars2-CosplayRequest";

Deserializers.lunaInitializationTime = "07/07/2025 06:34:45";

Deserializers.lunaDaysRunning = "1.0";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4374";

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

Deserializers.buildID = "d8f0f28c-2f87-4fd5-8b93-dd2b8064b75c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

