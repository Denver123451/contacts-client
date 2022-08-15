const hostname = 'https://contacts-api-learn.herokuapp.com/api/contacts';

export const request = async (method = 'GET', body = null) => {
  const data = await fetch(`${hostname}`, {
    method,
    body,
  });
  const resoult = await data.json();

  if (!data.ok) {
    throw new Error(resoult.info);
  }

  return resoult;
};
