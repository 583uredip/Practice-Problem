/* Sum of Natural Numbers*/
function Number(n)
{
return (n*(n+1))/2;
}

let input=prompt("Enter Your Word");
let N=parent(input);
if(isNaN(N))
{
alert("Enter The Right Word");
}
else
{
let sum=Number(N);
console.log(sum);
alert("Sum of first " + N + " natural numbers is: " + sum);
}

