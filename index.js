function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let d = document;

function retrieveEmployeeInformation() {
  return d.querySelector('input').value;
}

function addNewElementAsLi() {
  let input = retrieveEmployeeInformation();
  return d.querySelector('li').append(input);
}
