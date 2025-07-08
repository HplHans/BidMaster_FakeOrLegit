using UnityEngine;

[CreateAssetMenu(menuName = "ScriptableObjects/MyDataObject")]
public class DataObject : ScriptableObject
{
    public int level;
    public string name;
    public int assetValue;
    public bool isLegit;
    public Sprite icon;
    public string bidder1Bid;
    public string bidder2Bid;
    public string bidder3Bid;
    public string playerBid;
}
