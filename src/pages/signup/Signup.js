import './Signup.css';


function Signup(){

        return(
            <div className="page" >
                <div className="title">toodoo</div>
                <div className="logbox">
                    <input className="form" type="text" name="id" placeholder="이름을 입력해주세요."></input><br/>
                    <input className="form" type="text" name="id" placeholder="아이디를 입력해주세요."></input><br/>
                    <input className="form" type="password" name="password" placeholder="비밀번호를 입력해주세요."></input><br/>
                    <input className="form" id="rep" type="password" name="password" placeholder="비밀번호를 한 번 더 입력해주세요."></input><br/>
                    <p id="pc">비밀번호가 일치하지 않습니다.</p>
                    <button id="signup" type="text">회원가입</button><br/>
                    <p id="ic">증복된 아이디입니다.</p>

                </div>
            </div>
        )
    
}


export default Signup;