// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

console.log("talking");
// fetched hte data of 12 users
fetch('https://randomuser.me/api/?results=12')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log ("failure to load properly.  Status code: " + response.status);
        return;
      }

      // did the response to test if I actually got users...
  response.json().then(function(data){
    // console.log(data.results.users);

    let users = data.results;
    console.log(users);
    // console.log('First users is: ${users}');

    function renderName(){
      return `
      ${users.map(users => `
        <ul>
        <li>${users.picture.medium}</li>
          <li>${users.name.first} ${users.name.last}</li>
        <li>${users.email}</li>
        <li>${users.location.street}  </li>
        <li>${users.location.city} ${users.location.state} ${users.location.postcode} </li>

        <li>${users.cell}</li>

        <li>${users.id.name} ${users.id.value}</li>
        </ul>
      `).join('')}

      `
      ;
    }
    // console.log(users);

    let markup = `
    <div class="Customer">
    <p>Internal Company Directory ${renderName()}</p>
    </div>`

    console.log(JSON.stringify(users));

    document.body.innerHTML = markup;





});
})



// function print(users){
//  for (i=0; i < user.results.length; i++)
//  {
//    alert(results);
//  }

 // var name = document.createElement('li');
 // var address = document.creatElement('li');

 //
 // name.textcontent = 'Name' + users[i].name;
 // name.appendChild('ul');


// (function () {
//
//   'use strict';
//
//
//
// })();
