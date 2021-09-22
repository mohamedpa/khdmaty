async function postData() {
    var userName = document.getElementById("name").value;
    var userEmail = document.getElementById("Email").value;
    var userpassword = document.getElementById("password").value;
    var userphone = document.getElementById("phone").value;
    var type = document.getElementById("type").value;
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
    if(type=="customer")
    {
      console.log("eccept");
      location.href = 'login.html';
      console.log("eccept");
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });

}
