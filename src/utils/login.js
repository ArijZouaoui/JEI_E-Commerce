exports.login = (response) => {
  console.log(response);

  if (response) {
    return { admin: response.data.admin };
  }
};
