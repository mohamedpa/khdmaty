
// window.onload = function getCompanies(){
    
    const geet=new XMLHttpRequest();
    try {
        geet.onreadystatechange=function(){
            if(geet.readyState==4 & geet.status==200)
            {
                var objs=JSON.parse(geet.response);
                // operation(objs);

var parent = document.getElementById('parent-cards');

var userMail=document.cookie.split('=')[1].split(';')[0];
console.log(userMail);
objs.forEach(e => {
    if(e.companyMail == userMail)
    {
      console.log("aa");
        const child = document.createElement('div');
        child.className="col-md-4 col-sm-6 col-xs-12";
        child.innerHTML = `<div class="pricing-item"><div class="price-title"><h3>${e.name}</h3><p>${e.serviceName}</p></div><ul><li><i class="tf-ion-ios-arrow-forward"></i> ${e.phone}</li><li><i class="tf-ion-ios-arrow-forward"></i> ${e.address}</li><li><i class="tf-ion-ios-arrow-forward"></i> ${e.government}</li><li><i class="tf-ion-ios-arrow-forward"></i> ${e.city}</li></ul><a onclick="Accept(this)" class="btn btn-primary">Accept</a></ul><a onclick="Reject(this)" class="btn btn-danger"">Reject</a></div>`;
        parent.append(child);

    }
});

            }
        }
       
      }
      catch(err) {
        console.error(error);
      }
      geet.open("GET","http://localhost:3000/customerorders");
      geet.send("");
// }

function Accept()
{
alert("Order Accepted")
}

function Reject()
{
  alert("Order rejected")

}