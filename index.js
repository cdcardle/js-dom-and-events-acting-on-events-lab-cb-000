function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input');
let ul = document.querySelector('ul');

function retrieveEmployeeInformation() {
  return input.value;
}

function addNewElementAsLi() {
  let input = retrieveEmployeeInformation();
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(input));
  ul.appendChild(li);
}

function addNewLiOnClick() {
  document.addEventListener('click', addNewElementAsLi());
  document.addEventListener('click', function(){input.value = ''});
}

function clearEmployeeListOnLinkClick() {
  function clearList() {
    let lis = ul.getElementsByTagName('li');
    for (i = 0; i < lis.length; i++) {
      lis[i].remove();
  }
  }
  return document.addEventListener('click', clearList());
}
