using DG.Tweening;
using UnityEngine;

public class PromtPopUp : MonoBehaviour
{
    public bool DestroyGameObject;
    // Start is called before the first frame update
    void Start()
    {
        AudioManager.Instance.PlaySFX("OnPop");
        // Start small and invisible
        transform.localScale = Vector3.zero;
        // Animate to full scale and full opacity
        Sequence s = DOTween.Sequence();
        s.Append(transform.DOScale(new Vector3(0.833884001f, 0.833884001f, 0.833884001f), 1f).SetEase(Ease.OutBack))
        .AppendInterval(2f)
        .OnComplete(() => {
            if (DestroyGameObject)
                Destroy(this.gameObject);
        });
    }
}
