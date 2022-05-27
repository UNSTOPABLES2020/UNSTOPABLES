function loginvalue()
{
   var  username =document.getElementById("sece01").value; 
   var  emailid =document.getElementById("sece02").value; 
   var  password =document.getElementById("sece03").value; 
   var  mobileno =document.getElementById("sece04").value; 
     console.log({"Name":username,"password":password,"email address":emailid,"mobile number":mobileno});
     var Student=[
        {
       username:"Hari",
       emailid:"radhahari681@gmail.com",
       password:"hari1538",
       mobileno:6383727628,
    
        },
        {
            username:"Hariradha",
            emailid:"radhahari682@gmail.com",
            password:"hari15382",
            mobileno:6383727622,
             
        },
        {
                username:"Harikrishnan",
                emailid:"radhahari683@gmail.com",
                password:"hari15383",
                mobileno:6383727623,
                 
        },
        {             
                   username:"Harisuriya",
                    emailid:"radhahari684@gmail.com",
                    password:"hari15384",
                    mobileno:6383727624,
        },
                     
    ]
    Student.forEach(function(obj)
    {
        if(obj.username==username)
        {
            document.getElementById("dob1").innerHTML="login suscess"
        }
        else
        {
            document.getElementById("dob1").innerHTML="login suscess"
        }

    }
    )
}
