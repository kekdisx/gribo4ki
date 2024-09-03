// Добавляем анимацию к разделам
const sections = document.querySelectorAll('section');
sections.forEach((section) => {
 section.classList.add('animate');
});

// Добавляем обработчик события к кнопке
const button = document.createElement('button');
button.textContent = 'Кликни меня!';
button.onclick = () => {
 alert('Вы кликнули кнопку!');
};
document.body.appendChild(button);

// Создаем уязвимость: хранение пароля в локальном хранилище
const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.placeholder = 'Введите пароль';
passwordInput.oninput = () => {
 localStorage.setItem('password', passwordInput.value);
};
document.body.appendChild(passwordInput);

// Создаем уязвимость: выполнение кода из строки
const codeInput = document.createElement('input');
codeInput.placeholder = 'Введите код';
codeInput.oninput = () => {
 eval(codeInput.value);
};
document.body.appendChild(codeInput);

// Создаем уязвимость: выполнение JavaScript из файла
const scriptInput = document.createElement('input');
scriptInput.type = 'file';
scriptInput.accept = '.js';
scriptInput.onchange = () => {
 const file = scriptInput.files[0];
 const reader = new FileReader();
 reader.onload = () => {
 eval(reader.result);
 };
 reader.readAsText(file);
};