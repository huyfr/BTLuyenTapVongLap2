function triangleBottomLeft()
{
    document.getElementById("first").innerHTML="";
    for (let rows=1; rows<=5; rows++)
    {
        for(let column=1; column<=rows; column++)
        {
            document.getElementById("first").innerHTML+="* ";
        }
        document.getElementById("first").innerHTML+="<br>";
    }
}

function triangleTopLeft()
{
    document.getElementById("second").innerHTML="";
    for (let rows=5; rows>=1; rows--)
    {
        for (let column=1; column<=rows;column++)
        {
            document.getElementById("second").innerHTML+="* ";
        }
        document.getElementById("second").innerHTML+="<br>";
    }
}

function triangleBottomRight()
{
    let i, j;
    document.getElementById("third").innerHTML="";
    for (i=5; i>=0; i--) //hang
    {
        for (j=0; j<5; j++)//cot
        {
            if (j<i)
            {
                document.getElementById("third").innerHTML+="&nbsp;&nbsp;&nbsp;";
            }
            else
            {
                document.getElementById("third").innerHTML+=" * ";
            }
        }
        document.getElementById("third").innerHTML+="<br>";
    }
}

function triangleTopRight()
{
    let i, j;
    document.getElementById("fourth").innerHTML="";
    for (i=0; i<5; i++) //hang
    {
        for (j=0; j<5; j++)//cot
        {
            if (j<i)
            {
                document.getElementById("fourth").innerHTML+="&nbsp;&nbsp;&nbsp;";
            }
            else
            {
                document.getElementById("fourth").innerHTML+=" * ";
            }
        }
        document.getElementById("fourth").innerHTML+="<br>";
    }
}