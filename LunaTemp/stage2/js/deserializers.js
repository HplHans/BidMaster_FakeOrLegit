var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1626 = root || request.c( 'UnityEngine.JointSpring' )
  var i1627 = data
  i1626.spring = i1627[0]
  i1626.damper = i1627[1]
  i1626.targetPosition = i1627[2]
  return i1626
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1628 = root || request.c( 'UnityEngine.JointMotor' )
  var i1629 = data
  i1628.m_TargetVelocity = i1629[0]
  i1628.m_Force = i1629[1]
  i1628.m_FreeSpin = i1629[2]
  return i1628
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1630 = root || request.c( 'UnityEngine.JointLimits' )
  var i1631 = data
  i1630.m_Min = i1631[0]
  i1630.m_Max = i1631[1]
  i1630.m_Bounciness = i1631[2]
  i1630.m_BounceMinVelocity = i1631[3]
  i1630.m_ContactDistance = i1631[4]
  i1630.minBounce = i1631[5]
  i1630.maxBounce = i1631[6]
  return i1630
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1632 = root || request.c( 'UnityEngine.JointDrive' )
  var i1633 = data
  i1632.m_PositionSpring = i1633[0]
  i1632.m_PositionDamper = i1633[1]
  i1632.m_MaximumForce = i1633[2]
  i1632.m_UseAcceleration = i1633[3]
  return i1632
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1634 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1635 = data
  i1634.m_Spring = i1635[0]
  i1634.m_Damper = i1635[1]
  return i1634
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1636 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1637 = data
  i1636.m_Limit = i1637[0]
  i1636.m_Bounciness = i1637[1]
  i1636.m_ContactDistance = i1637[2]
  return i1636
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1638 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1639 = data
  i1638.m_ExtremumSlip = i1639[0]
  i1638.m_ExtremumValue = i1639[1]
  i1638.m_AsymptoteSlip = i1639[2]
  i1638.m_AsymptoteValue = i1639[3]
  i1638.m_Stiffness = i1639[4]
  return i1638
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1640 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1641 = data
  i1640.m_LowerAngle = i1641[0]
  i1640.m_UpperAngle = i1641[1]
  return i1640
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1642 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1643 = data
  i1642.m_MotorSpeed = i1643[0]
  i1642.m_MaximumMotorTorque = i1643[1]
  return i1642
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1644 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1645 = data
  i1644.m_DampingRatio = i1645[0]
  i1644.m_Frequency = i1645[1]
  i1644.m_Angle = i1645[2]
  return i1644
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1646 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1647 = data
  i1646.m_LowerTranslation = i1647[0]
  i1646.m_UpperTranslation = i1647[1]
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1648 = root || new pc.UnityMaterial()
  var i1649 = data
  i1648.name = i1649[0]
  request.r(i1649[1], i1649[2], 0, i1648, 'shader')
  i1648.renderQueue = i1649[3]
  i1648.enableInstancing = !!i1649[4]
  var i1651 = i1649[5]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1651[i + 0]) );
  }
  i1648.floatParameters = i1650
  var i1653 = i1649[6]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1653[i + 0]) );
  }
  i1648.colorParameters = i1652
  var i1655 = i1649[7]
  var i1654 = []
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1655[i + 0]) );
  }
  i1648.vectorParameters = i1654
  var i1657 = i1649[8]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1657[i + 0]) );
  }
  i1648.textureParameters = i1656
  var i1659 = i1649[9]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1659[i + 0]) );
  }
  i1648.materialFlags = i1658
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1663 = data
  i1662.name = i1663[0]
  i1662.value = i1663[1]
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1667 = data
  i1666.name = i1667[0]
  i1666.value = new pc.Color(i1667[1], i1667[2], i1667[3], i1667[4])
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1671 = data
  i1670.name = i1671[0]
  i1670.value = new pc.Vec4( i1671[1], i1671[2], i1671[3], i1671[4] )
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1675 = data
  i1674.name = i1675[0]
  request.r(i1675[1], i1675[2], 0, i1674, 'value')
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1679 = data
  i1678.name = i1679[0]
  i1678.enabled = !!i1679[1]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1681 = data
  i1680.name = i1681[0]
  i1680.width = i1681[1]
  i1680.height = i1681[2]
  i1680.mipmapCount = i1681[3]
  i1680.anisoLevel = i1681[4]
  i1680.filterMode = i1681[5]
  i1680.hdr = !!i1681[6]
  i1680.format = i1681[7]
  i1680.wrapMode = i1681[8]
  i1680.alphaIsTransparency = !!i1681[9]
  i1680.alphaSource = i1681[10]
  i1680.graphicsFormat = i1681[11]
  i1680.sRGBTexture = !!i1681[12]
  i1680.desiredColorSpace = i1681[13]
  i1680.wrapU = i1681[14]
  i1680.wrapV = i1681[15]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1683 = data
  i1682.name = i1683[0]
  i1682.atlasId = i1683[1]
  i1682.mipmapCount = i1683[2]
  i1682.hdr = !!i1683[3]
  i1682.size = i1683[4]
  i1682.anisoLevel = i1683[5]
  i1682.filterMode = i1683[6]
  var i1685 = i1683[7]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 4) {
    i1684.push( UnityEngine.Rect.MinMaxRect(i1685[i + 0], i1685[i + 1], i1685[i + 2], i1685[i + 3]) );
  }
  i1682.rects = i1684
  i1682.wrapU = i1683[8]
  i1682.wrapV = i1683[9]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1689 = data
  i1688.name = i1689[0]
  i1688.index = i1689[1]
  i1688.startup = !!i1689[2]
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1691 = data
  i1690.position = new pc.Vec3( i1691[0], i1691[1], i1691[2] )
  i1690.scale = new pc.Vec3( i1691[3], i1691[4], i1691[5] )
  i1690.rotation = new pc.Quat(i1691[6], i1691[7], i1691[8], i1691[9])
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1693 = data
  i1692.enabled = !!i1693[0]
  i1692.aspect = i1693[1]
  i1692.orthographic = !!i1693[2]
  i1692.orthographicSize = i1693[3]
  i1692.backgroundColor = new pc.Color(i1693[4], i1693[5], i1693[6], i1693[7])
  i1692.nearClipPlane = i1693[8]
  i1692.farClipPlane = i1693[9]
  i1692.fieldOfView = i1693[10]
  i1692.depth = i1693[11]
  i1692.clearFlags = i1693[12]
  i1692.cullingMask = i1693[13]
  i1692.rect = i1693[14]
  request.r(i1693[15], i1693[16], 0, i1692, 'targetTexture')
  i1692.usePhysicalProperties = !!i1693[17]
  i1692.focalLength = i1693[18]
  i1692.sensorSize = new pc.Vec2( i1693[19], i1693[20] )
  i1692.lensShift = new pc.Vec2( i1693[21], i1693[22] )
  i1692.gateFit = i1693[23]
  i1692.commandBufferCount = i1693[24]
  i1692.cameraType = i1693[25]
  return i1692
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i1694 = root || request.c( 'CameraAspectFitter' )
  var i1695 = data
  request.r(i1695[0], i1695[1], 0, i1694, 'targetSprite')
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1697 = data
  i1696.name = i1697[0]
  i1696.tagId = i1697[1]
  i1696.enabled = !!i1697[2]
  i1696.isStatic = !!i1697[3]
  i1696.layer = i1697[4]
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1699 = data
  i1698.enabled = !!i1699[0]
  i1698.type = i1699[1]
  i1698.color = new pc.Color(i1699[2], i1699[3], i1699[4], i1699[5])
  i1698.cullingMask = i1699[6]
  i1698.intensity = i1699[7]
  i1698.range = i1699[8]
  i1698.spotAngle = i1699[9]
  i1698.shadows = i1699[10]
  i1698.shadowNormalBias = i1699[11]
  i1698.shadowBias = i1699[12]
  i1698.shadowStrength = i1699[13]
  i1698.shadowResolution = i1699[14]
  i1698.lightmapBakeType = i1699[15]
  i1698.renderMode = i1699[16]
  request.r(i1699[17], i1699[18], 0, i1698, 'cookie')
  i1698.cookieSize = i1699[19]
  return i1698
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1700 = root || request.c( 'GameManager' )
  var i1701 = data
  request.r(i1701[0], i1701[1], 0, i1700, 'endPanel')
  request.r(i1701[2], i1701[3], 0, i1700, 'endPanelAnimator')
  request.r(i1701[4], i1701[5], 0, i1700, 'levelImageSwitcher')
  request.r(i1701[6], i1701[7], 0, i1700, 'scoreTxt')
  i1700.end = !!i1701[8]
  i1700.endPlay = !!i1701[9]
  request.r(i1701[10], i1701[11], 0, i1700, 'hand')
  request.r(i1701[12], i1701[13], 0, i1700, 'message2')
  request.r(i1701[14], i1701[15], 0, i1700, 'animator')
  i1700.enableSound = !!i1701[16]
  var i1703 = i1701[17]
  var i1702 = new (System.Collections.Generic.List$1(Bridge.ns('DataObject')))
  for(var i = 0; i < i1703.length; i += 2) {
  request.r(i1703[i + 0], i1703[i + 1], 1, i1702, '')
  }
  i1700.items = i1702
  i1700.level = i1701[18]
  i1700.animPos = i1701[19]
  request.r(i1701[20], i1701[21], 0, i1700, 'itemsParent')
  request.r(i1701[22], i1701[23], 0, i1700, 'startClickHandler')
  i1700.itemValue = i1701[24]
  var i1705 = i1701[25]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 2) {
  request.r(i1705[i + 0], i1705[i + 1], 2, i1704, '')
  }
  i1700.biddersBubble = i1704
  request.r(i1701[26], i1701[27], 0, i1700, 'promptBubble')
  request.r(i1701[28], i1701[29], 0, i1700, 'btnGroup')
  request.r(i1701[30], i1701[31], 0, i1700, 'biddersLossTxt')
  request.r(i1701[32], i1701[33], 0, i1700, 'biddersLossPlus')
  request.r(i1701[34], i1701[35], 0, i1700, 'playersLoss')
  request.r(i1701[36], i1701[37], 0, i1700, 'playersPlus')
  request.r(i1701[38], i1701[39], 0, i1700, 'AuthenticImg')
  request.r(i1701[40], i1701[41], 0, i1700, 'profitImg')
  request.r(i1701[42], i1701[43], 0, i1700, 'fakeImg')
  request.r(i1701[44], i1701[45], 0, i1700, 'cashTxt')
  request.r(i1701[46], i1701[47], 0, i1700, 'failBidCanvas')
  request.r(i1701[48], i1701[49], 0, i1700, 'failPassCanvas')
  i1700.win = !!i1701[50]
  i1700.fail = !!i1701[51]
  i1700.bidFail = !!i1701[52]
  i1700.passFail = !!i1701[53]
  i1700.conditionMet = !!i1701[54]
  i1700.currentScore = i1701[55]
  return i1700
}

