const k=parseInt(prompt("Enter The Amount Of 1'st Banana(K):"));
const n=parseInt(prompt("Enter Amount Money You Have(n):"));
const w=parseInt(prompt("Enter The Number Of Bananas You Want To buy(W)"))
let totalcost=0;
for(let i=1;i<=w;i++)
{
totalcost+=k*i;
}
if(totalcost>n)
{
console.log(totalcost-n);
}
else
{
console.log(0);
alert("You don't need to borrow money!");
}
