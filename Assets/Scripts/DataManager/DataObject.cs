using UnityEngine;

[CreateAssetMenu(menuName = "ScriptableObjects/MyDataObject")]
public class DataObject : ScriptableObject
{
    public int value;
    public string names;
    public Sprite icon;
}
