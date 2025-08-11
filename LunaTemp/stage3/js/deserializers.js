var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3850 = root || request.c( 'UnityEngine.JointSpring' )
  var i3851 = data
  i3850.spring = i3851[0]
  i3850.damper = i3851[1]
  i3850.targetPosition = i3851[2]
  return i3850
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3852 = root || request.c( 'UnityEngine.JointMotor' )
  var i3853 = data
  i3852.m_TargetVelocity = i3853[0]
  i3852.m_Force = i3853[1]
  i3852.m_FreeSpin = i3853[2]
  return i3852
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3854 = root || request.c( 'UnityEngine.JointLimits' )
  var i3855 = data
  i3854.m_Min = i3855[0]
  i3854.m_Max = i3855[1]
  i3854.m_Bounciness = i3855[2]
  i3854.m_BounceMinVelocity = i3855[3]
  i3854.m_ContactDistance = i3855[4]
  i3854.minBounce = i3855[5]
  i3854.maxBounce = i3855[6]
  return i3854
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3856 = root || request.c( 'UnityEngine.JointDrive' )
  var i3857 = data
  i3856.m_PositionSpring = i3857[0]
  i3856.m_PositionDamper = i3857[1]
  i3856.m_MaximumForce = i3857[2]
  i3856.m_UseAcceleration = i3857[3]
  return i3856
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3858 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3859 = data
  i3858.m_Spring = i3859[0]
  i3858.m_Damper = i3859[1]
  return i3858
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3860 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3861 = data
  i3860.m_Limit = i3861[0]
  i3860.m_Bounciness = i3861[1]
  i3860.m_ContactDistance = i3861[2]
  return i3860
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3862 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3863 = data
  i3862.m_ExtremumSlip = i3863[0]
  i3862.m_ExtremumValue = i3863[1]
  i3862.m_AsymptoteSlip = i3863[2]
  i3862.m_AsymptoteValue = i3863[3]
  i3862.m_Stiffness = i3863[4]
  return i3862
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3864 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3865 = data
  i3864.m_LowerAngle = i3865[0]
  i3864.m_UpperAngle = i3865[1]
  return i3864
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3866 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3867 = data
  i3866.m_MotorSpeed = i3867[0]
  i3866.m_MaximumMotorTorque = i3867[1]
  return i3866
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3868 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3869 = data
  i3868.m_DampingRatio = i3869[0]
  i3868.m_Frequency = i3869[1]
  i3868.m_Angle = i3869[2]
  return i3868
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3870 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3871 = data
  i3870.m_LowerTranslation = i3871[0]
  i3870.m_UpperTranslation = i3871[1]
  return i3870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3872 = root || new pc.UnityMaterial()
  var i3873 = data
  i3872.name = i3873[0]
  request.r(i3873[1], i3873[2], 0, i3872, 'shader')
  i3872.renderQueue = i3873[3]
  i3872.enableInstancing = !!i3873[4]
  var i3875 = i3873[5]
  var i3874 = []
  for(var i = 0; i < i3875.length; i += 1) {
    i3874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3875[i + 0]) );
  }
  i3872.floatParameters = i3874
  var i3877 = i3873[6]
  var i3876 = []
  for(var i = 0; i < i3877.length; i += 1) {
    i3876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3877[i + 0]) );
  }
  i3872.colorParameters = i3876
  var i3879 = i3873[7]
  var i3878 = []
  for(var i = 0; i < i3879.length; i += 1) {
    i3878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3879[i + 0]) );
  }
  i3872.vectorParameters = i3878
  var i3881 = i3873[8]
  var i3880 = []
  for(var i = 0; i < i3881.length; i += 1) {
    i3880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3881[i + 0]) );
  }
  i3872.textureParameters = i3880
  var i3883 = i3873[9]
  var i3882 = []
  for(var i = 0; i < i3883.length; i += 1) {
    i3882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3883[i + 0]) );
  }
  i3872.materialFlags = i3882
  return i3872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3887 = data
  i3886.name = i3887[0]
  i3886.value = i3887[1]
  return i3886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3891 = data
  i3890.name = i3891[0]
  i3890.value = new pc.Color(i3891[1], i3891[2], i3891[3], i3891[4])
  return i3890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3895 = data
  i3894.name = i3895[0]
  i3894.value = new pc.Vec4( i3895[1], i3895[2], i3895[3], i3895[4] )
  return i3894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3899 = data
  i3898.name = i3899[0]
  request.r(i3899[1], i3899[2], 0, i3898, 'value')
  return i3898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3903 = data
  i3902.name = i3903[0]
  i3902.enabled = !!i3903[1]
  return i3902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3905 = data
  i3904.name = i3905[0]
  i3904.width = i3905[1]
  i3904.height = i3905[2]
  i3904.mipmapCount = i3905[3]
  i3904.anisoLevel = i3905[4]
  i3904.filterMode = i3905[5]
  i3904.hdr = !!i3905[6]
  i3904.format = i3905[7]
  i3904.wrapMode = i3905[8]
  i3904.alphaIsTransparency = !!i3905[9]
  i3904.alphaSource = i3905[10]
  i3904.graphicsFormat = i3905[11]
  i3904.sRGBTexture = !!i3905[12]
  i3904.desiredColorSpace = i3905[13]
  i3904.wrapU = i3905[14]
  i3904.wrapV = i3905[15]
  return i3904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3907 = data
  i3906.name = i3907[0]
  i3906.atlasId = i3907[1]
  i3906.mipmapCount = i3907[2]
  i3906.hdr = !!i3907[3]
  i3906.size = i3907[4]
  i3906.anisoLevel = i3907[5]
  i3906.filterMode = i3907[6]
  var i3909 = i3907[7]
  var i3908 = []
  for(var i = 0; i < i3909.length; i += 4) {
    i3908.push( UnityEngine.Rect.MinMaxRect(i3909[i + 0], i3909[i + 1], i3909[i + 2], i3909[i + 3]) );
  }
  i3906.rects = i3908
  i3906.wrapU = i3907[8]
  i3906.wrapV = i3907[9]
  return i3906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3913 = data
  i3912.name = i3913[0]
  i3912.index = i3913[1]
  i3912.startup = !!i3913[2]
  return i3912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3915 = data
  i3914.position = new pc.Vec3( i3915[0], i3915[1], i3915[2] )
  i3914.scale = new pc.Vec3( i3915[3], i3915[4], i3915[5] )
  i3914.rotation = new pc.Quat(i3915[6], i3915[7], i3915[8], i3915[9])
  return i3914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3917 = data
  i3916.enabled = !!i3917[0]
  i3916.aspect = i3917[1]
  i3916.orthographic = !!i3917[2]
  i3916.orthographicSize = i3917[3]
  i3916.backgroundColor = new pc.Color(i3917[4], i3917[5], i3917[6], i3917[7])
  i3916.nearClipPlane = i3917[8]
  i3916.farClipPlane = i3917[9]
  i3916.fieldOfView = i3917[10]
  i3916.depth = i3917[11]
  i3916.clearFlags = i3917[12]
  i3916.cullingMask = i3917[13]
  i3916.rect = i3917[14]
  request.r(i3917[15], i3917[16], 0, i3916, 'targetTexture')
  i3916.usePhysicalProperties = !!i3917[17]
  i3916.focalLength = i3917[18]
  i3916.sensorSize = new pc.Vec2( i3917[19], i3917[20] )
  i3916.lensShift = new pc.Vec2( i3917[21], i3917[22] )
  i3916.gateFit = i3917[23]
  i3916.commandBufferCount = i3917[24]
  i3916.cameraType = i3917[25]
  return i3916
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i3918 = root || request.c( 'CameraAspectFitter' )
  var i3919 = data
  request.r(i3919[0], i3919[1], 0, i3918, 'targetSprite')
  return i3918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3921 = data
  i3920.name = i3921[0]
  i3920.tagId = i3921[1]
  i3920.enabled = !!i3921[2]
  i3920.isStatic = !!i3921[3]
  i3920.layer = i3921[4]
  return i3920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3923 = data
  i3922.enabled = !!i3923[0]
  i3922.type = i3923[1]
  i3922.color = new pc.Color(i3923[2], i3923[3], i3923[4], i3923[5])
  i3922.cullingMask = i3923[6]
  i3922.intensity = i3923[7]
  i3922.range = i3923[8]
  i3922.spotAngle = i3923[9]
  i3922.shadows = i3923[10]
  i3922.shadowNormalBias = i3923[11]
  i3922.shadowBias = i3923[12]
  i3922.shadowStrength = i3923[13]
  i3922.shadowResolution = i3923[14]
  i3922.lightmapBakeType = i3923[15]
  i3922.renderMode = i3923[16]
  request.r(i3923[17], i3923[18], 0, i3922, 'cookie')
  i3922.cookieSize = i3923[19]
  return i3922
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3924 = root || request.c( 'GameManager' )
  var i3925 = data
  request.r(i3925[0], i3925[1], 0, i3924, 'endPanel')
  request.r(i3925[2], i3925[3], 0, i3924, 'endPanelAnimator')
  request.r(i3925[4], i3925[5], 0, i3924, 'levelImageSwitcher')
  request.r(i3925[6], i3925[7], 0, i3924, 'scoreTxt')
  i3924.end = !!i3925[8]
  i3924.endPlay = !!i3925[9]
  request.r(i3925[10], i3925[11], 0, i3924, 'hand')
  request.r(i3925[12], i3925[13], 0, i3924, 'message2')
  request.r(i3925[14], i3925[15], 0, i3924, 'animator')
  i3924.enableSound = !!i3925[16]
  var i3927 = i3925[17]
  var i3926 = new (System.Collections.Generic.List$1(Bridge.ns('DataObject')))
  for(var i = 0; i < i3927.length; i += 2) {
  request.r(i3927[i + 0], i3927[i + 1], 1, i3926, '')
  }
  i3924.items = i3926
  i3924.level = i3925[18]
  i3924.animPos = i3925[19]
  request.r(i3925[20], i3925[21], 0, i3924, 'itemsParent')
  request.r(i3925[22], i3925[23], 0, i3924, 'startClickHandler')
  i3924.itemValue = i3925[24]
  var i3929 = i3925[25]
  var i3928 = []
  for(var i = 0; i < i3929.length; i += 2) {
  request.r(i3929[i + 0], i3929[i + 1], 2, i3928, '')
  }
  i3924.biddersBubble = i3928
  request.r(i3925[26], i3925[27], 0, i3924, 'promptBubble')
  request.r(i3925[28], i3925[29], 0, i3924, 'btnGroup')
  request.r(i3925[30], i3925[31], 0, i3924, 'biddersLossTxt')
  request.r(i3925[32], i3925[33], 0, i3924, 'biddersLossPlus')
  request.r(i3925[34], i3925[35], 0, i3924, 'playersLoss')
  request.r(i3925[36], i3925[37], 0, i3924, 'playersPlus')
  request.r(i3925[38], i3925[39], 0, i3924, 'AuthenticImg')
  request.r(i3925[40], i3925[41], 0, i3924, 'profitImg')
  request.r(i3925[42], i3925[43], 0, i3924, 'fakeImg')
  request.r(i3925[44], i3925[45], 0, i3924, 'cashTxt')
  request.r(i3925[46], i3925[47], 0, i3924, 'failBidCanvas')
  request.r(i3925[48], i3925[49], 0, i3924, 'failPassCanvas')
  i3924.win = !!i3925[50]
  i3924.fail = !!i3925[51]
  i3924.bidFail = !!i3925[52]
  i3924.passFail = !!i3925[53]
  i3924.conditionMet = !!i3925[54]
  i3924.currentScore = i3925[55]
  i3924.SIP = !!i3925[56]
  var i3931 = i3925[57]
  var i3930 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3931.length; i += 2) {
  request.r(i3931[i + 0], i3931[i + 1], 1, i3930, '')
  }
  i3924.auctionItems = i3930
  return i3924
}

