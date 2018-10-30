function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let input = retrieveEmployeeInformation();
  document.querySelector('ul').append(`<li>${input}</li>`);
}

function addNewLiOnClick() {
  
}