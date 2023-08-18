export const validate = (input) => {
  let errors = {};

  if (!input.full_name) {
    errors.full_name = "El nombre es requerido.";
  } else if (!/^[A-Za-z\s]{0,30}$/.test(input.full_name)) {
    errors.full_name = "El nombre debe contener solo letras";
  }
  if(!input.email) {
    errors.email = "El email es requerido."
  } else if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(input.email)){
    errors.email = "Coloque un email válido."
  }
  if (!input.terms_and_conditions) {
    errors.terms_and_conditions = 'Debes aceptar los términos y condiciones';
  }

  if (!input.birth_date) {
    errors.birth_date = 'Debes seleccionar una fecha';
  }

  if (!input.country_of_origin) {
    errors.country_of_origin = 'Debes seleccionar un país de origen';
  }
  return errors;
};
