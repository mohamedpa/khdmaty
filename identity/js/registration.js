function postData() {

    var userName = document.getElementById("name").value;
    var userEmail = document.getElementById("Email").value;
    var userpassword = document.getElementById("password").value;
    var userphone = document.getElementById("Phone").value;
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
    else
    {
      alert("kindly chose Account type")
    }

    var useraddress = document.getElementById("address").value;
    var usergovernment = document.getElementById("government").value;
    var usercity = document.getElementById("city").value;
    let user = {
        name: userName,
        email: userEmail,
        password: userpassword,
        phone: userphone,
        type:type,
        address: useraddress,
        government: usergovernment,
        city: usercity
    }


fetch('http://localhost:3000/systemusers', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(response => response.json())
  .then(data => {
    console.log("ttttt");
    if(type=="customer")
    {
      location.href = '../customer-profile.html';
    }
    else if(type=="company")
    {
      location.href = '../company-profile.html';
    }
    else
    {
      alert("you are a hacker gratz");
    }
  })
  .catch((error) => {
    console.error('Errooooooooooor:', error);
  });

}
