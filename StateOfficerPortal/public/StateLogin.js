/**
 * 
 */

function clearNameErrMsg(){
    document.getElementById('stateUNameErr').innerHTML="";
}

function clearPassErrMsg(){
    document.getElementById('statePassErr').innerHTML="";
}

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
        document.getElementById("statePassErr").innerHTML="*Password cannot be blank";
        return false;
    }			
    return true;
}

function clearEmailErrMsg(){
	document.getElementById('stateUEmailErr').innerHTML="";
}

function validateEmail() {
  const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if(res.test(document.getElementById('stateUEmail').value.toLowerCase())==false){
	  
	document.getElementById("stateUEmailErr").innerHTML="Email is not valid";
  }
  
  return res.test(document.getElementById('stateUEmail').value.toLowerCase());
 }

