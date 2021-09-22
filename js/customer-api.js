
// window.onload = function getCompanies(){
    
    const geet=new XMLHttpRequest();
    try {
        geet.onreadystatechange=function(){
            if(geet.readyState==4 & geet.status==200)
            {
                var objs=JSON.parse(geet.response);
                // operation(objs);

var parent = document.getElementById('parent-cards');


objs.forEach(e => {
    if(e.type == "company")
    {

        const child = document.createElement('div');
        child.className="col-md-4 col-sm-6 col-xs-12";
        child.innerHTML = `<div class="pricing-item"><div class="price-title"><h3>${e.name}</h3><p>${e.serviceName}</p></div><ul><li><i class="tf-ion-ios-arrow-forward"></i> ${e.phone}</li><li><i class="tf-ion-ios-arrow-forward"></i> ${e.address}</li><li><i class="tf-ion-ios-arrow-forward"></i> ${e.government}</li><li><i class="tf-ion-ios-arrow-forward"></i> ${e.city}</li></ul><a ${onclick="Booking(this)"} class="btn btn-main" href="/customer-profile.html">Booking</a></div>`;
        parent.append(child);

    }
});

            }
        }
       
      }
      catch(err) {
        console.error(error);
      }
      geet.open("GET","http://localhost:3000/systemusers");
      geet.send("");
// }


function Booking(e)
{

    
   console.log(e.parent);

    var userMail=document.cookie.split('=')[1];
var order = 
    {
        name: obj.name,
        email: userMail,
        phone: obj.phone,
        address: obj.address,
        government: obj.government,
        city: obj.city,
        state:"processing",
        serviceName: obj.serviceName,
      };

fetch('http://localhost:3000/customerorders', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })
  .then(response => response.json())
  .then(data => {
      location.href = '../customer-profile.html';
  })
  .catch((error) => {
    console.error('Error:', error);
  });

}

