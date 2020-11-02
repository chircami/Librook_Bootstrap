 const form1 = document.getElementById("myFormId1");
const form2 = document.getElementById("myFormId2");


function registerForm() {
	let acumErrores = 0;
	form.classList.remove('is-invalid');

	let inputEmail = document.forms["myForm1"]["mail"];
    let newPassword = document.forms["myForm1"]["newPassword"];
    let repeatPassword = document.forms["myFormId1"]["repeatPassword"];
	let gridCheck = document.forms["myForm1"]["gridCheck"];

	 if (inputEmail.value == "") {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorMail").textContent = "Required field";
		console.log("Required field");
		acumErrores++;
		console.log(acumErrores);
    } else if (!validar_email(inputEmail.value)) {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorMail").textContent = "The email does not meet required format";
		console.log("The email does not meet required format");
		acumErrores++;
		console.log(acumErrores);
    } 
	if(newPassword.value == "") {
		newPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Required field";
		console.log("Required field");
		acumErrores++;
		console.log(acumErrores);
	}
	 if(repeatPassword.value == "") {
		repeatPassword.classList.add("is-invalid");
		document.getElementById("errorRepeatPassword").textContent = "Required field";
		console.log("Required field");
		acumErrores++;
		console.log(acumErrores);
	}
	
	if(!gridCheck.checked) {
		gridCheck.classList.add("is-invalid");
		document.getElementById("errorCheck").textContent = "Select I accept the terms & conditions";
		console.log("I accept the terms & conditions");
		acumErrores++;
		console.log(acumErrores);
	}
	if (acumErrores > 0) {
		return false;
	} else { 
		return true;
	}
}

function loginForm() { 
	let acumErrores = 0;
	form.classList.remove('is-invalid');

	let email = document.forms["myForm3"]["email"];
    let inputPassword = document.forms["myForm2"]["inputPassword"];

	
	if(email.value == "") {
		email.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Required field";
		console.log("Required field");
		acumErrores++;
		console.log(acumErrores);
	}
	if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorInputPassword").textContent = "Required field";
		console.log("Required field");
		acumErrores++;
		console.log(acumErrores);
	}
	if (acumErrores > 0) {
		return false;
	} else { 
		return true;
	}

}
	
form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);


function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}
