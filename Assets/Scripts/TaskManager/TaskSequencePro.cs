using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class TaskSequencePro
{
    private readonly TaskManager _manager;
    private readonly Queue<IEnumerator> _steps = new();

    private Action _onComplete;
    private Action _onCancel;

    private bool _isRunning;
    private bool _isPaused;
    private bool _isCancelled;

    private Coroutine _currentRoutine;

    private MonoBehaviour CoroutineHost => TaskManager.Instance;

    public TaskSequencePro(TaskManager manager)
    {
        _manager = manager;
    }

    // === Public Properties ===
    public bool IsRunning => _isRunning;
    public bool IsPaused => _isPaused;
    public bool IsCancelled => _isCancelled;

    // === Chainable Sequence Setup ===

    public TaskSequencePro Append(Action action)
    {
        _steps.Enqueue(ActionRoutine(action));
        return this;
    }

    public TaskSequencePro AppendDelay(float delay)
    {
        _steps.Enqueue(DelayRoutine(delay));
        return this;
    }

    public TaskSequencePro AppendWaitUntil(Func<bool> condition)
    {
        _steps.Enqueue(WaitUntilRoutine(condition));
        return this;
    }

    public TaskSequencePro AppendRoutine(IEnumerator routine)
    {
        _steps.Enqueue(routine);
        return this;
    }

    public TaskSequencePro OnComplete(Action callback)
    {
        _onComplete = callback;
        return this;
    }

    public TaskSequencePro OnCancel(Action callback)
    {
        _onCancel = callback;
        return this;
    }

    public TaskSequencePro Start()
    {
        if (_isRunning) return this;
        _isRunning = true;
        _currentRoutine = CoroutineHost.StartCoroutine(RunSequence());
        return this;
    }

    public void Cancel()
    {
        if (!_isRunning) return;

        _isCancelled = true;
        _isRunning = false;

        if (_currentRoutine != null)
        {
            CoroutineHost.StopCoroutine(_currentRoutine);
            _currentRoutine = null;
        }

        _onCancel?.Invoke();
    }

    public void Pause() => _isPaused = true;
    public void Resume() => _isPaused = false;

    // === Core Sequence Execution ===

    private IEnumerator RunSequence()
    {
        while (_steps.Count > 0)
        {
            var step = _steps.Dequeue();

            while (_isPaused)
                yield return null;

            yield return CoroutineHost.StartCoroutine(step);

            if (_isCancelled)
                yield break;
        }

        _isRunning = false;
        _onComplete?.Invoke();
    }

    // === Helpers ===

    private IEnumerator ActionRoutine(Action action)
    {
        action?.Invoke();
        yield return null;
    }

    private IEnumerator DelayRoutine(float delay)
    {
        yield return new WaitForSeconds(delay);
    }

    private IEnumerator WaitUntilRoutine(Func<bool> condition)
    {
        yield return new WaitUntil(condition);
    }

    public TaskSequencePro AppendTween(Tween tween)
    {
        return AppendRoutine(WaitForTween(tween));
    }

    private IEnumerator WaitForTween(Tween tween)
    {
        if (tween == null)
            yield break;

        tween.Play();
        yield return tween.WaitForCompletion();
    }
}





