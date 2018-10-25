function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(e){
      e.preventDefault()
    })
}

preventRefreshOnSubmit()

const input = document.querySelector('input')
const retrieveEmployeeInformation = document.querySelector('input').value

function retrieveEmployeeInformation(){
  return input.value
}

function addNewElementAsLi(){

}
