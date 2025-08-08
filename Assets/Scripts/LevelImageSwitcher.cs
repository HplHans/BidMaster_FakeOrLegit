using System.Collections;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using UnityEngine;

public class LevelImageSwitcher : MonoBehaviour
{
    [SerializeField] private GameObject[] levelImages;
    private int currentIndex = 0;
    public int LevelImageCount => levelImages.Length;

    private void Start()
    {
        for (int i = 0; i < levelImages.Length; i++)
        {
            levelImages[i].SetActive(i == 0); // Only first image active at start
        }
        currentIndex = 0;
    }

    public void ChangeImage(int newIndex)
    {
        // Clamp the index to a valid range
        if (levelImages == null || levelImages.Length == 0) return;
        if (newIndex < 0) newIndex = 0;
        if (newIndex >= levelImages.Length) newIndex = levelImages.Length - 1;

        // Disable current glow
        levelImages[currentIndex].SetActive(false);

        // Enable new glow
        levelImages[newIndex].SetActive(true);

        // Update index
        currentIndex = newIndex;
    }
    
}
