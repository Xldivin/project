function addUser(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    authentication.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
       alert("User created successfully")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error: "+errorMessage)
    });
}
function loginUser(){
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  authentication.signInWithEmailAndPassword(email,password).then(userCredential => {
    const user = userCredential.user;
    localStorage.setItem('user',JSON.stringify(user))
    window.location.href = "../admin/add.html";
})
.catch(error => {
    const errorCode = error.code;
    const errorMessage = error?.message;
    alert(errorMessage || "An error occurred");
});
}