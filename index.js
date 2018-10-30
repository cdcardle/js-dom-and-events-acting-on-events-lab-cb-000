function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let x = document;

function retrieveEmployeeInformation() {
  return x('input').value;
}

function addNewElementAsLi() {
  let input = retrieveEmployeeInformation();
  x('li').append(input);
}
