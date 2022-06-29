import React,{useState} from "react";
import './Login.css';
import axios from 'axios';
import {Link , useNavigate} from 'react-router-dom'

export default function Login(){
    const navigate = useNavigate();
    const [userId,setuserId]=useState("");
    const [userPw,setuserPw]=useState("");
    
    
    const goToMain= async()=>{
        axios({
            method:'post',
            url:'http://192.168.41.107:3000/auth/login',
            data:{
                userId:userId,
                userPw:userPw,
                }
            })
            .then(Response=>{
                                if(Response.data.success===true){
                                    navigate("/main")
                                }
                                else{
                                    alert("로그인실패");
                                }
                            })
        }

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
                    <a href="#" id="find">아이디찾기/비밀번호 찾기</a>
                    <hr id="hr"></hr>
                    <Link to="/signup"><button id="signup_l" type="button">회원가입</button><br/></Link>

                </form>
            </div>
    )
}