Deserializers["LevelImageSwitcher"] = function (request, data, root) {
  var i1710 = root || request.c( 'LevelImageSwitcher' )
  var i1711 = data
  var i1713 = i1711[0]
  var i1712 = []
  for(var i = 0; i < i1713.length; i += 2) {
  request.r(i1713[i + 0], i1713[i + 1], 2, i1712, '')
  }
  i1710.levelImages = i1712
  return i1710
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i1714 = root || request.c( 'TaskManager' )
  var i1715 = data
  return i1714
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i1716 = root || request.c( 'AudioManager' )
  var i1717 = data
  request.r(i1717[0], i1717[1], 0, i1716, 'library')
  i1716.sfxPoolSize = i1717[2]
  i1716.enableSound = !!i1717[3]
  return i1716
}

Deserializers["DataManager"] = function (request, data, root) {
  var i1718 = root || request.c( 'DataManager' )
  var i1719 = data
  var i1721 = i1719[0]
  var i1720 = new (System.Collections.Generic.List$1(Bridge.ns('SingleDataEntry')))
  for(var i = 0; i < i1721.length; i += 1) {
    i1720.add(request.d('SingleDataEntry', i1721[i + 0]));
  }
  i1718.singleEntries = i1720
  var i1723 = i1719[1]
  var i1722 = new (System.Collections.Generic.List$1(Bridge.ns('ListDataEntry')))
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.add(request.d('ListDataEntry', i1723[i + 0]));
  }
  i1718.listEntries = i1722
  return i1718
}

Deserializers["SingleDataEntry"] = function (request, data, root) {
  var i1726 = root || request.c( 'SingleDataEntry' )
  var i1727 = data
  i1726.key = i1727[0]
  request.r(i1727[1], i1727[2], 0, i1726, 'value')
  return i1726
}

Deserializers["ListDataEntry"] = function (request, data, root) {
  var i1730 = root || request.c( 'ListDataEntry' )
  var i1731 = data
  i1730.key = i1731[0]
  var i1733 = i1731[1]
  var i1732 = new (System.Collections.Generic.List$1(Bridge.ns('DataObject')))
  for(var i = 0; i < i1733.length; i += 2) {
  request.r(i1733[i + 0], i1733[i + 1], 1, i1732, '')
  }
  i1730.values = i1732
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1735 = data
  i1734.enabled = !!i1735[0]
  request.r(i1735[1], i1735[2], 0, i1734, 'sharedMaterial')
  var i1737 = i1735[3]
  var i1736 = []
  for(var i = 0; i < i1737.length; i += 2) {
  request.r(i1737[i + 0], i1737[i + 1], 2, i1736, '')
  }
  i1734.sharedMaterials = i1736
  i1734.receiveShadows = !!i1735[4]
  i1734.shadowCastingMode = i1735[5]
  i1734.sortingLayerID = i1735[6]
  i1734.sortingOrder = i1735[7]
  i1734.lightmapIndex = i1735[8]
  i1734.lightmapSceneIndex = i1735[9]
  i1734.lightmapScaleOffset = new pc.Vec4( i1735[10], i1735[11], i1735[12], i1735[13] )
  i1734.lightProbeUsage = i1735[14]
  i1734.reflectionProbeUsage = i1735[15]
  i1734.color = new pc.Color(i1735[16], i1735[17], i1735[18], i1735[19])
  request.r(i1735[20], i1735[21], 0, i1734, 'sprite')
  i1734.flipX = !!i1735[22]
  i1734.flipY = !!i1735[23]
  i1734.drawMode = i1735[24]
  i1734.size = new pc.Vec2( i1735[25], i1735[26] )
  i1734.tileMode = i1735[27]
  i1734.adaptiveModeThreshold = i1735[28]
  i1734.maskInteraction = i1735[29]
  i1734.spriteSortPoint = i1735[30]
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1741 = data
  i1740.pivot = new pc.Vec2( i1741[0], i1741[1] )
  i1740.anchorMin = new pc.Vec2( i1741[2], i1741[3] )
  i1740.anchorMax = new pc.Vec2( i1741[4], i1741[5] )
  i1740.sizeDelta = new pc.Vec2( i1741[6], i1741[7] )
  i1740.anchoredPosition3D = new pc.Vec3( i1741[8], i1741[9], i1741[10] )
  i1740.rotation = new pc.Quat(i1741[11], i1741[12], i1741[13], i1741[14])
  i1740.scale = new pc.Vec3( i1741[15], i1741[16], i1741[17] )
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1743 = data
  i1742.enabled = !!i1743[0]
  i1742.planeDistance = i1743[1]
  i1742.referencePixelsPerUnit = i1743[2]
  i1742.isFallbackOverlay = !!i1743[3]
  i1742.renderMode = i1743[4]
  i1742.renderOrder = i1743[5]
  i1742.sortingLayerName = i1743[6]
  i1742.sortingOrder = i1743[7]
  i1742.scaleFactor = i1743[8]
  request.r(i1743[9], i1743[10], 0, i1742, 'worldCamera')
  i1742.overrideSorting = !!i1743[11]
  i1742.pixelPerfect = !!i1743[12]
  i1742.targetDisplay = i1743[13]
  i1742.overridePixelPerfect = !!i1743[14]
  return i1742
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1744 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1745 = data
  i1744.m_UiScaleMode = i1745[0]
  i1744.m_ReferencePixelsPerUnit = i1745[1]
  i1744.m_ScaleFactor = i1745[2]
  i1744.m_ReferenceResolution = new pc.Vec2( i1745[3], i1745[4] )
  i1744.m_ScreenMatchMode = i1745[5]
  i1744.m_MatchWidthOrHeight = i1745[6]
  i1744.m_PhysicalUnit = i1745[7]
  i1744.m_FallbackScreenDPI = i1745[8]
  i1744.m_DefaultSpriteDPI = i1745[9]
  i1744.m_DynamicPixelsPerUnit = i1745[10]
  i1744.m_PresetInfoIsWorld = !!i1745[11]
  return i1744
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1746 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1747 = data
  i1746.m_IgnoreReversedGraphics = !!i1747[0]
  i1746.m_BlockingObjects = i1747[1]
  i1746.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1747[2] )
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1749 = data
  i1748.cullTransparentMesh = !!i1749[0]
  return i1748
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1750 = root || request.c( 'UnityEngine.UI.Image' )
  var i1751 = data
  request.r(i1751[0], i1751[1], 0, i1750, 'm_Sprite')
  i1750.m_Type = i1751[2]
  i1750.m_PreserveAspect = !!i1751[3]
  i1750.m_FillCenter = !!i1751[4]
  i1750.m_FillMethod = i1751[5]
  i1750.m_FillAmount = i1751[6]
  i1750.m_FillClockwise = !!i1751[7]
  i1750.m_FillOrigin = i1751[8]
  i1750.m_UseSpriteMesh = !!i1751[9]
  i1750.m_PixelsPerUnitMultiplier = i1751[10]
  request.r(i1751[11], i1751[12], 0, i1750, 'm_Material')
  i1750.m_Maskable = !!i1751[13]
  i1750.m_Color = new pc.Color(i1751[14], i1751[15], i1751[16], i1751[17])
  i1750.m_RaycastTarget = !!i1751[18]
  i1750.m_RaycastPadding = new pc.Vec4( i1751[19], i1751[20], i1751[21], i1751[22] )
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1753 = data
  i1752.m_Alpha = i1753[0]
  i1752.m_Interactable = !!i1753[1]
  i1752.m_BlocksRaycasts = !!i1753[2]
  i1752.m_IgnoreParentGroups = !!i1753[3]
  i1752.enabled = !!i1753[4]
  return i1752
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i1754 = root || request.c( 'CanvasGroupAnimator' )
  var i1755 = data
  request.r(i1755[0], i1755[1], 0, i1754, 'canvasGroup')
  i1754.animateFade = !!i1755[2]
  i1754.triggerOnStart = !!i1755[3]
  i1754.isLooping = !!i1755[4]
  i1754.fadeTo = i1755[5]
  i1754.fadeDuration = i1755[6]
  i1754.fadeEaseType = i1755[7]
  return i1754
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1756 = root || request.c( 'UnityEngine.UI.Button' )
  var i1757 = data
  i1756.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1757[0], i1756.m_OnClick)
  i1756.m_Navigation = request.d('UnityEngine.UI.Navigation', i1757[1], i1756.m_Navigation)
  i1756.m_Transition = i1757[2]
  i1756.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1757[3], i1756.m_Colors)
  i1756.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1757[4], i1756.m_SpriteState)
  i1756.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1757[5], i1756.m_AnimationTriggers)
  i1756.m_Interactable = !!i1757[6]
  request.r(i1757[7], i1757[8], 0, i1756, 'm_TargetGraphic')
  return i1756
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1758 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1759 = data
  i1758.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1759[0], i1758.m_PersistentCalls)
  return i1758
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1760 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1761 = data
  var i1763 = i1761[0]
  var i1762 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.add(request.d('UnityEngine.Events.PersistentCall', i1763[i + 0]));
  }
  i1760.m_Calls = i1762
  return i1760
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1766 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1767 = data
  request.r(i1767[0], i1767[1], 0, i1766, 'm_Target')
  i1766.m_TargetAssemblyTypeName = i1767[2]
  i1766.m_MethodName = i1767[3]
  i1766.m_Mode = i1767[4]
  i1766.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1767[5], i1766.m_Arguments)
  i1766.m_CallState = i1767[6]
  return i1766
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1768 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1769 = data
  request.r(i1769[0], i1769[1], 0, i1768, 'm_ObjectArgument')
  i1768.m_ObjectArgumentAssemblyTypeName = i1769[2]
  i1768.m_IntArgument = i1769[3]
  i1768.m_FloatArgument = i1769[4]
  i1768.m_StringArgument = i1769[5]
  i1768.m_BoolArgument = !!i1769[6]
  return i1768
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1770 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1771 = data
  i1770.m_Mode = i1771[0]
  i1770.m_WrapAround = !!i1771[1]
  request.r(i1771[2], i1771[3], 0, i1770, 'm_SelectOnUp')
  request.r(i1771[4], i1771[5], 0, i1770, 'm_SelectOnDown')
  request.r(i1771[6], i1771[7], 0, i1770, 'm_SelectOnLeft')
  request.r(i1771[8], i1771[9], 0, i1770, 'm_SelectOnRight')
  return i1770
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1772 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1773 = data
  i1772.m_NormalColor = new pc.Color(i1773[0], i1773[1], i1773[2], i1773[3])
  i1772.m_HighlightedColor = new pc.Color(i1773[4], i1773[5], i1773[6], i1773[7])
  i1772.m_PressedColor = new pc.Color(i1773[8], i1773[9], i1773[10], i1773[11])
  i1772.m_SelectedColor = new pc.Color(i1773[12], i1773[13], i1773[14], i1773[15])
  i1772.m_DisabledColor = new pc.Color(i1773[16], i1773[17], i1773[18], i1773[19])
  i1772.m_ColorMultiplier = i1773[20]
  i1772.m_FadeDuration = i1773[21]
  return i1772
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1774 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1775 = data
  request.r(i1775[0], i1775[1], 0, i1774, 'm_HighlightedSprite')
  request.r(i1775[2], i1775[3], 0, i1774, 'm_PressedSprite')
  request.r(i1775[4], i1775[5], 0, i1774, 'm_SelectedSprite')
  request.r(i1775[6], i1775[7], 0, i1774, 'm_DisabledSprite')
  return i1774
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1776 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1777 = data
  i1776.m_NormalTrigger = i1777[0]
  i1776.m_HighlightedTrigger = i1777[1]
  i1776.m_PressedTrigger = i1777[2]
  i1776.m_SelectedTrigger = i1777[3]
  i1776.m_DisabledTrigger = i1777[4]
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1779 = data
  request.r(i1779[0], i1779[1], 0, i1778, 'animatorController')
  request.r(i1779[2], i1779[3], 0, i1778, 'avatar')
  i1778.updateMode = i1779[4]
  i1778.hasTransformHierarchy = !!i1779[5]
  i1778.applyRootMotion = !!i1779[6]
  var i1781 = i1779[7]
  var i1780 = []
  for(var i = 0; i < i1781.length; i += 2) {
  request.r(i1781[i + 0], i1781[i + 1], 2, i1780, '')
  }
  i1778.humanBones = i1780
  i1778.enabled = !!i1779[8]
  return i1778
}

