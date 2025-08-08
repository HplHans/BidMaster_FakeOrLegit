using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SetConditionMet : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    public void SetConditon()
    {
        GameManager.Instance.conditionMet = true;
    }
}
