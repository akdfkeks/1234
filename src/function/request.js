import axios from "axios";

//const SERVER = "akdfkeks.iptime.org";
const SERVER = "172.16.17.124";
const PORT = 3001;

let accessToken = null;

const request = axios.create();
request.defaults.baseURL = `http://${SERVER}:${PORT}`;

export async function login(userId, userPw) {
	try {
		const res = await request({
			method: "POST",
			url: "/auth/login",
			data: {
				userId: userId,
				userPw: userPw,
			},
		});
		if (res.data.success === true) {
			accessToken = res.data.accessToken;
			request.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
			const user = res.data.user;
			return { flag: true, user };
		} else {
			throw new Error("Login failed");
		}
	} catch (err) {
		console.log(err);
		throw new Error("Error from request.js");
	}
}

export async function signup(name, userId, userPw) {
	try {
		const res = await request({
			method: "POST",
			url: "/auth/signup",
			data: { name: name, userId: userId, userPw: userPw },
		});
		if (res.data.success === true) {
			return true;
		} else {
			throw new Error("Signup failed");
		}
	} catch (err) {
		console.log(err);
		throw new Error("Error from request.js");
	}
}

export async function createBoard(boardTitle) {
	try {
		const res = await request({
			method: "POST",
			url: "/user/board",
			data: {
				boardTitle: boardTitle,
			},
		});
		if (res.data.success === true) {
			return res.data.data;
		} else throw new Error("Board creation failed");
	} catch (err) {
		console.log(err);
		throw new Error("Error from request.js");
	}
}
export async function getBoardList() {
	const res = await request({
		method: "GET",
		url: "/user/board",
	});
	if (res.data.success === true) {
		return res.data.data;
	}
}
