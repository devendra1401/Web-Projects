function clearNameErrMsg(){
    document.getElementById('stateUNameErr').innerHTML="";
}

function clearPassErrMsg(){
    document.getElementById('statePassErr'),innerHTML="";
}

// function validateName() {
//     const password = document.getElementById('stateUName').value;

//     const lower = /[a-z]/;
//     const upper = /[A-Z ]/;
//     const number = /[0-9]/;
//     const special= /[!@#$%^&*()_+[\]{};':"\\|,.<>?]/;

//     const containsLower = lower.test(password);
//     const containsUpper = upper.test(password);
//     const containsNumber = number.test(password);
//     const containsSpecial = special.test(password);

//     if ((containsLower || containsUpper )&& !(containsNumber) && !(containsSpecial)) {
//       return true;
//     } 
//     else {
//       alert("Enter valid name");
//       return false;
//     }
// }

function validate() {
    var x=document.getElementById('stateUName').value;
    var y=document.getElementById('statePass').value;
    
    console.log('value of x '+x);
    console.log('value of y '+y);

    if(x =="") {
        //alert('Username cannot be blank');	
        document.getElementById('stateUNameErr').innerHTML="*Username cannot be blank";
        return false;
    }		
    
    if(y =="") {
        //alert('Password cannot be blank');	return false
        document.getElementById("statePassErr").innerHTML="Password cannot be blank";
        return false;
    }			
    return true;
}