Deserializers["PromtPopUp"] = function (request, data, root) {
  var i1784 = root || request.c( 'PromtPopUp' )
  var i1785 = data
  i1784.fake = !!i1785[0]
  i1784.DestroyGameObject = !!i1785[1]
  return i1784
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1786 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1787 = data
  i1786.m_hasFontAssetChanged = !!i1787[0]
  request.r(i1787[1], i1787[2], 0, i1786, 'm_baseMaterial')
  i1786.m_maskOffset = new pc.Vec4( i1787[3], i1787[4], i1787[5], i1787[6] )
  i1786.m_text = i1787[7]
  i1786.m_isRightToLeft = !!i1787[8]
  request.r(i1787[9], i1787[10], 0, i1786, 'm_fontAsset')
  request.r(i1787[11], i1787[12], 0, i1786, 'm_sharedMaterial')
  var i1789 = i1787[13]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 2) {
  request.r(i1789[i + 0], i1789[i + 1], 2, i1788, '')
  }
  i1786.m_fontSharedMaterials = i1788
  request.r(i1787[14], i1787[15], 0, i1786, 'm_fontMaterial')
  var i1791 = i1787[16]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 2) {
  request.r(i1791[i + 0], i1791[i + 1], 2, i1790, '')
  }
  i1786.m_fontMaterials = i1790
  i1786.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1787[17], i1787[18], i1787[19], i1787[20])
  i1786.m_fontColor = new pc.Color(i1787[21], i1787[22], i1787[23], i1787[24])
  i1786.m_enableVertexGradient = !!i1787[25]
  i1786.m_colorMode = i1787[26]
  i1786.m_fontColorGradient = request.d('TMPro.VertexGradient', i1787[27], i1786.m_fontColorGradient)
  request.r(i1787[28], i1787[29], 0, i1786, 'm_fontColorGradientPreset')
  request.r(i1787[30], i1787[31], 0, i1786, 'm_spriteAsset')
  i1786.m_tintAllSprites = !!i1787[32]
  request.r(i1787[33], i1787[34], 0, i1786, 'm_StyleSheet')
  i1786.m_TextStyleHashCode = i1787[35]
  i1786.m_overrideHtmlColors = !!i1787[36]
  i1786.m_faceColor = UnityEngine.Color32.ConstructColor(i1787[37], i1787[38], i1787[39], i1787[40])
  i1786.m_fontSize = i1787[41]
  i1786.m_fontSizeBase = i1787[42]
  i1786.m_fontWeight = i1787[43]
  i1786.m_enableAutoSizing = !!i1787[44]
  i1786.m_fontSizeMin = i1787[45]
  i1786.m_fontSizeMax = i1787[46]
  i1786.m_fontStyle = i1787[47]
  i1786.m_HorizontalAlignment = i1787[48]
  i1786.m_VerticalAlignment = i1787[49]
  i1786.m_textAlignment = i1787[50]
  i1786.m_characterSpacing = i1787[51]
  i1786.m_wordSpacing = i1787[52]
  i1786.m_lineSpacing = i1787[53]
  i1786.m_lineSpacingMax = i1787[54]
  i1786.m_paragraphSpacing = i1787[55]
  i1786.m_charWidthMaxAdj = i1787[56]
  i1786.m_enableWordWrapping = !!i1787[57]
  i1786.m_wordWrappingRatios = i1787[58]
  i1786.m_overflowMode = i1787[59]
  request.r(i1787[60], i1787[61], 0, i1786, 'm_linkedTextComponent')
  request.r(i1787[62], i1787[63], 0, i1786, 'parentLinkedComponent')
  i1786.m_enableKerning = !!i1787[64]
  i1786.m_enableExtraPadding = !!i1787[65]
  i1786.checkPaddingRequired = !!i1787[66]
  i1786.m_isRichText = !!i1787[67]
  i1786.m_parseCtrlCharacters = !!i1787[68]
  i1786.m_isOrthographic = !!i1787[69]
  i1786.m_isCullingEnabled = !!i1787[70]
  i1786.m_horizontalMapping = i1787[71]
  i1786.m_verticalMapping = i1787[72]
  i1786.m_uvLineOffset = i1787[73]
  i1786.m_geometrySortingOrder = i1787[74]
  i1786.m_IsTextObjectScaleStatic = !!i1787[75]
  i1786.m_VertexBufferAutoSizeReduction = !!i1787[76]
  i1786.m_useMaxVisibleDescender = !!i1787[77]
  i1786.m_pageToDisplay = i1787[78]
  i1786.m_margin = new pc.Vec4( i1787[79], i1787[80], i1787[81], i1787[82] )
  i1786.m_isUsingLegacyAnimationComponent = !!i1787[83]
  i1786.m_isVolumetricText = !!i1787[84]
  request.r(i1787[85], i1787[86], 0, i1786, 'm_Material')
  i1786.m_Maskable = !!i1787[87]
  i1786.m_Color = new pc.Color(i1787[88], i1787[89], i1787[90], i1787[91])
  i1786.m_RaycastTarget = !!i1787[92]
  i1786.m_RaycastPadding = new pc.Vec4( i1787[93], i1787[94], i1787[95], i1787[96] )
  return i1786
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1792 = root || request.c( 'TMPro.VertexGradient' )
  var i1793 = data
  i1792.topLeft = new pc.Color(i1793[0], i1793[1], i1793[2], i1793[3])
  i1792.topRight = new pc.Color(i1793[4], i1793[5], i1793[6], i1793[7])
  i1792.bottomLeft = new pc.Color(i1793[8], i1793[9], i1793[10], i1793[11])
  i1792.bottomRight = new pc.Color(i1793[12], i1793[13], i1793[14], i1793[15])
  return i1792
}

