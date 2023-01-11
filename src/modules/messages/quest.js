const getInfoGuest = (data) => {
  const { id, first_name, text } = data;
  const username = data.username || "не задано";

  return `У нас гости!
	id: ${id}
	имя: ${first_name}
	username: ${username}
	текст: ${text}`;
};
export default getInfoGuest;
