using UnityEditor;
using UnityEngine;
using System.Linq;
using System.Collections.Generic;
using System.IO;

[CustomEditor(typeof(DataManager))]
public class DataManagerEditor : Editor
{
    // Use a static field to preserve input across repaint
    private static string newAssetName = "NewDataObject";

    public override void OnInspectorGUI()
    {
        serializedObject.Update();
        var manager = (DataManager)target;

        // === Single Entries ===
        EditorGUILayout.LabelField("Single Entries", EditorStyles.boldLabel);

        if (manager.singleEntries == null)
            manager.singleEntries = new List<SingleDataEntry>();

        var keyCounts = manager.singleEntries
            .Where(e => !string.IsNullOrEmpty(e.key))
            .GroupBy(e => e.key)
            .ToDictionary(g => g.Key, g => g.Count());

        bool hasDuplicates = false;

        for (int i = 0; i < manager.singleEntries.Count; i++)
        {
            var entry = manager.singleEntries[i];
            EditorGUILayout.BeginVertical("box");

            // Key field with duplicate check
            EditorGUILayout.BeginHorizontal();
            entry.key = EditorGUILayout.TextField("Key", entry.key);
            if (!string.IsNullOrEmpty(entry.key) && keyCounts[entry.key] > 1)
            {
                GUI.color = Color.red;
                EditorGUILayout.LabelField("Duplicate!", GUILayout.Width(70));
                GUI.color = Color.white;
                hasDuplicates = true;
            }
            EditorGUILayout.EndHorizontal();

            // Value field
            entry.value = (DataObject)EditorGUILayout.ObjectField("Value", entry.value, typeof(DataObject), false);

            // Buttons
            EditorGUILayout.BeginHorizontal();
            if (entry.value != null && GUILayout.Button("Open"))
                Selection.activeObject = entry.value;

            if (GUILayout.Button("Remove"))
            {
                manager.singleEntries.RemoveAt(i);
                break;
            }
            EditorGUILayout.EndHorizontal();

            EditorGUILayout.EndVertical();
        }

        if (hasDuplicates)
        {
            EditorGUILayout.HelpBox("Duplicate keys found in single entries!", MessageType.Error);
        }

        if (GUILayout.Button("Add Single Entry"))
        {
            manager.singleEntries.Add(new SingleDataEntry());
        }

        GUILayout.Space(20);

        // === List Entries ===
        EditorGUILayout.LabelField("List Entries", EditorStyles.boldLabel);

        if (manager.listEntries == null)
            manager.listEntries = new List<ListDataEntry>();

        for (int i = 0; i < manager.listEntries.Count; i++)
        {
            var listEntry = manager.listEntries[i];
            EditorGUILayout.BeginVertical("box");

            listEntry.key = EditorGUILayout.TextField("Group Key", listEntry.key);

            int removeIndex = -1;
            if (listEntry.values == null)
                listEntry.values = new List<DataObject>();

            for (int j = 0; j < listEntry.values.Count; j++)
            {
                EditorGUILayout.BeginHorizontal();
                listEntry.values[j] = (DataObject)EditorGUILayout.ObjectField($"Item {j + 1}", listEntry.values[j], typeof(DataObject), false);
                if (GUILayout.Button("X", GUILayout.Width(25)))
                    removeIndex = j;
                EditorGUILayout.EndHorizontal();
            }

            if (removeIndex >= 0)
                listEntry.values.RemoveAt(removeIndex);

            if (GUILayout.Button("Add Item"))
                listEntry.values.Add(null);

            EditorGUILayout.BeginHorizontal();
            if (GUILayout.Button("Remove Group"))
            {
                manager.listEntries.RemoveAt(i);
                break;
            }
            EditorGUILayout.EndHorizontal();

            EditorGUILayout.EndVertical();
        }

        if (GUILayout.Button("Add List Entry"))
        {
            manager.listEntries.Add(new ListDataEntry());
        }

        GUILayout.Space(10);

        // === Asset Creation ===
        EditorGUILayout.LabelField("Create New DataObject", EditorStyles.boldLabel);
        newAssetName = EditorGUILayout.TextField("Asset Name", newAssetName);

        if (GUILayout.Button("Create New DataObject Asset"))
        {
            var newObj = ScriptableObject.CreateInstance<DataObject>();

            string folderPath = "Assets/DataObjects/";
            if (!AssetDatabase.IsValidFolder(folderPath))
                AssetDatabase.CreateFolder("Assets", "DataObjects");

            // Clean and validate name
            string safeName = string.Join("_", newAssetName.Split(Path.GetInvalidFileNameChars()));
            if (string.IsNullOrWhiteSpace(safeName))
                safeName = "DataObject_" + System.DateTime.Now.ToString("yyyyMMdd_HHmmss");

            string assetPath = AssetDatabase.GenerateUniqueAssetPath($"{folderPath}{safeName}.asset");

            AssetDatabase.CreateAsset(newObj, assetPath);
            AssetDatabase.SaveAssets();
            AssetDatabase.Refresh();
            Selection.activeObject = newObj;

            Debug.Log($"Created new DataObject: {assetPath}");
        }

        serializedObject.ApplyModifiedProperties();
        EditorUtility.SetDirty(manager);
    }
}