Deserializers["LevelImageSwitcher"] = function (request, data, root) {
  var i3938 = root || request.c( 'LevelImageSwitcher' )
  var i3939 = data
  var i3941 = i3939[0]
  var i3940 = []
  for(var i = 0; i < i3941.length; i += 2) {
  request.r(i3941[i + 0], i3941[i + 1], 2, i3940, '')
  }
  i3938.levelImages = i3940
  var i3943 = i3939[1]
  var i3942 = []
  for(var i = 0; i < i3943.length; i += 2) {
  request.r(i3943[i + 0], i3943[i + 1], 2, i3942, '')
  }
  i3938.itemImages = i3942
  return i3938
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i3946 = root || request.c( 'TaskManager' )
  var i3947 = data
  return i3946
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i3948 = root || request.c( 'AudioManager' )
  var i3949 = data
  request.r(i3949[0], i3949[1], 0, i3948, 'library')
  i3948.sfxPoolSize = i3949[2]
  i3948.enableSound = !!i3949[3]
  return i3948
}

Deserializers["DataManager"] = function (request, data, root) {
  var i3950 = root || request.c( 'DataManager' )
  var i3951 = data
  var i3953 = i3951[0]
  var i3952 = new (System.Collections.Generic.List$1(Bridge.ns('SingleDataEntry')))
  for(var i = 0; i < i3953.length; i += 1) {
    i3952.add(request.d('SingleDataEntry', i3953[i + 0]));
  }
  i3950.singleEntries = i3952
  var i3955 = i3951[1]
  var i3954 = new (System.Collections.Generic.List$1(Bridge.ns('ListDataEntry')))
  for(var i = 0; i < i3955.length; i += 1) {
    i3954.add(request.d('ListDataEntry', i3955[i + 0]));
  }
  i3950.listEntries = i3954
  return i3950
}

Deserializers["SingleDataEntry"] = function (request, data, root) {
  var i3958 = root || request.c( 'SingleDataEntry' )
  var i3959 = data
  i3958.key = i3959[0]
  request.r(i3959[1], i3959[2], 0, i3958, 'value')
  return i3958
}

Deserializers["ListDataEntry"] = function (request, data, root) {
  var i3962 = root || request.c( 'ListDataEntry' )
  var i3963 = data
  i3962.key = i3963[0]
  var i3965 = i3963[1]
  var i3964 = new (System.Collections.Generic.List$1(Bridge.ns('DataObject')))
  for(var i = 0; i < i3965.length; i += 2) {
  request.r(i3965[i + 0], i3965[i + 1], 1, i3964, '')
  }
  i3962.values = i3964
  return i3962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3967 = data
  i3966.enabled = !!i3967[0]
  request.r(i3967[1], i3967[2], 0, i3966, 'sharedMaterial')
  var i3969 = i3967[3]
  var i3968 = []
  for(var i = 0; i < i3969.length; i += 2) {
  request.r(i3969[i + 0], i3969[i + 1], 2, i3968, '')
  }
  i3966.sharedMaterials = i3968
  i3966.receiveShadows = !!i3967[4]
  i3966.shadowCastingMode = i3967[5]
  i3966.sortingLayerID = i3967[6]
  i3966.sortingOrder = i3967[7]
  i3966.lightmapIndex = i3967[8]
  i3966.lightmapSceneIndex = i3967[9]
  i3966.lightmapScaleOffset = new pc.Vec4( i3967[10], i3967[11], i3967[12], i3967[13] )
  i3966.lightProbeUsage = i3967[14]
  i3966.reflectionProbeUsage = i3967[15]
  i3966.color = new pc.Color(i3967[16], i3967[17], i3967[18], i3967[19])
  request.r(i3967[20], i3967[21], 0, i3966, 'sprite')
  i3966.flipX = !!i3967[22]
  i3966.flipY = !!i3967[23]
  i3966.drawMode = i3967[24]
  i3966.size = new pc.Vec2( i3967[25], i3967[26] )
  i3966.tileMode = i3967[27]
  i3966.adaptiveModeThreshold = i3967[28]
  i3966.maskInteraction = i3967[29]
  i3966.spriteSortPoint = i3967[30]
  return i3966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3973 = data
  i3972.pivot = new pc.Vec2( i3973[0], i3973[1] )
  i3972.anchorMin = new pc.Vec2( i3973[2], i3973[3] )
  i3972.anchorMax = new pc.Vec2( i3973[4], i3973[5] )
  i3972.sizeDelta = new pc.Vec2( i3973[6], i3973[7] )
  i3972.anchoredPosition3D = new pc.Vec3( i3973[8], i3973[9], i3973[10] )
  i3972.rotation = new pc.Quat(i3973[11], i3973[12], i3973[13], i3973[14])
  i3972.scale = new pc.Vec3( i3973[15], i3973[16], i3973[17] )
  return i3972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3975 = data
  i3974.enabled = !!i3975[0]
  i3974.planeDistance = i3975[1]
  i3974.referencePixelsPerUnit = i3975[2]
  i3974.isFallbackOverlay = !!i3975[3]
  i3974.renderMode = i3975[4]
  i3974.renderOrder = i3975[5]
  i3974.sortingLayerName = i3975[6]
  i3974.sortingOrder = i3975[7]
  i3974.scaleFactor = i3975[8]
  request.r(i3975[9], i3975[10], 0, i3974, 'worldCamera')
  i3974.overrideSorting = !!i3975[11]
  i3974.pixelPerfect = !!i3975[12]
  i3974.targetDisplay = i3975[13]
  i3974.overridePixelPerfect = !!i3975[14]
  return i3974
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3976 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3977 = data
  i3976.m_UiScaleMode = i3977[0]
  i3976.m_ReferencePixelsPerUnit = i3977[1]
  i3976.m_ScaleFactor = i3977[2]
  i3976.m_ReferenceResolution = new pc.Vec2( i3977[3], i3977[4] )
  i3976.m_ScreenMatchMode = i3977[5]
  i3976.m_MatchWidthOrHeight = i3977[6]
  i3976.m_PhysicalUnit = i3977[7]
  i3976.m_FallbackScreenDPI = i3977[8]
  i3976.m_DefaultSpriteDPI = i3977[9]
  i3976.m_DynamicPixelsPerUnit = i3977[10]
  i3976.m_PresetInfoIsWorld = !!i3977[11]
  return i3976
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3978 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3979 = data
  i3978.m_IgnoreReversedGraphics = !!i3979[0]
  i3978.m_BlockingObjects = i3979[1]
  i3978.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3979[2] )
  return i3978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3981 = data
  i3980.cullTransparentMesh = !!i3981[0]
  return i3980
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3982 = root || request.c( 'UnityEngine.UI.Image' )
  var i3983 = data
  request.r(i3983[0], i3983[1], 0, i3982, 'm_Sprite')
  i3982.m_Type = i3983[2]
  i3982.m_PreserveAspect = !!i3983[3]
  i3982.m_FillCenter = !!i3983[4]
  i3982.m_FillMethod = i3983[5]
  i3982.m_FillAmount = i3983[6]
  i3982.m_FillClockwise = !!i3983[7]
  i3982.m_FillOrigin = i3983[8]
  i3982.m_UseSpriteMesh = !!i3983[9]
  i3982.m_PixelsPerUnitMultiplier = i3983[10]
  request.r(i3983[11], i3983[12], 0, i3982, 'm_Material')
  i3982.m_Maskable = !!i3983[13]
  i3982.m_Color = new pc.Color(i3983[14], i3983[15], i3983[16], i3983[17])
  i3982.m_RaycastTarget = !!i3983[18]
  i3982.m_RaycastPadding = new pc.Vec4( i3983[19], i3983[20], i3983[21], i3983[22] )
  return i3982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3985 = data
  i3984.m_Alpha = i3985[0]
  i3984.m_Interactable = !!i3985[1]
  i3984.m_BlocksRaycasts = !!i3985[2]
  i3984.m_IgnoreParentGroups = !!i3985[3]
  i3984.enabled = !!i3985[4]
  return i3984
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i3986 = root || request.c( 'CanvasGroupAnimator' )
  var i3987 = data
  request.r(i3987[0], i3987[1], 0, i3986, 'canvasGroup')
  i3986.animateFade = !!i3987[2]
  i3986.triggerOnStart = !!i3987[3]
  i3986.isLooping = !!i3987[4]
  i3986.fadeTo = i3987[5]
  i3986.fadeDuration = i3987[6]
  i3986.fadeEaseType = i3987[7]
  return i3986
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3988 = root || request.c( 'UnityEngine.UI.Button' )
  var i3989 = data
  i3988.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3989[0], i3988.m_OnClick)
  i3988.m_Navigation = request.d('UnityEngine.UI.Navigation', i3989[1], i3988.m_Navigation)
  i3988.m_Transition = i3989[2]
  i3988.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3989[3], i3988.m_Colors)
  i3988.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3989[4], i3988.m_SpriteState)
  i3988.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3989[5], i3988.m_AnimationTriggers)
  i3988.m_Interactable = !!i3989[6]
  request.r(i3989[7], i3989[8], 0, i3988, 'm_TargetGraphic')
  return i3988
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3990 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3991 = data
  i3990.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3991[0], i3990.m_PersistentCalls)
  return i3990
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3992 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3993 = data
  var i3995 = i3993[0]
  var i3994 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3995.length; i += 1) {
    i3994.add(request.d('UnityEngine.Events.PersistentCall', i3995[i + 0]));
  }
  i3992.m_Calls = i3994
  return i3992
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3998 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3999 = data
  request.r(i3999[0], i3999[1], 0, i3998, 'm_Target')
  i3998.m_TargetAssemblyTypeName = i3999[2]
  i3998.m_MethodName = i3999[3]
  i3998.m_Mode = i3999[4]
  i3998.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3999[5], i3998.m_Arguments)
  i3998.m_CallState = i3999[6]
  return i3998
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4000 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4001 = data
  request.r(i4001[0], i4001[1], 0, i4000, 'm_ObjectArgument')
  i4000.m_ObjectArgumentAssemblyTypeName = i4001[2]
  i4000.m_IntArgument = i4001[3]
  i4000.m_FloatArgument = i4001[4]
  i4000.m_StringArgument = i4001[5]
  i4000.m_BoolArgument = !!i4001[6]
  return i4000
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4002 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4003 = data
  i4002.m_Mode = i4003[0]
  i4002.m_WrapAround = !!i4003[1]
  request.r(i4003[2], i4003[3], 0, i4002, 'm_SelectOnUp')
  request.r(i4003[4], i4003[5], 0, i4002, 'm_SelectOnDown')
  request.r(i4003[6], i4003[7], 0, i4002, 'm_SelectOnLeft')
  request.r(i4003[8], i4003[9], 0, i4002, 'm_SelectOnRight')
  return i4002
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4004 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4005 = data
  i4004.m_NormalColor = new pc.Color(i4005[0], i4005[1], i4005[2], i4005[3])
  i4004.m_HighlightedColor = new pc.Color(i4005[4], i4005[5], i4005[6], i4005[7])
  i4004.m_PressedColor = new pc.Color(i4005[8], i4005[9], i4005[10], i4005[11])
  i4004.m_SelectedColor = new pc.Color(i4005[12], i4005[13], i4005[14], i4005[15])
  i4004.m_DisabledColor = new pc.Color(i4005[16], i4005[17], i4005[18], i4005[19])
  i4004.m_ColorMultiplier = i4005[20]
  i4004.m_FadeDuration = i4005[21]
  return i4004
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4006 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4007 = data
  request.r(i4007[0], i4007[1], 0, i4006, 'm_HighlightedSprite')
  request.r(i4007[2], i4007[3], 0, i4006, 'm_PressedSprite')
  request.r(i4007[4], i4007[5], 0, i4006, 'm_SelectedSprite')
  request.r(i4007[6], i4007[7], 0, i4006, 'm_DisabledSprite')
  return i4006
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4008 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4009 = data
  i4008.m_NormalTrigger = i4009[0]
  i4008.m_HighlightedTrigger = i4009[1]
  i4008.m_PressedTrigger = i4009[2]
  i4008.m_SelectedTrigger = i4009[3]
  i4008.m_DisabledTrigger = i4009[4]
  return i4008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4011 = data
  request.r(i4011[0], i4011[1], 0, i4010, 'animatorController')
  request.r(i4011[2], i4011[3], 0, i4010, 'avatar')
  i4010.updateMode = i4011[4]
  i4010.hasTransformHierarchy = !!i4011[5]
  i4010.applyRootMotion = !!i4011[6]
  var i4013 = i4011[7]
  var i4012 = []
  for(var i = 0; i < i4013.length; i += 2) {
  request.r(i4013[i + 0], i4013[i + 1], 2, i4012, '')
  }
  i4010.humanBones = i4012
  i4010.enabled = !!i4011[8]
  return i4010
}

