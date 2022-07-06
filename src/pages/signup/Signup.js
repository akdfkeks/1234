import "./Signup.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// from 'prop-types';

export default function Signup() {
	const homeAddr = "akdfkeks.iptime.org:3001";
	const navigate = useNavigate();
	const [userId, setuserId] = useState("");
	const [userPw, setuserPw] = useState("");
	const [name, setname] = useState("");
	const [userPwc, setuserPwc] = useState("");
	const [isActive, setisActive] = useState(false);
	const [isHide, setisHide] = useState(true);
	// const [disable,setdisable]=useState("");


	const goToMain = async () => {
		console.log(name, userId, userPw);
		if (isActive) {
			axios({
				method: "post",
				url: `http://${homeAddr}/auth/signup`,
				data: {
					name: name,
					userId: userId,
					userPw: userPw,
				},
			}).then((Response) => {
				if (Response.data.success) {
					navigate("/main");
				}
			});
		} else {
			console.log("회원가입 실패");
		}
	};

	const onChangename = (e) => {
		setname(e.target.value);
	};
	const onChangeid = (e) => {
		setuserId(e.target.value);
	};
	const onChangepw = (e) => {
		setuserPw(e.target.value);
	};
	const onChangepwc = (e) => {
		setuserPwc(e.target.value);
	};
	const checkValid = () => {
		if (userPw === userPwc) {
			setisActive(true);
			setisHide(true);
		} else {
			setisActive(false);
			setisHide(false);
		}
	};


	return (
		<div className="page">
			<div className="title">toodoo</div>
			<form className="logbox">
				<input className="form" type="text" name="name" placeholder="이름을 입력해주세요." onChange={onChangename}></input>
				<br />
				<input className="form" type="text" name="userId" placeholder="아이디를 입력해주세요." onChange={onChangeid}></input>
				<br />
				<input className="form" type="password" name="userPw" placeholder="비밀번호를 입력해주세요." onChange={onChangepw}></input>
				<br />
				<input
					className="form"
					id="rep"
					type="password"
					onKeyUp={checkValid}
					name="userPwc"
					placeholder="비밀번호를 한 번 더 입력해주세요."
					onChange={onChangepwc}
				></input>
				<br />
				<p className={isHide ? "hide" : "unhide"} id="pc">
					비밀번호가 일치하지 않습니다.
				</p>
				<button className={isActive ? "activebtn" : "unactivebtn"} id="signup" onClick={goToMain} type="button">
					회원가입
				</button>
				<br />
				<p id="ic">증복된 아이디입니다.</p>
			</form>
		</div>
	);
}
