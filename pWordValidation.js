
function  getMessage(){
    let userName = document.getElementById('uName').Value;
    let password = document.getElementById('pWord').Value;
   // alert("hello validation" + passWord);

   let regEx=/[a-zA-Z \-]{8}/;

   if(regEx.test){

    document.getElementById('pMsg').innerHTML="Login Successfully";
   }
}


document.getElementById('btnLogin').addEventListener("click",getMessage);