Deserializers["PromtPopUp"] = function (request, data, root) {
  var i4016 = root || request.c( 'PromtPopUp' )
  var i4017 = data
  i4016.fake = !!i4017[0]
  i4016.DestroyGameObject = !!i4017[1]
  return i4016
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i4018 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i4019 = data
  i4018.m_hasFontAssetChanged = !!i4019[0]
  request.r(i4019[1], i4019[2], 0, i4018, 'm_baseMaterial')
  i4018.m_maskOffset = new pc.Vec4( i4019[3], i4019[4], i4019[5], i4019[6] )
  i4018.m_text = i4019[7]
  i4018.m_isRightToLeft = !!i4019[8]
  request.r(i4019[9], i4019[10], 0, i4018, 'm_fontAsset')
  request.r(i4019[11], i4019[12], 0, i4018, 'm_sharedMaterial')
  var i4021 = i4019[13]
  var i4020 = []
  for(var i = 0; i < i4021.length; i += 2) {
  request.r(i4021[i + 0], i4021[i + 1], 2, i4020, '')
  }
  i4018.m_fontSharedMaterials = i4020
  request.r(i4019[14], i4019[15], 0, i4018, 'm_fontMaterial')
  var i4023 = i4019[16]
  var i4022 = []
  for(var i = 0; i < i4023.length; i += 2) {
  request.r(i4023[i + 0], i4023[i + 1], 2, i4022, '')
  }
  i4018.m_fontMaterials = i4022
  i4018.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4019[17], i4019[18], i4019[19], i4019[20])
  i4018.m_fontColor = new pc.Color(i4019[21], i4019[22], i4019[23], i4019[24])
  i4018.m_enableVertexGradient = !!i4019[25]
  i4018.m_colorMode = i4019[26]
  i4018.m_fontColorGradient = request.d('TMPro.VertexGradient', i4019[27], i4018.m_fontColorGradient)
  request.r(i4019[28], i4019[29], 0, i4018, 'm_fontColorGradientPreset')
  request.r(i4019[30], i4019[31], 0, i4018, 'm_spriteAsset')
  i4018.m_tintAllSprites = !!i4019[32]
  request.r(i4019[33], i4019[34], 0, i4018, 'm_StyleSheet')
  i4018.m_TextStyleHashCode = i4019[35]
  i4018.m_overrideHtmlColors = !!i4019[36]
  i4018.m_faceColor = UnityEngine.Color32.ConstructColor(i4019[37], i4019[38], i4019[39], i4019[40])
  i4018.m_fontSize = i4019[41]
  i4018.m_fontSizeBase = i4019[42]
  i4018.m_fontWeight = i4019[43]
  i4018.m_enableAutoSizing = !!i4019[44]
  i4018.m_fontSizeMin = i4019[45]
  i4018.m_fontSizeMax = i4019[46]
  i4018.m_fontStyle = i4019[47]
  i4018.m_HorizontalAlignment = i4019[48]
  i4018.m_VerticalAlignment = i4019[49]
  i4018.m_textAlignment = i4019[50]
  i4018.m_characterSpacing = i4019[51]
  i4018.m_wordSpacing = i4019[52]
  i4018.m_lineSpacing = i4019[53]
  i4018.m_lineSpacingMax = i4019[54]
  i4018.m_paragraphSpacing = i4019[55]
  i4018.m_charWidthMaxAdj = i4019[56]
  i4018.m_enableWordWrapping = !!i4019[57]
  i4018.m_wordWrappingRatios = i4019[58]
  i4018.m_overflowMode = i4019[59]
  request.r(i4019[60], i4019[61], 0, i4018, 'm_linkedTextComponent')
  request.r(i4019[62], i4019[63], 0, i4018, 'parentLinkedComponent')
  i4018.m_enableKerning = !!i4019[64]
  i4018.m_enableExtraPadding = !!i4019[65]
  i4018.checkPaddingRequired = !!i4019[66]
  i4018.m_isRichText = !!i4019[67]
  i4018.m_parseCtrlCharacters = !!i4019[68]
  i4018.m_isOrthographic = !!i4019[69]
  i4018.m_isCullingEnabled = !!i4019[70]
  i4018.m_horizontalMapping = i4019[71]
  i4018.m_verticalMapping = i4019[72]
  i4018.m_uvLineOffset = i4019[73]
  i4018.m_geometrySortingOrder = i4019[74]
  i4018.m_IsTextObjectScaleStatic = !!i4019[75]
  i4018.m_VertexBufferAutoSizeReduction = !!i4019[76]
  i4018.m_useMaxVisibleDescender = !!i4019[77]
  i4018.m_pageToDisplay = i4019[78]
  i4018.m_margin = new pc.Vec4( i4019[79], i4019[80], i4019[81], i4019[82] )
  i4018.m_isUsingLegacyAnimationComponent = !!i4019[83]
  i4018.m_isVolumetricText = !!i4019[84]
  request.r(i4019[85], i4019[86], 0, i4018, 'm_Material')
  i4018.m_Maskable = !!i4019[87]
  i4018.m_Color = new pc.Color(i4019[88], i4019[89], i4019[90], i4019[91])
  i4018.m_RaycastTarget = !!i4019[92]
  i4018.m_RaycastPadding = new pc.Vec4( i4019[93], i4019[94], i4019[95], i4019[96] )
  return i4018
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i4024 = root || request.c( 'TMPro.VertexGradient' )
  var i4025 = data
  i4024.topLeft = new pc.Color(i4025[0], i4025[1], i4025[2], i4025[3])
  i4024.topRight = new pc.Color(i4025[4], i4025[5], i4025[6], i4025[7])
  i4024.bottomLeft = new pc.Color(i4025[8], i4025[9], i4025[10], i4025[11])
  i4024.bottomRight = new pc.Color(i4025[12], i4025[13], i4025[14], i4025[15])
  return i4024
}

