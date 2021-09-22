
   // Replace ./data.json with your JSON feed
   fetch('http://localhost:3000/City').then(response => {
    return response.json();
}).then(data => {
  // Work with JSON data hereconsole.log(data);
    let yourCity = data;

        var ele = document.getElementById('city');
        for (var i = 0; i < yourCity.length; i++) {
            // CITY SELECT ELEMENT WITH JSON.
            ele.innerHTML = ele.innerHTML +
                '<option value="' + yourCity[i]['Name'] + '">' + yourCity[i]['Name'] + '</option>';
        }


}).catch(err => {
    console.log("City error");
  // Do something for an error here
});

 // Replace ./data.json with your JSON feed
 fetch('http://localhost:3000/Government').then(response => {
    return response.json();
}).then(data => {
  // Work with JSON data hereconsole.log(data);
    let Government = data;

        var ele = document.getElementById('government');
        for (var i = 0; i < Government.length; i++) {
            // CITY SELECT ELEMENT WITH JSON.
            ele.innerHTML = ele.innerHTML +
                '<option value="' + Government[i]['Name'] + '">' + Government[i]['Name'] + '</option>';
        }
        
}).catch(err => {
    console.log("Government error");
  // Do something for an error here
});
