/*A. Word*/
let s=prompt("Enter Your String");
let lower=0;
let uppar=0;
for(let i=0;i<s.length;i++)
{
if(s[i]>='A' && s[i]<='B')
{
uppar++;
}
else
{
lower++;
}
}
if(uppar>lower)
{
console.log(s.toUpperCase());
}
else
{
console.log(s.toLowerCase());
}
