db.collection("users").get().then((querySnapshot) => {

    
    querySnapshot.forEach((doc) => {
        var data = doc.data();
            document.getElementsByClassName("rows")[0].innerHTML += `

            <div class="blog">
            <span class="nbr">
                01
            </span>
            <span class="author"> ${data.username}</span>
            <button class="delete">Delete</button>
        </div>

                   `
    });
}).catch(function (err) {
    alert('Oops!! Error occured');
});