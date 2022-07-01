console.log("switch js file");

//switch text of a button on mouseover
var switchBtnHover=document.getElementById('switch-text-hover');
console.log("switchBtnHover is : " , switchBtnHover);
switchBtnHover.style.padding="1em";
switchBtnHover.style.margin="1em";
switchBtnHover.style.border="3px solid rgb(98 , 83 , 64)";
//
function switchTextFunctionHover(){
  if(switchBtnHover.innerText === "Thanks for your time"){
    switchBtnHover.innerText="Have a good day";
  }else{
    switchBtnHover.innerText="Thanks for your time"
  }
}
