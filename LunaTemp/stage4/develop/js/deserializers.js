var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1650 = root || request.c( 'UnityEngine.JointSpring' )
  var i1651 = data
  i1650.spring = i1651[0]
  i1650.damper = i1651[1]
  i1650.targetPosition = i1651[2]
  return i1650
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1652 = root || request.c( 'UnityEngine.JointMotor' )
  var i1653 = data
  i1652.m_TargetVelocity = i1653[0]
  i1652.m_Force = i1653[1]
  i1652.m_FreeSpin = i1653[2]
  return i1652
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1654 = root || request.c( 'UnityEngine.JointLimits' )
  var i1655 = data
  i1654.m_Min = i1655[0]
  i1654.m_Max = i1655[1]
  i1654.m_Bounciness = i1655[2]
  i1654.m_BounceMinVelocity = i1655[3]
  i1654.m_ContactDistance = i1655[4]
  i1654.minBounce = i1655[5]
  i1654.maxBounce = i1655[6]
  return i1654
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1656 = root || request.c( 'UnityEngine.JointDrive' )
  var i1657 = data
  i1656.m_PositionSpring = i1657[0]
  i1656.m_PositionDamper = i1657[1]
  i1656.m_MaximumForce = i1657[2]
  i1656.m_UseAcceleration = i1657[3]
  return i1656
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1658 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1659 = data
  i1658.m_Spring = i1659[0]
  i1658.m_Damper = i1659[1]
  return i1658
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1660 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1661 = data
  i1660.m_Limit = i1661[0]
  i1660.m_Bounciness = i1661[1]
  i1660.m_ContactDistance = i1661[2]
  return i1660
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1662 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1663 = data
  i1662.m_ExtremumSlip = i1663[0]
  i1662.m_ExtremumValue = i1663[1]
  i1662.m_AsymptoteSlip = i1663[2]
  i1662.m_AsymptoteValue = i1663[3]
  i1662.m_Stiffness = i1663[4]
  return i1662
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1664 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1665 = data
  i1664.m_LowerAngle = i1665[0]
  i1664.m_UpperAngle = i1665[1]
  return i1664
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1666 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1667 = data
  i1666.m_MotorSpeed = i1667[0]
  i1666.m_MaximumMotorTorque = i1667[1]
  return i1666
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1668 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1669 = data
  i1668.m_DampingRatio = i1669[0]
  i1668.m_Frequency = i1669[1]
  i1668.m_Angle = i1669[2]
  return i1668
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1670 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1671 = data
  i1670.m_LowerTranslation = i1671[0]
  i1670.m_UpperTranslation = i1671[1]
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1672 = root || new pc.UnityMaterial()
  var i1673 = data
  i1672.name = i1673[0]
  request.r(i1673[1], i1673[2], 0, i1672, 'shader')
  i1672.renderQueue = i1673[3]
  i1672.enableInstancing = !!i1673[4]
  var i1675 = i1673[5]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1675[i + 0]) );
  }
  i1672.floatParameters = i1674
  var i1677 = i1673[6]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 1) {
    i1676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1677[i + 0]) );
  }
  i1672.colorParameters = i1676
  var i1679 = i1673[7]
  var i1678 = []
  for(var i = 0; i < i1679.length; i += 1) {
    i1678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1679[i + 0]) );
  }
  i1672.vectorParameters = i1678
  var i1681 = i1673[8]
  var i1680 = []
  for(var i = 0; i < i1681.length; i += 1) {
    i1680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1681[i + 0]) );
  }
  i1672.textureParameters = i1680
  var i1683 = i1673[9]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1683[i + 0]) );
  }
  i1672.materialFlags = i1682
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1687 = data
  i1686.name = i1687[0]
  i1686.value = i1687[1]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1691 = data
  i1690.name = i1691[0]
  i1690.value = new pc.Color(i1691[1], i1691[2], i1691[3], i1691[4])
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1695 = data
  i1694.name = i1695[0]
  i1694.value = new pc.Vec4( i1695[1], i1695[2], i1695[3], i1695[4] )
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1699 = data
  i1698.name = i1699[0]
  request.r(i1699[1], i1699[2], 0, i1698, 'value')
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1703 = data
  i1702.name = i1703[0]
  i1702.enabled = !!i1703[1]
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1705 = data
  i1704.name = i1705[0]
  i1704.width = i1705[1]
  i1704.height = i1705[2]
  i1704.mipmapCount = i1705[3]
  i1704.anisoLevel = i1705[4]
  i1704.filterMode = i1705[5]
  i1704.hdr = !!i1705[6]
  i1704.format = i1705[7]
  i1704.wrapMode = i1705[8]
  i1704.alphaIsTransparency = !!i1705[9]
  i1704.alphaSource = i1705[10]
  i1704.graphicsFormat = i1705[11]
  i1704.sRGBTexture = !!i1705[12]
  i1704.desiredColorSpace = i1705[13]
  i1704.wrapU = i1705[14]
  i1704.wrapV = i1705[15]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1707 = data
  i1706.name = i1707[0]
  i1706.atlasId = i1707[1]
  i1706.mipmapCount = i1707[2]
  i1706.hdr = !!i1707[3]
  i1706.size = i1707[4]
  i1706.anisoLevel = i1707[5]
  i1706.filterMode = i1707[6]
  var i1709 = i1707[7]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 4) {
    i1708.push( UnityEngine.Rect.MinMaxRect(i1709[i + 0], i1709[i + 1], i1709[i + 2], i1709[i + 3]) );
  }
  i1706.rects = i1708
  i1706.wrapU = i1707[8]
  i1706.wrapV = i1707[9]
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1713 = data
  i1712.name = i1713[0]
  i1712.index = i1713[1]
  i1712.startup = !!i1713[2]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1715 = data
  i1714.position = new pc.Vec3( i1715[0], i1715[1], i1715[2] )
  i1714.scale = new pc.Vec3( i1715[3], i1715[4], i1715[5] )
  i1714.rotation = new pc.Quat(i1715[6], i1715[7], i1715[8], i1715[9])
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1717 = data
  i1716.enabled = !!i1717[0]
  i1716.aspect = i1717[1]
  i1716.orthographic = !!i1717[2]
  i1716.orthographicSize = i1717[3]
  i1716.backgroundColor = new pc.Color(i1717[4], i1717[5], i1717[6], i1717[7])
  i1716.nearClipPlane = i1717[8]
  i1716.farClipPlane = i1717[9]
  i1716.fieldOfView = i1717[10]
  i1716.depth = i1717[11]
  i1716.clearFlags = i1717[12]
  i1716.cullingMask = i1717[13]
  i1716.rect = i1717[14]
  request.r(i1717[15], i1717[16], 0, i1716, 'targetTexture')
  i1716.usePhysicalProperties = !!i1717[17]
  i1716.focalLength = i1717[18]
  i1716.sensorSize = new pc.Vec2( i1717[19], i1717[20] )
  i1716.lensShift = new pc.Vec2( i1717[21], i1717[22] )
  i1716.gateFit = i1717[23]
  i1716.commandBufferCount = i1717[24]
  i1716.cameraType = i1717[25]
  return i1716
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i1718 = root || request.c( 'CameraAspectFitter' )
  var i1719 = data
  request.r(i1719[0], i1719[1], 0, i1718, 'targetSprite')
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1721 = data
  i1720.name = i1721[0]
  i1720.tagId = i1721[1]
  i1720.enabled = !!i1721[2]
  i1720.isStatic = !!i1721[3]
  i1720.layer = i1721[4]
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1723 = data
  i1722.enabled = !!i1723[0]
  i1722.type = i1723[1]
  i1722.color = new pc.Color(i1723[2], i1723[3], i1723[4], i1723[5])
  i1722.cullingMask = i1723[6]
  i1722.intensity = i1723[7]
  i1722.range = i1723[8]
  i1722.spotAngle = i1723[9]
  i1722.shadows = i1723[10]
  i1722.shadowNormalBias = i1723[11]
  i1722.shadowBias = i1723[12]
  i1722.shadowStrength = i1723[13]
  i1722.shadowResolution = i1723[14]
  i1722.lightmapBakeType = i1723[15]
  i1722.renderMode = i1723[16]
  request.r(i1723[17], i1723[18], 0, i1722, 'cookie')
  i1722.cookieSize = i1723[19]
  return i1722
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1724 = root || request.c( 'GameManager' )
  var i1725 = data
  request.r(i1725[0], i1725[1], 0, i1724, 'endPanel')
  request.r(i1725[2], i1725[3], 0, i1724, 'endPanelAnimator')
  request.r(i1725[4], i1725[5], 0, i1724, 'levelImageSwitcher')
  request.r(i1725[6], i1725[7], 0, i1724, 'scoreTxt')
  i1724.end = !!i1725[8]
  i1724.endPlay = !!i1725[9]
  request.r(i1725[10], i1725[11], 0, i1724, 'hand')
  request.r(i1725[12], i1725[13], 0, i1724, 'message2')
  request.r(i1725[14], i1725[15], 0, i1724, 'animator')
  i1724.enableSound = !!i1725[16]
  var i1727 = i1725[17]
  var i1726 = new (System.Collections.Generic.List$1(Bridge.ns('DataObject')))
  for(var i = 0; i < i1727.length; i += 2) {
  request.r(i1727[i + 0], i1727[i + 1], 1, i1726, '')
  }
  i1724.items = i1726
  i1724.level = i1725[18]
  i1724.animPos = i1725[19]
  request.r(i1725[20], i1725[21], 0, i1724, 'itemsParent')
  request.r(i1725[22], i1725[23], 0, i1724, 'startClickHandler')
  i1724.itemValue = i1725[24]
  var i1729 = i1725[25]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 2) {
  request.r(i1729[i + 0], i1729[i + 1], 2, i1728, '')
  }
  i1724.biddersBubble = i1728
  request.r(i1725[26], i1725[27], 0, i1724, 'promptBubble')
  request.r(i1725[28], i1725[29], 0, i1724, 'btnGroup')
  request.r(i1725[30], i1725[31], 0, i1724, 'biddersLossTxt')
  request.r(i1725[32], i1725[33], 0, i1724, 'biddersLossPlus')
  request.r(i1725[34], i1725[35], 0, i1724, 'playersLoss')
  request.r(i1725[36], i1725[37], 0, i1724, 'playersPlus')
  request.r(i1725[38], i1725[39], 0, i1724, 'AuthenticImg')
  request.r(i1725[40], i1725[41], 0, i1724, 'profitImg')
  request.r(i1725[42], i1725[43], 0, i1724, 'fakeImg')
  request.r(i1725[44], i1725[45], 0, i1724, 'cashTxt')
  request.r(i1725[46], i1725[47], 0, i1724, 'failBidCanvas')
  request.r(i1725[48], i1725[49], 0, i1724, 'failPassCanvas')
  i1724.win = !!i1725[50]
  i1724.fail = !!i1725[51]
  i1724.bidFail = !!i1725[52]
  i1724.passFail = !!i1725[53]
  i1724.conditionMet = !!i1725[54]
  i1724.currentScore = i1725[55]
  i1724.SIP = !!i1725[56]
  var i1731 = i1725[57]
  var i1730 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1731.length; i += 2) {
  request.r(i1731[i + 0], i1731[i + 1], 1, i1730, '')
  }
  i1724.auctionItems = i1730
  return i1724
}

