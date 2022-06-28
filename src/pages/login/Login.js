import React,{useState} from "react";
import './Login.css';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function Login(){
     
    const [userId,setuserId]=useState("");
    const [userPw,setuserPw]=useState("");
    
    
    const goToMain= async()=>{
        axios({
            method:'post',
            url:'http://192.168.1.254:3001/auth/login',
            data:{
                userId:userId,
                userPw:userPw,
            }})
            .then(Response=>{console.log(Response.data);})}
    const onChangeid=(e)=>{
        setuserId(e.target.value);
    };
    const onChangepw=(e)=>{
        setuserPw(e.target.value);
    };
   

            
              
    return(
        
            <div className="page" >
                <div className="title">toodoo</div>
                <form className="logbox_l">
                    <input 
                        className="form_l" 
                        name="userId"
                        id="id" type="text" 
                        placeholder="아이디를 입력해주세요."
                        onChange={onChangeid} 
                        ></input><br/>
                    <input 
                        className="form_l" 
                        name="userPw"
                        id="pw" type="password"      
                        placeholder="비밀번호를 입력해주세요."
                        onChange={onChangepw}
                    ></input><br/>
                    <button onClick={goToMain} id="login_l" type="button">로그인</button><br/>
                    <Link to='/main'>메인으로!</Link>
                    <a href="#" id="find">아이디찾기/비밀번호 찾기</a>
                    <hr id="hr"></hr>
                    <button id="signup_l" type="text" >회원가입</button><br/>

                </form>
            </div>
    )
}
