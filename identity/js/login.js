async function getData(){
    
    const geet=new XMLHttpRequest();
    try {
        geet.onreadystatechange=function(){
            if(geet.readyState==4 & geet.status==200)
            {
                var objs=JSON.parse(geet.response);
                operation(objs);
            }
        }
       
      }
      catch(err) {
        console.error(error);
      }
      geet.open("GET","http://localhost:3000/systemusers");
      geet.send("");
}
function operation(obb){

    var cheeck=document.getElementById("cooki").checked
    var EmailUser=document.getElementById("email").value;
    var userpassword=document.getElementById("password").value;
    var typeCustomer=document.getElementById("customer").checked;
    var typeCompany=document.getElementById("company").checked;
var type;
    if(typeCustomer)
    {
      type="customer";
    }
    else if(typeCompany)
    {
      type="company";
    }

    obb.forEach(element => {
        if(element.email==EmailUser & element.password==userpassword)
        {
            if(type=="customer" && element.type=="customer")
            {
                if(cheeck)
                {
                    document.cookie="email="+EmailUser+";path=/";
                    // document.cookie = 'cookie=ok;expires='+now.toUTCString()+';path=/';
                    console.log("vvvv" + document.cookie);

                     location.href = '../customer-services.html';

                }
                else
                {
                    location.href = '../customer-services.html';
                }
                
            }
            else if(type=="company"&& element.type=="company")
            {
                if(cheeck)
                {
                    document.cookie="email="+EmailUser;
                    location.href = '../company-profile.html';

                }
                else
                {
                    location.href = '../company-profile.html';
                }
                
            }
            else
            {
                alert("Kindlly enter correct data");
            }
        }
    });

}


