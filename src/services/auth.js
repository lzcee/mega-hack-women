export const isAuthenticated = () => localStorage.getItem("token") && localStorage.getItem("id") !== null;

export const getToken = () => localStorage.getItem("token");
export const getId = () => localStorage.getItem("id");

export const login = (token, id) => {
	localStorage.setItem("token", token);
	localStorage.setItem("id", id);
};

export const logout = () => {
	localStorage.removeItem("token");
	localStorage.removeItem("id");
};
