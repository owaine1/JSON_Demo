$.get('https://jsonplaceholder.typicode.com/users').done(process_results).fail(blowup);

function create_td(inner_text) {
  consol.log('Inside create_td');
  var td_tag = document.createElement('td'); // create a <td> element
  var inner_text = document.createTextNode(inner_text); //create a text node and add name
  td_tag.appendChild(inner_text); //add text node to <td>
  return td;
}

function process_results(data) {
  console.log(data);
  var table = document.createElement('table');
  for (var counter = 0; counter < data.length; counter++) {
    console.log('a person is here')
    var user = (data[counter]);
    console.log(user);
    var tr_tag = document.createElement('tr'); // create a <tr> element

    tr_tag.appendChild(create_td(user.name)); //add <td> to <tr>
    tr_tag.appendChild(create_td(user.username)); //add <td> to <tr>
    tr_tag.appendChild(create_td(user.email)); //add <td> to <tr>
    tr_tag.appendChild(create_td(user.company.name)); //add <td> to <tr>


    var td_tag = document.createElement('td');
    var button = document.createElement('button');

    //set button attribute
    var inner_text = document.createTextNode("edit");
    button.appendChild(inner_text);
    td_tag.appendChild(button);
    tr_tag.appendChild(td_tag);

    //  document.getElementById("myBtn").addEventListener("click", function(){
    //document.getElementById("demo").innerHTML = "Hello World";})

    var td_tag = document.createElement('td');
    var button = document.createElement('button');
    var inner_text = document.createTextNode("delete");
    button.appendChild(inner_text);
    td_tag.appendChild(button);
    tr_tag.appendChild(td_tag);

    table.appendChild(tr_tag);
  }
  //add <tr> to table (outside of loop)
  document.querySelector("#users").appendChild(table);
  //Try it Yourself »

  console.log(table);

  // from here on, we know what we're doing!!??
}

function blowup(reason) {
  console.log(reason);
}

function edit_me() {
  console.log(this);
}
console.log('');
