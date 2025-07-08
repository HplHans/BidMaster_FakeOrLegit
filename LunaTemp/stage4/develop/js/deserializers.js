var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1608 = root || request.c( 'UnityEngine.JointSpring' )
  var i1609 = data
  i1608.spring = i1609[0]
  i1608.damper = i1609[1]
  i1608.targetPosition = i1609[2]
  return i1608
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1610 = root || request.c( 'UnityEngine.JointMotor' )
  var i1611 = data
  i1610.m_TargetVelocity = i1611[0]
  i1610.m_Force = i1611[1]
  i1610.m_FreeSpin = i1611[2]
  return i1610
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1612 = root || request.c( 'UnityEngine.JointLimits' )
  var i1613 = data
  i1612.m_Min = i1613[0]
  i1612.m_Max = i1613[1]
  i1612.m_Bounciness = i1613[2]
  i1612.m_BounceMinVelocity = i1613[3]
  i1612.m_ContactDistance = i1613[4]
  i1612.minBounce = i1613[5]
  i1612.maxBounce = i1613[6]
  return i1612
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1614 = root || request.c( 'UnityEngine.JointDrive' )
  var i1615 = data
  i1614.m_PositionSpring = i1615[0]
  i1614.m_PositionDamper = i1615[1]
  i1614.m_MaximumForce = i1615[2]
  i1614.m_UseAcceleration = i1615[3]
  return i1614
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1616 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1617 = data
  i1616.m_Spring = i1617[0]
  i1616.m_Damper = i1617[1]
  return i1616
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1618 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1619 = data
  i1618.m_Limit = i1619[0]
  i1618.m_Bounciness = i1619[1]
  i1618.m_ContactDistance = i1619[2]
  return i1618
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1620 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1621 = data
  i1620.m_ExtremumSlip = i1621[0]
  i1620.m_ExtremumValue = i1621[1]
  i1620.m_AsymptoteSlip = i1621[2]
  i1620.m_AsymptoteValue = i1621[3]
  i1620.m_Stiffness = i1621[4]
  return i1620
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1622 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1623 = data
  i1622.m_LowerAngle = i1623[0]
  i1622.m_UpperAngle = i1623[1]
  return i1622
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1624 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1625 = data
  i1624.m_MotorSpeed = i1625[0]
  i1624.m_MaximumMotorTorque = i1625[1]
  return i1624
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1626 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1627 = data
  i1626.m_DampingRatio = i1627[0]
  i1626.m_Frequency = i1627[1]
  i1626.m_Angle = i1627[2]
  return i1626
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1628 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1629 = data
  i1628.m_LowerTranslation = i1629[0]
  i1628.m_UpperTranslation = i1629[1]
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1630 = root || new pc.UnityMaterial()
  var i1631 = data
  i1630.name = i1631[0]
  request.r(i1631[1], i1631[2], 0, i1630, 'shader')
  i1630.renderQueue = i1631[3]
  i1630.enableInstancing = !!i1631[4]
  var i1633 = i1631[5]
  var i1632 = []
  for(var i = 0; i < i1633.length; i += 1) {
    i1632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1633[i + 0]) );
  }
  i1630.floatParameters = i1632
  var i1635 = i1631[6]
  var i1634 = []
  for(var i = 0; i < i1635.length; i += 1) {
    i1634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1635[i + 0]) );
  }
  i1630.colorParameters = i1634
  var i1637 = i1631[7]
  var i1636 = []
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1637[i + 0]) );
  }
  i1630.vectorParameters = i1636
  var i1639 = i1631[8]
  var i1638 = []
  for(var i = 0; i < i1639.length; i += 1) {
    i1638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1639[i + 0]) );
  }
  i1630.textureParameters = i1638
  var i1641 = i1631[9]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 1) {
    i1640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1641[i + 0]) );
  }
  i1630.materialFlags = i1640
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1645 = data
  i1644.name = i1645[0]
  i1644.value = i1645[1]
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1649 = data
  i1648.name = i1649[0]
  i1648.value = new pc.Color(i1649[1], i1649[2], i1649[3], i1649[4])
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1653 = data
  i1652.name = i1653[0]
  i1652.value = new pc.Vec4( i1653[1], i1653[2], i1653[3], i1653[4] )
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1657 = data
  i1656.name = i1657[0]
  request.r(i1657[1], i1657[2], 0, i1656, 'value')
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1661 = data
  i1660.name = i1661[0]
  i1660.enabled = !!i1661[1]
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1663 = data
  i1662.name = i1663[0]
  i1662.width = i1663[1]
  i1662.height = i1663[2]
  i1662.mipmapCount = i1663[3]
  i1662.anisoLevel = i1663[4]
  i1662.filterMode = i1663[5]
  i1662.hdr = !!i1663[6]
  i1662.format = i1663[7]
  i1662.wrapMode = i1663[8]
  i1662.alphaIsTransparency = !!i1663[9]
  i1662.alphaSource = i1663[10]
  i1662.graphicsFormat = i1663[11]
  i1662.sRGBTexture = !!i1663[12]
  i1662.desiredColorSpace = i1663[13]
  i1662.wrapU = i1663[14]
  i1662.wrapV = i1663[15]
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1665 = data
  i1664.name = i1665[0]
  i1664.atlasId = i1665[1]
  i1664.mipmapCount = i1665[2]
  i1664.hdr = !!i1665[3]
  i1664.size = i1665[4]
  i1664.anisoLevel = i1665[5]
  i1664.filterMode = i1665[6]
  var i1667 = i1665[7]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 4) {
    i1666.push( UnityEngine.Rect.MinMaxRect(i1667[i + 0], i1667[i + 1], i1667[i + 2], i1667[i + 3]) );
  }
  i1664.rects = i1666
  i1664.wrapU = i1665[8]
  i1664.wrapV = i1665[9]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1671 = data
  i1670.name = i1671[0]
  i1670.index = i1671[1]
  i1670.startup = !!i1671[2]
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1673 = data
  i1672.position = new pc.Vec3( i1673[0], i1673[1], i1673[2] )
  i1672.scale = new pc.Vec3( i1673[3], i1673[4], i1673[5] )
  i1672.rotation = new pc.Quat(i1673[6], i1673[7], i1673[8], i1673[9])
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1675 = data
  i1674.enabled = !!i1675[0]
  i1674.aspect = i1675[1]
  i1674.orthographic = !!i1675[2]
  i1674.orthographicSize = i1675[3]
  i1674.backgroundColor = new pc.Color(i1675[4], i1675[5], i1675[6], i1675[7])
  i1674.nearClipPlane = i1675[8]
  i1674.farClipPlane = i1675[9]
  i1674.fieldOfView = i1675[10]
  i1674.depth = i1675[11]
  i1674.clearFlags = i1675[12]
  i1674.cullingMask = i1675[13]
  i1674.rect = i1675[14]
  request.r(i1675[15], i1675[16], 0, i1674, 'targetTexture')
  i1674.usePhysicalProperties = !!i1675[17]
  i1674.focalLength = i1675[18]
  i1674.sensorSize = new pc.Vec2( i1675[19], i1675[20] )
  i1674.lensShift = new pc.Vec2( i1675[21], i1675[22] )
  i1674.gateFit = i1675[23]
  i1674.commandBufferCount = i1675[24]
  i1674.cameraType = i1675[25]
  return i1674
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i1676 = root || request.c( 'CameraAspectFitter' )
  var i1677 = data
  request.r(i1677[0], i1677[1], 0, i1676, 'targetSprite')
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1679 = data
  i1678.name = i1679[0]
  i1678.tagId = i1679[1]
  i1678.enabled = !!i1679[2]
  i1678.isStatic = !!i1679[3]
  i1678.layer = i1679[4]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1681 = data
  i1680.enabled = !!i1681[0]
  i1680.type = i1681[1]
  i1680.color = new pc.Color(i1681[2], i1681[3], i1681[4], i1681[5])
  i1680.cullingMask = i1681[6]
  i1680.intensity = i1681[7]
  i1680.range = i1681[8]
  i1680.spotAngle = i1681[9]
  i1680.shadows = i1681[10]
  i1680.shadowNormalBias = i1681[11]
  i1680.shadowBias = i1681[12]
  i1680.shadowStrength = i1681[13]
  i1680.shadowResolution = i1681[14]
  i1680.lightmapBakeType = i1681[15]
  i1680.renderMode = i1681[16]
  request.r(i1681[17], i1681[18], 0, i1680, 'cookie')
  i1680.cookieSize = i1681[19]
  return i1680
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1682 = root || request.c( 'GameManager' )
  var i1683 = data
  request.r(i1683[0], i1683[1], 0, i1682, 'endPanel')
  request.r(i1683[2], i1683[3], 0, i1682, 'endPanelAnimator')
  request.r(i1683[4], i1683[5], 0, i1682, 'scoreTxt')
  i1682.end = !!i1683[6]
  i1682.endPlay = !!i1683[7]
  request.r(i1683[8], i1683[9], 0, i1682, 'hand')
  request.r(i1683[10], i1683[11], 0, i1682, 'message2')
  request.r(i1683[12], i1683[13], 0, i1682, 'animator')
  i1682.enableSound = !!i1683[14]
  var i1685 = i1683[15]
  var i1684 = new (System.Collections.Generic.List$1(Bridge.ns('DataObject')))
  for(var i = 0; i < i1685.length; i += 2) {
  request.r(i1685[i + 0], i1685[i + 1], 1, i1684, '')
  }
  i1682.items = i1684
  i1682.level = i1683[16]
  i1682.animPos = i1683[17]
  request.r(i1683[18], i1683[19], 0, i1682, 'itemsParent')
  request.r(i1683[20], i1683[21], 0, i1682, 'startClickHandler')
  i1682.itemValue = i1683[22]
  var i1687 = i1683[23]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 2) {
  request.r(i1687[i + 0], i1687[i + 1], 2, i1686, '')
  }
  i1682.biddersBubble = i1686
  request.r(i1683[24], i1683[25], 0, i1682, 'btnGroup')
  request.r(i1683[26], i1683[27], 0, i1682, 'biddersLossTxt')
  request.r(i1683[28], i1683[29], 0, i1682, 'biddersLossPlus')
  request.r(i1683[30], i1683[31], 0, i1682, 'playersLoss')
  request.r(i1683[32], i1683[33], 0, i1682, 'playersPlus')
  request.r(i1683[34], i1683[35], 0, i1682, 'AuthenticImg')
  request.r(i1683[36], i1683[37], 0, i1682, 'profitImg')
  request.r(i1683[38], i1683[39], 0, i1682, 'cashTxt')
  request.r(i1683[40], i1683[41], 0, i1682, 'failBidCanvas')
  request.r(i1683[42], i1683[43], 0, i1682, 'failPassCanvas')
  i1682.win = !!i1683[44]
  i1682.fail = !!i1683[45]
  i1682.bidFail = !!i1683[46]
  i1682.passFail = !!i1683[47]
  i1682.currentScore = i1683[48]
  return i1682
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i1692 = root || request.c( 'TaskManager' )
  var i1693 = data
  return i1692
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i1694 = root || request.c( 'AudioManager' )
  var i1695 = data
  request.r(i1695[0], i1695[1], 0, i1694, 'library')
  i1694.sfxPoolSize = i1695[2]
  i1694.enableSound = !!i1695[3]
  return i1694
}

