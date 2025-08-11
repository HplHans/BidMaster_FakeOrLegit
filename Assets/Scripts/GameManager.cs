using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    public bool SIP = false; // Enable for SIP
    public static GameManager Instance;
    public GameObject endPanel;
    public CanvasGroupAnimator endPanelAnimator;
    public LevelImageSwitcher levelImageSwitcher;
    public TMP_Text scoreTxt;
    public bool end;
    public bool endPlay;
    public GameObject hand;
    public GameObject message2;
    public Animator animator;
    public bool enableSound;
    public List<DataObject> items;
    public int level;
    public int[] animPos;
    public RectTransform itemsParent;
    public StartClickHandler startClickHandler;
    public int itemValue;
    public GameObject[] biddersBubble;
    public GameObject promptBubble;
    public GameObject btnGroup;
    public GameObject biddersLossTxt;
    public GameObject biddersLossPlus;
    public GameObject playersLoss;
    public GameObject playersPlus;
    public GameObject AuthenticImg;
    public GameObject profitImg;
    public GameObject fakeImg;
    public TMP_Text cashTxt;
    public CanvasGroupAnimator failBidCanvas;
    public CanvasGroupAnimator failPassCanvas;
    public bool win;
    public bool fail;
    public bool bidFail;
    public bool passFail;
    public bool conditionMet;
    private int previousLevel = 0;
    [SerializeField] private List<GameObject> auctionItems;
    public GameObject audioManager;

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

        //SIP Check
        if (SIP == true)
        {
            audioManager.SetActive(false);
        }

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
        level = 1;
        SetLevel(1);

        // Ensure first auction item is white at start
        if (auctionItems != null && auctionItems.Count > 0)
        {
            var firstImg = auctionItems[0].GetComponent<Image>();
            if (firstImg != null)
                firstImg.color = Color.white;
        }

        ChangeState(GameState.MainMenu);
        items = DataManager.Instance.GetList("Items");
        var seq = TaskManager.Instance.CreateSequence();
        var seq1 = TaskManager.Instance.CreateSequence();
        var seq2 = TaskManager.Instance.CreateSequence();

        seq.Append(()=> SetLevel(1));
        seq.AppendWaitUntil(()=> level == 2);
        seq.AppendDelay(2);
        seq.Append(() => SetLevel(2));
        seq.AppendWaitUntil(() => level == 3);
        seq.AppendDelay(3);
        seq.Append(() => SetLevel(3));
        seq.AppendWaitUntil(() => win == true);
        seq.AppendDelay(3);
        seq.Append(() => StartCoroutine(Win()));
        seq.Start();

        seq1.AppendWaitUntil(() => passFail == true);
        seq1.AppendDelay(1);
        seq1.Append(() => StartCoroutine(FailPass()));
        seq1.Start();

        seq2.AppendWaitUntil(() => bidFail == true);
        seq2.AppendDelay(1);
        seq2.Append(() => StartCoroutine(FailBid()));
        seq2.Start();
    }

    public void ShowFake()
    {
        fakeImg.SetActive(true);
        fakeImg.GetComponent<PromtPopUp>().showFake();
    }

    public IEnumerator Win()
    {
        AudioManager.Instance.StopMusic();
        AudioManager.Instance.PlaySFX("OnWin");
        ChangeState(GameState.Paused);
        yield return new WaitForSecondsRealtime(1);
        endPanel.SetActive(true);
        endPanelAnimator.TriggerAnimate();
        end = true;
    }

    public IEnumerator FailBid()
    {
        AudioManager.Instance.StopMusic();
        AudioManager.Instance.PlaySFX("OnFail");
        ChangeState(GameState.Paused);
        Debug.Log("failbid");
        yield return new WaitForSecondsRealtime(1);
        failBidCanvas.gameObject.SetActive(true);
        failBidCanvas.TriggerAnimate();
        end = true;
    }

    public IEnumerator FailPass()
    {
        AudioManager.Instance.StopMusic();
        AudioManager.Instance.PlaySFX("OnFail");
        ChangeState(GameState.Paused);
        Debug.Log("failpass");
        yield return new WaitForSecondsRealtime(1);
        failPassCanvas.gameObject.SetActive(true);
        failPassCanvas.TriggerAnimate();
        end = true;
    }

    public void StartMusic()
    {
        AudioManager.Instance.PlayMusic("BGM");
    }
    private void DestroyHandObj()
    {
        if(hand.gameObject != null && hand.gameObject.activeInHierarchy)
        Destroy(hand.gameObject);
    }

    public void CTAClicked()
    {
        Luna.Unity.Playable.InstallFullGame("https://apps.apple.com/us/app/bid-master/id6453025143", "https://play.google.com/store/apps/details?id=com.bid.master.war.auction.battle");
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

    public IEnumerator ItemsMove(int pos)
    {
        if (SIP == false)
        {
            AudioManager.Instance.PlaySFX("OnSwift");
        }
        Tween t = itemsParent.DOAnchorPosX(animPos[pos], 0.5f).SetEase(Ease.OutBack);
        yield return t.WaitForCompletion();
        foreach (var item in biddersBubble)
        {
            item.gameObject.SetActive(false);
        }
        yield return new WaitForSeconds(1);
        StartCoroutine(StartBidding());
    }

    public IEnumerator StartBidding()
    {

        //Normal Flow
        for (int i = 0; i < biddersBubble.Length; i++)
        {
            AudioManager.Instance.PlaySFX("OnBid");
            if(i == 0)
            {
                Debug.Log("0");
                biddersBubble[0].gameObject.SetActive(true);
                biddersBubble[0].transform.GetChild(0).GetComponent<TextMeshProUGUI>().text = items[level - 1].bidder1Bid;
            }
                
            if (i == 1)
            {
                Debug.Log("1");
                biddersBubble[1].gameObject.SetActive(true);
                biddersBubble[1].transform.GetChild(0).GetComponent<TextMeshProUGUI>().text = items[level - 1].bidder2Bid;
            }
                
            if (i == 2)
            {
                Debug.Log("2");
                biddersBubble[2].gameObject.SetActive(true);
                biddersBubble[2].transform.GetChild(0).GetComponent<TextMeshProUGUI>().text = items[level - 1].bidder3Bid;
            }
                
            if (i == 3)
            {
                Debug.Log("3");
                if (!conditionMet)
                {
                    promptBubble.SetActive(true);

                    if (SIP)
                    {
                        var button = promptBubble.GetComponent<UnityEngine.UI.Button>();
                        if (button != null)
                        {
                            button.onClick.RemoveAllListeners();
                            button.onClick.AddListener(() =>
                            {
                                conditionMet = true;
                                HandlePromptBubbleTap();
                            });
                        }
                    }

                    yield return new WaitUntil(() => conditionMet);
                    promptBubble.SetActive(false);
                }
                biddersBubble[3].gameObject.SetActive(true);
                biddersBubble[3].transform.GetChild(0).GetComponent<TextMeshProUGUI>().text = items[level - 1].playerBid;
            }
                
            if (i == 3 && i <= 3)
            {
                btnGroup.gameObject.SetActive(true);
                btnGroup.transform.GetComponent<CanvasGroup>().interactable = true;
                btnGroup.transform.GetComponent<CanvasGroupAnimator>().TriggerAnimate();
            }
            yield return new WaitForSeconds(.5f);
        }
    }

    void SetLevel(int lvl)
    {
        StartCoroutine(ItemsMove(lvl - 1));
        level = lvl;

        // Switch glow + brighten item via LevelImageSwitcher
        if (levelImageSwitcher != null)
            levelImageSwitcher.ChangeImage(level - 1);

        // Update the tracker
        previousLevel = lvl;

        switch (lvl)
        {
            case 1:
                itemValue = items[0].assetValue;
                break;
            case 2:
                itemValue = items[1].assetValue;
                break;
            case 3:
                itemValue = items[2].assetValue;
                break;
            default:
                break;
        }
    }

    public void Bid()
    {
        if (!AudioManager.Instance.enableSound)
        {
            AudioManager.Instance.enableSound = true;
            GameManager.Instance.StartMusic();
        }
        AudioManager.Instance.PlaySFX("OnProfit");
        btnGroup.transform.GetComponent<CanvasGroup>().interactable = false;
        btnGroup.transform.GetComponent<CanvasGroupAnimator>().TriggerAnimateOut();
        AudioManager.Instance.PlaySFX("OnClick");
        DestroyHandObj();
        if (level == 1)
        {
            ShowFake();
            playersLoss.gameObject.SetActive(true);
            playersLoss.GetComponent<FloatingTextEffect>().ShowFloatingTextMinus("290");
            cashTxt.text = (Int32.Parse(cashTxt.text) - 290).ToString();
            bidFail = true;
        }
        if (level == 2)
        {
            AuthenticImg.gameObject.SetActive(true);
            profitImg.gameObject.SetActive(true);
            playersPlus.gameObject.SetActive(true);
            playersPlus.GetComponent<FloatingTextEffect>().ShowFloatingTextPlus("50");
            cashTxt.text = (Int32.Parse(cashTxt.text) + 50).ToString();
        }
        if (level == 3)
        {
            bidFail = true;
            ShowFake();
            playersLoss.gameObject.SetActive(true);
            playersLoss.GetComponent<FloatingTextEffect>().ShowFloatingTextMinus("180");
            cashTxt.text = (Int32.Parse(cashTxt.text) - 180).ToString();
            if (bidFail)
            {
                fail = true;
            }
            else
            {
                win = true;
            }
        }
        level++;
        conditionMet = false;
    }
    public void Pass()
    {
        if (!AudioManager.Instance.enableSound)
        {
            AudioManager.Instance.enableSound = true;
            GameManager.Instance.StartMusic();
        }
        AudioManager.Instance.PlaySFX("OnProfit");
        btnGroup.transform.GetComponent<CanvasGroup>().interactable = false;
        btnGroup.transform.GetComponent<CanvasGroupAnimator>().TriggerAnimateOut();
        AudioManager.Instance.PlaySFX("OnClick");
        DestroyHandObj();
        if (level == 1)
        {
            ShowFake();
            biddersLossTxt.gameObject.SetActive(true);
            biddersLossTxt.GetComponent<FloatingTextEffect>().ShowFloatingTextMinus("190");
        }
        if (level == 2)
        {
            AuthenticImg.gameObject.SetActive(true);
            biddersLossPlus.gameObject.SetActive(true);
            biddersLossPlus.GetComponent<FloatingTextEffect>().ShowFloatingTextPlus("150");
            passFail = true;
        }
        if (level == 3)
        {
            ShowFake();
            biddersLossTxt.gameObject.SetActive(true);
            biddersLossTxt.GetComponent<FloatingTextEffect>().ShowFloatingTextMinus("130");
            if (bidFail)
            {
                fail = true;
            }
            else
            {
                win = true;
            }     
        }
        level++;
        conditionMet = false;
    }
    private void HandlePromptBubbleTap()
    {
        promptBubble.SetActive(false);

        if (endPanel != null && endPanelAnimator != null)
        {
            endPanel.SetActive(true);
            endPanelAnimator.TriggerAnimate();
        }

        StopAllCoroutines();

        if (AudioManager.Instance != null)
        {
            AudioManager.Instance.enableSound = false;
            AudioManager.Instance.StopMusic();
        }

        ChangeState(GameState.Paused);
    }

}