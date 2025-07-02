using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TaskManager : MonoBehaviour
{
    public static TaskManager Instance { get; private set; }
    
    private Dictionary<string, Coroutine> _taskMap = new();

    void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }

        Instance = this;
        DontDestroyOnLoad(this.gameObject);
    }
    public TaskSequencePro CreateSequence() => new TaskSequencePro(this);
    // Run and store a task with a unique ID
    public void RunTask(string id, IEnumerator routine)
    {
        StopTask(id);
        Coroutine coroutine = StartCoroutine(routine);
        _taskMap[id] = coroutine;
    }

    // Fire-and-forget task
    public void Run(IEnumerator routine)
    {
        StartCoroutine(routine);
    }

    // Stop a task by ID
    public void StopTask(string id)
    {
        if (_taskMap.TryGetValue(id, out var coroutine))
        {
            if (coroutine != null)
                StopCoroutine(coroutine);

            _taskMap.Remove(id);
        }
    }

    // Stop all tracked tasks
    public void StopAll()
    {
        foreach (var coroutine in _taskMap.Values)
        {
            if (coroutine != null)
                StopCoroutine(coroutine);
        }

        _taskMap.Clear();
    }

    // Delay utility
    public void RunAfter(float delay, Action action)
    {
        Run(DelayRoutine(delay, action));
    }

    private IEnumerator DelayRoutine(float delay, Action action)
    {
        yield return new WaitForSeconds(delay);
        action?.Invoke();
    }

    // Run after delay and return result
    public void RunAfter<T>(float delay, Func<T> func, Action<T> onComplete)
    {
        Run(RunAfterRoutine(delay, func, onComplete));
    }

    private IEnumerator RunAfterRoutine<T>(float delay, Func<T> func, Action<T> onComplete)
    {
        yield return new WaitForSeconds(delay);
        var result = func != null ? func.Invoke() : default;
        onComplete?.Invoke(result);
    }

    // Run until condition is met
    public void RunUntil(Func<bool> condition, Action onComplete)
    {
        Run(WaitUntilRoutine(condition, onComplete));
    }

    private IEnumerator WaitUntilRoutine(Func<bool> condition, Action onComplete)
    {
        yield return new WaitUntil(condition);
        onComplete?.Invoke();
    }

    // Run while condition is true (looping)
    public void RunWhile(Func<bool> condition, float interval, Action onTick, Action onComplete = null)
    {
        Run(WhileRoutine(condition, interval, onTick, onComplete));
    }

    private IEnumerator WhileRoutine(Func<bool> condition, float interval, Action onTick, Action onComplete)
    {
        while (condition())
        {
            onTick?.Invoke();
            yield return new WaitForSeconds(interval);
        }

        onComplete?.Invoke();
    }

    // Run repeatedly forever or until manually stopped
    public void RunRepeating(float interval, Action action, string taskId = null)
    {
        IEnumerator loop = RepeatingRoutine(interval, action);
        if (!string.IsNullOrEmpty(taskId))
            RunTask(taskId, loop);
        else
            Run(loop);
    }

    private IEnumerator RepeatingRoutine(float interval, Action action)
    {
        while (true)
        {
            yield return new WaitForSeconds(interval);
            action?.Invoke();
        }
    }
}
