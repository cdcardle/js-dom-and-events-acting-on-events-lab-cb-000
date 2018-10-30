function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input[name="name"]');
let ul = document.querySelector('.employee-list');

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
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener("click", () => {
    addNewElementAsLi();
    input.value = ''
  });
}

function clearEmployeeListOnLinkClick() {
  let button = document.querySelector('a');
  return a.addEventListener('click', () => {
    let lis = ul.getElementsByTagName('li');
    for (i = 0; i < lis.length; i++) {
      lis[i].remove();
    }
  });
}