Deserializers["DataManager"] = function (request, data, root) {
  var i1696 = root || request.c( 'DataManager' )
  var i1697 = data
  var i1699 = i1697[0]
  var i1698 = new (System.Collections.Generic.List$1(Bridge.ns('SingleDataEntry')))
  for(var i = 0; i < i1699.length; i += 1) {
    i1698.add(request.d('SingleDataEntry', i1699[i + 0]));
  }
  i1696.singleEntries = i1698
  var i1701 = i1697[1]
  var i1700 = new (System.Collections.Generic.List$1(Bridge.ns('ListDataEntry')))
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.add(request.d('ListDataEntry', i1701[i + 0]));
  }
  i1696.listEntries = i1700
  return i1696
}

Deserializers["SingleDataEntry"] = function (request, data, root) {
  var i1704 = root || request.c( 'SingleDataEntry' )
  var i1705 = data
  i1704.key = i1705[0]
  request.r(i1705[1], i1705[2], 0, i1704, 'value')
  return i1704
}

Deserializers["ListDataEntry"] = function (request, data, root) {
  var i1708 = root || request.c( 'ListDataEntry' )
  var i1709 = data
  i1708.key = i1709[0]
  var i1711 = i1709[1]
  var i1710 = new (System.Collections.Generic.List$1(Bridge.ns('DataObject')))
  for(var i = 0; i < i1711.length; i += 2) {
  request.r(i1711[i + 0], i1711[i + 1], 1, i1710, '')
  }
  i1708.values = i1710
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1713 = data
  i1712.enabled = !!i1713[0]
  request.r(i1713[1], i1713[2], 0, i1712, 'sharedMaterial')
  var i1715 = i1713[3]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 2) {
  request.r(i1715[i + 0], i1715[i + 1], 2, i1714, '')
  }
  i1712.sharedMaterials = i1714
  i1712.receiveShadows = !!i1713[4]
  i1712.shadowCastingMode = i1713[5]
  i1712.sortingLayerID = i1713[6]
  i1712.sortingOrder = i1713[7]
  i1712.lightmapIndex = i1713[8]
  i1712.lightmapSceneIndex = i1713[9]
  i1712.lightmapScaleOffset = new pc.Vec4( i1713[10], i1713[11], i1713[12], i1713[13] )
  i1712.lightProbeUsage = i1713[14]
  i1712.reflectionProbeUsage = i1713[15]
  i1712.color = new pc.Color(i1713[16], i1713[17], i1713[18], i1713[19])
  request.r(i1713[20], i1713[21], 0, i1712, 'sprite')
  i1712.flipX = !!i1713[22]
  i1712.flipY = !!i1713[23]
  i1712.drawMode = i1713[24]
  i1712.size = new pc.Vec2( i1713[25], i1713[26] )
  i1712.tileMode = i1713[27]
  i1712.adaptiveModeThreshold = i1713[28]
  i1712.maskInteraction = i1713[29]
  i1712.spriteSortPoint = i1713[30]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1719 = data
  i1718.pivot = new pc.Vec2( i1719[0], i1719[1] )
  i1718.anchorMin = new pc.Vec2( i1719[2], i1719[3] )
  i1718.anchorMax = new pc.Vec2( i1719[4], i1719[5] )
  i1718.sizeDelta = new pc.Vec2( i1719[6], i1719[7] )
  i1718.anchoredPosition3D = new pc.Vec3( i1719[8], i1719[9], i1719[10] )
  i1718.rotation = new pc.Quat(i1719[11], i1719[12], i1719[13], i1719[14])
  i1718.scale = new pc.Vec3( i1719[15], i1719[16], i1719[17] )
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1721 = data
  i1720.enabled = !!i1721[0]
  i1720.planeDistance = i1721[1]
  i1720.referencePixelsPerUnit = i1721[2]
  i1720.isFallbackOverlay = !!i1721[3]
  i1720.renderMode = i1721[4]
  i1720.renderOrder = i1721[5]
  i1720.sortingLayerName = i1721[6]
  i1720.sortingOrder = i1721[7]
  i1720.scaleFactor = i1721[8]
  request.r(i1721[9], i1721[10], 0, i1720, 'worldCamera')
  i1720.overrideSorting = !!i1721[11]
  i1720.pixelPerfect = !!i1721[12]
  i1720.targetDisplay = i1721[13]
  i1720.overridePixelPerfect = !!i1721[14]
  return i1720
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1722 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1723 = data
  i1722.m_UiScaleMode = i1723[0]
  i1722.m_ReferencePixelsPerUnit = i1723[1]
  i1722.m_ScaleFactor = i1723[2]
  i1722.m_ReferenceResolution = new pc.Vec2( i1723[3], i1723[4] )
  i1722.m_ScreenMatchMode = i1723[5]
  i1722.m_MatchWidthOrHeight = i1723[6]
  i1722.m_PhysicalUnit = i1723[7]
  i1722.m_FallbackScreenDPI = i1723[8]
  i1722.m_DefaultSpriteDPI = i1723[9]
  i1722.m_DynamicPixelsPerUnit = i1723[10]
  i1722.m_PresetInfoIsWorld = !!i1723[11]
  return i1722
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1724 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1725 = data
  i1724.m_IgnoreReversedGraphics = !!i1725[0]
  i1724.m_BlockingObjects = i1725[1]
  i1724.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1725[2] )
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1727 = data
  i1726.cullTransparentMesh = !!i1727[0]
  return i1726
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1728 = root || request.c( 'UnityEngine.UI.Image' )
  var i1729 = data
  request.r(i1729[0], i1729[1], 0, i1728, 'm_Sprite')
  i1728.m_Type = i1729[2]
  i1728.m_PreserveAspect = !!i1729[3]
  i1728.m_FillCenter = !!i1729[4]
  i1728.m_FillMethod = i1729[5]
  i1728.m_FillAmount = i1729[6]
  i1728.m_FillClockwise = !!i1729[7]
  i1728.m_FillOrigin = i1729[8]
  i1728.m_UseSpriteMesh = !!i1729[9]
  i1728.m_PixelsPerUnitMultiplier = i1729[10]
  request.r(i1729[11], i1729[12], 0, i1728, 'm_Material')
  i1728.m_Maskable = !!i1729[13]
  i1728.m_Color = new pc.Color(i1729[14], i1729[15], i1729[16], i1729[17])
  i1728.m_RaycastTarget = !!i1729[18]
  i1728.m_RaycastPadding = new pc.Vec4( i1729[19], i1729[20], i1729[21], i1729[22] )
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1731 = data
  i1730.m_Alpha = i1731[0]
  i1730.m_Interactable = !!i1731[1]
  i1730.m_BlocksRaycasts = !!i1731[2]
  i1730.m_IgnoreParentGroups = !!i1731[3]
  i1730.enabled = !!i1731[4]
  return i1730
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i1732 = root || request.c( 'CanvasGroupAnimator' )
  var i1733 = data
  request.r(i1733[0], i1733[1], 0, i1732, 'canvasGroup')
  i1732.animateFade = !!i1733[2]
  i1732.triggerOnStart = !!i1733[3]
  i1732.isLooping = !!i1733[4]
  i1732.fadeTo = i1733[5]
  i1732.fadeDuration = i1733[6]
  i1732.fadeEaseType = i1733[7]
  return i1732
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1734 = root || request.c( 'UnityEngine.UI.Button' )
  var i1735 = data
  i1734.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1735[0], i1734.m_OnClick)
  i1734.m_Navigation = request.d('UnityEngine.UI.Navigation', i1735[1], i1734.m_Navigation)
  i1734.m_Transition = i1735[2]
  i1734.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1735[3], i1734.m_Colors)
  i1734.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1735[4], i1734.m_SpriteState)
  i1734.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1735[5], i1734.m_AnimationTriggers)
  i1734.m_Interactable = !!i1735[6]
  request.r(i1735[7], i1735[8], 0, i1734, 'm_TargetGraphic')
  return i1734
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1736 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1737 = data
  i1736.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1737[0], i1736.m_PersistentCalls)
  return i1736
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1738 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1739 = data
  var i1741 = i1739[0]
  var i1740 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1741.length; i += 1) {
    i1740.add(request.d('UnityEngine.Events.PersistentCall', i1741[i + 0]));
  }
  i1738.m_Calls = i1740
  return i1738
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1744 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1745 = data
  request.r(i1745[0], i1745[1], 0, i1744, 'm_Target')
  i1744.m_TargetAssemblyTypeName = i1745[2]
  i1744.m_MethodName = i1745[3]
  i1744.m_Mode = i1745[4]
  i1744.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1745[5], i1744.m_Arguments)
  i1744.m_CallState = i1745[6]
  return i1744
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1746 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1747 = data
  request.r(i1747[0], i1747[1], 0, i1746, 'm_ObjectArgument')
  i1746.m_ObjectArgumentAssemblyTypeName = i1747[2]
  i1746.m_IntArgument = i1747[3]
  i1746.m_FloatArgument = i1747[4]
  i1746.m_StringArgument = i1747[5]
  i1746.m_BoolArgument = !!i1747[6]
  return i1746
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1748 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1749 = data
  i1748.m_Mode = i1749[0]
  i1748.m_WrapAround = !!i1749[1]
  request.r(i1749[2], i1749[3], 0, i1748, 'm_SelectOnUp')
  request.r(i1749[4], i1749[5], 0, i1748, 'm_SelectOnDown')
  request.r(i1749[6], i1749[7], 0, i1748, 'm_SelectOnLeft')
  request.r(i1749[8], i1749[9], 0, i1748, 'm_SelectOnRight')
  return i1748
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1750 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1751 = data
  i1750.m_NormalColor = new pc.Color(i1751[0], i1751[1], i1751[2], i1751[3])
  i1750.m_HighlightedColor = new pc.Color(i1751[4], i1751[5], i1751[6], i1751[7])
  i1750.m_PressedColor = new pc.Color(i1751[8], i1751[9], i1751[10], i1751[11])
  i1750.m_SelectedColor = new pc.Color(i1751[12], i1751[13], i1751[14], i1751[15])
  i1750.m_DisabledColor = new pc.Color(i1751[16], i1751[17], i1751[18], i1751[19])
  i1750.m_ColorMultiplier = i1751[20]
  i1750.m_FadeDuration = i1751[21]
  return i1750
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1752 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1753 = data
  request.r(i1753[0], i1753[1], 0, i1752, 'm_HighlightedSprite')
  request.r(i1753[2], i1753[3], 0, i1752, 'm_PressedSprite')
  request.r(i1753[4], i1753[5], 0, i1752, 'm_SelectedSprite')
  request.r(i1753[6], i1753[7], 0, i1752, 'm_DisabledSprite')
  return i1752
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1754 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1755 = data
  i1754.m_NormalTrigger = i1755[0]
  i1754.m_HighlightedTrigger = i1755[1]
  i1754.m_PressedTrigger = i1755[2]
  i1754.m_SelectedTrigger = i1755[3]
  i1754.m_DisabledTrigger = i1755[4]
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1757 = data
  request.r(i1757[0], i1757[1], 0, i1756, 'animatorController')
  request.r(i1757[2], i1757[3], 0, i1756, 'avatar')
  i1756.updateMode = i1757[4]
  i1756.hasTransformHierarchy = !!i1757[5]
  i1756.applyRootMotion = !!i1757[6]
  var i1759 = i1757[7]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 2) {
  request.r(i1759[i + 0], i1759[i + 1], 2, i1758, '')
  }
  i1756.humanBones = i1758
  i1756.enabled = !!i1757[8]
  return i1756
}

