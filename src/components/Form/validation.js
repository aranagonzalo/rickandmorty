const validation = (userData) => {
  const errors = {};
  const regex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (!userData.email) {
    errors.email = "El email es requerido";
  } else if (!regex.test(userData.email)) {
    errors.email = "El email es inválido";
  } else if (!userData.password) {
    errors.password = "El password es requerido";
  }

  return errors;
};

export default validation;
