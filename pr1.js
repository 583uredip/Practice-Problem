/* Remove Special Character*/
function remove(str)
{
return str.replace(/[.,!@#$%^&,*()]/g, '');
}
let input="ab!cd";
let output=remove(input);
console.log(output);
