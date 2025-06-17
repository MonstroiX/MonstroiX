document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Отмена отправки формы

  const form = event.target;

  // Получаем поля и сообщения об ошибках
  const nameInput = form.name;
  const emailInput = form.email;
  const passwordInput = form.password;

  const nameError = nameInput.nextElementSibling;
  const emailError = emailInput.nextElementSibling;
  const passwordError = passwordInput.nextElementSibling;

  // Очистка ошибок
  [nameInput, emailInput, passwordInput].forEach(input => {
    input.classList.remove('error');
  });
  [nameError, emailError, passwordError].forEach(el => {
    el.textContent = '';
  });

  let valid = true;

  // Проверка имени: минимум 2 символа
  if (nameInput.value.trim().length < 2) {
    nameInput.classList.add('error');
    nameError.textContent = 'Имя должно быть минимум 2 символа';
    valid = false;
  }

  // Проверка email (простейшая)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailInput.classList.add('error');
    emailError.textContent = 'Введите корректный email';
    valid = false;
  }

  // Проверка пароля: минимум 8 символов, цифра и спецсимвол
  const password = passwordInput.value;
  const digitPattern = /\d/;
  const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

  if (password.length < 8) {
    passwordInput.classList.add('error');
    passwordError.textContent = 'Пароль должен быть не менее 8 символов';
    valid = false;
  } else if (!digitPattern.test(password)) {
    passwordInput.classList.add('error');
    passwordError.textContent = 'Пароль должен содержать цифру';
    valid = false;
  } else if (!specialCharPattern.test(password)) {
    passwordInput.classList.add('error');
    passwordError.textContent = 'Пароль должен содержать спецсимвол';
    valid = false;
  }

  if (valid) {
    alert('Форма успешно отправлена!');
    form.reset();
  }
});
