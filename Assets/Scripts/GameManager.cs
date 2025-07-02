using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;
    public GameObject endPanel;
    public CanvasGroupAnimator endPanelAnimator;
    public TMP_Text scoreTxt;
    public bool end;
    public bool endPlay;
    public GameObject hand;
    public GameObject message2;
    public Animator animator;
    public bool enableSound;
    public StartClickHandler startClickHandler;
    public enum GameState { MainMenu, Playing, Paused, GameOver }
    public GameState CurrentState { get; private set; }
    public int currentScore;
    public int CurrentScore {
        get { return currentScore; }
        set {
            currentScore = value;
        }
    }

    private void Awake()
    {
        // Singleton setup
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }
    }
    private void Start()
    {
        ChangeState(GameState.MainMenu);
    }

    public IEnumerator Win()
    {
        yield return new WaitForSeconds(1);
        endPanel.SetActive(true);
        endPanelAnimator.TriggerAnimate();
        end = true;
    }
    private IEnumerator DestroyHandObj()
    {
        yield return new WaitForSeconds(1f);
        Destroy(hand.gameObject);
    }

    public void CTAClicked()
    {
        Luna.Unity.Playable.InstallFullGame("https://apps.apple.com/us/app/bid-wars-2-pawn-shop-tycoon/id1262445849", "https://play.google.com/store/apps/details?id=br.com.tapps.bidwars2");
        Debug.Log("CTA Clicked");
    }

    public void ChangeState(GameState newState)
    {
        CurrentState = newState;

        switch (newState)
        {
            case GameState.MainMenu:
                Time.timeScale = 1f;
                break;
            case GameState.Playing:
                Time.timeScale = 1f;
                ResetScore();
                break;
            case GameState.Paused:
                Time.timeScale = 0f;
                break;
            case GameState.GameOver:
                Time.timeScale = 1f;
                break;
        }

        Debug.Log("Game State changed to: " + newState);
    }

  

    public void AddScore(int amount)
    {
        CurrentScore += amount;
        scoreTxt.text = CurrentScore.ToString() + "/5";
    }

    public void ResetScore()
    {
        CurrentScore = 0;
    }

    public void RestartGame()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
        ChangeState(GameState.Playing);
    }
}