Deserializers["LevelImageSwitcher"] = function (request, data, root) {
  var i1738 = root || request.c( 'LevelImageSwitcher' )
  var i1739 = data
  var i1741 = i1739[0]
  var i1740 = []
  for(var i = 0; i < i1741.length; i += 2) {
  request.r(i1741[i + 0], i1741[i + 1], 2, i1740, '')
  }
  i1738.levelImages = i1740
  var i1743 = i1739[1]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 2) {
  request.r(i1743[i + 0], i1743[i + 1], 2, i1742, '')
  }
  i1738.itemImages = i1742
  return i1738
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i1746 = root || request.c( 'TaskManager' )
  var i1747 = data
  return i1746
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i1748 = root || request.c( 'AudioManager' )
  var i1749 = data
  request.r(i1749[0], i1749[1], 0, i1748, 'library')
  i1748.sfxPoolSize = i1749[2]
  i1748.enableSound = !!i1749[3]
  return i1748
}

Deserializers["DataManager"] = function (request, data, root) {
  var i1750 = root || request.c( 'DataManager' )
  var i1751 = data
  var i1753 = i1751[0]
  var i1752 = new (System.Collections.Generic.List$1(Bridge.ns('SingleDataEntry')))
  for(var i = 0; i < i1753.length; i += 1) {
    i1752.add(request.d('SingleDataEntry', i1753[i + 0]));
  }
  i1750.singleEntries = i1752
  var i1755 = i1751[1]
  var i1754 = new (System.Collections.Generic.List$1(Bridge.ns('ListDataEntry')))
  for(var i = 0; i < i1755.length; i += 1) {
    i1754.add(request.d('ListDataEntry', i1755[i + 0]));
  }
  i1750.listEntries = i1754
  return i1750
}

Deserializers["SingleDataEntry"] = function (request, data, root) {
  var i1758 = root || request.c( 'SingleDataEntry' )
  var i1759 = data
  i1758.key = i1759[0]
  request.r(i1759[1], i1759[2], 0, i1758, 'value')
  return i1758
}

