import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../function/request";


export default function Login() {
	const navigate = useNavigate();
	const [userId, setuserId] = useState("");
	const [userPw, setuserPw] = useState("");

	const loginButtonListener = async ({navigation:{navigate}}) => {
		try {
			const {flag,user} = await login(userId, userPw);
			if (flag === true) {

				//user키에 user데이터 전송 이름 같을 경우 user:생략가능
				navigate("/main",{user:user});
			}
		} catch (err) {
			console.log(err);
			alert("Login failed");
		}
	};
	const onChangeid = (e) => {
		setuserId(e.target.value);
	};
	const onChangepw = (e) => {
		setuserPw(e.target.value);
	};

	return (
		<div className="page">
			<div className="title">toodoo</div>
			<form className="logbox_l">
				<input
					className="form_l"
					name="userId"
					id="id"
					type="text"
					placeholder="아이디를 입력해주세요."
					onChange={onChangeid}
				></input>
				<br />
				<input
					className="form_l"
					name="userPw"
					id="pw"
					type="password"
					placeholder="비밀번호를 입력해주세요."
					onChange={onChangepw}
				></input>
				<br />
				<button onClick={loginButtonListener} id="login_l" type="button">
					로그인
				</button>
				<br />
				<a href="#" id="find">
					아이디찾기/비밀번호 찾기
				</a>
				<hr id="hr"></hr>
				<Link to="/signup">
					<button id="signup_l" type="button">
						회원가입
					</button>
					<br />
				</Link>
			</form>
		</div>
	);
}
