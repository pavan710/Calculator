function cl(number){
    let total=document.querySelector('.dis');
    let am=total.value + number;
    total.value=am;
}
function ce(){
    let total=document.querySelector('.dis');
    total.value='';
}
function adding(){
    let total=document.querySelector('.dis');
    let curvalue=Number(total.value);
    let subb=document.querySelector('.sub');
    subb.value=curvalue + '+';
    total.value='';
    console.log(typeof curvalue);


}