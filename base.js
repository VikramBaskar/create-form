
/*function validatename(){
    var faname = document.getElementById("fname").value;
    var mdname = document.getElementById("mname").value;
    var laname = document.getElementById("lname").value;
    if(faname==" "){
        alert("fill the name field")
 return false;
    }
}*/
/*const form = document.getElementById('form')
form.addEventListener ('submit',function(event){
   event.preventdefault();
   const yourname = document.getElementById('fname').value
   const youremail = document.getElementById('email').value
   console.log(yourname);
   console.log(youremail);

})*/
function validate(){
    var firstname = document.getElementById('fname').value;
    var namepatten = /^[A-Za-z\s]+$/.test(firstname,namepatten);
    if(!firstname){
        alert("kindly input first name")
    }else if(!namepatten){
        alert("Enter text only")
        document.getElementById('fname').value ="";
    }
    
}
function compare(){
    var lastname = document.getElementById('lname').value;
    var namepatten = /^[A-Za-z\s]+$/.test(lastname,namepatten);
    if(!lastname){
        alert("Enter the Last Name")
    }
    else if(!namepatten){
        alert("Enter the Text only")
        document.getElementById('lname').value= "";
    }
}
function parentfieldvalidate(){
    var parentname = document.getElementById('ptname').value;
    var namepatten = /^[A-za-z\s]+$/.test(parentname,namepatten);
    if(!parentname){
        alert("Enter the Parent Name")
    }
    else if(!namepatten){
        alert("Enter the text only")
        document.getElementById('ptname').value ="";
    }
}
function midnamevalidate(){
    var midname = document.getElementById('mname').value;
    var namepatten = /^[A-Za-z\s]+$/.test(midname,namepatten);
    if(!midname){
        alert("Enter The Middle Name")
    }
    else if(!namepatten){
    alert("Enter The Text Only")
    document.getElementById('midname').value ="";
    }
}

function btnvalidate(){
    if(validatefails){
        return false;
    }
    else{
        document.forms.submit();
    }
}






