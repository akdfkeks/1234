import './Signup.css';
import React,{useState} from "react";
import axios from 'axios';
// import {Link , useNavigate} from 'react-router-dom'

export default function Signup(){
    // const navigate = useNavigate();
    const [userId,setuserId]=useState("");
    const [userPw,setuserPw]=useState("");
    const [name,setname]=useState("");

    const goToMains= async()=>{
        axios({
            method:'post',
            url:'http://192.168.41.107:3000/auth/signup',
            data:{
                name:name,
                userId:userId,
                userPw:userPw,
                }
            })
            .then(Response=>{console.log(Response)})}

    const onChangename=(e)=>{
        setname(e.target.value);
    };
    const onChangeid=(e)=>{
        setuserId(e.target.value);
    };
    const onChangepw=(e)=>{
        setuserPw(e.target.value);
    };
 

   
        return(
            <div className="page" >
                <div className="title">toodoo</div>
                <div className="logbox">
                    <input className="form" type="text" name="name" placeholder="이름을 입력해주세요." onChange={onChangename}></input><br/>
                    <input className="form" type="text" name="userId" placeholder="아이디를 입력해주세요." onChange={onChangeid}></input><br/>
                    <input className="form" type="password" name="userPw" placeholder="비밀번호를 입력해주세요." onChange={onChangepw}></input><br/>
                    {/* <input className="form" id="rep" type="password" name="password" placeholder="비밀번호를 한 번 더 입력해주세요." ></input><br/> */}
                    <p id="pc">비밀번호가 일치하지 않습니다.</p>
                    <button onClick={goToMains} id="signup" type="button">회원가입</button><br/>
                    <p id="ic">증복된 아이디입니다.</p>

                </div>
            </div>
        )
        
}


