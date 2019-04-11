    
'use strict';




.addEventListener('click', function() {
    document.querySelectorAll('#overlay > *').forEach(function(modal) {
      modal.classList.remove('show')
    })
    document.querySelector('#overlay').classList.add('show');
    document.querySelector('#myModal').classList.add('show');
  });


  function closeModal() {
    document.getElementById('overlay').classList.remove('show')
  }
  
  document.addEventListener('keyup', function(e) {
    if(e.keyCode === 27) {
      closeModal()
    }
  })

  document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal()
  }
})
