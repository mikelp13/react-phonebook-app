const isLogin = (state) => state.auth.token;
const getUserName = (state) => state.auth.user.name;

export { isLogin, getUserName };