Deserializers["PromtPopUp"] = function (request, data, root) {
  var i1762 = root || request.c( 'PromtPopUp' )
  var i1763 = data
  i1762.DestroyGameObject = !!i1763[0]
  return i1762
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1764 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1765 = data
  i1764.m_hasFontAssetChanged = !!i1765[0]
  request.r(i1765[1], i1765[2], 0, i1764, 'm_baseMaterial')
  i1764.m_maskOffset = new pc.Vec4( i1765[3], i1765[4], i1765[5], i1765[6] )
  i1764.m_text = i1765[7]
  i1764.m_isRightToLeft = !!i1765[8]
  request.r(i1765[9], i1765[10], 0, i1764, 'm_fontAsset')
  request.r(i1765[11], i1765[12], 0, i1764, 'm_sharedMaterial')
  var i1767 = i1765[13]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 2) {
  request.r(i1767[i + 0], i1767[i + 1], 2, i1766, '')
  }
  i1764.m_fontSharedMaterials = i1766
  request.r(i1765[14], i1765[15], 0, i1764, 'm_fontMaterial')
  var i1769 = i1765[16]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 2) {
  request.r(i1769[i + 0], i1769[i + 1], 2, i1768, '')
  }
  i1764.m_fontMaterials = i1768
  i1764.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1765[17], i1765[18], i1765[19], i1765[20])
  i1764.m_fontColor = new pc.Color(i1765[21], i1765[22], i1765[23], i1765[24])
  i1764.m_enableVertexGradient = !!i1765[25]
  i1764.m_colorMode = i1765[26]
  i1764.m_fontColorGradient = request.d('TMPro.VertexGradient', i1765[27], i1764.m_fontColorGradient)
  request.r(i1765[28], i1765[29], 0, i1764, 'm_fontColorGradientPreset')
  request.r(i1765[30], i1765[31], 0, i1764, 'm_spriteAsset')
  i1764.m_tintAllSprites = !!i1765[32]
  request.r(i1765[33], i1765[34], 0, i1764, 'm_StyleSheet')
  i1764.m_TextStyleHashCode = i1765[35]
  i1764.m_overrideHtmlColors = !!i1765[36]
  i1764.m_faceColor = UnityEngine.Color32.ConstructColor(i1765[37], i1765[38], i1765[39], i1765[40])
  i1764.m_fontSize = i1765[41]
  i1764.m_fontSizeBase = i1765[42]
  i1764.m_fontWeight = i1765[43]
  i1764.m_enableAutoSizing = !!i1765[44]
  i1764.m_fontSizeMin = i1765[45]
  i1764.m_fontSizeMax = i1765[46]
  i1764.m_fontStyle = i1765[47]
  i1764.m_HorizontalAlignment = i1765[48]
  i1764.m_VerticalAlignment = i1765[49]
  i1764.m_textAlignment = i1765[50]
  i1764.m_characterSpacing = i1765[51]
  i1764.m_wordSpacing = i1765[52]
  i1764.m_lineSpacing = i1765[53]
  i1764.m_lineSpacingMax = i1765[54]
  i1764.m_paragraphSpacing = i1765[55]
  i1764.m_charWidthMaxAdj = i1765[56]
  i1764.m_enableWordWrapping = !!i1765[57]
  i1764.m_wordWrappingRatios = i1765[58]
  i1764.m_overflowMode = i1765[59]
  request.r(i1765[60], i1765[61], 0, i1764, 'm_linkedTextComponent')
  request.r(i1765[62], i1765[63], 0, i1764, 'parentLinkedComponent')
  i1764.m_enableKerning = !!i1765[64]
  i1764.m_enableExtraPadding = !!i1765[65]
  i1764.checkPaddingRequired = !!i1765[66]
  i1764.m_isRichText = !!i1765[67]
  i1764.m_parseCtrlCharacters = !!i1765[68]
  i1764.m_isOrthographic = !!i1765[69]
  i1764.m_isCullingEnabled = !!i1765[70]
  i1764.m_horizontalMapping = i1765[71]
  i1764.m_verticalMapping = i1765[72]
  i1764.m_uvLineOffset = i1765[73]
  i1764.m_geometrySortingOrder = i1765[74]
  i1764.m_IsTextObjectScaleStatic = !!i1765[75]
  i1764.m_VertexBufferAutoSizeReduction = !!i1765[76]
  i1764.m_useMaxVisibleDescender = !!i1765[77]
  i1764.m_pageToDisplay = i1765[78]
  i1764.m_margin = new pc.Vec4( i1765[79], i1765[80], i1765[81], i1765[82] )
  i1764.m_isUsingLegacyAnimationComponent = !!i1765[83]
  i1764.m_isVolumetricText = !!i1765[84]
  request.r(i1765[85], i1765[86], 0, i1764, 'm_Material')
  i1764.m_Maskable = !!i1765[87]
  i1764.m_Color = new pc.Color(i1765[88], i1765[89], i1765[90], i1765[91])
  i1764.m_RaycastTarget = !!i1765[92]
  i1764.m_RaycastPadding = new pc.Vec4( i1765[93], i1765[94], i1765[95], i1765[96] )
  return i1764
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1770 = root || request.c( 'TMPro.VertexGradient' )
  var i1771 = data
  i1770.topLeft = new pc.Color(i1771[0], i1771[1], i1771[2], i1771[3])
  i1770.topRight = new pc.Color(i1771[4], i1771[5], i1771[6], i1771[7])
  i1770.bottomLeft = new pc.Color(i1771[8], i1771[9], i1771[10], i1771[11])
  i1770.bottomRight = new pc.Color(i1771[12], i1771[13], i1771[14], i1771[15])
  return i1770
}

