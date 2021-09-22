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

    var EmailUser=document.getElementById("Email").value;
    var userpassword=document.getElementById("password").value;
    var type=document.getElementById("type").value;
    var cheeck=document.getElementById("cooki").checked

    obb.forEach(element => {
        if(element.email==EmailUser & element.password==userpassword)
        {
            if(type=="customer")
            {
                if(cheeck)
                {
                    document.cookie="Email="+EmailUser;
                    location.href = 'https://www.w3schools.com/js/';

                }
                else
                {
                    console.log("true");
                    location.href = 'https://www.w3schools.com/js/';
                }
                
            }
            else
            {
                if(cheeck)
                {
                    document.cookie="Email="+EmailUser;
                    location.href = 'https://www.w3schools.com/js/';

                }
                else
                {
                    location.href = 'https://www.w3schools.com/js/';
                }
                
            }
        }
    });

}


