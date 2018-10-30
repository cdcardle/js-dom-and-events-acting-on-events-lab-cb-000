function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let $ = document.querySelector;

function retrieveEmployeeInformation() {
  return $('input').value;
}

function addNewElementAsLi() {
  let input = retrieveEmployeeInformation();
  $('li').append(input);
}
