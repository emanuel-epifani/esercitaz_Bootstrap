let modal  = document.getElementById('exampleModal');
modal.addEventListener('show.bs.modal', function (event) {
    let button = event.relatedTarget;

    let email = button.dataset.recipient;
    let message = button.dataset.message;

    modal.querySelector('.modal-title').textContent = 'New message to ' + email;
    modal.querySelector('.modal-body input').value = email;
    modal.querySelector('.modal-body textarea').value = message;
});

let modal  = $('#exampleModal');
modal.on('show.bs.modal', function (event) {
    let button = event.relatedTarget;

    let email = $(button).data('recipient');
    let message = $(button).data('message');

    modal.find('.modal-title').text('New message to ' + email);
    modal.find('.modal-body input').val(email);
    modal.find('.modal-body textarea').val(message);
});

/*
var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'New message to ' + recipient
  modalBodyInput.value = recipient
})
*/