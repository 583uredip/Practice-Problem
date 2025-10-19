//Stones on the Table
let n=parseInt(prompt("Enter Number Of Stones:"));
let s=prompt("Enter The Color(R,G,B)");
if(isNaN(n) || n<1 || s.length!==n)
{
alert("Invalid Input");
}
else
{
let count=0;
for(let i=1;i<n;i++)
{
if(s[i]===s[i-1])
{
count++;
}
}
alert("Minimus stones remove;" + count);
}