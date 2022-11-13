const scriptURL = 'https://script.google.com/macros/s/AKfycbzRJKOX0p8HBhbcnCm-mkrfl0sx6n0YPwMIvAjuv8qu24xIVXNJaO10EwgWrMnZ125Iww/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent Successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
