document.getElementById("Menuitems").addEventListener("click", menutoggle);
function menutoggle(){
    document.getElementById("Menuitems").classList.toggle("active");
}


//function validateform() {
//   var name = document.getElementById("name").value;
//    var phone = document.getElementById("phone").value;
//    var email = document.getElementById("email").value;
//    var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//    var phoneReg = /^\d{10}$/;
//    if (name != '' && email != '' && phone != '') {
//    if(phone.match(phoneReg)) {
//    if (email.match(emailReg)) {
//        //alert("validation is acceptated");
//        return true ;
//    }else{
          // alert("email is not valid");
//        return false;
//    }
//    }else{
//       // alert("phone is not valid");
//        return false;
//}
//    }else{
//       // alert("null inputs")
//        return false;
//}
//savedata()
//}