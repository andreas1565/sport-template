const form = document.querySelector('.contactform');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  validate(event);
});

function validate(e) {
  const span = document.createElement('span');
  let errors = [];
  let succes = true;
  if (!/.*\S.*/g.test(e.target.name.value)) {
    succes = false;
    errors.push('Name is empty');
  }
  if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      e.target.email.value
    )
  ) {
    succes = false;
    errors.push('Invalid email');
  }
  if (!e.target.phone.value === '') {
    succes = false;
    errors.push('Telephone is empty');
  } else if (e.target.phone.value.length < 8) {
    succes = false;
    errors.push('Telephone number must be at least 8 numbers');
  } else if (e.target.phone.value.length > 8) {
    succes = false;
    errors.push('Telephone number can be a maximum of 8 numbers');
  }
  if (e.target.message.value === '') {
    succes = false;
    errors.push('Message is empty');
  }
  if (e.target.service) {
    if (e.target.service.value === '' || e.target.service.value == '0') {
      succes = false;
      errors.push('Choose a service');
    }
  }

  if (e.target.subtitle) {
    if (e.target.subtitle.value) {
      succes = false;
      errors.push('Subtitle is empty');
    }
  }
  if (errors.length !== 0) {
    errors.forEach((error) => {
      span.innerText = error;
      span.classList.add('error');
      form.appendChild(span);
    });
  } else if (succes === true) {
    const temperrors = document.querySelectorAll('.error');
    if (temperrors) {
      temperrors.forEach((error) => (error.innerText = ''));
    }
    form.reset();
    alert('sent');
  }
}