Deserializers["SetConditionMet"] = function (request, data, root) {
  var i1794 = root || request.c( 'SetConditionMet' )
  var i1795 = data
  return i1794
}

Deserializers["FloatingTextEffect"] = function (request, data, root) {
  var i1796 = root || request.c( 'FloatingTextEffect' )
  var i1797 = data
  request.r(i1797[0], i1797[1], 0, i1796, 'textMeshProUGUI')
  request.r(i1797[2], i1797[3], 0, i1796, 'textMeshPro')
  i1796.floatDistance = i1797[4]
  i1796.duration = i1797[5]
  return i1796
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1798 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1799 = data
  request.r(i1799[0], i1799[1], 0, i1798, 'm_FirstSelected')
  i1798.m_sendNavigationEvents = !!i1799[2]
  i1798.m_DragThreshold = i1799[3]
  return i1798
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1800 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1801 = data
  i1800.m_HorizontalAxis = i1801[0]
  i1800.m_VerticalAxis = i1801[1]
  i1800.m_SubmitButton = i1801[2]
  i1800.m_CancelButton = i1801[3]
  i1800.m_InputActionsPerSecond = i1801[4]
  i1800.m_RepeatDelay = i1801[5]
  i1800.m_ForceModuleActive = !!i1801[6]
  i1800.m_SendPointerHoverToParent = !!i1801[7]
  return i1800
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i1802 = root || request.c( 'ButtonPulse' )
  var i1803 = data
  i1802.scaleAmount = i1803[0]
  i1802.pulseDuration = i1803[1]
  return i1802
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i1804 = root || request.c( 'StartClickHandler' )
  var i1805 = data
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1807 = data
  i1806.ambientIntensity = i1807[0]
  i1806.reflectionIntensity = i1807[1]
  i1806.ambientMode = i1807[2]
  i1806.ambientLight = new pc.Color(i1807[3], i1807[4], i1807[5], i1807[6])
  i1806.ambientSkyColor = new pc.Color(i1807[7], i1807[8], i1807[9], i1807[10])
  i1806.ambientGroundColor = new pc.Color(i1807[11], i1807[12], i1807[13], i1807[14])
  i1806.ambientEquatorColor = new pc.Color(i1807[15], i1807[16], i1807[17], i1807[18])
  i1806.fogColor = new pc.Color(i1807[19], i1807[20], i1807[21], i1807[22])
  i1806.fogEndDistance = i1807[23]
  i1806.fogStartDistance = i1807[24]
  i1806.fogDensity = i1807[25]
  i1806.fog = !!i1807[26]
  request.r(i1807[27], i1807[28], 0, i1806, 'skybox')
  i1806.fogMode = i1807[29]
  var i1809 = i1807[30]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1809[i + 0]) );
  }
  i1806.lightmaps = i1808
  i1806.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1807[31], i1806.lightProbes)
  i1806.lightmapsMode = i1807[32]
  i1806.mixedBakeMode = i1807[33]
  i1806.environmentLightingMode = i1807[34]
  i1806.ambientProbe = new pc.SphericalHarmonicsL2(i1807[35])
  i1806.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1807[36])
  i1806.useReferenceAmbientProbe = !!i1807[37]
  request.r(i1807[38], i1807[39], 0, i1806, 'customReflection')
  request.r(i1807[40], i1807[41], 0, i1806, 'defaultReflection')
  i1806.defaultReflectionMode = i1807[42]
  i1806.defaultReflectionResolution = i1807[43]
  i1806.sunLightObjectId = i1807[44]
  i1806.pixelLightCount = i1807[45]
  i1806.defaultReflectionHDR = !!i1807[46]
  i1806.hasLightDataAsset = !!i1807[47]
  i1806.hasManualGenerate = !!i1807[48]
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1813 = data
  request.r(i1813[0], i1813[1], 0, i1812, 'lightmapColor')
  request.r(i1813[2], i1813[3], 0, i1812, 'lightmapDirection')
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1814 = root || new UnityEngine.LightProbes()
  var i1815 = data
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1823 = data
  var i1825 = i1823[0]
  var i1824 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1825[i + 0]));
  }
  i1822.ShaderCompilationErrors = i1824
  i1822.name = i1823[1]
  i1822.guid = i1823[2]
  var i1827 = i1823[3]
  var i1826 = []
  for(var i = 0; i < i1827.length; i += 1) {
    i1826.push( i1827[i + 0] );
  }
  i1822.shaderDefinedKeywords = i1826
  var i1829 = i1823[4]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1829[i + 0]) );
  }
  i1822.passes = i1828
  var i1831 = i1823[5]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1831[i + 0]) );
  }
  i1822.usePasses = i1830
  var i1833 = i1823[6]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1833[i + 0]) );
  }
  i1822.defaultParameterValues = i1832
  request.r(i1823[7], i1823[8], 0, i1822, 'unityFallbackShader')
  i1822.readDepth = !!i1823[9]
  i1822.isCreatedByShaderGraph = !!i1823[10]
  i1822.compiled = !!i1823[11]
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1837 = data
  i1836.shaderName = i1837[0]
  i1836.errorMessage = i1837[1]
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1842 = root || new pc.UnityShaderPass()
  var i1843 = data
  i1842.id = i1843[0]
  i1842.subShaderIndex = i1843[1]
  i1842.name = i1843[2]
  i1842.passType = i1843[3]
  i1842.grabPassTextureName = i1843[4]
  i1842.usePass = !!i1843[5]
  i1842.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1843[6], i1842.zTest)
  i1842.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1843[7], i1842.zWrite)
  i1842.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1843[8], i1842.culling)
  i1842.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1843[9], i1842.blending)
  i1842.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1843[10], i1842.alphaBlending)
  i1842.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1843[11], i1842.colorWriteMask)
  i1842.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1843[12], i1842.offsetUnits)
  i1842.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1843[13], i1842.offsetFactor)
  i1842.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1843[14], i1842.stencilRef)
  i1842.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1843[15], i1842.stencilReadMask)
  i1842.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1843[16], i1842.stencilWriteMask)
  i1842.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1843[17], i1842.stencilOp)
  i1842.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1843[18], i1842.stencilOpFront)
  i1842.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1843[19], i1842.stencilOpBack)
  var i1845 = i1843[20]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1845[i + 0]) );
  }
  i1842.tags = i1844
  var i1847 = i1843[21]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( i1847[i + 0] );
  }
  i1842.passDefinedKeywords = i1846
  var i1849 = i1843[22]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1849[i + 0]) );
  }
  i1842.passDefinedKeywordGroups = i1848
  var i1851 = i1843[23]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1851[i + 0]) );
  }
  i1842.variants = i1850
  var i1853 = i1843[24]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1853[i + 0]) );
  }
  i1842.excludedVariants = i1852
  i1842.hasDepthReader = !!i1843[25]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1855 = data
  i1854.val = i1855[0]
  i1854.name = i1855[1]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1857 = data
  i1856.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1857[0], i1856.src)
  i1856.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1857[1], i1856.dst)
  i1856.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1857[2], i1856.op)
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1859 = data
  i1858.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1859[0], i1858.pass)
  i1858.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1859[1], i1858.fail)
  i1858.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1859[2], i1858.zFail)
  i1858.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1859[3], i1858.comp)
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1863 = data
  i1862.name = i1863[0]
  i1862.value = i1863[1]
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1867 = data
  var i1869 = i1867[0]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.push( i1869[i + 0] );
  }
  i1866.keywords = i1868
  i1866.hasDiscard = !!i1867[1]
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1873 = data
  i1872.passId = i1873[0]
  i1872.subShaderIndex = i1873[1]
  var i1875 = i1873[2]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( i1875[i + 0] );
  }
  i1872.keywords = i1874
  i1872.vertexProgram = i1873[3]
  i1872.fragmentProgram = i1873[4]
  i1872.exportedForWebGl2 = !!i1873[5]
  i1872.readDepth = !!i1873[6]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1879 = data
  request.r(i1879[0], i1879[1], 0, i1878, 'shader')
  i1878.pass = i1879[2]
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1883 = data
  i1882.name = i1883[0]
  i1882.type = i1883[1]
  i1882.value = new pc.Vec4( i1883[2], i1883[3], i1883[4], i1883[5] )
  i1882.textureValue = i1883[6]
  i1882.shaderPropertyFlag = i1883[7]
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1885 = data
  i1884.name = i1885[0]
  request.r(i1885[1], i1885[2], 0, i1884, 'texture')
  i1884.aabb = i1885[3]
  i1884.vertices = i1885[4]
  i1884.triangles = i1885[5]
  i1884.textureRect = UnityEngine.Rect.MinMaxRect(i1885[6], i1885[7], i1885[8], i1885[9])
  i1884.packedRect = UnityEngine.Rect.MinMaxRect(i1885[10], i1885[11], i1885[12], i1885[13])
  i1884.border = new pc.Vec4( i1885[14], i1885[15], i1885[16], i1885[17] )
  i1884.transparency = i1885[18]
  i1884.bounds = i1885[19]
  i1884.pixelsPerUnit = i1885[20]
  i1884.textureWidth = i1885[21]
  i1884.textureHeight = i1885[22]
  i1884.nativeSize = new pc.Vec2( i1885[23], i1885[24] )
  i1884.pivot = new pc.Vec2( i1885[25], i1885[26] )
  i1884.textureRectOffset = new pc.Vec2( i1885[27], i1885[28] )
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1887 = data
  i1886.name = i1887[0]
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1889 = data
  i1888.name = i1889[0]
  i1888.wrapMode = i1889[1]
  i1888.isLooping = !!i1889[2]
  i1888.length = i1889[3]
  var i1891 = i1889[4]
  var i1890 = []
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1891[i + 0]) );
  }
  i1888.curves = i1890
  var i1893 = i1889[5]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1893[i + 0]) );
  }
  i1888.events = i1892
  i1888.halfPrecision = !!i1889[6]
  i1888._frameRate = i1889[7]
  i1888.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1889[8], i1888.localBounds)
  i1888.hasMuscleCurves = !!i1889[9]
  var i1895 = i1889[10]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( i1895[i + 0] );
  }
  i1888.clipMuscleConstant = i1894
  i1888.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1889[11], i1888.clipBindingConstant)
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1899 = data
  i1898.path = i1899[0]
  i1898.hash = i1899[1]
  i1898.componentType = i1899[2]
  i1898.property = i1899[3]
  i1898.keys = i1899[4]
  var i1901 = i1899[5]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1901[i + 0]) );
  }
  i1898.objectReferenceKeys = i1900
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1905 = data
  i1904.time = i1905[0]
  request.r(i1905[1], i1905[2], 0, i1904, 'value')
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1909 = data
  i1908.functionName = i1909[0]
  i1908.floatParameter = i1909[1]
  i1908.intParameter = i1909[2]
  i1908.stringParameter = i1909[3]
  request.r(i1909[4], i1909[5], 0, i1908, 'objectReferenceParameter')
  i1908.time = i1909[6]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1911 = data
  i1910.center = new pc.Vec3( i1911[0], i1911[1], i1911[2] )
  i1910.extends = new pc.Vec3( i1911[3], i1911[4], i1911[5] )
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1915 = data
  var i1917 = i1915[0]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.push( i1917[i + 0] );
  }
  i1914.genericBindings = i1916
  var i1919 = i1915[1]
  var i1918 = []
  for(var i = 0; i < i1919.length; i += 1) {
    i1918.push( i1919[i + 0] );
  }
  i1914.pptrCurveMapping = i1918
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1921 = data
  i1920.name = i1921[0]
  i1920.ascent = i1921[1]
  i1920.originalLineHeight = i1921[2]
  i1920.fontSize = i1921[3]
  var i1923 = i1921[4]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1923[i + 0]) );
  }
  i1920.characterInfo = i1922
  request.r(i1921[5], i1921[6], 0, i1920, 'texture')
  i1920.originalFontSize = i1921[7]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1927 = data
  i1926.index = i1927[0]
  i1926.advance = i1927[1]
  i1926.bearing = i1927[2]
  i1926.glyphWidth = i1927[3]
  i1926.glyphHeight = i1927[4]
  i1926.minX = i1927[5]
  i1926.maxX = i1927[6]
  i1926.minY = i1927[7]
  i1926.maxY = i1927[8]
  i1926.uvBottomLeftX = i1927[9]
  i1926.uvBottomLeftY = i1927[10]
  i1926.uvBottomRightX = i1927[11]
  i1926.uvBottomRightY = i1927[12]
  i1926.uvTopLeftX = i1927[13]
  i1926.uvTopLeftY = i1927[14]
  i1926.uvTopRightX = i1927[15]
  i1926.uvTopRightY = i1927[16]
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1929 = data
  i1928.name = i1929[0]
  var i1931 = i1929[1]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1931[i + 0]) );
  }
  i1928.layers = i1930
  var i1933 = i1929[2]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1933[i + 0]) );
  }
  i1928.parameters = i1932
  i1928.animationClips = i1929[3]
  i1928.avatarUnsupported = i1929[4]
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1937 = data
  i1936.name = i1937[0]
  i1936.defaultWeight = i1937[1]
  i1936.blendingMode = i1937[2]
  i1936.avatarMask = i1937[3]
  i1936.syncedLayerIndex = i1937[4]
  i1936.syncedLayerAffectsTiming = !!i1937[5]
  i1936.syncedLayers = i1937[6]
  i1936.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1937[7], i1936.stateMachine)
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1939 = data
  i1938.id = i1939[0]
  i1938.name = i1939[1]
  i1938.path = i1939[2]
  var i1941 = i1939[3]
  var i1940 = []
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1941[i + 0]) );
  }
  i1938.states = i1940
  var i1943 = i1939[4]
  var i1942 = []
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1943[i + 0]) );
  }
  i1938.machines = i1942
  var i1945 = i1939[5]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 1) {
    i1944.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1945[i + 0]) );
  }
  i1938.entryStateTransitions = i1944
  var i1947 = i1939[6]
  var i1946 = []
  for(var i = 0; i < i1947.length; i += 1) {
    i1946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1947[i + 0]) );
  }
  i1938.exitStateTransitions = i1946
  var i1949 = i1939[7]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1949[i + 0]) );
  }
  i1938.anyStateTransitions = i1948
  i1938.defaultStateId = i1939[8]
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1953 = data
  i1952.id = i1953[0]
  i1952.name = i1953[1]
  i1952.cycleOffset = i1953[2]
  i1952.cycleOffsetParameter = i1953[3]
  i1952.cycleOffsetParameterActive = !!i1953[4]
  i1952.mirror = !!i1953[5]
  i1952.mirrorParameter = i1953[6]
  i1952.mirrorParameterActive = !!i1953[7]
  i1952.motionId = i1953[8]
  i1952.nameHash = i1953[9]
  i1952.fullPathHash = i1953[10]
  i1952.speed = i1953[11]
  i1952.speedParameter = i1953[12]
  i1952.speedParameterActive = !!i1953[13]
  i1952.tag = i1953[14]
  i1952.tagHash = i1953[15]
  i1952.writeDefaultValues = !!i1953[16]
  var i1955 = i1953[17]
  var i1954 = []
  for(var i = 0; i < i1955.length; i += 2) {
  request.r(i1955[i + 0], i1955[i + 1], 2, i1954, '')
  }
  i1952.behaviours = i1954
  var i1957 = i1953[18]
  var i1956 = []
  for(var i = 0; i < i1957.length; i += 1) {
    i1956.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1957[i + 0]) );
  }
  i1952.transitions = i1956
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1963 = data
  i1962.fullPath = i1963[0]
  i1962.canTransitionToSelf = !!i1963[1]
  i1962.duration = i1963[2]
  i1962.exitTime = i1963[3]
  i1962.hasExitTime = !!i1963[4]
  i1962.hasFixedDuration = !!i1963[5]
  i1962.interruptionSource = i1963[6]
  i1962.offset = i1963[7]
  i1962.orderedInterruption = !!i1963[8]
  i1962.destinationStateId = i1963[9]
  i1962.isExit = !!i1963[10]
  i1962.mute = !!i1963[11]
  i1962.solo = !!i1963[12]
  var i1965 = i1963[13]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1965[i + 0]) );
  }
  i1962.conditions = i1964
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1971 = data
  i1970.destinationStateId = i1971[0]
  i1970.isExit = !!i1971[1]
  i1970.mute = !!i1971[2]
  i1970.solo = !!i1971[3]
  var i1973 = i1971[4]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 1) {
    i1972.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1973[i + 0]) );
  }
  i1970.conditions = i1972
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1977 = data
  i1976.defaultBool = !!i1977[0]
  i1976.defaultFloat = i1977[1]
  i1976.defaultInt = i1977[2]
  i1976.name = i1977[3]
  i1976.nameHash = i1977[4]
  i1976.type = i1977[5]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1979 = data
  i1978.name = i1979[0]
  i1978.bytes64 = i1979[1]
  i1978.data = i1979[2]
  return i1978
}

