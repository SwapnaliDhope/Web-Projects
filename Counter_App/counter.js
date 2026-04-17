
document.addEventListener("DOMContentLoaded",()=>{
let c=document.getElementById("count");
let inc=document.getElementById("add");
let dec=document.getElementById("sub");
let reset=document.getElementById("reset");
let count=0;
inc.addEventListener("click",()=>
{
    count++;
    update();

});
dec.addEventListener("click",()=>{
    count--;
    update();
});
reset.addEventListener("click",()=>
{
    count=0;
    update();
});
function update()
{
    c.innerText=count;
  if(count<0)
  {
    c.style.color="Red";

  }else if(count>0)
  {
    c.style.color="green";

  }
  else{
    c.style.color="black";
  }
}

});