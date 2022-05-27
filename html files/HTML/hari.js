function loginvalue()
{
    var username =document.getElementById("username").value;  
    var password =document.getElementById("password").value;
    console.log([username,password]);
    document.getElementById("dob").innerHTML=username
    document.getElementById("dob1").innerHTML=password
}