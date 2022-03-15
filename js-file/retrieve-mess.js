db.collection("messages").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        var data = doc.data();
            document.getElementsByClassName("rows")[0].innerHTML += `

<div class="row-query">
  <div class="blog">
    <span class="nbr">
            01
    </span>
     <span class="author">${data.name}</span>
    <button class="delete">Delete</button>
     </div>
    <p class="query">
    ${data.message}
    </p>
</div>
     `
    });
}).catch(function (err) {
    alert('Oops!! Error occured');
});
