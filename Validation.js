function validateFeedback(){
	var firstName = document.getElementById("fname");
	var lastName = document.getElementById("lname");
	var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var cbc = document.getElementById('checkbox').checked;
    var PV = /^[\d\.\-]+$/;
    var EV = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var FNV = /^[a-zA-Z]+$/;
    var LNV = /^[a-zA-Z]+$/;


 	if(!FNV.test(firstName.value))
    {
        alert("You have entered an invalid first name value");
        return false;
    }

    if(!LNV.test(lastName.value))
    {
        alert("You have entered an invalid last name value");
        return false;
    }

    if(!EV.test(email.value)) 
    {
    	alert("You have entered an invalid email address")
    	return false;
    }

    if(!PV.test(phone.value))
    {
        alert("You have entered an invalid phone number");
        return false;
    }

    if(!cbc)
    {
 		alert('Please accept the terms');
 		return false;
 	}
 	
 	if (statusCode == 200 || statusCode == 201)
 	alert('We got your feedback ' + firstName.value + ' We will get back to you soon')

 	else {
 		alert('Hey ' + firstname.value + ' We are having troubles right now, please try again later')
 	}
 	
}

var colors = ['red', 'blue', 'yellow', 'green', 'black'];

function color(){
	var randomIndex = Math.floor(Math.random() * colors.length)
	document.getElementById("title").style.color = colors[randomIndex];
}

// Image carusel




