
  let greenButton = document.getElementById('goButton')
  let goLight = document.getElementById('goLight')

  let slowButton = document.getElementById('slowButton')
  let slowLight = document.getElementById('slowLight')

  let stopButton = document.getElementById('stopButton')
  let stopLight = document.getElementById('stopLight')

  greenButton.addEventListener('click', function() {
    goLight.style.backgroundColor='green'
    slowLight.style.backgroundColor=''
    stopLight.style.backgroundColor=''
  })

 

  slowButton.addEventListener('click', function() {
    slowLight.style.backgroundColor='orange'
    goLight.style.backgroundColor=''
    stopLight.style.backgroundColor=''
  })



  stopButton.addEventListener('click', function() {
    stopLight.style.backgroundColor='red'
    goLight.style.backgroundColor=''
    slowLight.style.backgroundColor=''

  })




