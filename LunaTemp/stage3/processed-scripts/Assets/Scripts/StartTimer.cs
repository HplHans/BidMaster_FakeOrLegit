using System.Collections;
using UnityEngine;

public class StartTimer : MonoBehaviour
{
    [SerializeField]
    int startTime;
    // Start is called before the first frame update
    void Start()
    {
        StartCoroutine(StartTimerGame());
    }

    private IEnumerator StartTimerGame()
    {
        Debug.Log(startTime);
        //GameManager.Instance.ChangeState(GameState.Paused);
        for (int i = startTime; i >= 0; i--)
        {
            if (i == 0)
            {
                if(GameManager.Instance.hand != null)
                GameManager.Instance.hand.gameObject.SetActive(false);
                if (GameManager.Instance.enableSound)
                    AudioManager.Instance.PlaySFX("OnFail");
                StartCoroutine(GameManager.Instance.Win());
            }
            yield return new WaitForSeconds(1);
            startTime = i;
        }
        yield return true;
    }
}
