db.collection("blog").get().then((querySnapshot) => {

    
    querySnapshot.forEach((doc) => {
        var data = doc.data();
        document.getElementsByClassName("head")[0].innerHTML += `
        <h2>${data.title}</h2>

           `
           document.getElementsByClassName("text")[0].innerHTML += `
           <p>${data.blog}</p>
   
              `
});
}).catch(function (err) {
alert('Oops!! Error occured');
});