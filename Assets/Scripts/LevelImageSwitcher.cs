using System.Collections;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using UnityEngine;
using UnityEngine.UI;

public class LevelImageSwitcher : MonoBehaviour
{
    [SerializeField] private GameObject[] levelImages;
    [SerializeField] private Image[] itemImages;       // Actual item sprites

    private int currentIndex = 0;
    public int LevelImageCount => levelImages.Length;

    private void Start()
    {
        // Dim all items first
        for (int i = 0; i < itemImages.Length; i++)
        {
            if (itemImages[i] != null)
                itemImages[i].color = new Color(0.294f, 0.294f, 0.294f); // #4B4B4B
        }

        // Activate first image & brighten it
        if (levelImages.Length > 0) levelImages[0].SetActive(true);
        if (itemImages.Length > 0 && itemImages[0] != null)
            itemImages[0].color = Color.white;

        currentIndex = 0;
    }

    public void ChangeImage(int newIndex)
    {
        if (levelImages == null || levelImages.Length == 0) return;

        // Clamp index
        if (newIndex < 0) newIndex = 0;
        if (newIndex >= levelImages.Length) newIndex = levelImages.Length - 1;

        // Disable current glow
        levelImages[currentIndex].SetActive(false);

        // Dim previous item
        if (itemImages[currentIndex] != null)
            itemImages[currentIndex].color = new Color(0.294f, 0.294f, 0.294f);

        // Enable new glow
        levelImages[newIndex].SetActive(true);

        // Brighten new item
        if (itemImages[newIndex] != null)
            itemImages[newIndex].color = Color.white;

        // Update index
        currentIndex = newIndex;
    }
    
}
