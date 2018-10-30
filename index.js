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
  document.querySelector('ul').append(`<li>${input}</li>`);
}

function addNewLiOnClick() {
  document.addEventListener('click', addNewElementAsLi());
  input.value = "";
}

function clearEmployeeListOnLinkClick() {
  function clearList() {
    document.querySelector('ul').clear;
  }
  document.addEventListener('click', clearList())
}