Deserializers["ListDataEntry"] = function (request, data, root) {
  var i1762 = root || request.c( 'ListDataEntry' )
  var i1763 = data
  i1762.key = i1763[0]
  var i1765 = i1763[1]
  var i1764 = new (System.Collections.Generic.List$1(Bridge.ns('DataObject')))
  for(var i = 0; i < i1765.length; i += 2) {
  request.r(i1765[i + 0], i1765[i + 1], 1, i1764, '')
  }
  i1762.values = i1764
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1767 = data
  i1766.enabled = !!i1767[0]
  request.r(i1767[1], i1767[2], 0, i1766, 'sharedMaterial')
  var i1769 = i1767[3]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 2) {
  request.r(i1769[i + 0], i1769[i + 1], 2, i1768, '')
  }
  i1766.sharedMaterials = i1768
  i1766.receiveShadows = !!i1767[4]
  i1766.shadowCastingMode = i1767[5]
  i1766.sortingLayerID = i1767[6]
  i1766.sortingOrder = i1767[7]
  i1766.lightmapIndex = i1767[8]
  i1766.lightmapSceneIndex = i1767[9]
  i1766.lightmapScaleOffset = new pc.Vec4( i1767[10], i1767[11], i1767[12], i1767[13] )
  i1766.lightProbeUsage = i1767[14]
  i1766.reflectionProbeUsage = i1767[15]
  i1766.color = new pc.Color(i1767[16], i1767[17], i1767[18], i1767[19])
  request.r(i1767[20], i1767[21], 0, i1766, 'sprite')
  i1766.flipX = !!i1767[22]
  i1766.flipY = !!i1767[23]
  i1766.drawMode = i1767[24]
  i1766.size = new pc.Vec2( i1767[25], i1767[26] )
  i1766.tileMode = i1767[27]
  i1766.adaptiveModeThreshold = i1767[28]
  i1766.maskInteraction = i1767[29]
  i1766.spriteSortPoint = i1767[30]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1773 = data
  i1772.pivot = new pc.Vec2( i1773[0], i1773[1] )
  i1772.anchorMin = new pc.Vec2( i1773[2], i1773[3] )
  i1772.anchorMax = new pc.Vec2( i1773[4], i1773[5] )
  i1772.sizeDelta = new pc.Vec2( i1773[6], i1773[7] )
  i1772.anchoredPosition3D = new pc.Vec3( i1773[8], i1773[9], i1773[10] )
  i1772.rotation = new pc.Quat(i1773[11], i1773[12], i1773[13], i1773[14])
  i1772.scale = new pc.Vec3( i1773[15], i1773[16], i1773[17] )
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1775 = data
  i1774.enabled = !!i1775[0]
  i1774.planeDistance = i1775[1]
  i1774.referencePixelsPerUnit = i1775[2]
  i1774.isFallbackOverlay = !!i1775[3]
  i1774.renderMode = i1775[4]
  i1774.renderOrder = i1775[5]
  i1774.sortingLayerName = i1775[6]
  i1774.sortingOrder = i1775[7]
  i1774.scaleFactor = i1775[8]
  request.r(i1775[9], i1775[10], 0, i1774, 'worldCamera')
  i1774.overrideSorting = !!i1775[11]
  i1774.pixelPerfect = !!i1775[12]
  i1774.targetDisplay = i1775[13]
  i1774.overridePixelPerfect = !!i1775[14]
  return i1774
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1776 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1777 = data
  i1776.m_UiScaleMode = i1777[0]
  i1776.m_ReferencePixelsPerUnit = i1777[1]
  i1776.m_ScaleFactor = i1777[2]
  i1776.m_ReferenceResolution = new pc.Vec2( i1777[3], i1777[4] )
  i1776.m_ScreenMatchMode = i1777[5]
  i1776.m_MatchWidthOrHeight = i1777[6]
  i1776.m_PhysicalUnit = i1777[7]
  i1776.m_FallbackScreenDPI = i1777[8]
  i1776.m_DefaultSpriteDPI = i1777[9]
  i1776.m_DynamicPixelsPerUnit = i1777[10]
  i1776.m_PresetInfoIsWorld = !!i1777[11]
  return i1776
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1778 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1779 = data
  i1778.m_IgnoreReversedGraphics = !!i1779[0]
  i1778.m_BlockingObjects = i1779[1]
  i1778.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1779[2] )
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1781 = data
  i1780.cullTransparentMesh = !!i1781[0]
  return i1780
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1782 = root || request.c( 'UnityEngine.UI.Image' )
  var i1783 = data
  request.r(i1783[0], i1783[1], 0, i1782, 'm_Sprite')
  i1782.m_Type = i1783[2]
  i1782.m_PreserveAspect = !!i1783[3]
  i1782.m_FillCenter = !!i1783[4]
  i1782.m_FillMethod = i1783[5]
  i1782.m_FillAmount = i1783[6]
  i1782.m_FillClockwise = !!i1783[7]
  i1782.m_FillOrigin = i1783[8]
  i1782.m_UseSpriteMesh = !!i1783[9]
  i1782.m_PixelsPerUnitMultiplier = i1783[10]
  request.r(i1783[11], i1783[12], 0, i1782, 'm_Material')
  i1782.m_Maskable = !!i1783[13]
  i1782.m_Color = new pc.Color(i1783[14], i1783[15], i1783[16], i1783[17])
  i1782.m_RaycastTarget = !!i1783[18]
  i1782.m_RaycastPadding = new pc.Vec4( i1783[19], i1783[20], i1783[21], i1783[22] )
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1785 = data
  i1784.m_Alpha = i1785[0]
  i1784.m_Interactable = !!i1785[1]
  i1784.m_BlocksRaycasts = !!i1785[2]
  i1784.m_IgnoreParentGroups = !!i1785[3]
  i1784.enabled = !!i1785[4]
  return i1784
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i1786 = root || request.c( 'CanvasGroupAnimator' )
  var i1787 = data
  request.r(i1787[0], i1787[1], 0, i1786, 'canvasGroup')
  i1786.animateFade = !!i1787[2]
  i1786.triggerOnStart = !!i1787[3]
  i1786.isLooping = !!i1787[4]
  i1786.fadeTo = i1787[5]
  i1786.fadeDuration = i1787[6]
  i1786.fadeEaseType = i1787[7]
  return i1786
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1788 = root || request.c( 'UnityEngine.UI.Button' )
  var i1789 = data
  i1788.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1789[0], i1788.m_OnClick)
  i1788.m_Navigation = request.d('UnityEngine.UI.Navigation', i1789[1], i1788.m_Navigation)
  i1788.m_Transition = i1789[2]
  i1788.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1789[3], i1788.m_Colors)
  i1788.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1789[4], i1788.m_SpriteState)
  i1788.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1789[5], i1788.m_AnimationTriggers)
  i1788.m_Interactable = !!i1789[6]
  request.r(i1789[7], i1789[8], 0, i1788, 'm_TargetGraphic')
  return i1788
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1790 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1791 = data
  i1790.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1791[0], i1790.m_PersistentCalls)
  return i1790
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1792 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1793 = data
  var i1795 = i1793[0]
  var i1794 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1795.length; i += 1) {
    i1794.add(request.d('UnityEngine.Events.PersistentCall', i1795[i + 0]));
  }
  i1792.m_Calls = i1794
  return i1792
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1798 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1799 = data
  request.r(i1799[0], i1799[1], 0, i1798, 'm_Target')
  i1798.m_TargetAssemblyTypeName = i1799[2]
  i1798.m_MethodName = i1799[3]
  i1798.m_Mode = i1799[4]
  i1798.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1799[5], i1798.m_Arguments)
  i1798.m_CallState = i1799[6]
  return i1798
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1800 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1801 = data
  request.r(i1801[0], i1801[1], 0, i1800, 'm_ObjectArgument')
  i1800.m_ObjectArgumentAssemblyTypeName = i1801[2]
  i1800.m_IntArgument = i1801[3]
  i1800.m_FloatArgument = i1801[4]
  i1800.m_StringArgument = i1801[5]
  i1800.m_BoolArgument = !!i1801[6]
  return i1800
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1802 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1803 = data
  i1802.m_Mode = i1803[0]
  i1802.m_WrapAround = !!i1803[1]
  request.r(i1803[2], i1803[3], 0, i1802, 'm_SelectOnUp')
  request.r(i1803[4], i1803[5], 0, i1802, 'm_SelectOnDown')
  request.r(i1803[6], i1803[7], 0, i1802, 'm_SelectOnLeft')
  request.r(i1803[8], i1803[9], 0, i1802, 'm_SelectOnRight')
  return i1802
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1805 = data
  i1804.m_NormalColor = new pc.Color(i1805[0], i1805[1], i1805[2], i1805[3])
  i1804.m_HighlightedColor = new pc.Color(i1805[4], i1805[5], i1805[6], i1805[7])
  i1804.m_PressedColor = new pc.Color(i1805[8], i1805[9], i1805[10], i1805[11])
  i1804.m_SelectedColor = new pc.Color(i1805[12], i1805[13], i1805[14], i1805[15])
  i1804.m_DisabledColor = new pc.Color(i1805[16], i1805[17], i1805[18], i1805[19])
  i1804.m_ColorMultiplier = i1805[20]
  i1804.m_FadeDuration = i1805[21]
  return i1804
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1806 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1807 = data
  request.r(i1807[0], i1807[1], 0, i1806, 'm_HighlightedSprite')
  request.r(i1807[2], i1807[3], 0, i1806, 'm_PressedSprite')
  request.r(i1807[4], i1807[5], 0, i1806, 'm_SelectedSprite')
  request.r(i1807[6], i1807[7], 0, i1806, 'm_DisabledSprite')
  return i1806
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1808 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1809 = data
  i1808.m_NormalTrigger = i1809[0]
  i1808.m_HighlightedTrigger = i1809[1]
  i1808.m_PressedTrigger = i1809[2]
  i1808.m_SelectedTrigger = i1809[3]
  i1808.m_DisabledTrigger = i1809[4]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1811 = data
  request.r(i1811[0], i1811[1], 0, i1810, 'animatorController')
  request.r(i1811[2], i1811[3], 0, i1810, 'avatar')
  i1810.updateMode = i1811[4]
  i1810.hasTransformHierarchy = !!i1811[5]
  i1810.applyRootMotion = !!i1811[6]
  var i1813 = i1811[7]
  var i1812 = []
  for(var i = 0; i < i1813.length; i += 2) {
  request.r(i1813[i + 0], i1813[i + 1], 2, i1812, '')
  }
  i1810.humanBones = i1812
  i1810.enabled = !!i1811[8]
  return i1810
}

Deserializers["PromtPopUp"] = function (request, data, root) {
  var i1816 = root || request.c( 'PromtPopUp' )
  var i1817 = data
  i1816.fake = !!i1817[0]
  i1816.DestroyGameObject = !!i1817[1]
  return i1816
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1818 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1819 = data
  i1818.m_hasFontAssetChanged = !!i1819[0]
  request.r(i1819[1], i1819[2], 0, i1818, 'm_baseMaterial')
  i1818.m_maskOffset = new pc.Vec4( i1819[3], i1819[4], i1819[5], i1819[6] )
  i1818.m_text = i1819[7]
  i1818.m_isRightToLeft = !!i1819[8]
  request.r(i1819[9], i1819[10], 0, i1818, 'm_fontAsset')
  request.r(i1819[11], i1819[12], 0, i1818, 'm_sharedMaterial')
  var i1821 = i1819[13]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 2) {
  request.r(i1821[i + 0], i1821[i + 1], 2, i1820, '')
  }
  i1818.m_fontSharedMaterials = i1820
  request.r(i1819[14], i1819[15], 0, i1818, 'm_fontMaterial')
  var i1823 = i1819[16]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 2) {
  request.r(i1823[i + 0], i1823[i + 1], 2, i1822, '')
  }
  i1818.m_fontMaterials = i1822
  i1818.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1819[17], i1819[18], i1819[19], i1819[20])
  i1818.m_fontColor = new pc.Color(i1819[21], i1819[22], i1819[23], i1819[24])
  i1818.m_enableVertexGradient = !!i1819[25]
  i1818.m_colorMode = i1819[26]
  i1818.m_fontColorGradient = request.d('TMPro.VertexGradient', i1819[27], i1818.m_fontColorGradient)
  request.r(i1819[28], i1819[29], 0, i1818, 'm_fontColorGradientPreset')
  request.r(i1819[30], i1819[31], 0, i1818, 'm_spriteAsset')
  i1818.m_tintAllSprites = !!i1819[32]
  request.r(i1819[33], i1819[34], 0, i1818, 'm_StyleSheet')
  i1818.m_TextStyleHashCode = i1819[35]
  i1818.m_overrideHtmlColors = !!i1819[36]
  i1818.m_faceColor = UnityEngine.Color32.ConstructColor(i1819[37], i1819[38], i1819[39], i1819[40])
  i1818.m_fontSize = i1819[41]
  i1818.m_fontSizeBase = i1819[42]
  i1818.m_fontWeight = i1819[43]
  i1818.m_enableAutoSizing = !!i1819[44]
  i1818.m_fontSizeMin = i1819[45]
  i1818.m_fontSizeMax = i1819[46]
  i1818.m_fontStyle = i1819[47]
  i1818.m_HorizontalAlignment = i1819[48]
  i1818.m_VerticalAlignment = i1819[49]
  i1818.m_textAlignment = i1819[50]
  i1818.m_characterSpacing = i1819[51]
  i1818.m_wordSpacing = i1819[52]
  i1818.m_lineSpacing = i1819[53]
  i1818.m_lineSpacingMax = i1819[54]
  i1818.m_paragraphSpacing = i1819[55]
  i1818.m_charWidthMaxAdj = i1819[56]
  i1818.m_enableWordWrapping = !!i1819[57]
  i1818.m_wordWrappingRatios = i1819[58]
  i1818.m_overflowMode = i1819[59]
  request.r(i1819[60], i1819[61], 0, i1818, 'm_linkedTextComponent')
  request.r(i1819[62], i1819[63], 0, i1818, 'parentLinkedComponent')
  i1818.m_enableKerning = !!i1819[64]
  i1818.m_enableExtraPadding = !!i1819[65]
  i1818.checkPaddingRequired = !!i1819[66]
  i1818.m_isRichText = !!i1819[67]
  i1818.m_parseCtrlCharacters = !!i1819[68]
  i1818.m_isOrthographic = !!i1819[69]
  i1818.m_isCullingEnabled = !!i1819[70]
  i1818.m_horizontalMapping = i1819[71]
  i1818.m_verticalMapping = i1819[72]
  i1818.m_uvLineOffset = i1819[73]
  i1818.m_geometrySortingOrder = i1819[74]
  i1818.m_IsTextObjectScaleStatic = !!i1819[75]
  i1818.m_VertexBufferAutoSizeReduction = !!i1819[76]
  i1818.m_useMaxVisibleDescender = !!i1819[77]
  i1818.m_pageToDisplay = i1819[78]
  i1818.m_margin = new pc.Vec4( i1819[79], i1819[80], i1819[81], i1819[82] )
  i1818.m_isUsingLegacyAnimationComponent = !!i1819[83]
  i1818.m_isVolumetricText = !!i1819[84]
  request.r(i1819[85], i1819[86], 0, i1818, 'm_Material')
  i1818.m_Maskable = !!i1819[87]
  i1818.m_Color = new pc.Color(i1819[88], i1819[89], i1819[90], i1819[91])
  i1818.m_RaycastTarget = !!i1819[92]
  i1818.m_RaycastPadding = new pc.Vec4( i1819[93], i1819[94], i1819[95], i1819[96] )
  return i1818
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1824 = root || request.c( 'TMPro.VertexGradient' )
  var i1825 = data
  i1824.topLeft = new pc.Color(i1825[0], i1825[1], i1825[2], i1825[3])
  i1824.topRight = new pc.Color(i1825[4], i1825[5], i1825[6], i1825[7])
  i1824.bottomLeft = new pc.Color(i1825[8], i1825[9], i1825[10], i1825[11])
  i1824.bottomRight = new pc.Color(i1825[12], i1825[13], i1825[14], i1825[15])
  return i1824
}

