using System.Collections.Generic;
[System.Serializable]
public class SingleDataEntry
{
    public string key;
    public DataObject value;
}

[System.Serializable]
public class ListDataEntry
{
    public string key;
    public List<DataObject> values = new();
}
