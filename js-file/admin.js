const button = document.getElementById('tap');
button.addEventListener('click', (e)=>{
    e.preventDefault();
});
function saveblog() {
    const blog = document.getElementById('body').value;
    const title = document.getElementById('title').value;
    // Add a new document in collection "cities"
    db.collection("blog").doc().set({
        title,
        blog
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}