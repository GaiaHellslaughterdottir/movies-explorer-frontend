export const messages = {
  authorizationErrorDefault: 'Ошибка авторизации',
  incorrectLoginOrPasswordError: 'Вы ввели неправильный логин или пароль.',
  authorizationError: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
  badTokenError: 'При авторизации произошла ошибка. Переданный токен некорректен.',
  profileEditErrorDefault: 'Ошибка редактирования профиля',
  duplicateEmailError: 'Пользователь с таким email уже существует.',
  profileEditError: 'При обновлении профиля произошла ошибка.',
  profileSaveSuccess: 'Профиль успешно сохранён',
  registrationErrorDefault: 'Ошибка регистрации',
  registrationError: 'При регистрации пользователя произошла ошибка.',
};

export const http_codes = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};