Deserializers["DataObject"] = function (request, data, root) {
  var i1980 = root || request.c( 'DataObject' )
  var i1981 = data
  i1980.level = i1981[0]
  i1980.name = i1981[1]
  i1980.assetValue = i1981[2]
  i1980.isLegit = !!i1981[3]
  request.r(i1981[4], i1981[5], 0, i1980, 'icon')
  i1980.bidder1Bid = i1981[6]
  i1980.bidder2Bid = i1981[7]
  i1980.bidder3Bid = i1981[8]
  i1980.playerBid = i1981[9]
  return i1980
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1982 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1983 = data
  i1982.hashCode = i1983[0]
  request.r(i1983[1], i1983[2], 0, i1982, 'material')
  i1982.materialHashCode = i1983[3]
  request.r(i1983[4], i1983[5], 0, i1982, 'atlas')
  i1982.normalStyle = i1983[6]
  i1982.normalSpacingOffset = i1983[7]
  i1982.boldStyle = i1983[8]
  i1982.boldSpacing = i1983[9]
  i1982.italicStyle = i1983[10]
  i1982.tabSize = i1983[11]
  i1982.m_Version = i1983[12]
  i1982.m_SourceFontFileGUID = i1983[13]
  request.r(i1983[14], i1983[15], 0, i1982, 'm_SourceFontFile_EditorRef')
  request.r(i1983[16], i1983[17], 0, i1982, 'm_SourceFontFile')
  i1982.m_AtlasPopulationMode = i1983[18]
  i1982.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1983[19], i1982.m_FaceInfo)
  var i1985 = i1983[20]
  var i1984 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1985.length; i += 1) {
    i1984.add(request.d('UnityEngine.TextCore.Glyph', i1985[i + 0]));
  }
  i1982.m_GlyphTable = i1984
  var i1987 = i1983[21]
  var i1986 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.add(request.d('TMPro.TMP_Character', i1987[i + 0]));
  }
  i1982.m_CharacterTable = i1986
  var i1989 = i1983[22]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 2) {
  request.r(i1989[i + 0], i1989[i + 1], 2, i1988, '')
  }
  i1982.m_AtlasTextures = i1988
  i1982.m_AtlasTextureIndex = i1983[23]
  i1982.m_IsMultiAtlasTexturesEnabled = !!i1983[24]
  i1982.m_ClearDynamicDataOnBuild = !!i1983[25]
  var i1991 = i1983[26]
  var i1990 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1991.length; i += 1) {
    i1990.add(request.d('UnityEngine.TextCore.GlyphRect', i1991[i + 0]));
  }
  i1982.m_UsedGlyphRects = i1990
  var i1993 = i1983[27]
  var i1992 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1993.length; i += 1) {
    i1992.add(request.d('UnityEngine.TextCore.GlyphRect', i1993[i + 0]));
  }
  i1982.m_FreeGlyphRects = i1992
  i1982.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1983[28], i1982.m_fontInfo)
  i1982.m_AtlasWidth = i1983[29]
  i1982.m_AtlasHeight = i1983[30]
  i1982.m_AtlasPadding = i1983[31]
  i1982.m_AtlasRenderMode = i1983[32]
  var i1995 = i1983[33]
  var i1994 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1995.length; i += 1) {
    i1994.add(request.d('TMPro.TMP_Glyph', i1995[i + 0]));
  }
  i1982.m_glyphInfoList = i1994
  i1982.m_KerningTable = request.d('TMPro.KerningTable', i1983[34], i1982.m_KerningTable)
  i1982.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1983[35], i1982.m_FontFeatureTable)
  var i1997 = i1983[36]
  var i1996 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1997.length; i += 2) {
  request.r(i1997[i + 0], i1997[i + 1], 1, i1996, '')
  }
  i1982.fallbackFontAssets = i1996
  var i1999 = i1983[37]
  var i1998 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1999.length; i += 2) {
  request.r(i1999[i + 0], i1999[i + 1], 1, i1998, '')
  }
  i1982.m_FallbackFontAssetTable = i1998
  i1982.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1983[38], i1982.m_CreationSettings)
  var i2001 = i1983[39]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( request.d('TMPro.TMP_FontWeightPair', i2001[i + 0]) );
  }
  i1982.m_FontWeightTable = i2000
  var i2003 = i1983[40]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( request.d('TMPro.TMP_FontWeightPair', i2003[i + 0]) );
  }
  i1982.fontWeights = i2002
  return i1982
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2004 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2005 = data
  i2004.m_FaceIndex = i2005[0]
  i2004.m_FamilyName = i2005[1]
  i2004.m_StyleName = i2005[2]
  i2004.m_PointSize = i2005[3]
  i2004.m_Scale = i2005[4]
  i2004.m_UnitsPerEM = i2005[5]
  i2004.m_LineHeight = i2005[6]
  i2004.m_AscentLine = i2005[7]
  i2004.m_CapLine = i2005[8]
  i2004.m_MeanLine = i2005[9]
  i2004.m_Baseline = i2005[10]
  i2004.m_DescentLine = i2005[11]
  i2004.m_SuperscriptOffset = i2005[12]
  i2004.m_SuperscriptSize = i2005[13]
  i2004.m_SubscriptOffset = i2005[14]
  i2004.m_SubscriptSize = i2005[15]
  i2004.m_UnderlineOffset = i2005[16]
  i2004.m_UnderlineThickness = i2005[17]
  i2004.m_StrikethroughOffset = i2005[18]
  i2004.m_StrikethroughThickness = i2005[19]
  i2004.m_TabWidth = i2005[20]
  return i2004
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2008 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2009 = data
  i2008.m_Index = i2009[0]
  i2008.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2009[1], i2008.m_Metrics)
  i2008.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2009[2], i2008.m_GlyphRect)
  i2008.m_Scale = i2009[3]
  i2008.m_AtlasIndex = i2009[4]
  i2008.m_ClassDefinitionType = i2009[5]
  return i2008
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2010 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2011 = data
  i2010.m_Width = i2011[0]
  i2010.m_Height = i2011[1]
  i2010.m_HorizontalBearingX = i2011[2]
  i2010.m_HorizontalBearingY = i2011[3]
  i2010.m_HorizontalAdvance = i2011[4]
  return i2010
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2012 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2013 = data
  i2012.m_X = i2013[0]
  i2012.m_Y = i2013[1]
  i2012.m_Width = i2013[2]
  i2012.m_Height = i2013[3]
  return i2012
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2016 = root || request.c( 'TMPro.TMP_Character' )
  var i2017 = data
  i2016.m_ElementType = i2017[0]
  i2016.m_Unicode = i2017[1]
  i2016.m_GlyphIndex = i2017[2]
  i2016.m_Scale = i2017[3]
  return i2016
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2022 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2023 = data
  i2022.Name = i2023[0]
  i2022.PointSize = i2023[1]
  i2022.Scale = i2023[2]
  i2022.CharacterCount = i2023[3]
  i2022.LineHeight = i2023[4]
  i2022.Baseline = i2023[5]
  i2022.Ascender = i2023[6]
  i2022.CapHeight = i2023[7]
  i2022.Descender = i2023[8]
  i2022.CenterLine = i2023[9]
  i2022.SuperscriptOffset = i2023[10]
  i2022.SubscriptOffset = i2023[11]
  i2022.SubSize = i2023[12]
  i2022.Underline = i2023[13]
  i2022.UnderlineThickness = i2023[14]
  i2022.strikethrough = i2023[15]
  i2022.strikethroughThickness = i2023[16]
  i2022.TabWidth = i2023[17]
  i2022.Padding = i2023[18]
  i2022.AtlasWidth = i2023[19]
  i2022.AtlasHeight = i2023[20]
  return i2022
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2026 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2027 = data
  i2026.id = i2027[0]
  i2026.x = i2027[1]
  i2026.y = i2027[2]
  i2026.width = i2027[3]
  i2026.height = i2027[4]
  i2026.xOffset = i2027[5]
  i2026.yOffset = i2027[6]
  i2026.xAdvance = i2027[7]
  i2026.scale = i2027[8]
  return i2026
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2028 = root || request.c( 'TMPro.KerningTable' )
  var i2029 = data
  var i2031 = i2029[0]
  var i2030 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.add(request.d('TMPro.KerningPair', i2031[i + 0]));
  }
  i2028.kerningPairs = i2030
  return i2028
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2034 = root || request.c( 'TMPro.KerningPair' )
  var i2035 = data
  i2034.xOffset = i2035[0]
  i2034.m_FirstGlyph = i2035[1]
  i2034.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2035[2], i2034.m_FirstGlyphAdjustments)
  i2034.m_SecondGlyph = i2035[3]
  i2034.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2035[4], i2034.m_SecondGlyphAdjustments)
  i2034.m_IgnoreSpacingAdjustments = !!i2035[5]
  return i2034
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2036 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2037 = data
  var i2039 = i2037[0]
  var i2038 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2039.length; i += 1) {
    i2038.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2039[i + 0]));
  }
  i2036.m_GlyphPairAdjustmentRecords = i2038
  return i2036
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2042 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2043 = data
  i2042.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2043[0], i2042.m_FirstAdjustmentRecord)
  i2042.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2043[1], i2042.m_SecondAdjustmentRecord)
  i2042.m_FeatureLookupFlags = i2043[2]
  return i2042
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2046 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2047 = data
  i2046.sourceFontFileName = i2047[0]
  i2046.sourceFontFileGUID = i2047[1]
  i2046.pointSizeSamplingMode = i2047[2]
  i2046.pointSize = i2047[3]
  i2046.padding = i2047[4]
  i2046.packingMode = i2047[5]
  i2046.atlasWidth = i2047[6]
  i2046.atlasHeight = i2047[7]
  i2046.characterSetSelectionMode = i2047[8]
  i2046.characterSequence = i2047[9]
  i2046.referencedFontAssetGUID = i2047[10]
  i2046.referencedTextAssetGUID = i2047[11]
  i2046.fontStyle = i2047[12]
  i2046.fontStyleModifier = i2047[13]
  i2046.renderMode = i2047[14]
  i2046.includeFontFeatures = !!i2047[15]
  return i2046
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2050 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2051 = data
  request.r(i2051[0], i2051[1], 0, i2050, 'regularTypeface')
  request.r(i2051[2], i2051[3], 0, i2050, 'italicTypeface')
  return i2050
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i2052 = root || request.c( 'AudioLibrary' )
  var i2053 = data
  var i2055 = i2053[0]
  var i2054 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.add(request.d('AudioLibrary+ClipEntry', i2055[i + 0]));
  }
  i2052.clips = i2054
  return i2052
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i2058 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i2059 = data
  i2058.key = i2059[0]
  i2058.channel = i2059[1]
  request.r(i2059[2], i2059[3], 0, i2058, 'clip')
  i2058.volume = i2059[4]
  i2058.loop = !!i2059[5]
  return i2058
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2060 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2061 = data
  i2060.useSafeMode = !!i2061[0]
  i2060.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2061[1], i2060.safeModeOptions)
  i2060.timeScale = i2061[2]
  i2060.unscaledTimeScale = i2061[3]
  i2060.useSmoothDeltaTime = !!i2061[4]
  i2060.maxSmoothUnscaledTime = i2061[5]
  i2060.rewindCallbackMode = i2061[6]
  i2060.showUnityEditorReport = !!i2061[7]
  i2060.logBehaviour = i2061[8]
  i2060.drawGizmos = !!i2061[9]
  i2060.defaultRecyclable = !!i2061[10]
  i2060.defaultAutoPlay = i2061[11]
  i2060.defaultUpdateType = i2061[12]
  i2060.defaultTimeScaleIndependent = !!i2061[13]
  i2060.defaultEaseType = i2061[14]
  i2060.defaultEaseOvershootOrAmplitude = i2061[15]
  i2060.defaultEasePeriod = i2061[16]
  i2060.defaultAutoKill = !!i2061[17]
  i2060.defaultLoopType = i2061[18]
  i2060.debugMode = !!i2061[19]
  i2060.debugStoreTargetId = !!i2061[20]
  i2060.showPreviewPanel = !!i2061[21]
  i2060.storeSettingsLocation = i2061[22]
  i2060.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2061[23], i2060.modules)
  i2060.createASMDEF = !!i2061[24]
  i2060.showPlayingTweens = !!i2061[25]
  i2060.showPausedTweens = !!i2061[26]
  return i2060
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2062 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2063 = data
  i2062.logBehaviour = i2063[0]
  i2062.nestedTweenFailureBehaviour = i2063[1]
  return i2062
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2064 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2065 = data
  i2064.showPanel = !!i2065[0]
  i2064.audioEnabled = !!i2065[1]
  i2064.physicsEnabled = !!i2065[2]
  i2064.physics2DEnabled = !!i2065[3]
  i2064.spriteEnabled = !!i2065[4]
  i2064.uiEnabled = !!i2065[5]
  i2064.textMeshProEnabled = !!i2065[6]
  i2064.tk2DEnabled = !!i2065[7]
  i2064.deAudioEnabled = !!i2065[8]
  i2064.deUnityExtendedEnabled = !!i2065[9]
  i2064.epoOutlineEnabled = !!i2065[10]
  return i2064
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2066 = root || request.c( 'TMPro.TMP_Settings' )
  var i2067 = data
  i2066.m_enableWordWrapping = !!i2067[0]
  i2066.m_enableKerning = !!i2067[1]
  i2066.m_enableExtraPadding = !!i2067[2]
  i2066.m_enableTintAllSprites = !!i2067[3]
  i2066.m_enableParseEscapeCharacters = !!i2067[4]
  i2066.m_EnableRaycastTarget = !!i2067[5]
  i2066.m_GetFontFeaturesAtRuntime = !!i2067[6]
  i2066.m_missingGlyphCharacter = i2067[7]
  i2066.m_warningsDisabled = !!i2067[8]
  request.r(i2067[9], i2067[10], 0, i2066, 'm_defaultFontAsset')
  i2066.m_defaultFontAssetPath = i2067[11]
  i2066.m_defaultFontSize = i2067[12]
  i2066.m_defaultAutoSizeMinRatio = i2067[13]
  i2066.m_defaultAutoSizeMaxRatio = i2067[14]
  i2066.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2067[15], i2067[16] )
  i2066.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2067[17], i2067[18] )
  i2066.m_autoSizeTextContainer = !!i2067[19]
  i2066.m_IsTextObjectScaleStatic = !!i2067[20]
  var i2069 = i2067[21]
  var i2068 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2069.length; i += 2) {
  request.r(i2069[i + 0], i2069[i + 1], 1, i2068, '')
  }
  i2066.m_fallbackFontAssets = i2068
  i2066.m_matchMaterialPreset = !!i2067[22]
  request.r(i2067[23], i2067[24], 0, i2066, 'm_defaultSpriteAsset')
  i2066.m_defaultSpriteAssetPath = i2067[25]
  i2066.m_enableEmojiSupport = !!i2067[26]
  i2066.m_MissingCharacterSpriteUnicode = i2067[27]
  i2066.m_defaultColorGradientPresetsPath = i2067[28]
  request.r(i2067[29], i2067[30], 0, i2066, 'm_defaultStyleSheet')
  i2066.m_StyleSheetsResourcePath = i2067[31]
  request.r(i2067[32], i2067[33], 0, i2066, 'm_leadingCharacters')
  request.r(i2067[34], i2067[35], 0, i2066, 'm_followingCharacters')
  i2066.m_UseModernHangulLineBreakingRules = !!i2067[36]
  return i2066
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2070 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2071 = data
  i2070.hashCode = i2071[0]
  request.r(i2071[1], i2071[2], 0, i2070, 'material')
  i2070.materialHashCode = i2071[3]
  request.r(i2071[4], i2071[5], 0, i2070, 'spriteSheet')
  var i2073 = i2071[6]
  var i2072 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2073.length; i += 1) {
    i2072.add(request.d('TMPro.TMP_Sprite', i2073[i + 0]));
  }
  i2070.spriteInfoList = i2072
  var i2075 = i2071[7]
  var i2074 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2075.length; i += 2) {
  request.r(i2075[i + 0], i2075[i + 1], 1, i2074, '')
  }
  i2070.fallbackSpriteAssets = i2074
  i2070.m_Version = i2071[8]
  i2070.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2071[9], i2070.m_FaceInfo)
  var i2077 = i2071[10]
  var i2076 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.add(request.d('TMPro.TMP_SpriteCharacter', i2077[i + 0]));
  }
  i2070.m_SpriteCharacterTable = i2076
  var i2079 = i2071[11]
  var i2078 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.add(request.d('TMPro.TMP_SpriteGlyph', i2079[i + 0]));
  }
  i2070.m_SpriteGlyphTable = i2078
  return i2070
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2082 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2083 = data
  i2082.name = i2083[0]
  i2082.hashCode = i2083[1]
  i2082.unicode = i2083[2]
  i2082.pivot = new pc.Vec2( i2083[3], i2083[4] )
  request.r(i2083[5], i2083[6], 0, i2082, 'sprite')
  i2082.id = i2083[7]
  i2082.x = i2083[8]
  i2082.y = i2083[9]
  i2082.width = i2083[10]
  i2082.height = i2083[11]
  i2082.xOffset = i2083[12]
  i2082.yOffset = i2083[13]
  i2082.xAdvance = i2083[14]
  i2082.scale = i2083[15]
  return i2082
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2088 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2089 = data
  i2088.m_Name = i2089[0]
  i2088.m_HashCode = i2089[1]
  i2088.m_ElementType = i2089[2]
  i2088.m_Unicode = i2089[3]
  i2088.m_GlyphIndex = i2089[4]
  i2088.m_Scale = i2089[5]
  return i2088
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2092 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2093 = data
  request.r(i2093[0], i2093[1], 0, i2092, 'sprite')
  i2092.m_Index = i2093[2]
  i2092.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2093[3], i2092.m_Metrics)
  i2092.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2093[4], i2092.m_GlyphRect)
  i2092.m_Scale = i2093[5]
  i2092.m_AtlasIndex = i2093[6]
  i2092.m_ClassDefinitionType = i2093[7]
  return i2092
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2094 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2095 = data
  var i2097 = i2095[0]
  var i2096 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2097.length; i += 1) {
    i2096.add(request.d('TMPro.TMP_Style', i2097[i + 0]));
  }
  i2094.m_StyleList = i2096
  return i2094
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2100 = root || request.c( 'TMPro.TMP_Style' )
  var i2101 = data
  i2100.m_Name = i2101[0]
  i2100.m_HashCode = i2101[1]
  i2100.m_OpeningDefinition = i2101[2]
  i2100.m_ClosingDefinition = i2101[3]
  i2100.m_OpeningTagArray = i2101[4]
  i2100.m_ClosingTagArray = i2101[5]
  i2100.m_OpeningTagUnicodeArray = i2101[6]
  i2100.m_ClosingTagUnicodeArray = i2101[7]
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2103 = data
  var i2105 = i2103[0]
  var i2104 = []
  for(var i = 0; i < i2105.length; i += 1) {
    i2104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2105[i + 0]) );
  }
  i2102.files = i2104
  i2102.componentToPrefabIds = i2103[1]
  return i2102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2109 = data
  i2108.path = i2109[0]
  request.r(i2109[1], i2109[2], 0, i2108, 'unityObject')
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2111 = data
  var i2113 = i2111[0]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2113[i + 0]) );
  }
  i2110.scriptsExecutionOrder = i2112
  var i2115 = i2111[1]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2115[i + 0]) );
  }
  i2110.sortingLayers = i2114
  var i2117 = i2111[2]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2117[i + 0]) );
  }
  i2110.cullingLayers = i2116
  i2110.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2111[3], i2110.timeSettings)
  i2110.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2111[4], i2110.physicsSettings)
  i2110.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2111[5], i2110.physics2DSettings)
  i2110.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2111[6], i2110.qualitySettings)
  i2110.enableRealtimeShadows = !!i2111[7]
  i2110.enableAutoInstancing = !!i2111[8]
  i2110.enableDynamicBatching = !!i2111[9]
  i2110.lightmapEncodingQuality = i2111[10]
  i2110.desiredColorSpace = i2111[11]
  var i2119 = i2111[12]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 1) {
    i2118.push( i2119[i + 0] );
  }
  i2110.allTags = i2118
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2123 = data
  i2122.name = i2123[0]
  i2122.value = i2123[1]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2127 = data
  i2126.id = i2127[0]
  i2126.name = i2127[1]
  i2126.value = i2127[2]
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2131 = data
  i2130.id = i2131[0]
  i2130.name = i2131[1]
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2133 = data
  i2132.fixedDeltaTime = i2133[0]
  i2132.maximumDeltaTime = i2133[1]
  i2132.timeScale = i2133[2]
  i2132.maximumParticleTimestep = i2133[3]
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2135 = data
  i2134.gravity = new pc.Vec3( i2135[0], i2135[1], i2135[2] )
  i2134.defaultSolverIterations = i2135[3]
  i2134.bounceThreshold = i2135[4]
  i2134.autoSyncTransforms = !!i2135[5]
  i2134.autoSimulation = !!i2135[6]
  var i2137 = i2135[7]
  var i2136 = []
  for(var i = 0; i < i2137.length; i += 1) {
    i2136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2137[i + 0]) );
  }
  i2134.collisionMatrix = i2136
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2141 = data
  i2140.enabled = !!i2141[0]
  i2140.layerId = i2141[1]
  i2140.otherLayerId = i2141[2]
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2143 = data
  request.r(i2143[0], i2143[1], 0, i2142, 'material')
  i2142.gravity = new pc.Vec2( i2143[2], i2143[3] )
  i2142.positionIterations = i2143[4]
  i2142.velocityIterations = i2143[5]
  i2142.velocityThreshold = i2143[6]
  i2142.maxLinearCorrection = i2143[7]
  i2142.maxAngularCorrection = i2143[8]
  i2142.maxTranslationSpeed = i2143[9]
  i2142.maxRotationSpeed = i2143[10]
  i2142.baumgarteScale = i2143[11]
  i2142.baumgarteTOIScale = i2143[12]
  i2142.timeToSleep = i2143[13]
  i2142.linearSleepTolerance = i2143[14]
  i2142.angularSleepTolerance = i2143[15]
  i2142.defaultContactOffset = i2143[16]
  i2142.autoSimulation = !!i2143[17]
  i2142.queriesHitTriggers = !!i2143[18]
  i2142.queriesStartInColliders = !!i2143[19]
  i2142.callbacksOnDisable = !!i2143[20]
  i2142.reuseCollisionCallbacks = !!i2143[21]
  i2142.autoSyncTransforms = !!i2143[22]
  var i2145 = i2143[23]
  var i2144 = []
  for(var i = 0; i < i2145.length; i += 1) {
    i2144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2145[i + 0]) );
  }
  i2142.collisionMatrix = i2144
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2149 = data
  i2148.enabled = !!i2149[0]
  i2148.layerId = i2149[1]
  i2148.otherLayerId = i2149[2]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2151 = data
  var i2153 = i2151[0]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2153[i + 0]) );
  }
  i2150.qualityLevels = i2152
  var i2155 = i2151[1]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 1) {
    i2154.push( i2155[i + 0] );
  }
  i2150.names = i2154
  i2150.shadows = i2151[2]
  i2150.anisotropicFiltering = i2151[3]
  i2150.antiAliasing = i2151[4]
  i2150.lodBias = i2151[5]
  i2150.shadowCascades = i2151[6]
  i2150.shadowDistance = i2151[7]
  i2150.shadowmaskMode = i2151[8]
  i2150.shadowProjection = i2151[9]
  i2150.shadowResolution = i2151[10]
  i2150.softParticles = !!i2151[11]
  i2150.softVegetation = !!i2151[12]
  i2150.activeColorSpace = i2151[13]
  i2150.desiredColorSpace = i2151[14]
  i2150.masterTextureLimit = i2151[15]
  i2150.maxQueuedFrames = i2151[16]
  i2150.particleRaycastBudget = i2151[17]
  i2150.pixelLightCount = i2151[18]
  i2150.realtimeReflectionProbes = !!i2151[19]
  i2150.shadowCascade2Split = i2151[20]
  i2150.shadowCascade4Split = new pc.Vec3( i2151[21], i2151[22], i2151[23] )
  i2150.streamingMipmapsActive = !!i2151[24]
  i2150.vSyncCount = i2151[25]
  i2150.asyncUploadBufferSize = i2151[26]
  i2150.asyncUploadTimeSlice = i2151[27]
  i2150.billboardsFaceCameraPosition = !!i2151[28]
  i2150.shadowNearPlaneOffset = i2151[29]
  i2150.streamingMipmapsMemoryBudget = i2151[30]
  i2150.maximumLODLevel = i2151[31]
  i2150.streamingMipmapsAddAllCameras = !!i2151[32]
  i2150.streamingMipmapsMaxLevelReduction = i2151[33]
  i2150.streamingMipmapsRenderersPerFrame = i2151[34]
  i2150.resolutionScalingFixedDPIFactor = i2151[35]
  i2150.streamingMipmapsMaxFileIORequests = i2151[36]
  i2150.currentQualityLevel = i2151[37]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2161 = data
  i2160.mode = i2161[0]
  i2160.parameter = i2161[1]
  i2160.threshold = i2161[2]
  return i2160
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2162 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2163 = data
  i2162.xPlacement = i2163[0]
  i2162.yPlacement = i2163[1]
  i2162.xAdvance = i2163[2]
  i2162.yAdvance = i2163[3]
  return i2162
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2164 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2165 = data
  i2164.m_GlyphIndex = i2165[0]
  i2164.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2165[1], i2164.m_GlyphValueRecord)
  return i2164
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2166 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2167 = data
  i2166.m_XPlacement = i2167[0]
  i2166.m_YPlacement = i2167[1]
  i2166.m_XAdvance = i2167[2]
  i2166.m_YAdvance = i2167[3]
  return i2166
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[56],"57":[3],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[3],"81":[82],"83":[84],"85":[84],"22":[14],"6":[3],"86":[59],"87":[14],"88":[82,14],"15":[14,26],"89":[14],"90":[26,14],"91":[82],"92":[26,14],"93":[14],"94":[14],"95":[14],"25":[22],"27":[26,14],"96":[14],"24":[22],"97":[14],"98":[14],"99":[14],"100":[14],"101":[14],"102":[14],"103":[14],"104":[14],"105":[14],"106":[26,14],"107":[14],"108":[14],"109":[14],"110":[14],"111":[26,14],"112":[14],"113":[36],"114":[36],"37":[36],"115":[36],"116":[3],"117":[3]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAspectFitter","UnityEngine.SpriteRenderer","UnityEngine.Light","GameManager","UnityEngine.GameObject","CanvasGroupAnimator","LevelImageSwitcher","DataObject","UnityEngine.RectTransform","TMPro.TextMeshProUGUI","TaskManager","AudioManager","AudioLibrary","DataManager","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.CanvasGroup","UnityEngine.UI.Button","UnityEngine.Animator","PromtPopUp","TMPro.TMP_FontAsset","SetConditionMet","UnityEditor.Animations.AnimatorController","FloatingTextEffect","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ButtonPulse","StartClickHandler","UnityEngine.Cubemap","UnityEngine.Font","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bullet","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "BidWars2-CosplayRequest";

Deserializers.lunaInitializationTime = "08/07/2025 05:28:30";

Deserializers.lunaDaysRunning = "0.9";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "LegitOrFake-2025-08-07";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4369";

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

Deserializers.buildID = "9fedbe74-fb14-46c7-8de2-d6d956de126b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

