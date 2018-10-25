function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(e){
      e.preventDefault()
    })
}

preventRefreshOnSubmit()

const input = document.querySelector('input')
let submit = document.querySelector('.clear')

function retrieveEmployeeInformation(){
  return input.value
}

function addNewElementAsLi(){

}

function addNewLiOnClick(){

}

function clearEmployeeListOnLinkClick(){
  submit.clear()
}
