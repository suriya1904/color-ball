function red(){
    document.querySelector("div").style.background= "red";
}
function color (value){
    document.querySelector("div").style.background= value;
}
function colorInput (){
    let color= document.getElementById("colorinput").value;
    document.querySelector("div").style.background= color;
    //second
}