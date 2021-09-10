window.addEventListener('load', function () {

    var puppyDetails = localStorage.getItem("puppyDetails");

    var puppyJson = JSON.parse(puppyDetails);

    //check if user already logged in , if not - redirect to login page
    if (puppyJson == "" || puppyJson == undefined || puppyJson == null) {
        $('#myPuppy').remove();
        document.getElementById('helloUserName').innerText = "היי ";
        $('#goToLogin').css('visibility', 'visible');
    }
    else {
        if (Date.now() > puppyJson.expiry) {
            window.localStorage.removeItem('puppyDetails');
            window.location.href = "login.html";
        }

        $('#goToLogin').remove();
        document.getElementById('helloUserName').innerText = "היי " + puppyJson.ownerName + ",";

        //set puppy age
        //calc age according to birthday
        document.getElementById('puppyAgeValue').innerText = parseInt((Date.now() - puppyJson.birthday) / 1000 / 30 / 24 / 60 / 60) + " חודשים";

        //set puppy name for all elements with puppyNameValue class attribute 
        let puppyName = puppyJson.puppyName;
        var elements = document.getElementsByClassName("puppyNameValue");
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerText = puppyName+' ';
        }
    }})

$('document').ready(function () {


});