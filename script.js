var result=document.getElementById("result")
function getNum(number){
result.value+=number
}
function calculate(){
 
    var final_number=result.value;
    let final_Result=eval(final_number)
   result.value=final_Result

}
function clrscr(){
    result.value=""
}
function del(){
    result.value=result.value.slice(0,-1)
}