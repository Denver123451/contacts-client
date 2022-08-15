export const list = document.querySelector('.contacts');

export const renderContacts = ({ name, number }) => {
  const li = document.createElement('li');
  li.classList.add('contact');

  li.innerHTML = `
    <h2 class='contact__title'>
      ${name}
    </h2>
    <a href='tel:${number}'>${number}</a>
    `;
  list.append(li);
};
