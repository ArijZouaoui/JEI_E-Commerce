let User = { admin: 0, username: "", userId: "" };

exports.setUser = (user) => {
  User = user;
};
exports.getUser = () => {
  return User;
};
