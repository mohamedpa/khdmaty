
// window.onload = function getCompanies(){
    
    const geet=new XMLHttpRequest();
    try {
        geet.onreadystatechange=function(){
            if(geet.readyState==4 & geet.status==200)
            {
                var objs=JSON.parse(geet.response);
                // operation(objs);

var processingParent = document.getElementById('customer-processing-cards');
var acceptedParent = document.getElementById('customer-accepted-cards');
var rejecteParent = document.getElementById('customer-rejected-cards');

var userMail=document.cookie.split('=')[1];

objs.forEach(e => {
    const child = document.createElement('div');
    child.className="col-md-4 col-sm-6 col-xs-12";


    if(userMail == e.email && e.state == "processing")
    {
     
        child.innerHTML = `<div class="pricing-item"><div class="price-title"><h3>${e.name}</h3><p>${e.serviceName}</p></div><ul><li><i class="tf-ion-ios-arrow-forward"></i> ${e.phone}</li><li><i class="tf-ion-ios-arrow-forward"></i> ${e.address}</li><li><i class="tf-ion-ios-arrow-forward"></i> ${e.government}</li><li><i class="tf-ion-ios-arrow-forward"></i> ${e.city}</li></ul></div>`;
        processingParent.append(child);

    }
    else if(userMail == e.email && e.state == "accepted")
    {
        child.innerHTML = `<div class="pricing-item"><div class="price-title"><h3>${e.name}</h3><p>${e.serviceName}</p></div><ul><li><i class="tf-ion-ios-arrow-forward"></i> ${e.phone}</li><li><i class="tf-ion-ios-arrow-forward"></i> ${e.address}</li><li><i class="tf-ion-ios-arrow-forward"></i> ${e.government}</li><li><i class="tf-ion-ios-arrow-forward"></i> ${e.city}</li></ul></div>`;
        acceptedParent.append(child);
    }
    else if(userMail == e.email && e.state == "rejected")
    {
        child.innerHTML = `<div class="pricing-item"><div class="price-title"><h3>${e.name}</h3><p>${e.serviceName}</p></div><ul><li><i class="tf-ion-ios-arrow-forward"></i> ${e.phone}</li><li><i class="tf-ion-ios-arrow-forward"></i> ${e.address}</li><li><i class="tf-ion-ios-arrow-forward"></i> ${e.government}</li><li><i class="tf-ion-ios-arrow-forward"></i> ${e.city}</li></ul></div>`;
        rejecteParent.append(child);
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
