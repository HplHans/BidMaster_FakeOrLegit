using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class StartClickHandler : MonoBehaviour, IPointerDownHandler
{
    public void OnPointerDown(PointerEventData eventData)
    {
        EnableSound();
    }

    public void EnableSound()
    {
        this.GetComponent<Image>().raycastTarget = false;
        if (transform.parent != null)
        {
            transform.parent.gameObject.SetActive(false);
        }
        gameObject.SetActive(false);
        AudioManager.Instance.enableSound = true;
        GameManager.Instance.StartMusic();
    }
}
