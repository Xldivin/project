//const Button = document.getElementById('send');
//Button.addEventListener('click', (e)=>{
//    e.preventDefault();
//});

function savecomment() {
    const Names = document.getElementById('name').value;
    const Email = document.getElementById('email').value;
    const Comment = document.getElementById('comment').value;
// Add a new document in collection "comment"
db.collection("comment").doc().set({
    Names,
    Email,
    Comment
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
}