Deserializers["FloatingTextEffect"] = function (request, data, root) {
  var i1772 = root || request.c( 'FloatingTextEffect' )
  var i1773 = data
  request.r(i1773[0], i1773[1], 0, i1772, 'textMeshProUGUI')
  request.r(i1773[2], i1773[3], 0, i1772, 'textMeshPro')
  i1772.floatDistance = i1773[4]
  i1772.duration = i1773[5]
  return i1772
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1774 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1775 = data
  request.r(i1775[0], i1775[1], 0, i1774, 'm_FirstSelected')
  i1774.m_sendNavigationEvents = !!i1775[2]
  i1774.m_DragThreshold = i1775[3]
  return i1774
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1776 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1777 = data
  i1776.m_HorizontalAxis = i1777[0]
  i1776.m_VerticalAxis = i1777[1]
  i1776.m_SubmitButton = i1777[2]
  i1776.m_CancelButton = i1777[3]
  i1776.m_InputActionsPerSecond = i1777[4]
  i1776.m_RepeatDelay = i1777[5]
  i1776.m_ForceModuleActive = !!i1777[6]
  i1776.m_SendPointerHoverToParent = !!i1777[7]
  return i1776
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i1778 = root || request.c( 'ButtonPulse' )
  var i1779 = data
  i1778.scaleAmount = i1779[0]
  i1778.pulseDuration = i1779[1]
  return i1778
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i1780 = root || request.c( 'StartClickHandler' )
  var i1781 = data
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1783 = data
  i1782.ambientIntensity = i1783[0]
  i1782.reflectionIntensity = i1783[1]
  i1782.ambientMode = i1783[2]
  i1782.ambientLight = new pc.Color(i1783[3], i1783[4], i1783[5], i1783[6])
  i1782.ambientSkyColor = new pc.Color(i1783[7], i1783[8], i1783[9], i1783[10])
  i1782.ambientGroundColor = new pc.Color(i1783[11], i1783[12], i1783[13], i1783[14])
  i1782.ambientEquatorColor = new pc.Color(i1783[15], i1783[16], i1783[17], i1783[18])
  i1782.fogColor = new pc.Color(i1783[19], i1783[20], i1783[21], i1783[22])
  i1782.fogEndDistance = i1783[23]
  i1782.fogStartDistance = i1783[24]
  i1782.fogDensity = i1783[25]
  i1782.fog = !!i1783[26]
  request.r(i1783[27], i1783[28], 0, i1782, 'skybox')
  i1782.fogMode = i1783[29]
  var i1785 = i1783[30]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1785[i + 0]) );
  }
  i1782.lightmaps = i1784
  i1782.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1783[31], i1782.lightProbes)
  i1782.lightmapsMode = i1783[32]
  i1782.mixedBakeMode = i1783[33]
  i1782.environmentLightingMode = i1783[34]
  i1782.ambientProbe = new pc.SphericalHarmonicsL2(i1783[35])
  i1782.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1783[36])
  i1782.useReferenceAmbientProbe = !!i1783[37]
  request.r(i1783[38], i1783[39], 0, i1782, 'customReflection')
  request.r(i1783[40], i1783[41], 0, i1782, 'defaultReflection')
  i1782.defaultReflectionMode = i1783[42]
  i1782.defaultReflectionResolution = i1783[43]
  i1782.sunLightObjectId = i1783[44]
  i1782.pixelLightCount = i1783[45]
  i1782.defaultReflectionHDR = !!i1783[46]
  i1782.hasLightDataAsset = !!i1783[47]
  i1782.hasManualGenerate = !!i1783[48]
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1789 = data
  request.r(i1789[0], i1789[1], 0, i1788, 'lightmapColor')
  request.r(i1789[2], i1789[3], 0, i1788, 'lightmapDirection')
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1790 = root || new UnityEngine.LightProbes()
  var i1791 = data
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1799 = data
  var i1801 = i1799[0]
  var i1800 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1801.length; i += 1) {
    i1800.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1801[i + 0]));
  }
  i1798.ShaderCompilationErrors = i1800
  i1798.name = i1799[1]
  i1798.guid = i1799[2]
  var i1803 = i1799[3]
  var i1802 = []
  for(var i = 0; i < i1803.length; i += 1) {
    i1802.push( i1803[i + 0] );
  }
  i1798.shaderDefinedKeywords = i1802
  var i1805 = i1799[4]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1805[i + 0]) );
  }
  i1798.passes = i1804
  var i1807 = i1799[5]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1807[i + 0]) );
  }
  i1798.usePasses = i1806
  var i1809 = i1799[6]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1809[i + 0]) );
  }
  i1798.defaultParameterValues = i1808
  request.r(i1799[7], i1799[8], 0, i1798, 'unityFallbackShader')
  i1798.readDepth = !!i1799[9]
  i1798.isCreatedByShaderGraph = !!i1799[10]
  i1798.compiled = !!i1799[11]
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1813 = data
  i1812.shaderName = i1813[0]
  i1812.errorMessage = i1813[1]
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1818 = root || new pc.UnityShaderPass()
  var i1819 = data
  i1818.id = i1819[0]
  i1818.subShaderIndex = i1819[1]
  i1818.name = i1819[2]
  i1818.passType = i1819[3]
  i1818.grabPassTextureName = i1819[4]
  i1818.usePass = !!i1819[5]
  i1818.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1819[6], i1818.zTest)
  i1818.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1819[7], i1818.zWrite)
  i1818.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1819[8], i1818.culling)
  i1818.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1819[9], i1818.blending)
  i1818.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1819[10], i1818.alphaBlending)
  i1818.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1819[11], i1818.colorWriteMask)
  i1818.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1819[12], i1818.offsetUnits)
  i1818.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1819[13], i1818.offsetFactor)
  i1818.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1819[14], i1818.stencilRef)
  i1818.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1819[15], i1818.stencilReadMask)
  i1818.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1819[16], i1818.stencilWriteMask)
  i1818.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1819[17], i1818.stencilOp)
  i1818.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1819[18], i1818.stencilOpFront)
  i1818.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1819[19], i1818.stencilOpBack)
  var i1821 = i1819[20]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1821[i + 0]) );
  }
  i1818.tags = i1820
  var i1823 = i1819[21]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( i1823[i + 0] );
  }
  i1818.passDefinedKeywords = i1822
  var i1825 = i1819[22]
  var i1824 = []
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1825[i + 0]) );
  }
  i1818.passDefinedKeywordGroups = i1824
  var i1827 = i1819[23]
  var i1826 = []
  for(var i = 0; i < i1827.length; i += 1) {
    i1826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1827[i + 0]) );
  }
  i1818.variants = i1826
  var i1829 = i1819[24]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1829[i + 0]) );
  }
  i1818.excludedVariants = i1828
  i1818.hasDepthReader = !!i1819[25]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1831 = data
  i1830.val = i1831[0]
  i1830.name = i1831[1]
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1833 = data
  i1832.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1833[0], i1832.src)
  i1832.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1833[1], i1832.dst)
  i1832.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1833[2], i1832.op)
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1835 = data
  i1834.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1835[0], i1834.pass)
  i1834.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1835[1], i1834.fail)
  i1834.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1835[2], i1834.zFail)
  i1834.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1835[3], i1834.comp)
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1839 = data
  i1838.name = i1839[0]
  i1838.value = i1839[1]
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1843 = data
  var i1845 = i1843[0]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.push( i1845[i + 0] );
  }
  i1842.keywords = i1844
  i1842.hasDiscard = !!i1843[1]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1849 = data
  i1848.passId = i1849[0]
  i1848.subShaderIndex = i1849[1]
  var i1851 = i1849[2]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.push( i1851[i + 0] );
  }
  i1848.keywords = i1850
  i1848.vertexProgram = i1849[3]
  i1848.fragmentProgram = i1849[4]
  i1848.exportedForWebGl2 = !!i1849[5]
  i1848.readDepth = !!i1849[6]
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1855 = data
  request.r(i1855[0], i1855[1], 0, i1854, 'shader')
  i1854.pass = i1855[2]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1859 = data
  i1858.name = i1859[0]
  i1858.type = i1859[1]
  i1858.value = new pc.Vec4( i1859[2], i1859[3], i1859[4], i1859[5] )
  i1858.textureValue = i1859[6]
  i1858.shaderPropertyFlag = i1859[7]
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1861 = data
  i1860.name = i1861[0]
  request.r(i1861[1], i1861[2], 0, i1860, 'texture')
  i1860.aabb = i1861[3]
  i1860.vertices = i1861[4]
  i1860.triangles = i1861[5]
  i1860.textureRect = UnityEngine.Rect.MinMaxRect(i1861[6], i1861[7], i1861[8], i1861[9])
  i1860.packedRect = UnityEngine.Rect.MinMaxRect(i1861[10], i1861[11], i1861[12], i1861[13])
  i1860.border = new pc.Vec4( i1861[14], i1861[15], i1861[16], i1861[17] )
  i1860.transparency = i1861[18]
  i1860.bounds = i1861[19]
  i1860.pixelsPerUnit = i1861[20]
  i1860.textureWidth = i1861[21]
  i1860.textureHeight = i1861[22]
  i1860.nativeSize = new pc.Vec2( i1861[23], i1861[24] )
  i1860.pivot = new pc.Vec2( i1861[25], i1861[26] )
  i1860.textureRectOffset = new pc.Vec2( i1861[27], i1861[28] )
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1863 = data
  i1862.name = i1863[0]
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1865 = data
  i1864.name = i1865[0]
  i1864.wrapMode = i1865[1]
  i1864.isLooping = !!i1865[2]
  i1864.length = i1865[3]
  var i1867 = i1865[4]
  var i1866 = []
  for(var i = 0; i < i1867.length; i += 1) {
    i1866.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1867[i + 0]) );
  }
  i1864.curves = i1866
  var i1869 = i1865[5]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1869[i + 0]) );
  }
  i1864.events = i1868
  i1864.halfPrecision = !!i1865[6]
  i1864._frameRate = i1865[7]
  i1864.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1865[8], i1864.localBounds)
  i1864.hasMuscleCurves = !!i1865[9]
  var i1871 = i1865[10]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( i1871[i + 0] );
  }
  i1864.clipMuscleConstant = i1870
  i1864.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1865[11], i1864.clipBindingConstant)
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1875 = data
  i1874.path = i1875[0]
  i1874.hash = i1875[1]
  i1874.componentType = i1875[2]
  i1874.property = i1875[3]
  i1874.keys = i1875[4]
  var i1877 = i1875[5]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1877[i + 0]) );
  }
  i1874.objectReferenceKeys = i1876
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1881 = data
  i1880.time = i1881[0]
  request.r(i1881[1], i1881[2], 0, i1880, 'value')
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1885 = data
  i1884.functionName = i1885[0]
  i1884.floatParameter = i1885[1]
  i1884.intParameter = i1885[2]
  i1884.stringParameter = i1885[3]
  request.r(i1885[4], i1885[5], 0, i1884, 'objectReferenceParameter')
  i1884.time = i1885[6]
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1887 = data
  i1886.center = new pc.Vec3( i1887[0], i1887[1], i1887[2] )
  i1886.extends = new pc.Vec3( i1887[3], i1887[4], i1887[5] )
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1891 = data
  var i1893 = i1891[0]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.push( i1893[i + 0] );
  }
  i1890.genericBindings = i1892
  var i1895 = i1891[1]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( i1895[i + 0] );
  }
  i1890.pptrCurveMapping = i1894
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1897 = data
  i1896.name = i1897[0]
  i1896.ascent = i1897[1]
  i1896.originalLineHeight = i1897[2]
  i1896.fontSize = i1897[3]
  var i1899 = i1897[4]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1899[i + 0]) );
  }
  i1896.characterInfo = i1898
  request.r(i1897[5], i1897[6], 0, i1896, 'texture')
  i1896.originalFontSize = i1897[7]
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1903 = data
  i1902.index = i1903[0]
  i1902.advance = i1903[1]
  i1902.bearing = i1903[2]
  i1902.glyphWidth = i1903[3]
  i1902.glyphHeight = i1903[4]
  i1902.minX = i1903[5]
  i1902.maxX = i1903[6]
  i1902.minY = i1903[7]
  i1902.maxY = i1903[8]
  i1902.uvBottomLeftX = i1903[9]
  i1902.uvBottomLeftY = i1903[10]
  i1902.uvBottomRightX = i1903[11]
  i1902.uvBottomRightY = i1903[12]
  i1902.uvTopLeftX = i1903[13]
  i1902.uvTopLeftY = i1903[14]
  i1902.uvTopRightX = i1903[15]
  i1902.uvTopRightY = i1903[16]
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1905 = data
  i1904.name = i1905[0]
  var i1907 = i1905[1]
  var i1906 = []
  for(var i = 0; i < i1907.length; i += 1) {
    i1906.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1907[i + 0]) );
  }
  i1904.layers = i1906
  var i1909 = i1905[2]
  var i1908 = []
  for(var i = 0; i < i1909.length; i += 1) {
    i1908.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1909[i + 0]) );
  }
  i1904.parameters = i1908
  i1904.animationClips = i1905[3]
  i1904.avatarUnsupported = i1905[4]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1913 = data
  i1912.name = i1913[0]
  i1912.defaultWeight = i1913[1]
  i1912.blendingMode = i1913[2]
  i1912.avatarMask = i1913[3]
  i1912.syncedLayerIndex = i1913[4]
  i1912.syncedLayerAffectsTiming = !!i1913[5]
  i1912.syncedLayers = i1913[6]
  i1912.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1913[7], i1912.stateMachine)
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1915 = data
  i1914.id = i1915[0]
  i1914.name = i1915[1]
  i1914.path = i1915[2]
  var i1917 = i1915[3]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1917[i + 0]) );
  }
  i1914.states = i1916
  var i1919 = i1915[4]
  var i1918 = []
  for(var i = 0; i < i1919.length; i += 1) {
    i1918.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1919[i + 0]) );
  }
  i1914.machines = i1918
  var i1921 = i1915[5]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 1) {
    i1920.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1921[i + 0]) );
  }
  i1914.entryStateTransitions = i1920
  var i1923 = i1915[6]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1923[i + 0]) );
  }
  i1914.exitStateTransitions = i1922
  var i1925 = i1915[7]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1925[i + 0]) );
  }
  i1914.anyStateTransitions = i1924
  i1914.defaultStateId = i1915[8]
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1929 = data
  i1928.id = i1929[0]
  i1928.name = i1929[1]
  i1928.cycleOffset = i1929[2]
  i1928.cycleOffsetParameter = i1929[3]
  i1928.cycleOffsetParameterActive = !!i1929[4]
  i1928.mirror = !!i1929[5]
  i1928.mirrorParameter = i1929[6]
  i1928.mirrorParameterActive = !!i1929[7]
  i1928.motionId = i1929[8]
  i1928.nameHash = i1929[9]
  i1928.fullPathHash = i1929[10]
  i1928.speed = i1929[11]
  i1928.speedParameter = i1929[12]
  i1928.speedParameterActive = !!i1929[13]
  i1928.tag = i1929[14]
  i1928.tagHash = i1929[15]
  i1928.writeDefaultValues = !!i1929[16]
  var i1931 = i1929[17]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 2) {
  request.r(i1931[i + 0], i1931[i + 1], 2, i1930, '')
  }
  i1928.behaviours = i1930
  var i1933 = i1929[18]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1933[i + 0]) );
  }
  i1928.transitions = i1932
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1939 = data
  i1938.fullPath = i1939[0]
  i1938.canTransitionToSelf = !!i1939[1]
  i1938.duration = i1939[2]
  i1938.exitTime = i1939[3]
  i1938.hasExitTime = !!i1939[4]
  i1938.hasFixedDuration = !!i1939[5]
  i1938.interruptionSource = i1939[6]
  i1938.offset = i1939[7]
  i1938.orderedInterruption = !!i1939[8]
  i1938.destinationStateId = i1939[9]
  i1938.isExit = !!i1939[10]
  i1938.mute = !!i1939[11]
  i1938.solo = !!i1939[12]
  var i1941 = i1939[13]
  var i1940 = []
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1941[i + 0]) );
  }
  i1938.conditions = i1940
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1947 = data
  i1946.destinationStateId = i1947[0]
  i1946.isExit = !!i1947[1]
  i1946.mute = !!i1947[2]
  i1946.solo = !!i1947[3]
  var i1949 = i1947[4]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1949[i + 0]) );
  }
  i1946.conditions = i1948
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1953 = data
  i1952.defaultBool = !!i1953[0]
  i1952.defaultFloat = i1953[1]
  i1952.defaultInt = i1953[2]
  i1952.name = i1953[3]
  i1952.nameHash = i1953[4]
  i1952.type = i1953[5]
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1955 = data
  i1954.name = i1955[0]
  i1954.bytes64 = i1955[1]
  i1954.data = i1955[2]
  return i1954
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1956 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1957 = data
  i1956.hashCode = i1957[0]
  request.r(i1957[1], i1957[2], 0, i1956, 'material')
  i1956.materialHashCode = i1957[3]
  request.r(i1957[4], i1957[5], 0, i1956, 'atlas')
  i1956.normalStyle = i1957[6]
  i1956.normalSpacingOffset = i1957[7]
  i1956.boldStyle = i1957[8]
  i1956.boldSpacing = i1957[9]
  i1956.italicStyle = i1957[10]
  i1956.tabSize = i1957[11]
  i1956.m_Version = i1957[12]
  i1956.m_SourceFontFileGUID = i1957[13]
  request.r(i1957[14], i1957[15], 0, i1956, 'm_SourceFontFile_EditorRef')
  request.r(i1957[16], i1957[17], 0, i1956, 'm_SourceFontFile')
  i1956.m_AtlasPopulationMode = i1957[18]
  i1956.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1957[19], i1956.m_FaceInfo)
  var i1959 = i1957[20]
  var i1958 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.add(request.d('UnityEngine.TextCore.Glyph', i1959[i + 0]));
  }
  i1956.m_GlyphTable = i1958
  var i1961 = i1957[21]
  var i1960 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1961.length; i += 1) {
    i1960.add(request.d('TMPro.TMP_Character', i1961[i + 0]));
  }
  i1956.m_CharacterTable = i1960
  var i1963 = i1957[22]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 2) {
  request.r(i1963[i + 0], i1963[i + 1], 2, i1962, '')
  }
  i1956.m_AtlasTextures = i1962
  i1956.m_AtlasTextureIndex = i1957[23]
  i1956.m_IsMultiAtlasTexturesEnabled = !!i1957[24]
  i1956.m_ClearDynamicDataOnBuild = !!i1957[25]
  var i1965 = i1957[26]
  var i1964 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.add(request.d('UnityEngine.TextCore.GlyphRect', i1965[i + 0]));
  }
  i1956.m_UsedGlyphRects = i1964
  var i1967 = i1957[27]
  var i1966 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.add(request.d('UnityEngine.TextCore.GlyphRect', i1967[i + 0]));
  }
  i1956.m_FreeGlyphRects = i1966
  i1956.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1957[28], i1956.m_fontInfo)
  i1956.m_AtlasWidth = i1957[29]
  i1956.m_AtlasHeight = i1957[30]
  i1956.m_AtlasPadding = i1957[31]
  i1956.m_AtlasRenderMode = i1957[32]
  var i1969 = i1957[33]
  var i1968 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1969.length; i += 1) {
    i1968.add(request.d('TMPro.TMP_Glyph', i1969[i + 0]));
  }
  i1956.m_glyphInfoList = i1968
  i1956.m_KerningTable = request.d('TMPro.KerningTable', i1957[34], i1956.m_KerningTable)
  i1956.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1957[35], i1956.m_FontFeatureTable)
  var i1971 = i1957[36]
  var i1970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1971.length; i += 2) {
  request.r(i1971[i + 0], i1971[i + 1], 1, i1970, '')
  }
  i1956.fallbackFontAssets = i1970
  var i1973 = i1957[37]
  var i1972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1973.length; i += 2) {
  request.r(i1973[i + 0], i1973[i + 1], 1, i1972, '')
  }
  i1956.m_FallbackFontAssetTable = i1972
  i1956.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1957[38], i1956.m_CreationSettings)
  var i1975 = i1957[39]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.push( request.d('TMPro.TMP_FontWeightPair', i1975[i + 0]) );
  }
  i1956.m_FontWeightTable = i1974
  var i1977 = i1957[40]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.push( request.d('TMPro.TMP_FontWeightPair', i1977[i + 0]) );
  }
  i1956.fontWeights = i1976
  return i1956
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1978 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1979 = data
  i1978.m_FaceIndex = i1979[0]
  i1978.m_FamilyName = i1979[1]
  i1978.m_StyleName = i1979[2]
  i1978.m_PointSize = i1979[3]
  i1978.m_Scale = i1979[4]
  i1978.m_UnitsPerEM = i1979[5]
  i1978.m_LineHeight = i1979[6]
  i1978.m_AscentLine = i1979[7]
  i1978.m_CapLine = i1979[8]
  i1978.m_MeanLine = i1979[9]
  i1978.m_Baseline = i1979[10]
  i1978.m_DescentLine = i1979[11]
  i1978.m_SuperscriptOffset = i1979[12]
  i1978.m_SuperscriptSize = i1979[13]
  i1978.m_SubscriptOffset = i1979[14]
  i1978.m_SubscriptSize = i1979[15]
  i1978.m_UnderlineOffset = i1979[16]
  i1978.m_UnderlineThickness = i1979[17]
  i1978.m_StrikethroughOffset = i1979[18]
  i1978.m_StrikethroughThickness = i1979[19]
  i1978.m_TabWidth = i1979[20]
  return i1978
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1982 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1983 = data
  i1982.m_Index = i1983[0]
  i1982.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1983[1], i1982.m_Metrics)
  i1982.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1983[2], i1982.m_GlyphRect)
  i1982.m_Scale = i1983[3]
  i1982.m_AtlasIndex = i1983[4]
  i1982.m_ClassDefinitionType = i1983[5]
  return i1982
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1984 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1985 = data
  i1984.m_Width = i1985[0]
  i1984.m_Height = i1985[1]
  i1984.m_HorizontalBearingX = i1985[2]
  i1984.m_HorizontalBearingY = i1985[3]
  i1984.m_HorizontalAdvance = i1985[4]
  return i1984
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1986 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1987 = data
  i1986.m_X = i1987[0]
  i1986.m_Y = i1987[1]
  i1986.m_Width = i1987[2]
  i1986.m_Height = i1987[3]
  return i1986
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1990 = root || request.c( 'TMPro.TMP_Character' )
  var i1991 = data
  i1990.m_ElementType = i1991[0]
  i1990.m_Unicode = i1991[1]
  i1990.m_GlyphIndex = i1991[2]
  i1990.m_Scale = i1991[3]
  return i1990
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1996 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1997 = data
  i1996.Name = i1997[0]
  i1996.PointSize = i1997[1]
  i1996.Scale = i1997[2]
  i1996.CharacterCount = i1997[3]
  i1996.LineHeight = i1997[4]
  i1996.Baseline = i1997[5]
  i1996.Ascender = i1997[6]
  i1996.CapHeight = i1997[7]
  i1996.Descender = i1997[8]
  i1996.CenterLine = i1997[9]
  i1996.SuperscriptOffset = i1997[10]
  i1996.SubscriptOffset = i1997[11]
  i1996.SubSize = i1997[12]
  i1996.Underline = i1997[13]
  i1996.UnderlineThickness = i1997[14]
  i1996.strikethrough = i1997[15]
  i1996.strikethroughThickness = i1997[16]
  i1996.TabWidth = i1997[17]
  i1996.Padding = i1997[18]
  i1996.AtlasWidth = i1997[19]
  i1996.AtlasHeight = i1997[20]
  return i1996
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2000 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2001 = data
  i2000.id = i2001[0]
  i2000.x = i2001[1]
  i2000.y = i2001[2]
  i2000.width = i2001[3]
  i2000.height = i2001[4]
  i2000.xOffset = i2001[5]
  i2000.yOffset = i2001[6]
  i2000.xAdvance = i2001[7]
  i2000.scale = i2001[8]
  return i2000
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2002 = root || request.c( 'TMPro.KerningTable' )
  var i2003 = data
  var i2005 = i2003[0]
  var i2004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.add(request.d('TMPro.KerningPair', i2005[i + 0]));
  }
  i2002.kerningPairs = i2004
  return i2002
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2008 = root || request.c( 'TMPro.KerningPair' )
  var i2009 = data
  i2008.xOffset = i2009[0]
  i2008.m_FirstGlyph = i2009[1]
  i2008.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2009[2], i2008.m_FirstGlyphAdjustments)
  i2008.m_SecondGlyph = i2009[3]
  i2008.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2009[4], i2008.m_SecondGlyphAdjustments)
  i2008.m_IgnoreSpacingAdjustments = !!i2009[5]
  return i2008
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2010 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2011 = data
  var i2013 = i2011[0]
  var i2012 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2013.length; i += 1) {
    i2012.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2013[i + 0]));
  }
  i2010.m_GlyphPairAdjustmentRecords = i2012
  return i2010
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2016 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2017 = data
  i2016.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2017[0], i2016.m_FirstAdjustmentRecord)
  i2016.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2017[1], i2016.m_SecondAdjustmentRecord)
  i2016.m_FeatureLookupFlags = i2017[2]
  return i2016
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2020 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2021 = data
  i2020.sourceFontFileName = i2021[0]
  i2020.sourceFontFileGUID = i2021[1]
  i2020.pointSizeSamplingMode = i2021[2]
  i2020.pointSize = i2021[3]
  i2020.padding = i2021[4]
  i2020.packingMode = i2021[5]
  i2020.atlasWidth = i2021[6]
  i2020.atlasHeight = i2021[7]
  i2020.characterSetSelectionMode = i2021[8]
  i2020.characterSequence = i2021[9]
  i2020.referencedFontAssetGUID = i2021[10]
  i2020.referencedTextAssetGUID = i2021[11]
  i2020.fontStyle = i2021[12]
  i2020.fontStyleModifier = i2021[13]
  i2020.renderMode = i2021[14]
  i2020.includeFontFeatures = !!i2021[15]
  return i2020
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2024 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2025 = data
  request.r(i2025[0], i2025[1], 0, i2024, 'regularTypeface')
  request.r(i2025[2], i2025[3], 0, i2024, 'italicTypeface')
  return i2024
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i2026 = root || request.c( 'AudioLibrary' )
  var i2027 = data
  var i2029 = i2027[0]
  var i2028 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.add(request.d('AudioLibrary+ClipEntry', i2029[i + 0]));
  }
  i2026.clips = i2028
  return i2026
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i2032 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i2033 = data
  i2032.key = i2033[0]
  i2032.channel = i2033[1]
  request.r(i2033[2], i2033[3], 0, i2032, 'clip')
  i2032.volume = i2033[4]
  i2032.loop = !!i2033[5]
  return i2032
}

