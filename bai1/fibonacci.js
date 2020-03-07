function fibonacci()
{
    let input=document.getElementById("inputNumber").value;
    let first=0, second=1, sum, result="";
    for(let i=2; i<input; i++)
    {
        sum=first+second;
        first=second;
        second=sum;
        result=result+"&nbsp;"+sum;
    }
    document.getElementById("result").innerHTML="0 "+"1"+result;
}