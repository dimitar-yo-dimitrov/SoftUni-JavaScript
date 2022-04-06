export const settings = {
  host: '',
};

async function request(url, options) {
  try {
    const response = await fetch(url, options);

    if (response.ok != true) {
      if (response.status == 403) {
        sessionStorage.clear();
      }

      const error = await response.json();
      throw new Error(error.message);
    }

    if (response.status == 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (error) {
    alert(error.message)
    throw error;
  }
}

function getOptions(method = 'get', data) {
  const options = {
    method,
    headers: {},
  };

  const token = sessionStorage.getItem('authToken');

  if (token) {
    options.headers['X-Authorization'] = token;
  }

  if (data) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  return options;
}

export async function get(url) {
  return request(url, getOptions());
}

export async function post(url, data) {
  return request(url, getOptions('post', data));
}

export async function put(url, data) {
  return request(url, getOptions('put', data));
}

export async function del(url) {
  return request(url, getOptions('delete'));
}

export async function login(email, password) {
  const result = await post(settings.host + '/users/login', { email, password });

  sessionStorage.setItem('email', result.email);
  sessionStorage.setItem('authToken', result.accessToken);
  sessionStorage.setItem('userId', result._id);

  return result;
}

export async function register(email, password) {
  const result = await post(settings.host + '/users/register', { email, password });

  sessionStorage.setItem('email', result.email);
  sessionStorage.setItem('authToken', result.accessToken);
  sessionStorage.setItem('userId', result._id);

  return result;
}

export function logout() {
  const result = get(settings.host + '/users/logout');

  sessionStorage.removeItem('email');
  sessionStorage.removeItem('authToken');
  sessionStorage.removeItem('userId');

  return result;
}