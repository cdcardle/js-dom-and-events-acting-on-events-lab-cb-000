function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input');

function retrieveEmployeeInformation() {
  return input.value;
}

function addNewElementAsLi() {
  let input = retrieveEmployeeInformation();
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(input));
  document.querySelector('ul').appendChild(li);
}

function addNewLiOnClick() {
  document.addEventListener('click', addNewElementAsLi());
  input.value = "r";
}

function clearEmployeeListOnLinkClick() {
  // function clearList() {
  //   document.querySelector('ul').clear;
  // }
  // document.addEventListener('click', clearList())
}
