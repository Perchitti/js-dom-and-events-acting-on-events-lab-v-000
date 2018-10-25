function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(e){
      e.preventDefault()
    })
}

preventRefreshOnSubmit()
