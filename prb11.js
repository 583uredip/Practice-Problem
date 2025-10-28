let num=prompt("Enter Your Number");
let lucy_count=0;
for(let i=0;i<num.length;i++)
{
if(num[i]==='7' || num[i]==='4' )
{
lucy_count++;
}
}
if(lucy_count===7 || lucy_count===4)
{
alert("Yes")
}
else
{
alert("No");
}