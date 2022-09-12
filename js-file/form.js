const button = document.getElementById('tap');
button.addEventListener('click', (e)=>{
    e.preventDefault();
});

function validateform(email,phone,message,name) {
    var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneReg = /^\d{10}$/;
    if (name != '' && email != '' && phone != '') {
    if(phone.match(phoneReg)) {
    if (email.match(emailReg)) {
        alert("validation is acceptated");
        return true ;
    }else{
           alert("email is not valid");
        return false;
    }
    }else{
        alert("phone is not valid");
        return false;
 }
    }else{
        alert("null inputs")
        return false;
 }
 }
 //        return false;
 //}
 //}
//function to save messagesssss
function savedata() {
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const name = document.getElementById('name').value;
const validationState = validateform(email,phone,message,name);
if(!validationState)return false;
// Add a new document in collection "cities"
db.collection("messages").doc().set({
    name,
    phone,
    message,
    email
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
}

//function to save subssss
function savesubs() {
    const name = document.getElementById('name').value;
// Add a new document in collection "subscription"
db.collection("subscription").doc().set({
    name
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
}




