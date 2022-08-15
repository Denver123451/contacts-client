import { request } from './api.js';
import { renderContacts } from './render.js';

document.addEventListener('DOMContentLoaded', async () => {
  const contacts = await request();
  const form = document.querySelector('form');
  const inputName = document.querySelector('[name="name"]');
  const numberName = document.querySelector('[name="number"]');

  inputName.addEventListener('input', ({ target }) => {
    if (target.value.length < 4 || target.value.length > 20) {
      inputName.classList.add('invalid');
      inputName.closest('label').querySelector('span').innerText =
        'Имя должно быть больше 3 и меньше 20 знаков';
    } else {
      inputName.classList.remove('invalid');
      inputName.closest('label').querySelector('span').innerText = '';
    }
  });

  numberName.addEventListener('input', ({ target }) => {
    if (target.value.length < 12 || target.value.length > 20) {
      numberName.classList.add('invalid');
      numberName.closest('label').querySelector('span').innerText =
        'Имя должно быть больше 12 и меньше 20 знаков';
    } else {
      numberName.classList.remove('invalid');
      numberName.closest('label').querySelector('span').innerText = '';
    }
  });

  Object.values(contacts).forEach(renderContacts);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const body = new FormData(form);

    if (document.querySelector('.invalid')) {
      return;
    }

    try {
      const contact = await request('POST', body);
      renderContacts(contact);
      form.reset();
    } catch (err) {
      console.log(err);
    }
  });
});