Deserializers["SetConditionMet"] = function (request, data, root) {
  var i4026 = root || request.c( 'SetConditionMet' )
  var i4027 = data
  return i4026
}

Deserializers["FloatingTextEffect"] = function (request, data, root) {
  var i4028 = root || request.c( 'FloatingTextEffect' )
  var i4029 = data
  request.r(i4029[0], i4029[1], 0, i4028, 'textMeshProUGUI')
  request.r(i4029[2], i4029[3], 0, i4028, 'textMeshPro')
  i4028.floatDistance = i4029[4]
  i4028.duration = i4029[5]
  return i4028
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4030 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4031 = data
  request.r(i4031[0], i4031[1], 0, i4030, 'm_FirstSelected')
  i4030.m_sendNavigationEvents = !!i4031[2]
  i4030.m_DragThreshold = i4031[3]
  return i4030
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4032 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4033 = data
  i4032.m_HorizontalAxis = i4033[0]
  i4032.m_VerticalAxis = i4033[1]
  i4032.m_SubmitButton = i4033[2]
  i4032.m_CancelButton = i4033[3]
  i4032.m_InputActionsPerSecond = i4033[4]
  i4032.m_RepeatDelay = i4033[5]
  i4032.m_ForceModuleActive = !!i4033[6]
  i4032.m_SendPointerHoverToParent = !!i4033[7]
  return i4032
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i4034 = root || request.c( 'ButtonPulse' )
  var i4035 = data
  i4034.scaleAmount = i4035[0]
  i4034.pulseDuration = i4035[1]
  return i4034
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i4036 = root || request.c( 'StartClickHandler' )
  var i4037 = data
  return i4036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4039 = data
  i4038.ambientIntensity = i4039[0]
  i4038.reflectionIntensity = i4039[1]
  i4038.ambientMode = i4039[2]
  i4038.ambientLight = new pc.Color(i4039[3], i4039[4], i4039[5], i4039[6])
  i4038.ambientSkyColor = new pc.Color(i4039[7], i4039[8], i4039[9], i4039[10])
  i4038.ambientGroundColor = new pc.Color(i4039[11], i4039[12], i4039[13], i4039[14])
  i4038.ambientEquatorColor = new pc.Color(i4039[15], i4039[16], i4039[17], i4039[18])
  i4038.fogColor = new pc.Color(i4039[19], i4039[20], i4039[21], i4039[22])
  i4038.fogEndDistance = i4039[23]
  i4038.fogStartDistance = i4039[24]
  i4038.fogDensity = i4039[25]
  i4038.fog = !!i4039[26]
  request.r(i4039[27], i4039[28], 0, i4038, 'skybox')
  i4038.fogMode = i4039[29]
  var i4041 = i4039[30]
  var i4040 = []
  for(var i = 0; i < i4041.length; i += 1) {
    i4040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4041[i + 0]) );
  }
  i4038.lightmaps = i4040
  i4038.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4039[31], i4038.lightProbes)
  i4038.lightmapsMode = i4039[32]
  i4038.mixedBakeMode = i4039[33]
  i4038.environmentLightingMode = i4039[34]
  i4038.ambientProbe = new pc.SphericalHarmonicsL2(i4039[35])
  i4038.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4039[36])
  i4038.useReferenceAmbientProbe = !!i4039[37]
  request.r(i4039[38], i4039[39], 0, i4038, 'customReflection')
  request.r(i4039[40], i4039[41], 0, i4038, 'defaultReflection')
  i4038.defaultReflectionMode = i4039[42]
  i4038.defaultReflectionResolution = i4039[43]
  i4038.sunLightObjectId = i4039[44]
  i4038.pixelLightCount = i4039[45]
  i4038.defaultReflectionHDR = !!i4039[46]
  i4038.hasLightDataAsset = !!i4039[47]
  i4038.hasManualGenerate = !!i4039[48]
  return i4038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4045 = data
  request.r(i4045[0], i4045[1], 0, i4044, 'lightmapColor')
  request.r(i4045[2], i4045[3], 0, i4044, 'lightmapDirection')
  return i4044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4046 = root || new UnityEngine.LightProbes()
  var i4047 = data
  return i4046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4055 = data
  var i4057 = i4055[0]
  var i4056 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4057.length; i += 1) {
    i4056.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4057[i + 0]));
  }
  i4054.ShaderCompilationErrors = i4056
  i4054.name = i4055[1]
  i4054.guid = i4055[2]
  var i4059 = i4055[3]
  var i4058 = []
  for(var i = 0; i < i4059.length; i += 1) {
    i4058.push( i4059[i + 0] );
  }
  i4054.shaderDefinedKeywords = i4058
  var i4061 = i4055[4]
  var i4060 = []
  for(var i = 0; i < i4061.length; i += 1) {
    i4060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4061[i + 0]) );
  }
  i4054.passes = i4060
  var i4063 = i4055[5]
  var i4062 = []
  for(var i = 0; i < i4063.length; i += 1) {
    i4062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4063[i + 0]) );
  }
  i4054.usePasses = i4062
  var i4065 = i4055[6]
  var i4064 = []
  for(var i = 0; i < i4065.length; i += 1) {
    i4064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4065[i + 0]) );
  }
  i4054.defaultParameterValues = i4064
  request.r(i4055[7], i4055[8], 0, i4054, 'unityFallbackShader')
  i4054.readDepth = !!i4055[9]
  i4054.isCreatedByShaderGraph = !!i4055[10]
  i4054.compiled = !!i4055[11]
  return i4054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4069 = data
  i4068.shaderName = i4069[0]
  i4068.errorMessage = i4069[1]
  return i4068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4074 = root || new pc.UnityShaderPass()
  var i4075 = data
  i4074.id = i4075[0]
  i4074.subShaderIndex = i4075[1]
  i4074.name = i4075[2]
  i4074.passType = i4075[3]
  i4074.grabPassTextureName = i4075[4]
  i4074.usePass = !!i4075[5]
  i4074.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4075[6], i4074.zTest)
  i4074.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4075[7], i4074.zWrite)
  i4074.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4075[8], i4074.culling)
  i4074.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4075[9], i4074.blending)
  i4074.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4075[10], i4074.alphaBlending)
  i4074.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4075[11], i4074.colorWriteMask)
  i4074.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4075[12], i4074.offsetUnits)
  i4074.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4075[13], i4074.offsetFactor)
  i4074.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4075[14], i4074.stencilRef)
  i4074.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4075[15], i4074.stencilReadMask)
  i4074.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4075[16], i4074.stencilWriteMask)
  i4074.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4075[17], i4074.stencilOp)
  i4074.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4075[18], i4074.stencilOpFront)
  i4074.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4075[19], i4074.stencilOpBack)
  var i4077 = i4075[20]
  var i4076 = []
  for(var i = 0; i < i4077.length; i += 1) {
    i4076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4077[i + 0]) );
  }
  i4074.tags = i4076
  var i4079 = i4075[21]
  var i4078 = []
  for(var i = 0; i < i4079.length; i += 1) {
    i4078.push( i4079[i + 0] );
  }
  i4074.passDefinedKeywords = i4078
  var i4081 = i4075[22]
  var i4080 = []
  for(var i = 0; i < i4081.length; i += 1) {
    i4080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4081[i + 0]) );
  }
  i4074.passDefinedKeywordGroups = i4080
  var i4083 = i4075[23]
  var i4082 = []
  for(var i = 0; i < i4083.length; i += 1) {
    i4082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4083[i + 0]) );
  }
  i4074.variants = i4082
  var i4085 = i4075[24]
  var i4084 = []
  for(var i = 0; i < i4085.length; i += 1) {
    i4084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4085[i + 0]) );
  }
  i4074.excludedVariants = i4084
  i4074.hasDepthReader = !!i4075[25]
  return i4074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4087 = data
  i4086.val = i4087[0]
  i4086.name = i4087[1]
  return i4086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4089 = data
  i4088.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4089[0], i4088.src)
  i4088.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4089[1], i4088.dst)
  i4088.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4089[2], i4088.op)
  return i4088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4091 = data
  i4090.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4091[0], i4090.pass)
  i4090.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4091[1], i4090.fail)
  i4090.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4091[2], i4090.zFail)
  i4090.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4091[3], i4090.comp)
  return i4090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4095 = data
  i4094.name = i4095[0]
  i4094.value = i4095[1]
  return i4094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4099 = data
  var i4101 = i4099[0]
  var i4100 = []
  for(var i = 0; i < i4101.length; i += 1) {
    i4100.push( i4101[i + 0] );
  }
  i4098.keywords = i4100
  i4098.hasDiscard = !!i4099[1]
  return i4098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4105 = data
  i4104.passId = i4105[0]
  i4104.subShaderIndex = i4105[1]
  var i4107 = i4105[2]
  var i4106 = []
  for(var i = 0; i < i4107.length; i += 1) {
    i4106.push( i4107[i + 0] );
  }
  i4104.keywords = i4106
  i4104.vertexProgram = i4105[3]
  i4104.fragmentProgram = i4105[4]
  i4104.exportedForWebGl2 = !!i4105[5]
  i4104.readDepth = !!i4105[6]
  return i4104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4111 = data
  request.r(i4111[0], i4111[1], 0, i4110, 'shader')
  i4110.pass = i4111[2]
  return i4110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4115 = data
  i4114.name = i4115[0]
  i4114.type = i4115[1]
  i4114.value = new pc.Vec4( i4115[2], i4115[3], i4115[4], i4115[5] )
  i4114.textureValue = i4115[6]
  i4114.shaderPropertyFlag = i4115[7]
  return i4114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4117 = data
  i4116.name = i4117[0]
  request.r(i4117[1], i4117[2], 0, i4116, 'texture')
  i4116.aabb = i4117[3]
  i4116.vertices = i4117[4]
  i4116.triangles = i4117[5]
  i4116.textureRect = UnityEngine.Rect.MinMaxRect(i4117[6], i4117[7], i4117[8], i4117[9])
  i4116.packedRect = UnityEngine.Rect.MinMaxRect(i4117[10], i4117[11], i4117[12], i4117[13])
  i4116.border = new pc.Vec4( i4117[14], i4117[15], i4117[16], i4117[17] )
  i4116.transparency = i4117[18]
  i4116.bounds = i4117[19]
  i4116.pixelsPerUnit = i4117[20]
  i4116.textureWidth = i4117[21]
  i4116.textureHeight = i4117[22]
  i4116.nativeSize = new pc.Vec2( i4117[23], i4117[24] )
  i4116.pivot = new pc.Vec2( i4117[25], i4117[26] )
  i4116.textureRectOffset = new pc.Vec2( i4117[27], i4117[28] )
  return i4116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4119 = data
  i4118.name = i4119[0]
  return i4118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4121 = data
  i4120.name = i4121[0]
  i4120.wrapMode = i4121[1]
  i4120.isLooping = !!i4121[2]
  i4120.length = i4121[3]
  var i4123 = i4121[4]
  var i4122 = []
  for(var i = 0; i < i4123.length; i += 1) {
    i4122.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4123[i + 0]) );
  }
  i4120.curves = i4122
  var i4125 = i4121[5]
  var i4124 = []
  for(var i = 0; i < i4125.length; i += 1) {
    i4124.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4125[i + 0]) );
  }
  i4120.events = i4124
  i4120.halfPrecision = !!i4121[6]
  i4120._frameRate = i4121[7]
  i4120.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4121[8], i4120.localBounds)
  i4120.hasMuscleCurves = !!i4121[9]
  var i4127 = i4121[10]
  var i4126 = []
  for(var i = 0; i < i4127.length; i += 1) {
    i4126.push( i4127[i + 0] );
  }
  i4120.clipMuscleConstant = i4126
  i4120.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4121[11], i4120.clipBindingConstant)
  return i4120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4131 = data
  i4130.path = i4131[0]
  i4130.hash = i4131[1]
  i4130.componentType = i4131[2]
  i4130.property = i4131[3]
  i4130.keys = i4131[4]
  var i4133 = i4131[5]
  var i4132 = []
  for(var i = 0; i < i4133.length; i += 1) {
    i4132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4133[i + 0]) );
  }
  i4130.objectReferenceKeys = i4132
  return i4130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4137 = data
  i4136.time = i4137[0]
  request.r(i4137[1], i4137[2], 0, i4136, 'value')
  return i4136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4141 = data
  i4140.functionName = i4141[0]
  i4140.floatParameter = i4141[1]
  i4140.intParameter = i4141[2]
  i4140.stringParameter = i4141[3]
  request.r(i4141[4], i4141[5], 0, i4140, 'objectReferenceParameter')
  i4140.time = i4141[6]
  return i4140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4143 = data
  i4142.center = new pc.Vec3( i4143[0], i4143[1], i4143[2] )
  i4142.extends = new pc.Vec3( i4143[3], i4143[4], i4143[5] )
  return i4142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4147 = data
  var i4149 = i4147[0]
  var i4148 = []
  for(var i = 0; i < i4149.length; i += 1) {
    i4148.push( i4149[i + 0] );
  }
  i4146.genericBindings = i4148
  var i4151 = i4147[1]
  var i4150 = []
  for(var i = 0; i < i4151.length; i += 1) {
    i4150.push( i4151[i + 0] );
  }
  i4146.pptrCurveMapping = i4150
  return i4146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4153 = data
  i4152.name = i4153[0]
  i4152.ascent = i4153[1]
  i4152.originalLineHeight = i4153[2]
  i4152.fontSize = i4153[3]
  var i4155 = i4153[4]
  var i4154 = []
  for(var i = 0; i < i4155.length; i += 1) {
    i4154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4155[i + 0]) );
  }
  i4152.characterInfo = i4154
  request.r(i4153[5], i4153[6], 0, i4152, 'texture')
  i4152.originalFontSize = i4153[7]
  return i4152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4159 = data
  i4158.index = i4159[0]
  i4158.advance = i4159[1]
  i4158.bearing = i4159[2]
  i4158.glyphWidth = i4159[3]
  i4158.glyphHeight = i4159[4]
  i4158.minX = i4159[5]
  i4158.maxX = i4159[6]
  i4158.minY = i4159[7]
  i4158.maxY = i4159[8]
  i4158.uvBottomLeftX = i4159[9]
  i4158.uvBottomLeftY = i4159[10]
  i4158.uvBottomRightX = i4159[11]
  i4158.uvBottomRightY = i4159[12]
  i4158.uvTopLeftX = i4159[13]
  i4158.uvTopLeftY = i4159[14]
  i4158.uvTopRightX = i4159[15]
  i4158.uvTopRightY = i4159[16]
  return i4158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4161 = data
  i4160.name = i4161[0]
  var i4163 = i4161[1]
  var i4162 = []
  for(var i = 0; i < i4163.length; i += 1) {
    i4162.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4163[i + 0]) );
  }
  i4160.layers = i4162
  var i4165 = i4161[2]
  var i4164 = []
  for(var i = 0; i < i4165.length; i += 1) {
    i4164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4165[i + 0]) );
  }
  i4160.parameters = i4164
  i4160.animationClips = i4161[3]
  i4160.avatarUnsupported = i4161[4]
  return i4160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4169 = data
  i4168.name = i4169[0]
  i4168.defaultWeight = i4169[1]
  i4168.blendingMode = i4169[2]
  i4168.avatarMask = i4169[3]
  i4168.syncedLayerIndex = i4169[4]
  i4168.syncedLayerAffectsTiming = !!i4169[5]
  i4168.syncedLayers = i4169[6]
  i4168.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4169[7], i4168.stateMachine)
  return i4168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4171 = data
  i4170.id = i4171[0]
  i4170.name = i4171[1]
  i4170.path = i4171[2]
  var i4173 = i4171[3]
  var i4172 = []
  for(var i = 0; i < i4173.length; i += 1) {
    i4172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4173[i + 0]) );
  }
  i4170.states = i4172
  var i4175 = i4171[4]
  var i4174 = []
  for(var i = 0; i < i4175.length; i += 1) {
    i4174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4175[i + 0]) );
  }
  i4170.machines = i4174
  var i4177 = i4171[5]
  var i4176 = []
  for(var i = 0; i < i4177.length; i += 1) {
    i4176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4177[i + 0]) );
  }
  i4170.entryStateTransitions = i4176
  var i4179 = i4171[6]
  var i4178 = []
  for(var i = 0; i < i4179.length; i += 1) {
    i4178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4179[i + 0]) );
  }
  i4170.exitStateTransitions = i4178
  var i4181 = i4171[7]
  var i4180 = []
  for(var i = 0; i < i4181.length; i += 1) {
    i4180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4181[i + 0]) );
  }
  i4170.anyStateTransitions = i4180
  i4170.defaultStateId = i4171[8]
  return i4170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4185 = data
  i4184.id = i4185[0]
  i4184.name = i4185[1]
  i4184.cycleOffset = i4185[2]
  i4184.cycleOffsetParameter = i4185[3]
  i4184.cycleOffsetParameterActive = !!i4185[4]
  i4184.mirror = !!i4185[5]
  i4184.mirrorParameter = i4185[6]
  i4184.mirrorParameterActive = !!i4185[7]
  i4184.motionId = i4185[8]
  i4184.nameHash = i4185[9]
  i4184.fullPathHash = i4185[10]
  i4184.speed = i4185[11]
  i4184.speedParameter = i4185[12]
  i4184.speedParameterActive = !!i4185[13]
  i4184.tag = i4185[14]
  i4184.tagHash = i4185[15]
  i4184.writeDefaultValues = !!i4185[16]
  var i4187 = i4185[17]
  var i4186 = []
  for(var i = 0; i < i4187.length; i += 2) {
  request.r(i4187[i + 0], i4187[i + 1], 2, i4186, '')
  }
  i4184.behaviours = i4186
  var i4189 = i4185[18]
  var i4188 = []
  for(var i = 0; i < i4189.length; i += 1) {
    i4188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4189[i + 0]) );
  }
  i4184.transitions = i4188
  return i4184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4195 = data
  i4194.fullPath = i4195[0]
  i4194.canTransitionToSelf = !!i4195[1]
  i4194.duration = i4195[2]
  i4194.exitTime = i4195[3]
  i4194.hasExitTime = !!i4195[4]
  i4194.hasFixedDuration = !!i4195[5]
  i4194.interruptionSource = i4195[6]
  i4194.offset = i4195[7]
  i4194.orderedInterruption = !!i4195[8]
  i4194.destinationStateId = i4195[9]
  i4194.isExit = !!i4195[10]
  i4194.mute = !!i4195[11]
  i4194.solo = !!i4195[12]
  var i4197 = i4195[13]
  var i4196 = []
  for(var i = 0; i < i4197.length; i += 1) {
    i4196.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4197[i + 0]) );
  }
  i4194.conditions = i4196
  return i4194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4203 = data
  i4202.destinationStateId = i4203[0]
  i4202.isExit = !!i4203[1]
  i4202.mute = !!i4203[2]
  i4202.solo = !!i4203[3]
  var i4205 = i4203[4]
  var i4204 = []
  for(var i = 0; i < i4205.length; i += 1) {
    i4204.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4205[i + 0]) );
  }
  i4202.conditions = i4204
  return i4202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4209 = data
  i4208.defaultBool = !!i4209[0]
  i4208.defaultFloat = i4209[1]
  i4208.defaultInt = i4209[2]
  i4208.name = i4209[3]
  i4208.nameHash = i4209[4]
  i4208.type = i4209[5]
  return i4208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4211 = data
  i4210.name = i4211[0]
  i4210.bytes64 = i4211[1]
  i4210.data = i4211[2]
  return i4210
}

