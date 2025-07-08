using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.Events;
using DG.Tweening;

public class TweenTaskManager : MonoBehaviour
{
    private static TweenTaskManager _instance;

    public static TweenTaskManager Instance
    {
        get
        {
            if (_instance == null)
            {
                var obj = new GameObject("TweenTaskManager");
                _instance = obj.AddComponent<TweenTaskManager>();
                DontDestroyOnLoad(obj);
            }
            return _instance;
        }
    }

    [Serializable]
    public class TweenCallbacks
    {
        public UnityEvent onStart;
        public UnityEvent onComplete;
        [Range(0f, 1f)] public float progress; // to be updated manually or displayed in inspector
    }

    public class TweenSettings
    {
        public GameObject target;
        public Func<GameObject, Tween> createTween;
        public float delay = 0f;
        public Ease ease = Ease.Linear;

        // Optional callbacks
        public Action<GameObject> onStart;
        public Action<GameObject> onComplete;
        public Action<GameObject, float> onProgress;

        // Optional UnityEvents for editor use
        public TweenCallbacks unityEvents;

        public TweenSettings(GameObject target, Func<GameObject, Tween> createTween, float delay = 0f, Ease ease = Ease.Linear)
        {
            this.target = target;
            this.createTween = createTween;
            this.delay = delay;
            this.ease = ease;
        }
    }

    /// <summary>
    /// Animate multiple GameObjects using custom tween settings and return individual tween Tasks.
    /// </summary>
    public async Task<List<Task>> AnimateGroupAsync(List<TweenSettings> settingsList)
    {
        List<Task> tweenTasks = new List<Task>();

        foreach (var setting in settingsList)
        {
            if (setting?.target == null || setting.createTween == null)
                continue;
                async Task StartTweenAsync()
                {
                    if (setting.delay > 0f)
                        await Task.Delay(TimeSpan.FromSeconds(setting.delay));

                    setting.onStart?.Invoke(setting.target);
                    setting.unityEvents?.onStart?.Invoke();

                    Tween tween = setting.createTween(setting.target);
                    tween.SetEase(setting.ease)
                         .SetAutoKill(true);

                    tween.OnUpdate(() =>
                    {
                        float progress = tween.ElapsedPercentage();
                        setting.onProgress?.Invoke(setting.target, progress);
                        if (setting.unityEvents != null)
                            setting.unityEvents.progress = progress;
                    });

                    tween.OnComplete(() =>
                    {
                        setting.onComplete?.Invoke(setting.target);
                        setting.unityEvents?.onComplete?.Invoke();
                    });

                    await tween.AsyncWaitForCompletion();
                }
            tweenTasks.Add(StartTweenAsync());
        }

        // Return individual tween Tasks
        await Task.WhenAll(tweenTasks);
        return tweenTasks;
    }
}
