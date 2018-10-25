function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(e){
      e.preventDefault()
    })
}

preventRefreshOnSubmit()

const input = document.querySelector('input')

function retrieveEmployeeInformation(){
  return input.value
}

function addNewLiOnClick(e){
    if(input.value === ''){
        alert('Add a task')
    }

    //Create li element
    const li = document.createElement('li')
    //add a class
    li.className = 'collection-item'
    //Create text node and append to li
    li.appendChild(document.createTextNode(input.value))
    // Create new link element
    const link = document.createElement('a')
    // Add class
    link.className = 'delete-item secondary-content'
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    //Append like to li
    li.appendChild(link)

    //Append li to ul
    taskList.appendChild(li)

    //Store in local storage
    storeTaskInLocalStorage(input.value);

    //clear input
    input.value = ''



e.preventDefault()
}
