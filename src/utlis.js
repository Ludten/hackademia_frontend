const getToken = () => { 
  const token = localStorage.getItem('token');
  return token ? token : null;
}

const isLoggedIn = () => {
  const token = getToken();
  return token !== null && token !== undefined;
}

export {
  getToken,
  isLoggedIn,
}
