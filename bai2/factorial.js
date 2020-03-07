function factorial()
{
    let input=document.getElementById("inputNumber").value;
    let fact=1;
    if (input==0)
    {
        document.getElementById("result").innerHTML=1;
    }
    else
    {
        if (input<0)
        {
            alert("Vui long nhap lai");
        }
        else
        {
            for (let i=1; i<=input; i++)
            {
                fact=fact*i;
            }
        }
    }
    document.getElementById("result").innerHTML=fact;
}