/*Zero or One*/

function wordtoNum(word)
{
switch (word.toLowerCase())
{
case "zero":return 0;
case "one":return 1;
case "two":return 2;
case "three":return 3;
case "four":return 4;
case "five": return 5;
case "six":return 6;
case "seven":return 7;
case "eight":return 8;
case "nine":return 9;
default: return -1;
}
}
let input=prompt("Inter Your Word");
let num=wordtoNum(input);
if(num===-1)
{
console.log("Invalied Input");
}
else
{
let result=num%2;
console.log(result);
}

/*-----------Using loop Slove Same Prb-------------*/
let word=["one","two","three","four","five","six","seven","eight","nine"];
let num1=-1;
let input1=prompt("Enter String");
for(let i=0;i<word.length;i++)
{
{
if(input1===word)
num1=i;
break;
}
}
if(num1===-1)
{
console.log("Invalied Input");
}
else
{
let result1=num1%2;
}
console.log(result);