Deserializers["DataObject"] = function (request, data, root) {
  var i4212 = root || request.c( 'DataObject' )
  var i4213 = data
  i4212.level = i4213[0]
  i4212.name = i4213[1]
  i4212.assetValue = i4213[2]
  i4212.isLegit = !!i4213[3]
  request.r(i4213[4], i4213[5], 0, i4212, 'icon')
  i4212.bidder1Bid = i4213[6]
  i4212.bidder2Bid = i4213[7]
  i4212.bidder3Bid = i4213[8]
  i4212.playerBid = i4213[9]
  return i4212
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4214 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4215 = data
  i4214.hashCode = i4215[0]
  request.r(i4215[1], i4215[2], 0, i4214, 'material')
  i4214.materialHashCode = i4215[3]
  request.r(i4215[4], i4215[5], 0, i4214, 'atlas')
  i4214.normalStyle = i4215[6]
  i4214.normalSpacingOffset = i4215[7]
  i4214.boldStyle = i4215[8]
  i4214.boldSpacing = i4215[9]
  i4214.italicStyle = i4215[10]
  i4214.tabSize = i4215[11]
  i4214.m_Version = i4215[12]
  i4214.m_SourceFontFileGUID = i4215[13]
  request.r(i4215[14], i4215[15], 0, i4214, 'm_SourceFontFile_EditorRef')
  request.r(i4215[16], i4215[17], 0, i4214, 'm_SourceFontFile')
  i4214.m_AtlasPopulationMode = i4215[18]
  i4214.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4215[19], i4214.m_FaceInfo)
  var i4217 = i4215[20]
  var i4216 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4217.length; i += 1) {
    i4216.add(request.d('UnityEngine.TextCore.Glyph', i4217[i + 0]));
  }
  i4214.m_GlyphTable = i4216
  var i4219 = i4215[21]
  var i4218 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4219.length; i += 1) {
    i4218.add(request.d('TMPro.TMP_Character', i4219[i + 0]));
  }
  i4214.m_CharacterTable = i4218
  var i4221 = i4215[22]
  var i4220 = []
  for(var i = 0; i < i4221.length; i += 2) {
  request.r(i4221[i + 0], i4221[i + 1], 2, i4220, '')
  }
  i4214.m_AtlasTextures = i4220
  i4214.m_AtlasTextureIndex = i4215[23]
  i4214.m_IsMultiAtlasTexturesEnabled = !!i4215[24]
  i4214.m_ClearDynamicDataOnBuild = !!i4215[25]
  var i4223 = i4215[26]
  var i4222 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4223.length; i += 1) {
    i4222.add(request.d('UnityEngine.TextCore.GlyphRect', i4223[i + 0]));
  }
  i4214.m_UsedGlyphRects = i4222
  var i4225 = i4215[27]
  var i4224 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4225.length; i += 1) {
    i4224.add(request.d('UnityEngine.TextCore.GlyphRect', i4225[i + 0]));
  }
  i4214.m_FreeGlyphRects = i4224
  i4214.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4215[28], i4214.m_fontInfo)
  i4214.m_AtlasWidth = i4215[29]
  i4214.m_AtlasHeight = i4215[30]
  i4214.m_AtlasPadding = i4215[31]
  i4214.m_AtlasRenderMode = i4215[32]
  var i4227 = i4215[33]
  var i4226 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4227.length; i += 1) {
    i4226.add(request.d('TMPro.TMP_Glyph', i4227[i + 0]));
  }
  i4214.m_glyphInfoList = i4226
  i4214.m_KerningTable = request.d('TMPro.KerningTable', i4215[34], i4214.m_KerningTable)
  i4214.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4215[35], i4214.m_FontFeatureTable)
  var i4229 = i4215[36]
  var i4228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4229.length; i += 2) {
  request.r(i4229[i + 0], i4229[i + 1], 1, i4228, '')
  }
  i4214.fallbackFontAssets = i4228
  var i4231 = i4215[37]
  var i4230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4231.length; i += 2) {
  request.r(i4231[i + 0], i4231[i + 1], 1, i4230, '')
  }
  i4214.m_FallbackFontAssetTable = i4230
  i4214.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4215[38], i4214.m_CreationSettings)
  var i4233 = i4215[39]
  var i4232 = []
  for(var i = 0; i < i4233.length; i += 1) {
    i4232.push( request.d('TMPro.TMP_FontWeightPair', i4233[i + 0]) );
  }
  i4214.m_FontWeightTable = i4232
  var i4235 = i4215[40]
  var i4234 = []
  for(var i = 0; i < i4235.length; i += 1) {
    i4234.push( request.d('TMPro.TMP_FontWeightPair', i4235[i + 0]) );
  }
  i4214.fontWeights = i4234
  return i4214
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4236 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4237 = data
  i4236.m_FaceIndex = i4237[0]
  i4236.m_FamilyName = i4237[1]
  i4236.m_StyleName = i4237[2]
  i4236.m_PointSize = i4237[3]
  i4236.m_Scale = i4237[4]
  i4236.m_UnitsPerEM = i4237[5]
  i4236.m_LineHeight = i4237[6]
  i4236.m_AscentLine = i4237[7]
  i4236.m_CapLine = i4237[8]
  i4236.m_MeanLine = i4237[9]
  i4236.m_Baseline = i4237[10]
  i4236.m_DescentLine = i4237[11]
  i4236.m_SuperscriptOffset = i4237[12]
  i4236.m_SuperscriptSize = i4237[13]
  i4236.m_SubscriptOffset = i4237[14]
  i4236.m_SubscriptSize = i4237[15]
  i4236.m_UnderlineOffset = i4237[16]
  i4236.m_UnderlineThickness = i4237[17]
  i4236.m_StrikethroughOffset = i4237[18]
  i4236.m_StrikethroughThickness = i4237[19]
  i4236.m_TabWidth = i4237[20]
  return i4236
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4240 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4241 = data
  i4240.m_Index = i4241[0]
  i4240.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4241[1], i4240.m_Metrics)
  i4240.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4241[2], i4240.m_GlyphRect)
  i4240.m_Scale = i4241[3]
  i4240.m_AtlasIndex = i4241[4]
  i4240.m_ClassDefinitionType = i4241[5]
  return i4240
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4242 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4243 = data
  i4242.m_Width = i4243[0]
  i4242.m_Height = i4243[1]
  i4242.m_HorizontalBearingX = i4243[2]
  i4242.m_HorizontalBearingY = i4243[3]
  i4242.m_HorizontalAdvance = i4243[4]
  return i4242
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4244 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4245 = data
  i4244.m_X = i4245[0]
  i4244.m_Y = i4245[1]
  i4244.m_Width = i4245[2]
  i4244.m_Height = i4245[3]
  return i4244
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4248 = root || request.c( 'TMPro.TMP_Character' )
  var i4249 = data
  i4248.m_ElementType = i4249[0]
  i4248.m_Unicode = i4249[1]
  i4248.m_GlyphIndex = i4249[2]
  i4248.m_Scale = i4249[3]
  return i4248
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4254 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4255 = data
  i4254.Name = i4255[0]
  i4254.PointSize = i4255[1]
  i4254.Scale = i4255[2]
  i4254.CharacterCount = i4255[3]
  i4254.LineHeight = i4255[4]
  i4254.Baseline = i4255[5]
  i4254.Ascender = i4255[6]
  i4254.CapHeight = i4255[7]
  i4254.Descender = i4255[8]
  i4254.CenterLine = i4255[9]
  i4254.SuperscriptOffset = i4255[10]
  i4254.SubscriptOffset = i4255[11]
  i4254.SubSize = i4255[12]
  i4254.Underline = i4255[13]
  i4254.UnderlineThickness = i4255[14]
  i4254.strikethrough = i4255[15]
  i4254.strikethroughThickness = i4255[16]
  i4254.TabWidth = i4255[17]
  i4254.Padding = i4255[18]
  i4254.AtlasWidth = i4255[19]
  i4254.AtlasHeight = i4255[20]
  return i4254
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4258 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4259 = data
  i4258.id = i4259[0]
  i4258.x = i4259[1]
  i4258.y = i4259[2]
  i4258.width = i4259[3]
  i4258.height = i4259[4]
  i4258.xOffset = i4259[5]
  i4258.yOffset = i4259[6]
  i4258.xAdvance = i4259[7]
  i4258.scale = i4259[8]
  return i4258
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4260 = root || request.c( 'TMPro.KerningTable' )
  var i4261 = data
  var i4263 = i4261[0]
  var i4262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4263.length; i += 1) {
    i4262.add(request.d('TMPro.KerningPair', i4263[i + 0]));
  }
  i4260.kerningPairs = i4262
  return i4260
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4266 = root || request.c( 'TMPro.KerningPair' )
  var i4267 = data
  i4266.xOffset = i4267[0]
  i4266.m_FirstGlyph = i4267[1]
  i4266.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4267[2], i4266.m_FirstGlyphAdjustments)
  i4266.m_SecondGlyph = i4267[3]
  i4266.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4267[4], i4266.m_SecondGlyphAdjustments)
  i4266.m_IgnoreSpacingAdjustments = !!i4267[5]
  return i4266
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4268 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4269 = data
  var i4271 = i4269[0]
  var i4270 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4271.length; i += 1) {
    i4270.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i4271[i + 0]));
  }
  i4268.m_GlyphPairAdjustmentRecords = i4270
  return i4268
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4274 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i4275 = data
  i4274.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4275[0], i4274.m_FirstAdjustmentRecord)
  i4274.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4275[1], i4274.m_SecondAdjustmentRecord)
  i4274.m_FeatureLookupFlags = i4275[2]
  return i4274
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4278 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4279 = data
  i4278.sourceFontFileName = i4279[0]
  i4278.sourceFontFileGUID = i4279[1]
  i4278.pointSizeSamplingMode = i4279[2]
  i4278.pointSize = i4279[3]
  i4278.padding = i4279[4]
  i4278.packingMode = i4279[5]
  i4278.atlasWidth = i4279[6]
  i4278.atlasHeight = i4279[7]
  i4278.characterSetSelectionMode = i4279[8]
  i4278.characterSequence = i4279[9]
  i4278.referencedFontAssetGUID = i4279[10]
  i4278.referencedTextAssetGUID = i4279[11]
  i4278.fontStyle = i4279[12]
  i4278.fontStyleModifier = i4279[13]
  i4278.renderMode = i4279[14]
  i4278.includeFontFeatures = !!i4279[15]
  return i4278
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4282 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4283 = data
  request.r(i4283[0], i4283[1], 0, i4282, 'regularTypeface')
  request.r(i4283[2], i4283[3], 0, i4282, 'italicTypeface')
  return i4282
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i4284 = root || request.c( 'AudioLibrary' )
  var i4285 = data
  var i4287 = i4285[0]
  var i4286 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i4287.length; i += 1) {
    i4286.add(request.d('AudioLibrary+ClipEntry', i4287[i + 0]));
  }
  i4284.clips = i4286
  return i4284
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i4290 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i4291 = data
  i4290.key = i4291[0]
  i4290.channel = i4291[1]
  request.r(i4291[2], i4291[3], 0, i4290, 'clip')
  i4290.volume = i4291[4]
  i4290.loop = !!i4291[5]
  return i4290
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4292 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4293 = data
  i4292.useSafeMode = !!i4293[0]
  i4292.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4293[1], i4292.safeModeOptions)
  i4292.timeScale = i4293[2]
  i4292.unscaledTimeScale = i4293[3]
  i4292.useSmoothDeltaTime = !!i4293[4]
  i4292.maxSmoothUnscaledTime = i4293[5]
  i4292.rewindCallbackMode = i4293[6]
  i4292.showUnityEditorReport = !!i4293[7]
  i4292.logBehaviour = i4293[8]
  i4292.drawGizmos = !!i4293[9]
  i4292.defaultRecyclable = !!i4293[10]
  i4292.defaultAutoPlay = i4293[11]
  i4292.defaultUpdateType = i4293[12]
  i4292.defaultTimeScaleIndependent = !!i4293[13]
  i4292.defaultEaseType = i4293[14]
  i4292.defaultEaseOvershootOrAmplitude = i4293[15]
  i4292.defaultEasePeriod = i4293[16]
  i4292.defaultAutoKill = !!i4293[17]
  i4292.defaultLoopType = i4293[18]
  i4292.debugMode = !!i4293[19]
  i4292.debugStoreTargetId = !!i4293[20]
  i4292.showPreviewPanel = !!i4293[21]
  i4292.storeSettingsLocation = i4293[22]
  i4292.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4293[23], i4292.modules)
  i4292.createASMDEF = !!i4293[24]
  i4292.showPlayingTweens = !!i4293[25]
  i4292.showPausedTweens = !!i4293[26]
  return i4292
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4294 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4295 = data
  i4294.logBehaviour = i4295[0]
  i4294.nestedTweenFailureBehaviour = i4295[1]
  return i4294
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4296 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4297 = data
  i4296.showPanel = !!i4297[0]
  i4296.audioEnabled = !!i4297[1]
  i4296.physicsEnabled = !!i4297[2]
  i4296.physics2DEnabled = !!i4297[3]
  i4296.spriteEnabled = !!i4297[4]
  i4296.uiEnabled = !!i4297[5]
  i4296.textMeshProEnabled = !!i4297[6]
  i4296.tk2DEnabled = !!i4297[7]
  i4296.deAudioEnabled = !!i4297[8]
  i4296.deUnityExtendedEnabled = !!i4297[9]
  i4296.epoOutlineEnabled = !!i4297[10]
  return i4296
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4298 = root || request.c( 'TMPro.TMP_Settings' )
  var i4299 = data
  i4298.m_enableWordWrapping = !!i4299[0]
  i4298.m_enableKerning = !!i4299[1]
  i4298.m_enableExtraPadding = !!i4299[2]
  i4298.m_enableTintAllSprites = !!i4299[3]
  i4298.m_enableParseEscapeCharacters = !!i4299[4]
  i4298.m_EnableRaycastTarget = !!i4299[5]
  i4298.m_GetFontFeaturesAtRuntime = !!i4299[6]
  i4298.m_missingGlyphCharacter = i4299[7]
  i4298.m_warningsDisabled = !!i4299[8]
  request.r(i4299[9], i4299[10], 0, i4298, 'm_defaultFontAsset')
  i4298.m_defaultFontAssetPath = i4299[11]
  i4298.m_defaultFontSize = i4299[12]
  i4298.m_defaultAutoSizeMinRatio = i4299[13]
  i4298.m_defaultAutoSizeMaxRatio = i4299[14]
  i4298.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4299[15], i4299[16] )
  i4298.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4299[17], i4299[18] )
  i4298.m_autoSizeTextContainer = !!i4299[19]
  i4298.m_IsTextObjectScaleStatic = !!i4299[20]
  var i4301 = i4299[21]
  var i4300 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4301.length; i += 2) {
  request.r(i4301[i + 0], i4301[i + 1], 1, i4300, '')
  }
  i4298.m_fallbackFontAssets = i4300
  i4298.m_matchMaterialPreset = !!i4299[22]
  request.r(i4299[23], i4299[24], 0, i4298, 'm_defaultSpriteAsset')
  i4298.m_defaultSpriteAssetPath = i4299[25]
  i4298.m_enableEmojiSupport = !!i4299[26]
  i4298.m_MissingCharacterSpriteUnicode = i4299[27]
  i4298.m_defaultColorGradientPresetsPath = i4299[28]
  request.r(i4299[29], i4299[30], 0, i4298, 'm_defaultStyleSheet')
  i4298.m_StyleSheetsResourcePath = i4299[31]
  request.r(i4299[32], i4299[33], 0, i4298, 'm_leadingCharacters')
  request.r(i4299[34], i4299[35], 0, i4298, 'm_followingCharacters')
  i4298.m_UseModernHangulLineBreakingRules = !!i4299[36]
  return i4298
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4302 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4303 = data
  i4302.hashCode = i4303[0]
  request.r(i4303[1], i4303[2], 0, i4302, 'material')
  i4302.materialHashCode = i4303[3]
  request.r(i4303[4], i4303[5], 0, i4302, 'spriteSheet')
  var i4305 = i4303[6]
  var i4304 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4305.length; i += 1) {
    i4304.add(request.d('TMPro.TMP_Sprite', i4305[i + 0]));
  }
  i4302.spriteInfoList = i4304
  var i4307 = i4303[7]
  var i4306 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4307.length; i += 2) {
  request.r(i4307[i + 0], i4307[i + 1], 1, i4306, '')
  }
  i4302.fallbackSpriteAssets = i4306
  i4302.m_Version = i4303[8]
  i4302.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4303[9], i4302.m_FaceInfo)
  var i4309 = i4303[10]
  var i4308 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4309.length; i += 1) {
    i4308.add(request.d('TMPro.TMP_SpriteCharacter', i4309[i + 0]));
  }
  i4302.m_SpriteCharacterTable = i4308
  var i4311 = i4303[11]
  var i4310 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4311.length; i += 1) {
    i4310.add(request.d('TMPro.TMP_SpriteGlyph', i4311[i + 0]));
  }
  i4302.m_SpriteGlyphTable = i4310
  return i4302
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4314 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4315 = data
  i4314.name = i4315[0]
  i4314.hashCode = i4315[1]
  i4314.unicode = i4315[2]
  i4314.pivot = new pc.Vec2( i4315[3], i4315[4] )
  request.r(i4315[5], i4315[6], 0, i4314, 'sprite')
  i4314.id = i4315[7]
  i4314.x = i4315[8]
  i4314.y = i4315[9]
  i4314.width = i4315[10]
  i4314.height = i4315[11]
  i4314.xOffset = i4315[12]
  i4314.yOffset = i4315[13]
  i4314.xAdvance = i4315[14]
  i4314.scale = i4315[15]
  return i4314
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4320 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4321 = data
  i4320.m_Name = i4321[0]
  i4320.m_HashCode = i4321[1]
  i4320.m_ElementType = i4321[2]
  i4320.m_Unicode = i4321[3]
  i4320.m_GlyphIndex = i4321[4]
  i4320.m_Scale = i4321[5]
  return i4320
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4324 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4325 = data
  request.r(i4325[0], i4325[1], 0, i4324, 'sprite')
  i4324.m_Index = i4325[2]
  i4324.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4325[3], i4324.m_Metrics)
  i4324.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4325[4], i4324.m_GlyphRect)
  i4324.m_Scale = i4325[5]
  i4324.m_AtlasIndex = i4325[6]
  i4324.m_ClassDefinitionType = i4325[7]
  return i4324
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4326 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4327 = data
  var i4329 = i4327[0]
  var i4328 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4329.length; i += 1) {
    i4328.add(request.d('TMPro.TMP_Style', i4329[i + 0]));
  }
  i4326.m_StyleList = i4328
  return i4326
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4332 = root || request.c( 'TMPro.TMP_Style' )
  var i4333 = data
  i4332.m_Name = i4333[0]
  i4332.m_HashCode = i4333[1]
  i4332.m_OpeningDefinition = i4333[2]
  i4332.m_ClosingDefinition = i4333[3]
  i4332.m_OpeningTagArray = i4333[4]
  i4332.m_ClosingTagArray = i4333[5]
  i4332.m_OpeningTagUnicodeArray = i4333[6]
  i4332.m_ClosingTagUnicodeArray = i4333[7]
  return i4332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4335 = data
  var i4337 = i4335[0]
  var i4336 = []
  for(var i = 0; i < i4337.length; i += 1) {
    i4336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4337[i + 0]) );
  }
  i4334.files = i4336
  i4334.componentToPrefabIds = i4335[1]
  return i4334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4341 = data
  i4340.path = i4341[0]
  request.r(i4341[1], i4341[2], 0, i4340, 'unityObject')
  return i4340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4343 = data
  var i4345 = i4343[0]
  var i4344 = []
  for(var i = 0; i < i4345.length; i += 1) {
    i4344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4345[i + 0]) );
  }
  i4342.scriptsExecutionOrder = i4344
  var i4347 = i4343[1]
  var i4346 = []
  for(var i = 0; i < i4347.length; i += 1) {
    i4346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4347[i + 0]) );
  }
  i4342.sortingLayers = i4346
  var i4349 = i4343[2]
  var i4348 = []
  for(var i = 0; i < i4349.length; i += 1) {
    i4348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4349[i + 0]) );
  }
  i4342.cullingLayers = i4348
  i4342.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4343[3], i4342.timeSettings)
  i4342.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4343[4], i4342.physicsSettings)
  i4342.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4343[5], i4342.physics2DSettings)
  i4342.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4343[6], i4342.qualitySettings)
  i4342.enableRealtimeShadows = !!i4343[7]
  i4342.enableAutoInstancing = !!i4343[8]
  i4342.enableDynamicBatching = !!i4343[9]
  i4342.lightmapEncodingQuality = i4343[10]
  i4342.desiredColorSpace = i4343[11]
  var i4351 = i4343[12]
  var i4350 = []
  for(var i = 0; i < i4351.length; i += 1) {
    i4350.push( i4351[i + 0] );
  }
  i4342.allTags = i4350
  return i4342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4355 = data
  i4354.name = i4355[0]
  i4354.value = i4355[1]
  return i4354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4359 = data
  i4358.id = i4359[0]
  i4358.name = i4359[1]
  i4358.value = i4359[2]
  return i4358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4363 = data
  i4362.id = i4363[0]
  i4362.name = i4363[1]
  return i4362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4365 = data
  i4364.fixedDeltaTime = i4365[0]
  i4364.maximumDeltaTime = i4365[1]
  i4364.timeScale = i4365[2]
  i4364.maximumParticleTimestep = i4365[3]
  return i4364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4367 = data
  i4366.gravity = new pc.Vec3( i4367[0], i4367[1], i4367[2] )
  i4366.defaultSolverIterations = i4367[3]
  i4366.bounceThreshold = i4367[4]
  i4366.autoSyncTransforms = !!i4367[5]
  i4366.autoSimulation = !!i4367[6]
  var i4369 = i4367[7]
  var i4368 = []
  for(var i = 0; i < i4369.length; i += 1) {
    i4368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4369[i + 0]) );
  }
  i4366.collisionMatrix = i4368
  return i4366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4373 = data
  i4372.enabled = !!i4373[0]
  i4372.layerId = i4373[1]
  i4372.otherLayerId = i4373[2]
  return i4372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4375 = data
  request.r(i4375[0], i4375[1], 0, i4374, 'material')
  i4374.gravity = new pc.Vec2( i4375[2], i4375[3] )
  i4374.positionIterations = i4375[4]
  i4374.velocityIterations = i4375[5]
  i4374.velocityThreshold = i4375[6]
  i4374.maxLinearCorrection = i4375[7]
  i4374.maxAngularCorrection = i4375[8]
  i4374.maxTranslationSpeed = i4375[9]
  i4374.maxRotationSpeed = i4375[10]
  i4374.baumgarteScale = i4375[11]
  i4374.baumgarteTOIScale = i4375[12]
  i4374.timeToSleep = i4375[13]
  i4374.linearSleepTolerance = i4375[14]
  i4374.angularSleepTolerance = i4375[15]
  i4374.defaultContactOffset = i4375[16]
  i4374.autoSimulation = !!i4375[17]
  i4374.queriesHitTriggers = !!i4375[18]
  i4374.queriesStartInColliders = !!i4375[19]
  i4374.callbacksOnDisable = !!i4375[20]
  i4374.reuseCollisionCallbacks = !!i4375[21]
  i4374.autoSyncTransforms = !!i4375[22]
  var i4377 = i4375[23]
  var i4376 = []
  for(var i = 0; i < i4377.length; i += 1) {
    i4376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4377[i + 0]) );
  }
  i4374.collisionMatrix = i4376
  return i4374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4381 = data
  i4380.enabled = !!i4381[0]
  i4380.layerId = i4381[1]
  i4380.otherLayerId = i4381[2]
  return i4380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4383 = data
  var i4385 = i4383[0]
  var i4384 = []
  for(var i = 0; i < i4385.length; i += 1) {
    i4384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4385[i + 0]) );
  }
  i4382.qualityLevels = i4384
  var i4387 = i4383[1]
  var i4386 = []
  for(var i = 0; i < i4387.length; i += 1) {
    i4386.push( i4387[i + 0] );
  }
  i4382.names = i4386
  i4382.shadows = i4383[2]
  i4382.anisotropicFiltering = i4383[3]
  i4382.antiAliasing = i4383[4]
  i4382.lodBias = i4383[5]
  i4382.shadowCascades = i4383[6]
  i4382.shadowDistance = i4383[7]
  i4382.shadowmaskMode = i4383[8]
  i4382.shadowProjection = i4383[9]
  i4382.shadowResolution = i4383[10]
  i4382.softParticles = !!i4383[11]
  i4382.softVegetation = !!i4383[12]
  i4382.activeColorSpace = i4383[13]
  i4382.desiredColorSpace = i4383[14]
  i4382.masterTextureLimit = i4383[15]
  i4382.maxQueuedFrames = i4383[16]
  i4382.particleRaycastBudget = i4383[17]
  i4382.pixelLightCount = i4383[18]
  i4382.realtimeReflectionProbes = !!i4383[19]
  i4382.shadowCascade2Split = i4383[20]
  i4382.shadowCascade4Split = new pc.Vec3( i4383[21], i4383[22], i4383[23] )
  i4382.streamingMipmapsActive = !!i4383[24]
  i4382.vSyncCount = i4383[25]
  i4382.asyncUploadBufferSize = i4383[26]
  i4382.asyncUploadTimeSlice = i4383[27]
  i4382.billboardsFaceCameraPosition = !!i4383[28]
  i4382.shadowNearPlaneOffset = i4383[29]
  i4382.streamingMipmapsMemoryBudget = i4383[30]
  i4382.maximumLODLevel = i4383[31]
  i4382.streamingMipmapsAddAllCameras = !!i4383[32]
  i4382.streamingMipmapsMaxLevelReduction = i4383[33]
  i4382.streamingMipmapsRenderersPerFrame = i4383[34]
  i4382.resolutionScalingFixedDPIFactor = i4383[35]
  i4382.streamingMipmapsMaxFileIORequests = i4383[36]
  i4382.currentQualityLevel = i4383[37]
  return i4382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4393 = data
  i4392.mode = i4393[0]
  i4392.parameter = i4393[1]
  i4392.threshold = i4393[2]
  return i4392
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4394 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4395 = data
  i4394.xPlacement = i4395[0]
  i4394.yPlacement = i4395[1]
  i4394.xAdvance = i4395[2]
  i4394.yAdvance = i4395[3]
  return i4394
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4396 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i4397 = data
  i4396.m_GlyphIndex = i4397[0]
  i4396.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i4397[1], i4396.m_GlyphValueRecord)
  return i4396
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i4398 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i4399 = data
  i4398.m_XPlacement = i4399[0]
  i4398.m_YPlacement = i4399[1]
  i4398.m_XAdvance = i4399[2]
  i4398.m_YAdvance = i4399[3]
  return i4398
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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4365";

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

Deserializers.buildID = "9d5448ba-792b-4cc3-92a9-e52c9fc437a0";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