Deserializers["SetConditionMet"] = function (request, data, root) {
  var i1826 = root || request.c( 'SetConditionMet' )
  var i1827 = data
  return i1826
}

Deserializers["FloatingTextEffect"] = function (request, data, root) {
  var i1828 = root || request.c( 'FloatingTextEffect' )
  var i1829 = data
  request.r(i1829[0], i1829[1], 0, i1828, 'textMeshProUGUI')
  request.r(i1829[2], i1829[3], 0, i1828, 'textMeshPro')
  i1828.floatDistance = i1829[4]
  i1828.duration = i1829[5]
  return i1828
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1830 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1831 = data
  request.r(i1831[0], i1831[1], 0, i1830, 'm_FirstSelected')
  i1830.m_sendNavigationEvents = !!i1831[2]
  i1830.m_DragThreshold = i1831[3]
  return i1830
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1832 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1833 = data
  i1832.m_HorizontalAxis = i1833[0]
  i1832.m_VerticalAxis = i1833[1]
  i1832.m_SubmitButton = i1833[2]
  i1832.m_CancelButton = i1833[3]
  i1832.m_InputActionsPerSecond = i1833[4]
  i1832.m_RepeatDelay = i1833[5]
  i1832.m_ForceModuleActive = !!i1833[6]
  i1832.m_SendPointerHoverToParent = !!i1833[7]
  return i1832
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i1834 = root || request.c( 'ButtonPulse' )
  var i1835 = data
  i1834.scaleAmount = i1835[0]
  i1834.pulseDuration = i1835[1]
  return i1834
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i1836 = root || request.c( 'StartClickHandler' )
  var i1837 = data
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1839 = data
  i1838.ambientIntensity = i1839[0]
  i1838.reflectionIntensity = i1839[1]
  i1838.ambientMode = i1839[2]
  i1838.ambientLight = new pc.Color(i1839[3], i1839[4], i1839[5], i1839[6])
  i1838.ambientSkyColor = new pc.Color(i1839[7], i1839[8], i1839[9], i1839[10])
  i1838.ambientGroundColor = new pc.Color(i1839[11], i1839[12], i1839[13], i1839[14])
  i1838.ambientEquatorColor = new pc.Color(i1839[15], i1839[16], i1839[17], i1839[18])
  i1838.fogColor = new pc.Color(i1839[19], i1839[20], i1839[21], i1839[22])
  i1838.fogEndDistance = i1839[23]
  i1838.fogStartDistance = i1839[24]
  i1838.fogDensity = i1839[25]
  i1838.fog = !!i1839[26]
  request.r(i1839[27], i1839[28], 0, i1838, 'skybox')
  i1838.fogMode = i1839[29]
  var i1841 = i1839[30]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1841[i + 0]) );
  }
  i1838.lightmaps = i1840
  i1838.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1839[31], i1838.lightProbes)
  i1838.lightmapsMode = i1839[32]
  i1838.mixedBakeMode = i1839[33]
  i1838.environmentLightingMode = i1839[34]
  i1838.ambientProbe = new pc.SphericalHarmonicsL2(i1839[35])
  i1838.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1839[36])
  i1838.useReferenceAmbientProbe = !!i1839[37]
  request.r(i1839[38], i1839[39], 0, i1838, 'customReflection')
  request.r(i1839[40], i1839[41], 0, i1838, 'defaultReflection')
  i1838.defaultReflectionMode = i1839[42]
  i1838.defaultReflectionResolution = i1839[43]
  i1838.sunLightObjectId = i1839[44]
  i1838.pixelLightCount = i1839[45]
  i1838.defaultReflectionHDR = !!i1839[46]
  i1838.hasLightDataAsset = !!i1839[47]
  i1838.hasManualGenerate = !!i1839[48]
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1845 = data
  request.r(i1845[0], i1845[1], 0, i1844, 'lightmapColor')
  request.r(i1845[2], i1845[3], 0, i1844, 'lightmapDirection')
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1846 = root || new UnityEngine.LightProbes()
  var i1847 = data
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1855 = data
  var i1857 = i1855[0]
  var i1856 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1857[i + 0]));
  }
  i1854.ShaderCompilationErrors = i1856
  i1854.name = i1855[1]
  i1854.guid = i1855[2]
  var i1859 = i1855[3]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( i1859[i + 0] );
  }
  i1854.shaderDefinedKeywords = i1858
  var i1861 = i1855[4]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1861[i + 0]) );
  }
  i1854.passes = i1860
  var i1863 = i1855[5]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1863[i + 0]) );
  }
  i1854.usePasses = i1862
  var i1865 = i1855[6]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1865[i + 0]) );
  }
  i1854.defaultParameterValues = i1864
  request.r(i1855[7], i1855[8], 0, i1854, 'unityFallbackShader')
  i1854.readDepth = !!i1855[9]
  i1854.isCreatedByShaderGraph = !!i1855[10]
  i1854.compiled = !!i1855[11]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1869 = data
  i1868.shaderName = i1869[0]
  i1868.errorMessage = i1869[1]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1874 = root || new pc.UnityShaderPass()
  var i1875 = data
  i1874.id = i1875[0]
  i1874.subShaderIndex = i1875[1]
  i1874.name = i1875[2]
  i1874.passType = i1875[3]
  i1874.grabPassTextureName = i1875[4]
  i1874.usePass = !!i1875[5]
  i1874.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1875[6], i1874.zTest)
  i1874.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1875[7], i1874.zWrite)
  i1874.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1875[8], i1874.culling)
  i1874.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1875[9], i1874.blending)
  i1874.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1875[10], i1874.alphaBlending)
  i1874.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1875[11], i1874.colorWriteMask)
  i1874.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1875[12], i1874.offsetUnits)
  i1874.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1875[13], i1874.offsetFactor)
  i1874.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1875[14], i1874.stencilRef)
  i1874.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1875[15], i1874.stencilReadMask)
  i1874.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1875[16], i1874.stencilWriteMask)
  i1874.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1875[17], i1874.stencilOp)
  i1874.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1875[18], i1874.stencilOpFront)
  i1874.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1875[19], i1874.stencilOpBack)
  var i1877 = i1875[20]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1877[i + 0]) );
  }
  i1874.tags = i1876
  var i1879 = i1875[21]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( i1879[i + 0] );
  }
  i1874.passDefinedKeywords = i1878
  var i1881 = i1875[22]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1881[i + 0]) );
  }
  i1874.passDefinedKeywordGroups = i1880
  var i1883 = i1875[23]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1883[i + 0]) );
  }
  i1874.variants = i1882
  var i1885 = i1875[24]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1885[i + 0]) );
  }
  i1874.excludedVariants = i1884
  i1874.hasDepthReader = !!i1875[25]
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1887 = data
  i1886.val = i1887[0]
  i1886.name = i1887[1]
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1889 = data
  i1888.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1889[0], i1888.src)
  i1888.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1889[1], i1888.dst)
  i1888.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1889[2], i1888.op)
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1891 = data
  i1890.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1891[0], i1890.pass)
  i1890.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1891[1], i1890.fail)
  i1890.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1891[2], i1890.zFail)
  i1890.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1891[3], i1890.comp)
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1895 = data
  i1894.name = i1895[0]
  i1894.value = i1895[1]
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1899 = data
  var i1901 = i1899[0]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.push( i1901[i + 0] );
  }
  i1898.keywords = i1900
  i1898.hasDiscard = !!i1899[1]
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1905 = data
  i1904.passId = i1905[0]
  i1904.subShaderIndex = i1905[1]
  var i1907 = i1905[2]
  var i1906 = []
  for(var i = 0; i < i1907.length; i += 1) {
    i1906.push( i1907[i + 0] );
  }
  i1904.keywords = i1906
  i1904.vertexProgram = i1905[3]
  i1904.fragmentProgram = i1905[4]
  i1904.exportedForWebGl2 = !!i1905[5]
  i1904.readDepth = !!i1905[6]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1911 = data
  request.r(i1911[0], i1911[1], 0, i1910, 'shader')
  i1910.pass = i1911[2]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1915 = data
  i1914.name = i1915[0]
  i1914.type = i1915[1]
  i1914.value = new pc.Vec4( i1915[2], i1915[3], i1915[4], i1915[5] )
  i1914.textureValue = i1915[6]
  i1914.shaderPropertyFlag = i1915[7]
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1917 = data
  i1916.name = i1917[0]
  request.r(i1917[1], i1917[2], 0, i1916, 'texture')
  i1916.aabb = i1917[3]
  i1916.vertices = i1917[4]
  i1916.triangles = i1917[5]
  i1916.textureRect = UnityEngine.Rect.MinMaxRect(i1917[6], i1917[7], i1917[8], i1917[9])
  i1916.packedRect = UnityEngine.Rect.MinMaxRect(i1917[10], i1917[11], i1917[12], i1917[13])
  i1916.border = new pc.Vec4( i1917[14], i1917[15], i1917[16], i1917[17] )
  i1916.transparency = i1917[18]
  i1916.bounds = i1917[19]
  i1916.pixelsPerUnit = i1917[20]
  i1916.textureWidth = i1917[21]
  i1916.textureHeight = i1917[22]
  i1916.nativeSize = new pc.Vec2( i1917[23], i1917[24] )
  i1916.pivot = new pc.Vec2( i1917[25], i1917[26] )
  i1916.textureRectOffset = new pc.Vec2( i1917[27], i1917[28] )
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1919 = data
  i1918.name = i1919[0]
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1921 = data
  i1920.name = i1921[0]
  i1920.wrapMode = i1921[1]
  i1920.isLooping = !!i1921[2]
  i1920.length = i1921[3]
  var i1923 = i1921[4]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1923[i + 0]) );
  }
  i1920.curves = i1922
  var i1925 = i1921[5]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1925[i + 0]) );
  }
  i1920.events = i1924
  i1920.halfPrecision = !!i1921[6]
  i1920._frameRate = i1921[7]
  i1920.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1921[8], i1920.localBounds)
  i1920.hasMuscleCurves = !!i1921[9]
  var i1927 = i1921[10]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( i1927[i + 0] );
  }
  i1920.clipMuscleConstant = i1926
  i1920.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1921[11], i1920.clipBindingConstant)
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1931 = data
  i1930.path = i1931[0]
  i1930.hash = i1931[1]
  i1930.componentType = i1931[2]
  i1930.property = i1931[3]
  i1930.keys = i1931[4]
  var i1933 = i1931[5]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1933[i + 0]) );
  }
  i1930.objectReferenceKeys = i1932
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1937 = data
  i1936.time = i1937[0]
  request.r(i1937[1], i1937[2], 0, i1936, 'value')
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1941 = data
  i1940.functionName = i1941[0]
  i1940.floatParameter = i1941[1]
  i1940.intParameter = i1941[2]
  i1940.stringParameter = i1941[3]
  request.r(i1941[4], i1941[5], 0, i1940, 'objectReferenceParameter')
  i1940.time = i1941[6]
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1943 = data
  i1942.center = new pc.Vec3( i1943[0], i1943[1], i1943[2] )
  i1942.extends = new pc.Vec3( i1943[3], i1943[4], i1943[5] )
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1947 = data
  var i1949 = i1947[0]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( i1949[i + 0] );
  }
  i1946.genericBindings = i1948
  var i1951 = i1947[1]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.push( i1951[i + 0] );
  }
  i1946.pptrCurveMapping = i1950
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1953 = data
  i1952.name = i1953[0]
  i1952.ascent = i1953[1]
  i1952.originalLineHeight = i1953[2]
  i1952.fontSize = i1953[3]
  var i1955 = i1953[4]
  var i1954 = []
  for(var i = 0; i < i1955.length; i += 1) {
    i1954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1955[i + 0]) );
  }
  i1952.characterInfo = i1954
  request.r(i1953[5], i1953[6], 0, i1952, 'texture')
  i1952.originalFontSize = i1953[7]
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1959 = data
  i1958.index = i1959[0]
  i1958.advance = i1959[1]
  i1958.bearing = i1959[2]
  i1958.glyphWidth = i1959[3]
  i1958.glyphHeight = i1959[4]
  i1958.minX = i1959[5]
  i1958.maxX = i1959[6]
  i1958.minY = i1959[7]
  i1958.maxY = i1959[8]
  i1958.uvBottomLeftX = i1959[9]
  i1958.uvBottomLeftY = i1959[10]
  i1958.uvBottomRightX = i1959[11]
  i1958.uvBottomRightY = i1959[12]
  i1958.uvTopLeftX = i1959[13]
  i1958.uvTopLeftY = i1959[14]
  i1958.uvTopRightX = i1959[15]
  i1958.uvTopRightY = i1959[16]
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1961 = data
  i1960.name = i1961[0]
  var i1963 = i1961[1]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1963[i + 0]) );
  }
  i1960.layers = i1962
  var i1965 = i1961[2]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1965[i + 0]) );
  }
  i1960.parameters = i1964
  i1960.animationClips = i1961[3]
  i1960.avatarUnsupported = i1961[4]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1969 = data
  i1968.name = i1969[0]
  i1968.defaultWeight = i1969[1]
  i1968.blendingMode = i1969[2]
  i1968.avatarMask = i1969[3]
  i1968.syncedLayerIndex = i1969[4]
  i1968.syncedLayerAffectsTiming = !!i1969[5]
  i1968.syncedLayers = i1969[6]
  i1968.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1969[7], i1968.stateMachine)
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1971 = data
  i1970.id = i1971[0]
  i1970.name = i1971[1]
  i1970.path = i1971[2]
  var i1973 = i1971[3]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 1) {
    i1972.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1973[i + 0]) );
  }
  i1970.states = i1972
  var i1975 = i1971[4]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1975[i + 0]) );
  }
  i1970.machines = i1974
  var i1977 = i1971[5]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1977[i + 0]) );
  }
  i1970.entryStateTransitions = i1976
  var i1979 = i1971[6]
  var i1978 = []
  for(var i = 0; i < i1979.length; i += 1) {
    i1978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1979[i + 0]) );
  }
  i1970.exitStateTransitions = i1978
  var i1981 = i1971[7]
  var i1980 = []
  for(var i = 0; i < i1981.length; i += 1) {
    i1980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1981[i + 0]) );
  }
  i1970.anyStateTransitions = i1980
  i1970.defaultStateId = i1971[8]
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1985 = data
  i1984.id = i1985[0]
  i1984.name = i1985[1]
  i1984.cycleOffset = i1985[2]
  i1984.cycleOffsetParameter = i1985[3]
  i1984.cycleOffsetParameterActive = !!i1985[4]
  i1984.mirror = !!i1985[5]
  i1984.mirrorParameter = i1985[6]
  i1984.mirrorParameterActive = !!i1985[7]
  i1984.motionId = i1985[8]
  i1984.nameHash = i1985[9]
  i1984.fullPathHash = i1985[10]
  i1984.speed = i1985[11]
  i1984.speedParameter = i1985[12]
  i1984.speedParameterActive = !!i1985[13]
  i1984.tag = i1985[14]
  i1984.tagHash = i1985[15]
  i1984.writeDefaultValues = !!i1985[16]
  var i1987 = i1985[17]
  var i1986 = []
  for(var i = 0; i < i1987.length; i += 2) {
  request.r(i1987[i + 0], i1987[i + 1], 2, i1986, '')
  }
  i1984.behaviours = i1986
  var i1989 = i1985[18]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 1) {
    i1988.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1989[i + 0]) );
  }
  i1984.transitions = i1988
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1995 = data
  i1994.fullPath = i1995[0]
  i1994.canTransitionToSelf = !!i1995[1]
  i1994.duration = i1995[2]
  i1994.exitTime = i1995[3]
  i1994.hasExitTime = !!i1995[4]
  i1994.hasFixedDuration = !!i1995[5]
  i1994.interruptionSource = i1995[6]
  i1994.offset = i1995[7]
  i1994.orderedInterruption = !!i1995[8]
  i1994.destinationStateId = i1995[9]
  i1994.isExit = !!i1995[10]
  i1994.mute = !!i1995[11]
  i1994.solo = !!i1995[12]
  var i1997 = i1995[13]
  var i1996 = []
  for(var i = 0; i < i1997.length; i += 1) {
    i1996.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1997[i + 0]) );
  }
  i1994.conditions = i1996
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2003 = data
  i2002.destinationStateId = i2003[0]
  i2002.isExit = !!i2003[1]
  i2002.mute = !!i2003[2]
  i2002.solo = !!i2003[3]
  var i2005 = i2003[4]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2005[i + 0]) );
  }
  i2002.conditions = i2004
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2009 = data
  i2008.defaultBool = !!i2009[0]
  i2008.defaultFloat = i2009[1]
  i2008.defaultInt = i2009[2]
  i2008.name = i2009[3]
  i2008.nameHash = i2009[4]
  i2008.type = i2009[5]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2011 = data
  i2010.name = i2011[0]
  i2010.bytes64 = i2011[1]
  i2010.data = i2011[2]
  return i2010
}

