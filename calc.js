
document.getElementById("add").addEventListener("click",function()
{ 
    let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
    if(num1===""||num2==="")
    {
        document.getElementById("result").innerText="Enter Numbers";
        return;
    }
    let result=num1+num2;
    document.getElementById("result").innerText="Addition :"+ " "+result;

   
    
});

document.getElementById("sub").addEventListener("click",function()
{
     let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
     if(num1===""||num2==="")
    {
        document.getElementById("result").innerText="Enter Numbers";
        return;
    }
    let result=num1-num2;
    document.getElementById("result").innerText="Subtraction :"+" "+result;
    
});

document.getElementById("mul").addEventListener("click",function()
{
      let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
     if(num1===""||num2==="")
    {
        document.getElementById("result").innerText="Enter Numbers";
        return;
    }
    let result=num1*num2;
    document.getElementById("result").innerText="Multiplication :"+" "+result;
    
});

document.getElementById("div").addEventListener("click",function()
{
    let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
    if(num2== 0)
    {
     document.getElementById("result").innerText="Cannot devide by zero";
     return;
    }
    let result=num1/num2;

    document.getElementById("result").innerText="Division : "+" "+result;
    
});

document.addEventListener("keydown",function(e)
{
    if(e.key==="Enter")
   {
    let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
     if(num1===""||num2==="")
    {
        document.getElementById("result").innerText="Enter Numbers";
        return;
    }
    let result=num1+num2;
    document.getElementById("result").innerText="Addition :"+ " "+result;

   
   }

});

document.getElementById("c").addEventListener("click",function()
{
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("result").innerText="";
});