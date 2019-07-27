
function onClick (){
   
    let uname = (document.getElementById('email').value);
    let pass = (document.getElementById('pass').value);

    fetch('http://localhost:3030/loggedIn?uname='+encodeURIComponent(uname)+'&&pass='+encodeURIComponent(pass))
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(JSON.stringify(myJson));
    });

}