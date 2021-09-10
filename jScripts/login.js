function noPuppyLink () {
    window.localStorage.removeItem('puppyDetails');
    window.location.href = "profile.html";
}


function clickOnLoginBtn() {

    let name = $('.name').val();
    let puppyName = $('.puppyName').val();
    let puppyAge = $('.puppyAge').val();

    console.log("name is"+name);

    if (name == undefined || name == "") {
        $('#errorMsg').text("היי! שכחת למלא את השם שלך");
        document.getElementById("somethingMissing").style.display = "block";
        return;
    }
    
    if (puppyName == undefined || puppyName == "") {
        $('#errorMsg').text("רגע, מה עם שם הגור?");
        document.getElementById("somethingMissing").style.display = "block";
        return;
    }

    if (puppyAge == undefined || puppyAge == "" || puppyAge > 19 || puppyAge < 1) {
        $('#errorMsg').text("יש בעיה עם גיל הגור");
        document.getElementById("somethingMissing").style.display = "block";
        return;
    }

    let birthday = Date.now() - (puppyAge * 30 * 24 * 60 * 60 * 1000);
    let puppyTopAge = 18;

    let puppy = {
        ownerName: name,
        puppyName: puppyName,
        puppyAge: puppyAge,
        birthday: birthday,
        expiry: birthday + (puppyTopAge * 30 * 24 * 60 * 60 * 1000)
    };

    localStorage.setItem("puppyDetails", JSON.stringify(puppy));
    window.location.href = "profile.html";
}


$('input').focus(function () {
    $(this).parents('.form-group').addClass('focused');
});

$('input').blur(function () {
    var inputValue = $(this).val();
    if (inputValue == "") {
        $(this).removeClass('filled');
        $(this).parents('.form-group').removeClass('focused');
    } else {
        $(this).addClass('filled');
    }
})  