Deserializers["DataObject"] = function (request, data, root) {
  var i2034 = root || request.c( 'DataObject' )
  var i2035 = data
  i2034.level = i2035[0]
  i2034.name = i2035[1]
  i2034.assetValue = i2035[2]
  i2034.isLegit = !!i2035[3]
  request.r(i2035[4], i2035[5], 0, i2034, 'icon')
  i2034.bidder1Bid = i2035[6]
  i2034.bidder2Bid = i2035[7]
  i2034.bidder3Bid = i2035[8]
  i2034.playerBid = i2035[9]
  return i2034
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2036 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2037 = data
  i2036.useSafeMode = !!i2037[0]
  i2036.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2037[1], i2036.safeModeOptions)
  i2036.timeScale = i2037[2]
  i2036.unscaledTimeScale = i2037[3]
  i2036.useSmoothDeltaTime = !!i2037[4]
  i2036.maxSmoothUnscaledTime = i2037[5]
  i2036.rewindCallbackMode = i2037[6]
  i2036.showUnityEditorReport = !!i2037[7]
  i2036.logBehaviour = i2037[8]
  i2036.drawGizmos = !!i2037[9]
  i2036.defaultRecyclable = !!i2037[10]
  i2036.defaultAutoPlay = i2037[11]
  i2036.defaultUpdateType = i2037[12]
  i2036.defaultTimeScaleIndependent = !!i2037[13]
  i2036.defaultEaseType = i2037[14]
  i2036.defaultEaseOvershootOrAmplitude = i2037[15]
  i2036.defaultEasePeriod = i2037[16]
  i2036.defaultAutoKill = !!i2037[17]
  i2036.defaultLoopType = i2037[18]
  i2036.debugMode = !!i2037[19]
  i2036.debugStoreTargetId = !!i2037[20]
  i2036.showPreviewPanel = !!i2037[21]
  i2036.storeSettingsLocation = i2037[22]
  i2036.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2037[23], i2036.modules)
  i2036.createASMDEF = !!i2037[24]
  i2036.showPlayingTweens = !!i2037[25]
  i2036.showPausedTweens = !!i2037[26]
  return i2036
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2038 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2039 = data
  i2038.logBehaviour = i2039[0]
  i2038.nestedTweenFailureBehaviour = i2039[1]
  return i2038
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2040 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2041 = data
  i2040.showPanel = !!i2041[0]
  i2040.audioEnabled = !!i2041[1]
  i2040.physicsEnabled = !!i2041[2]
  i2040.physics2DEnabled = !!i2041[3]
  i2040.spriteEnabled = !!i2041[4]
  i2040.uiEnabled = !!i2041[5]
  i2040.textMeshProEnabled = !!i2041[6]
  i2040.tk2DEnabled = !!i2041[7]
  i2040.deAudioEnabled = !!i2041[8]
  i2040.deUnityExtendedEnabled = !!i2041[9]
  i2040.epoOutlineEnabled = !!i2041[10]
  return i2040
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2042 = root || request.c( 'TMPro.TMP_Settings' )
  var i2043 = data
  i2042.m_enableWordWrapping = !!i2043[0]
  i2042.m_enableKerning = !!i2043[1]
  i2042.m_enableExtraPadding = !!i2043[2]
  i2042.m_enableTintAllSprites = !!i2043[3]
  i2042.m_enableParseEscapeCharacters = !!i2043[4]
  i2042.m_EnableRaycastTarget = !!i2043[5]
  i2042.m_GetFontFeaturesAtRuntime = !!i2043[6]
  i2042.m_missingGlyphCharacter = i2043[7]
  i2042.m_warningsDisabled = !!i2043[8]
  request.r(i2043[9], i2043[10], 0, i2042, 'm_defaultFontAsset')
  i2042.m_defaultFontAssetPath = i2043[11]
  i2042.m_defaultFontSize = i2043[12]
  i2042.m_defaultAutoSizeMinRatio = i2043[13]
  i2042.m_defaultAutoSizeMaxRatio = i2043[14]
  i2042.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2043[15], i2043[16] )
  i2042.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2043[17], i2043[18] )
  i2042.m_autoSizeTextContainer = !!i2043[19]
  i2042.m_IsTextObjectScaleStatic = !!i2043[20]
  var i2045 = i2043[21]
  var i2044 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2045.length; i += 2) {
  request.r(i2045[i + 0], i2045[i + 1], 1, i2044, '')
  }
  i2042.m_fallbackFontAssets = i2044
  i2042.m_matchMaterialPreset = !!i2043[22]
  request.r(i2043[23], i2043[24], 0, i2042, 'm_defaultSpriteAsset')
  i2042.m_defaultSpriteAssetPath = i2043[25]
  i2042.m_enableEmojiSupport = !!i2043[26]
  i2042.m_MissingCharacterSpriteUnicode = i2043[27]
  i2042.m_defaultColorGradientPresetsPath = i2043[28]
  request.r(i2043[29], i2043[30], 0, i2042, 'm_defaultStyleSheet')
  i2042.m_StyleSheetsResourcePath = i2043[31]
  request.r(i2043[32], i2043[33], 0, i2042, 'm_leadingCharacters')
  request.r(i2043[34], i2043[35], 0, i2042, 'm_followingCharacters')
  i2042.m_UseModernHangulLineBreakingRules = !!i2043[36]
  return i2042
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2046 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2047 = data
  i2046.hashCode = i2047[0]
  request.r(i2047[1], i2047[2], 0, i2046, 'material')
  i2046.materialHashCode = i2047[3]
  request.r(i2047[4], i2047[5], 0, i2046, 'spriteSheet')
  var i2049 = i2047[6]
  var i2048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2049.length; i += 1) {
    i2048.add(request.d('TMPro.TMP_Sprite', i2049[i + 0]));
  }
  i2046.spriteInfoList = i2048
  var i2051 = i2047[7]
  var i2050 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2051.length; i += 2) {
  request.r(i2051[i + 0], i2051[i + 1], 1, i2050, '')
  }
  i2046.fallbackSpriteAssets = i2050
  i2046.m_Version = i2047[8]
  i2046.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2047[9], i2046.m_FaceInfo)
  var i2053 = i2047[10]
  var i2052 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.add(request.d('TMPro.TMP_SpriteCharacter', i2053[i + 0]));
  }
  i2046.m_SpriteCharacterTable = i2052
  var i2055 = i2047[11]
  var i2054 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.add(request.d('TMPro.TMP_SpriteGlyph', i2055[i + 0]));
  }
  i2046.m_SpriteGlyphTable = i2054
  return i2046
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2058 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2059 = data
  i2058.name = i2059[0]
  i2058.hashCode = i2059[1]
  i2058.unicode = i2059[2]
  i2058.pivot = new pc.Vec2( i2059[3], i2059[4] )
  request.r(i2059[5], i2059[6], 0, i2058, 'sprite')
  i2058.id = i2059[7]
  i2058.x = i2059[8]
  i2058.y = i2059[9]
  i2058.width = i2059[10]
  i2058.height = i2059[11]
  i2058.xOffset = i2059[12]
  i2058.yOffset = i2059[13]
  i2058.xAdvance = i2059[14]
  i2058.scale = i2059[15]
  return i2058
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2064 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2065 = data
  i2064.m_Name = i2065[0]
  i2064.m_HashCode = i2065[1]
  i2064.m_ElementType = i2065[2]
  i2064.m_Unicode = i2065[3]
  i2064.m_GlyphIndex = i2065[4]
  i2064.m_Scale = i2065[5]
  return i2064
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2068 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2069 = data
  request.r(i2069[0], i2069[1], 0, i2068, 'sprite')
  i2068.m_Index = i2069[2]
  i2068.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2069[3], i2068.m_Metrics)
  i2068.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2069[4], i2068.m_GlyphRect)
  i2068.m_Scale = i2069[5]
  i2068.m_AtlasIndex = i2069[6]
  i2068.m_ClassDefinitionType = i2069[7]
  return i2068
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2070 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2071 = data
  var i2073 = i2071[0]
  var i2072 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2073.length; i += 1) {
    i2072.add(request.d('TMPro.TMP_Style', i2073[i + 0]));
  }
  i2070.m_StyleList = i2072
  return i2070
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2076 = root || request.c( 'TMPro.TMP_Style' )
  var i2077 = data
  i2076.m_Name = i2077[0]
  i2076.m_HashCode = i2077[1]
  i2076.m_OpeningDefinition = i2077[2]
  i2076.m_ClosingDefinition = i2077[3]
  i2076.m_OpeningTagArray = i2077[4]
  i2076.m_ClosingTagArray = i2077[5]
  i2076.m_OpeningTagUnicodeArray = i2077[6]
  i2076.m_ClosingTagUnicodeArray = i2077[7]
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2079 = data
  var i2081 = i2079[0]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2081[i + 0]) );
  }
  i2078.files = i2080
  i2078.componentToPrefabIds = i2079[1]
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2085 = data
  i2084.path = i2085[0]
  request.r(i2085[1], i2085[2], 0, i2084, 'unityObject')
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2087 = data
  var i2089 = i2087[0]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2089[i + 0]) );
  }
  i2086.scriptsExecutionOrder = i2088
  var i2091 = i2087[1]
  var i2090 = []
  for(var i = 0; i < i2091.length; i += 1) {
    i2090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2091[i + 0]) );
  }
  i2086.sortingLayers = i2090
  var i2093 = i2087[2]
  var i2092 = []
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2093[i + 0]) );
  }
  i2086.cullingLayers = i2092
  i2086.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2087[3], i2086.timeSettings)
  i2086.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2087[4], i2086.physicsSettings)
  i2086.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2087[5], i2086.physics2DSettings)
  i2086.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2087[6], i2086.qualitySettings)
  i2086.enableRealtimeShadows = !!i2087[7]
  i2086.enableAutoInstancing = !!i2087[8]
  i2086.enableDynamicBatching = !!i2087[9]
  i2086.lightmapEncodingQuality = i2087[10]
  i2086.desiredColorSpace = i2087[11]
  var i2095 = i2087[12]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.push( i2095[i + 0] );
  }
  i2086.allTags = i2094
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2099 = data
  i2098.name = i2099[0]
  i2098.value = i2099[1]
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2103 = data
  i2102.id = i2103[0]
  i2102.name = i2103[1]
  i2102.value = i2103[2]
  return i2102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2107 = data
  i2106.id = i2107[0]
  i2106.name = i2107[1]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2109 = data
  i2108.fixedDeltaTime = i2109[0]
  i2108.maximumDeltaTime = i2109[1]
  i2108.timeScale = i2109[2]
  i2108.maximumParticleTimestep = i2109[3]
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2111 = data
  i2110.gravity = new pc.Vec3( i2111[0], i2111[1], i2111[2] )
  i2110.defaultSolverIterations = i2111[3]
  i2110.bounceThreshold = i2111[4]
  i2110.autoSyncTransforms = !!i2111[5]
  i2110.autoSimulation = !!i2111[6]
  var i2113 = i2111[7]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2113[i + 0]) );
  }
  i2110.collisionMatrix = i2112
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2117 = data
  i2116.enabled = !!i2117[0]
  i2116.layerId = i2117[1]
  i2116.otherLayerId = i2117[2]
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2119 = data
  request.r(i2119[0], i2119[1], 0, i2118, 'material')
  i2118.gravity = new pc.Vec2( i2119[2], i2119[3] )
  i2118.positionIterations = i2119[4]
  i2118.velocityIterations = i2119[5]
  i2118.velocityThreshold = i2119[6]
  i2118.maxLinearCorrection = i2119[7]
  i2118.maxAngularCorrection = i2119[8]
  i2118.maxTranslationSpeed = i2119[9]
  i2118.maxRotationSpeed = i2119[10]
  i2118.baumgarteScale = i2119[11]
  i2118.baumgarteTOIScale = i2119[12]
  i2118.timeToSleep = i2119[13]
  i2118.linearSleepTolerance = i2119[14]
  i2118.angularSleepTolerance = i2119[15]
  i2118.defaultContactOffset = i2119[16]
  i2118.autoSimulation = !!i2119[17]
  i2118.queriesHitTriggers = !!i2119[18]
  i2118.queriesStartInColliders = !!i2119[19]
  i2118.callbacksOnDisable = !!i2119[20]
  i2118.reuseCollisionCallbacks = !!i2119[21]
  i2118.autoSyncTransforms = !!i2119[22]
  var i2121 = i2119[23]
  var i2120 = []
  for(var i = 0; i < i2121.length; i += 1) {
    i2120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2121[i + 0]) );
  }
  i2118.collisionMatrix = i2120
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2125 = data
  i2124.enabled = !!i2125[0]
  i2124.layerId = i2125[1]
  i2124.otherLayerId = i2125[2]
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2127 = data
  var i2129 = i2127[0]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2129[i + 0]) );
  }
  i2126.qualityLevels = i2128
  var i2131 = i2127[1]
  var i2130 = []
  for(var i = 0; i < i2131.length; i += 1) {
    i2130.push( i2131[i + 0] );
  }
  i2126.names = i2130
  i2126.shadows = i2127[2]
  i2126.anisotropicFiltering = i2127[3]
  i2126.antiAliasing = i2127[4]
  i2126.lodBias = i2127[5]
  i2126.shadowCascades = i2127[6]
  i2126.shadowDistance = i2127[7]
  i2126.shadowmaskMode = i2127[8]
  i2126.shadowProjection = i2127[9]
  i2126.shadowResolution = i2127[10]
  i2126.softParticles = !!i2127[11]
  i2126.softVegetation = !!i2127[12]
  i2126.activeColorSpace = i2127[13]
  i2126.desiredColorSpace = i2127[14]
  i2126.masterTextureLimit = i2127[15]
  i2126.maxQueuedFrames = i2127[16]
  i2126.particleRaycastBudget = i2127[17]
  i2126.pixelLightCount = i2127[18]
  i2126.realtimeReflectionProbes = !!i2127[19]
  i2126.shadowCascade2Split = i2127[20]
  i2126.shadowCascade4Split = new pc.Vec3( i2127[21], i2127[22], i2127[23] )
  i2126.streamingMipmapsActive = !!i2127[24]
  i2126.vSyncCount = i2127[25]
  i2126.asyncUploadBufferSize = i2127[26]
  i2126.asyncUploadTimeSlice = i2127[27]
  i2126.billboardsFaceCameraPosition = !!i2127[28]
  i2126.shadowNearPlaneOffset = i2127[29]
  i2126.streamingMipmapsMemoryBudget = i2127[30]
  i2126.maximumLODLevel = i2127[31]
  i2126.streamingMipmapsAddAllCameras = !!i2127[32]
  i2126.streamingMipmapsMaxLevelReduction = i2127[33]
  i2126.streamingMipmapsRenderersPerFrame = i2127[34]
  i2126.resolutionScalingFixedDPIFactor = i2127[35]
  i2126.streamingMipmapsMaxFileIORequests = i2127[36]
  i2126.currentQualityLevel = i2127[37]
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2137 = data
  i2136.mode = i2137[0]
  i2136.parameter = i2137[1]
  i2136.threshold = i2137[2]
  return i2136
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2138 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2139 = data
  i2138.xPlacement = i2139[0]
  i2138.yPlacement = i2139[1]
  i2138.xAdvance = i2139[2]
  i2138.yAdvance = i2139[3]
  return i2138
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2140 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2141 = data
  i2140.m_GlyphIndex = i2141[0]
  i2140.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2141[1], i2140.m_GlyphValueRecord)
  return i2140
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2142 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2143 = data
  i2142.m_XPlacement = i2143[0]
  i2142.m_YPlacement = i2143[1]
  i2142.m_XAdvance = i2143[2]
  i2142.m_YAdvance = i2143[3]
  return i2142
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

Deserializers.buildID = "b41a0411-bf96-4834-883b-1bc9ad86d57e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

