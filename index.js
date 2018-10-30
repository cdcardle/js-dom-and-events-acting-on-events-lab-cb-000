function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let d = document;
let input = d.querySelector('input');
let ul = d.querySelector('ul');

function retrieveEmployeeInformation() {
  return input.value;
}

function addNewElementAsLi() {
  let input = retrieveEmployeeInformation();
  let li = d.createElement('li');
  li.appendChild(d.createTextNode(input));
  ul.appendChild(li);
}

function addNewLiOnClick() {
  d.addEventListener('click', addNewElementAsLi());
  d.addEventListener('click', function(){input.value = ''});
}

function clearEmployeeListOnLinkClick() {
  function clearList() {
    ul.remove();
  }
  return d.addEventListener('click', clearList())
}
