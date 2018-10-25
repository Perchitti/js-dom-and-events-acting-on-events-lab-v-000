function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(e){
      e.preventDefault()
    })
}

preventRefreshOnSubmit()

const input = document.querySelector('input')