Deserializers["DataObject"] = function (request, data, root) {
  var i2012 = root || request.c( 'DataObject' )
  var i2013 = data
  i2012.level = i2013[0]
  i2012.name = i2013[1]
  i2012.assetValue = i2013[2]
  i2012.isLegit = !!i2013[3]
  request.r(i2013[4], i2013[5], 0, i2012, 'icon')
  i2012.bidder1Bid = i2013[6]
  i2012.bidder2Bid = i2013[7]
  i2012.bidder3Bid = i2013[8]
  i2012.playerBid = i2013[9]
  return i2012
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2014 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2015 = data
  i2014.hashCode = i2015[0]
  request.r(i2015[1], i2015[2], 0, i2014, 'material')
  i2014.materialHashCode = i2015[3]
  request.r(i2015[4], i2015[5], 0, i2014, 'atlas')
  i2014.normalStyle = i2015[6]
  i2014.normalSpacingOffset = i2015[7]
  i2014.boldStyle = i2015[8]
  i2014.boldSpacing = i2015[9]
  i2014.italicStyle = i2015[10]
  i2014.tabSize = i2015[11]
  i2014.m_Version = i2015[12]
  i2014.m_SourceFontFileGUID = i2015[13]
  request.r(i2015[14], i2015[15], 0, i2014, 'm_SourceFontFile_EditorRef')
  request.r(i2015[16], i2015[17], 0, i2014, 'm_SourceFontFile')
  i2014.m_AtlasPopulationMode = i2015[18]
  i2014.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2015[19], i2014.m_FaceInfo)
  var i2017 = i2015[20]
  var i2016 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2017.length; i += 1) {
    i2016.add(request.d('UnityEngine.TextCore.Glyph', i2017[i + 0]));
  }
  i2014.m_GlyphTable = i2016
  var i2019 = i2015[21]
  var i2018 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2019.length; i += 1) {
    i2018.add(request.d('TMPro.TMP_Character', i2019[i + 0]));
  }
  i2014.m_CharacterTable = i2018
  var i2021 = i2015[22]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 2) {
  request.r(i2021[i + 0], i2021[i + 1], 2, i2020, '')
  }
  i2014.m_AtlasTextures = i2020
  i2014.m_AtlasTextureIndex = i2015[23]
  i2014.m_IsMultiAtlasTexturesEnabled = !!i2015[24]
  i2014.m_ClearDynamicDataOnBuild = !!i2015[25]
  var i2023 = i2015[26]
  var i2022 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.add(request.d('UnityEngine.TextCore.GlyphRect', i2023[i + 0]));
  }
  i2014.m_UsedGlyphRects = i2022
  var i2025 = i2015[27]
  var i2024 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2025.length; i += 1) {
    i2024.add(request.d('UnityEngine.TextCore.GlyphRect', i2025[i + 0]));
  }
  i2014.m_FreeGlyphRects = i2024
  i2014.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2015[28], i2014.m_fontInfo)
  i2014.m_AtlasWidth = i2015[29]
  i2014.m_AtlasHeight = i2015[30]
  i2014.m_AtlasPadding = i2015[31]
  i2014.m_AtlasRenderMode = i2015[32]
  var i2027 = i2015[33]
  var i2026 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2027.length; i += 1) {
    i2026.add(request.d('TMPro.TMP_Glyph', i2027[i + 0]));
  }
  i2014.m_glyphInfoList = i2026
  i2014.m_KerningTable = request.d('TMPro.KerningTable', i2015[34], i2014.m_KerningTable)
  i2014.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2015[35], i2014.m_FontFeatureTable)
  var i2029 = i2015[36]
  var i2028 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2029.length; i += 2) {
  request.r(i2029[i + 0], i2029[i + 1], 1, i2028, '')
  }
  i2014.fallbackFontAssets = i2028
  var i2031 = i2015[37]
  var i2030 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2031.length; i += 2) {
  request.r(i2031[i + 0], i2031[i + 1], 1, i2030, '')
  }
  i2014.m_FallbackFontAssetTable = i2030
  i2014.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2015[38], i2014.m_CreationSettings)
  var i2033 = i2015[39]
  var i2032 = []
  for(var i = 0; i < i2033.length; i += 1) {
    i2032.push( request.d('TMPro.TMP_FontWeightPair', i2033[i + 0]) );
  }
  i2014.m_FontWeightTable = i2032
  var i2035 = i2015[40]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 1) {
    i2034.push( request.d('TMPro.TMP_FontWeightPair', i2035[i + 0]) );
  }
  i2014.fontWeights = i2034
  return i2014
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2036 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2037 = data
  i2036.m_FaceIndex = i2037[0]
  i2036.m_FamilyName = i2037[1]
  i2036.m_StyleName = i2037[2]
  i2036.m_PointSize = i2037[3]
  i2036.m_Scale = i2037[4]
  i2036.m_UnitsPerEM = i2037[5]
  i2036.m_LineHeight = i2037[6]
  i2036.m_AscentLine = i2037[7]
  i2036.m_CapLine = i2037[8]
  i2036.m_MeanLine = i2037[9]
  i2036.m_Baseline = i2037[10]
  i2036.m_DescentLine = i2037[11]
  i2036.m_SuperscriptOffset = i2037[12]
  i2036.m_SuperscriptSize = i2037[13]
  i2036.m_SubscriptOffset = i2037[14]
  i2036.m_SubscriptSize = i2037[15]
  i2036.m_UnderlineOffset = i2037[16]
  i2036.m_UnderlineThickness = i2037[17]
  i2036.m_StrikethroughOffset = i2037[18]
  i2036.m_StrikethroughThickness = i2037[19]
  i2036.m_TabWidth = i2037[20]
  return i2036
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2040 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2041 = data
  i2040.m_Index = i2041[0]
  i2040.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2041[1], i2040.m_Metrics)
  i2040.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2041[2], i2040.m_GlyphRect)
  i2040.m_Scale = i2041[3]
  i2040.m_AtlasIndex = i2041[4]
  i2040.m_ClassDefinitionType = i2041[5]
  return i2040
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2042 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2043 = data
  i2042.m_Width = i2043[0]
  i2042.m_Height = i2043[1]
  i2042.m_HorizontalBearingX = i2043[2]
  i2042.m_HorizontalBearingY = i2043[3]
  i2042.m_HorizontalAdvance = i2043[4]
  return i2042
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2044 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2045 = data
  i2044.m_X = i2045[0]
  i2044.m_Y = i2045[1]
  i2044.m_Width = i2045[2]
  i2044.m_Height = i2045[3]
  return i2044
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2048 = root || request.c( 'TMPro.TMP_Character' )
  var i2049 = data
  i2048.m_ElementType = i2049[0]
  i2048.m_Unicode = i2049[1]
  i2048.m_GlyphIndex = i2049[2]
  i2048.m_Scale = i2049[3]
  return i2048
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2054 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2055 = data
  i2054.Name = i2055[0]
  i2054.PointSize = i2055[1]
  i2054.Scale = i2055[2]
  i2054.CharacterCount = i2055[3]
  i2054.LineHeight = i2055[4]
  i2054.Baseline = i2055[5]
  i2054.Ascender = i2055[6]
  i2054.CapHeight = i2055[7]
  i2054.Descender = i2055[8]
  i2054.CenterLine = i2055[9]
  i2054.SuperscriptOffset = i2055[10]
  i2054.SubscriptOffset = i2055[11]
  i2054.SubSize = i2055[12]
  i2054.Underline = i2055[13]
  i2054.UnderlineThickness = i2055[14]
  i2054.strikethrough = i2055[15]
  i2054.strikethroughThickness = i2055[16]
  i2054.TabWidth = i2055[17]
  i2054.Padding = i2055[18]
  i2054.AtlasWidth = i2055[19]
  i2054.AtlasHeight = i2055[20]
  return i2054
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2058 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2059 = data
  i2058.id = i2059[0]
  i2058.x = i2059[1]
  i2058.y = i2059[2]
  i2058.width = i2059[3]
  i2058.height = i2059[4]
  i2058.xOffset = i2059[5]
  i2058.yOffset = i2059[6]
  i2058.xAdvance = i2059[7]
  i2058.scale = i2059[8]
  return i2058
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2060 = root || request.c( 'TMPro.KerningTable' )
  var i2061 = data
  var i2063 = i2061[0]
  var i2062 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.add(request.d('TMPro.KerningPair', i2063[i + 0]));
  }
  i2060.kerningPairs = i2062
  return i2060
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2066 = root || request.c( 'TMPro.KerningPair' )
  var i2067 = data
  i2066.xOffset = i2067[0]
  i2066.m_FirstGlyph = i2067[1]
  i2066.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2067[2], i2066.m_FirstGlyphAdjustments)
  i2066.m_SecondGlyph = i2067[3]
  i2066.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2067[4], i2066.m_SecondGlyphAdjustments)
  i2066.m_IgnoreSpacingAdjustments = !!i2067[5]
  return i2066
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2068 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2069 = data
  var i2071 = i2069[0]
  var i2070 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2071.length; i += 1) {
    i2070.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2071[i + 0]));
  }
  i2068.m_GlyphPairAdjustmentRecords = i2070
  return i2068
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2074 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2075 = data
  i2074.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2075[0], i2074.m_FirstAdjustmentRecord)
  i2074.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2075[1], i2074.m_SecondAdjustmentRecord)
  i2074.m_FeatureLookupFlags = i2075[2]
  return i2074
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2078 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2079 = data
  i2078.sourceFontFileName = i2079[0]
  i2078.sourceFontFileGUID = i2079[1]
  i2078.pointSizeSamplingMode = i2079[2]
  i2078.pointSize = i2079[3]
  i2078.padding = i2079[4]
  i2078.packingMode = i2079[5]
  i2078.atlasWidth = i2079[6]
  i2078.atlasHeight = i2079[7]
  i2078.characterSetSelectionMode = i2079[8]
  i2078.characterSequence = i2079[9]
  i2078.referencedFontAssetGUID = i2079[10]
  i2078.referencedTextAssetGUID = i2079[11]
  i2078.fontStyle = i2079[12]
  i2078.fontStyleModifier = i2079[13]
  i2078.renderMode = i2079[14]
  i2078.includeFontFeatures = !!i2079[15]
  return i2078
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2082 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2083 = data
  request.r(i2083[0], i2083[1], 0, i2082, 'regularTypeface')
  request.r(i2083[2], i2083[3], 0, i2082, 'italicTypeface')
  return i2082
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i2084 = root || request.c( 'AudioLibrary' )
  var i2085 = data
  var i2087 = i2085[0]
  var i2086 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.add(request.d('AudioLibrary+ClipEntry', i2087[i + 0]));
  }
  i2084.clips = i2086
  return i2084
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i2090 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i2091 = data
  i2090.key = i2091[0]
  i2090.channel = i2091[1]
  request.r(i2091[2], i2091[3], 0, i2090, 'clip')
  i2090.volume = i2091[4]
  i2090.loop = !!i2091[5]
  return i2090
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2092 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2093 = data
  i2092.useSafeMode = !!i2093[0]
  i2092.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2093[1], i2092.safeModeOptions)
  i2092.timeScale = i2093[2]
  i2092.unscaledTimeScale = i2093[3]
  i2092.useSmoothDeltaTime = !!i2093[4]
  i2092.maxSmoothUnscaledTime = i2093[5]
  i2092.rewindCallbackMode = i2093[6]
  i2092.showUnityEditorReport = !!i2093[7]
  i2092.logBehaviour = i2093[8]
  i2092.drawGizmos = !!i2093[9]
  i2092.defaultRecyclable = !!i2093[10]
  i2092.defaultAutoPlay = i2093[11]
  i2092.defaultUpdateType = i2093[12]
  i2092.defaultTimeScaleIndependent = !!i2093[13]
  i2092.defaultEaseType = i2093[14]
  i2092.defaultEaseOvershootOrAmplitude = i2093[15]
  i2092.defaultEasePeriod = i2093[16]
  i2092.defaultAutoKill = !!i2093[17]
  i2092.defaultLoopType = i2093[18]
  i2092.debugMode = !!i2093[19]
  i2092.debugStoreTargetId = !!i2093[20]
  i2092.showPreviewPanel = !!i2093[21]
  i2092.storeSettingsLocation = i2093[22]
  i2092.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2093[23], i2092.modules)
  i2092.createASMDEF = !!i2093[24]
  i2092.showPlayingTweens = !!i2093[25]
  i2092.showPausedTweens = !!i2093[26]
  return i2092
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2094 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2095 = data
  i2094.logBehaviour = i2095[0]
  i2094.nestedTweenFailureBehaviour = i2095[1]
  return i2094
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2096 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2097 = data
  i2096.showPanel = !!i2097[0]
  i2096.audioEnabled = !!i2097[1]
  i2096.physicsEnabled = !!i2097[2]
  i2096.physics2DEnabled = !!i2097[3]
  i2096.spriteEnabled = !!i2097[4]
  i2096.uiEnabled = !!i2097[5]
  i2096.textMeshProEnabled = !!i2097[6]
  i2096.tk2DEnabled = !!i2097[7]
  i2096.deAudioEnabled = !!i2097[8]
  i2096.deUnityExtendedEnabled = !!i2097[9]
  i2096.epoOutlineEnabled = !!i2097[10]
  return i2096
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2098 = root || request.c( 'TMPro.TMP_Settings' )
  var i2099 = data
  i2098.m_enableWordWrapping = !!i2099[0]
  i2098.m_enableKerning = !!i2099[1]
  i2098.m_enableExtraPadding = !!i2099[2]
  i2098.m_enableTintAllSprites = !!i2099[3]
  i2098.m_enableParseEscapeCharacters = !!i2099[4]
  i2098.m_EnableRaycastTarget = !!i2099[5]
  i2098.m_GetFontFeaturesAtRuntime = !!i2099[6]
  i2098.m_missingGlyphCharacter = i2099[7]
  i2098.m_warningsDisabled = !!i2099[8]
  request.r(i2099[9], i2099[10], 0, i2098, 'm_defaultFontAsset')
  i2098.m_defaultFontAssetPath = i2099[11]
  i2098.m_defaultFontSize = i2099[12]
  i2098.m_defaultAutoSizeMinRatio = i2099[13]
  i2098.m_defaultAutoSizeMaxRatio = i2099[14]
  i2098.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2099[15], i2099[16] )
  i2098.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2099[17], i2099[18] )
  i2098.m_autoSizeTextContainer = !!i2099[19]
  i2098.m_IsTextObjectScaleStatic = !!i2099[20]
  var i2101 = i2099[21]
  var i2100 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2101.length; i += 2) {
  request.r(i2101[i + 0], i2101[i + 1], 1, i2100, '')
  }
  i2098.m_fallbackFontAssets = i2100
  i2098.m_matchMaterialPreset = !!i2099[22]
  request.r(i2099[23], i2099[24], 0, i2098, 'm_defaultSpriteAsset')
  i2098.m_defaultSpriteAssetPath = i2099[25]
  i2098.m_enableEmojiSupport = !!i2099[26]
  i2098.m_MissingCharacterSpriteUnicode = i2099[27]
  i2098.m_defaultColorGradientPresetsPath = i2099[28]
  request.r(i2099[29], i2099[30], 0, i2098, 'm_defaultStyleSheet')
  i2098.m_StyleSheetsResourcePath = i2099[31]
  request.r(i2099[32], i2099[33], 0, i2098, 'm_leadingCharacters')
  request.r(i2099[34], i2099[35], 0, i2098, 'm_followingCharacters')
  i2098.m_UseModernHangulLineBreakingRules = !!i2099[36]
  return i2098
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2102 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2103 = data
  i2102.hashCode = i2103[0]
  request.r(i2103[1], i2103[2], 0, i2102, 'material')
  i2102.materialHashCode = i2103[3]
  request.r(i2103[4], i2103[5], 0, i2102, 'spriteSheet')
  var i2105 = i2103[6]
  var i2104 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2105.length; i += 1) {
    i2104.add(request.d('TMPro.TMP_Sprite', i2105[i + 0]));
  }
  i2102.spriteInfoList = i2104
  var i2107 = i2103[7]
  var i2106 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2107.length; i += 2) {
  request.r(i2107[i + 0], i2107[i + 1], 1, i2106, '')
  }
  i2102.fallbackSpriteAssets = i2106
  i2102.m_Version = i2103[8]
  i2102.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2103[9], i2102.m_FaceInfo)
  var i2109 = i2103[10]
  var i2108 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.add(request.d('TMPro.TMP_SpriteCharacter', i2109[i + 0]));
  }
  i2102.m_SpriteCharacterTable = i2108
  var i2111 = i2103[11]
  var i2110 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.add(request.d('TMPro.TMP_SpriteGlyph', i2111[i + 0]));
  }
  i2102.m_SpriteGlyphTable = i2110
  return i2102
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2114 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2115 = data
  i2114.name = i2115[0]
  i2114.hashCode = i2115[1]
  i2114.unicode = i2115[2]
  i2114.pivot = new pc.Vec2( i2115[3], i2115[4] )
  request.r(i2115[5], i2115[6], 0, i2114, 'sprite')
  i2114.id = i2115[7]
  i2114.x = i2115[8]
  i2114.y = i2115[9]
  i2114.width = i2115[10]
  i2114.height = i2115[11]
  i2114.xOffset = i2115[12]
  i2114.yOffset = i2115[13]
  i2114.xAdvance = i2115[14]
  i2114.scale = i2115[15]
  return i2114
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2120 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2121 = data
  i2120.m_Name = i2121[0]
  i2120.m_HashCode = i2121[1]
  i2120.m_ElementType = i2121[2]
  i2120.m_Unicode = i2121[3]
  i2120.m_GlyphIndex = i2121[4]
  i2120.m_Scale = i2121[5]
  return i2120
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2124 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2125 = data
  request.r(i2125[0], i2125[1], 0, i2124, 'sprite')
  i2124.m_Index = i2125[2]
  i2124.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2125[3], i2124.m_Metrics)
  i2124.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2125[4], i2124.m_GlyphRect)
  i2124.m_Scale = i2125[5]
  i2124.m_AtlasIndex = i2125[6]
  i2124.m_ClassDefinitionType = i2125[7]
  return i2124
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2126 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2127 = data
  var i2129 = i2127[0]
  var i2128 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.add(request.d('TMPro.TMP_Style', i2129[i + 0]));
  }
  i2126.m_StyleList = i2128
  return i2126
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2132 = root || request.c( 'TMPro.TMP_Style' )
  var i2133 = data
  i2132.m_Name = i2133[0]
  i2132.m_HashCode = i2133[1]
  i2132.m_OpeningDefinition = i2133[2]
  i2132.m_ClosingDefinition = i2133[3]
  i2132.m_OpeningTagArray = i2133[4]
  i2132.m_ClosingTagArray = i2133[5]
  i2132.m_OpeningTagUnicodeArray = i2133[6]
  i2132.m_ClosingTagUnicodeArray = i2133[7]
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2135 = data
  var i2137 = i2135[0]
  var i2136 = []
  for(var i = 0; i < i2137.length; i += 1) {
    i2136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2137[i + 0]) );
  }
  i2134.files = i2136
  i2134.componentToPrefabIds = i2135[1]
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2141 = data
  i2140.path = i2141[0]
  request.r(i2141[1], i2141[2], 0, i2140, 'unityObject')
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2143 = data
  var i2145 = i2143[0]
  var i2144 = []
  for(var i = 0; i < i2145.length; i += 1) {
    i2144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2145[i + 0]) );
  }
  i2142.scriptsExecutionOrder = i2144
  var i2147 = i2143[1]
  var i2146 = []
  for(var i = 0; i < i2147.length; i += 1) {
    i2146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2147[i + 0]) );
  }
  i2142.sortingLayers = i2146
  var i2149 = i2143[2]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2149[i + 0]) );
  }
  i2142.cullingLayers = i2148
  i2142.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2143[3], i2142.timeSettings)
  i2142.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2143[4], i2142.physicsSettings)
  i2142.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2143[5], i2142.physics2DSettings)
  i2142.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2143[6], i2142.qualitySettings)
  i2142.enableRealtimeShadows = !!i2143[7]
  i2142.enableAutoInstancing = !!i2143[8]
  i2142.enableDynamicBatching = !!i2143[9]
  i2142.lightmapEncodingQuality = i2143[10]
  i2142.desiredColorSpace = i2143[11]
  var i2151 = i2143[12]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 1) {
    i2150.push( i2151[i + 0] );
  }
  i2142.allTags = i2150
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2155 = data
  i2154.name = i2155[0]
  i2154.value = i2155[1]
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2159 = data
  i2158.id = i2159[0]
  i2158.name = i2159[1]
  i2158.value = i2159[2]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2163 = data
  i2162.id = i2163[0]
  i2162.name = i2163[1]
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2165 = data
  i2164.fixedDeltaTime = i2165[0]
  i2164.maximumDeltaTime = i2165[1]
  i2164.timeScale = i2165[2]
  i2164.maximumParticleTimestep = i2165[3]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2167 = data
  i2166.gravity = new pc.Vec3( i2167[0], i2167[1], i2167[2] )
  i2166.defaultSolverIterations = i2167[3]
  i2166.bounceThreshold = i2167[4]
  i2166.autoSyncTransforms = !!i2167[5]
  i2166.autoSimulation = !!i2167[6]
  var i2169 = i2167[7]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2169[i + 0]) );
  }
  i2166.collisionMatrix = i2168
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2173 = data
  i2172.enabled = !!i2173[0]
  i2172.layerId = i2173[1]
  i2172.otherLayerId = i2173[2]
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2175 = data
  request.r(i2175[0], i2175[1], 0, i2174, 'material')
  i2174.gravity = new pc.Vec2( i2175[2], i2175[3] )
  i2174.positionIterations = i2175[4]
  i2174.velocityIterations = i2175[5]
  i2174.velocityThreshold = i2175[6]
  i2174.maxLinearCorrection = i2175[7]
  i2174.maxAngularCorrection = i2175[8]
  i2174.maxTranslationSpeed = i2175[9]
  i2174.maxRotationSpeed = i2175[10]
  i2174.baumgarteScale = i2175[11]
  i2174.baumgarteTOIScale = i2175[12]
  i2174.timeToSleep = i2175[13]
  i2174.linearSleepTolerance = i2175[14]
  i2174.angularSleepTolerance = i2175[15]
  i2174.defaultContactOffset = i2175[16]
  i2174.autoSimulation = !!i2175[17]
  i2174.queriesHitTriggers = !!i2175[18]
  i2174.queriesStartInColliders = !!i2175[19]
  i2174.callbacksOnDisable = !!i2175[20]
  i2174.reuseCollisionCallbacks = !!i2175[21]
  i2174.autoSyncTransforms = !!i2175[22]
  var i2177 = i2175[23]
  var i2176 = []
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2177[i + 0]) );
  }
  i2174.collisionMatrix = i2176
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2181 = data
  i2180.enabled = !!i2181[0]
  i2180.layerId = i2181[1]
  i2180.otherLayerId = i2181[2]
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2183 = data
  var i2185 = i2183[0]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 1) {
    i2184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2185[i + 0]) );
  }
  i2182.qualityLevels = i2184
  var i2187 = i2183[1]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( i2187[i + 0] );
  }
  i2182.names = i2186
  i2182.shadows = i2183[2]
  i2182.anisotropicFiltering = i2183[3]
  i2182.antiAliasing = i2183[4]
  i2182.lodBias = i2183[5]
  i2182.shadowCascades = i2183[6]
  i2182.shadowDistance = i2183[7]
  i2182.shadowmaskMode = i2183[8]
  i2182.shadowProjection = i2183[9]
  i2182.shadowResolution = i2183[10]
  i2182.softParticles = !!i2183[11]
  i2182.softVegetation = !!i2183[12]
  i2182.activeColorSpace = i2183[13]
  i2182.desiredColorSpace = i2183[14]
  i2182.masterTextureLimit = i2183[15]
  i2182.maxQueuedFrames = i2183[16]
  i2182.particleRaycastBudget = i2183[17]
  i2182.pixelLightCount = i2183[18]
  i2182.realtimeReflectionProbes = !!i2183[19]
  i2182.shadowCascade2Split = i2183[20]
  i2182.shadowCascade4Split = new pc.Vec3( i2183[21], i2183[22], i2183[23] )
  i2182.streamingMipmapsActive = !!i2183[24]
  i2182.vSyncCount = i2183[25]
  i2182.asyncUploadBufferSize = i2183[26]
  i2182.asyncUploadTimeSlice = i2183[27]
  i2182.billboardsFaceCameraPosition = !!i2183[28]
  i2182.shadowNearPlaneOffset = i2183[29]
  i2182.streamingMipmapsMemoryBudget = i2183[30]
  i2182.maximumLODLevel = i2183[31]
  i2182.streamingMipmapsAddAllCameras = !!i2183[32]
  i2182.streamingMipmapsMaxLevelReduction = i2183[33]
  i2182.streamingMipmapsRenderersPerFrame = i2183[34]
  i2182.resolutionScalingFixedDPIFactor = i2183[35]
  i2182.streamingMipmapsMaxFileIORequests = i2183[36]
  i2182.currentQualityLevel = i2183[37]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2193 = data
  i2192.mode = i2193[0]
  i2192.parameter = i2193[1]
  i2192.threshold = i2193[2]
  return i2192
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2194 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2195 = data
  i2194.xPlacement = i2195[0]
  i2194.yPlacement = i2195[1]
  i2194.xAdvance = i2195[2]
  i2194.yAdvance = i2195[3]
  return i2194
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2196 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2197 = data
  i2196.m_GlyphIndex = i2197[0]
  i2196.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2197[1], i2196.m_GlyphValueRecord)
  return i2196
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2198 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2199 = data
  i2198.m_XPlacement = i2199[0]
  i2198.m_YPlacement = i2199[1]
  i2198.m_XAdvance = i2199[2]
  i2198.m_YAdvance = i2199[3]
  return i2198
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[56],"57":[3],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[3],"81":[82],"83":[84],"85":[84],"23":[14],"6":[3],"86":[59],"87":[14],"88":[82,14],"15":[14,27],"89":[14],"90":[27,14],"91":[82],"92":[27,14],"93":[14],"94":[14],"95":[14],"26":[23],"16":[27,14],"96":[14],"25":[23],"97":[14],"98":[14],"99":[14],"100":[14],"101":[14],"102":[14],"103":[14],"104":[14],"105":[14],"106":[27,14],"107":[14],"108":[14],"109":[14],"110":[14],"111":[27,14],"112":[14],"113":[36],"114":[36],"37":[36],"115":[36],"116":[3],"117":[3]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAspectFitter","UnityEngine.SpriteRenderer","UnityEngine.Light","GameManager","UnityEngine.GameObject","CanvasGroupAnimator","LevelImageSwitcher","DataObject","UnityEngine.RectTransform","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","TaskManager","AudioManager","AudioLibrary","DataManager","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.CanvasGroup","UnityEngine.UI.Button","UnityEngine.Animator","PromtPopUp","TMPro.TMP_FontAsset","SetConditionMet","UnityEditor.Animations.AnimatorController","FloatingTextEffect","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ButtonPulse","StartClickHandler","UnityEngine.Cubemap","UnityEngine.Font","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bullet","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "BidWars2-CosplayRequest";

Deserializers.lunaInitializationTime = "08/07/2025 05:28:30";

Deserializers.lunaDaysRunning = "3.8";

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

Deserializers.buildID = "cdce7c8f-4511-4ab4-b798-2dad5213a754";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

