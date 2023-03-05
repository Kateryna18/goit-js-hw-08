// Напиши скрипт, який буде зберігати значення полів 
// у локальне сховище, коли користувач щось друкує.

// 1. Відстежуй на формі подію input, і щоразу записуй 
// у локальне сховище об'єкт з полями email і message, 
// у яких зберігай поточні значення полів форми. 
// Нехай ключем для сховища буде рядок "feedback-form-state".
// 
// 2.Під час завантаження сторінки перевіряй стан сховища, 
// і якщо там є збережені дані, заповнюй ними поля форми. 
// В іншому випадку поля повинні бути порожніми.
// 
// 3.Під час сабміту форми очищуй сховище і поля форми, 
// а також виводь у консоль об'єкт з полями email, 
// message та їхніми поточними значеннями.
// 
// 4.Зроби так, щоб сховище оновлювалось не частіше, 
// ніж раз на 500 мілісекунд. Для цього додай до проекту 
// і використовуй бібліотеку lodash.throttle.
import throttle from 'lodash.throttle';

const updateLocalStorageThrottled = throttle(updateLocalStorage, 500);


const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');


emailInput.addEventListener('input', updateLocalStorageThrottled);
messageInput.addEventListener('input', updateLocalStorageThrottled);

const feedbackForm = localStorage.getItem('feedback-form-state');
if (feedbackForm) {
emailInput.value = feedbackForm.email;
messageInput.value = feedbackForm.message;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const feedbackForm = {
    email: emailInput.value,
    message: messageInput.value
    };

    localStorage.removeItem('feedback-form-state');

    emailInput.value = '';
    messageInput.value = '';

    console.log(feedbackForm);
});

function updateLocalStorage() {
    const feedbackForm = {
    email: emailInput.value,
    message: messageInput.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm));
    }