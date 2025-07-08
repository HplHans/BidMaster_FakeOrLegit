using System.Collections.Generic;
using UnityEngine;

public class DataManager : MonoBehaviour
{
    public static DataManager Instance { get; private set; }

    [Header("Single Object Entries")]
    public List<SingleDataEntry> singleEntries = new List<SingleDataEntry>();

    [Header("List Object Entries")]
    public List<ListDataEntry> listEntries = new List<ListDataEntry>();

    private Dictionary<string, DataObject> _singleLookup;
    private Dictionary<string, List<DataObject>> _listLookup;
    private bool _lookupsBuilt = false;

    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }

        Instance = this;
        BuildLookups();
    }

    private void BuildLookups()
    {
        if (_lookupsBuilt) return;

        _singleLookup = new Dictionary<string, DataObject>();
        _listLookup = new Dictionary<string, List<DataObject>>();

        foreach (var entry in singleEntries)
        {
            if (string.IsNullOrEmpty(entry.key) || entry.value == null) continue;

            if (!_singleLookup.TryAdd(entry.key, entry.value))
            {
                Debug.LogWarning($"Duplicate single key: {entry.key}");
            }
        }

        foreach (var entry in listEntries)
        {
            if (string.IsNullOrEmpty(entry.key) || entry.values == null) continue;

            if (!_listLookup.TryAdd(entry.key, entry.values))
            {
                Debug.LogWarning($"Duplicate list key: {entry.key}");
            }
        }

        _lookupsBuilt = true;
    }

    public void RebuildLookups()
    {
        _lookupsBuilt = false;
        BuildLookups();
    }

    public DataObject GetSingle(string key)
    {
        if (string.IsNullOrEmpty(key)) return null;

        BuildLookups();

        if (_singleLookup.TryGetValue(key, out var result))
            return result;

        Debug.LogWarning($"Single key not found: {key}");
        return null;
    }

    public List<DataObject> GetList(string key)
    {
        if (string.IsNullOrEmpty(key)) return null;

        BuildLookups();

        if (_listLookup.TryGetValue(key, out var result))
            return result;

        Debug.LogWarning($"List key not found: {key}");
        return null;
    }
}
