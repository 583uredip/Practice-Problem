/*Wrong Subtraction*/
let n=parseInt(prompt("Enter Your Number:"))
let k=parseInt(prompt("Enter The Number Of Subtraction"));
for(let i=0;i<k;i++ )
{
if(n%10===0)
{
n=n/10;
}
else
{
n=n-1;
}
}
alert("The Answer Is:"+n);
