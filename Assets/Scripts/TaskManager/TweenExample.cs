using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class TweenExample : MonoBehaviour
{
    public List<GameObject> objects;

    async void Start()
    {
        List<TweenTaskManager.TweenSettings> tweens = new List<TweenTaskManager.TweenSettings>();

        foreach (var obj in objects)
        {
            var settings = new TweenTaskManager.TweenSettings(
                target: obj,
                createTween: go => go.transform.DOScale(Vector3.one * 2, 1f),
                delay: 0.2f,
                ease: Ease.OutElastic
            );

            settings.onStart = go => Debug.Log($"{go.name} started!");
            settings.onComplete = go => Debug.Log($"{go.name} completed!");
            settings.onProgress = (go, progress) => Debug.Log($"{go.name} progress: {progress:P0}");

            tweens.Add(settings);
        }

        await TweenTaskManager.Instance.AnimateGroupAsync(tweens);

        Debug.Log(" All tweens done!");
    }
}
