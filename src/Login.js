import {useRef, useState, useEffect, useContext} from 'react';
import './index.css'
import AuthContext from "./context/AuthProvider";
import {sendApiPostRequest} from "./ApiRequest";
import {Link,  useNavigate} from "react-router-dom";


const Login = () => {
    const navigate = useNavigate()
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState("Shai123");
    const [password, setPwd] = useState('Shai123!');
    const [userId, setId] = useState(null);
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])


    const handleSubmit = (e) => {


        e.preventDefault();
        try {
            sendApiPostRequest("http://localhost:8989/sign-in", {
                    username: username,
                    password: password
                }, (response) => {
                    const userToSingIn = response.data;
                if (response.data.errorCode===1){
                    setErrMsg("USERNAME DIDNT FOUND")
                }else if(response.data.errorCode===2){
                    setErrMsg("PASSWORD OR USERNAME INCORRECT")
                }
                    setAuth(username, password, userId);
                    setUsername(userToSingIn.user.username)
                    setSuccess(userToSingIn.success)


                    if (response.data.success) {
                        navigate("/logged");
                    } else {
                        navigate("/")
                    }
                }
            );
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50vh',
            marginTop: '200px',

        }}>

            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Sign In</h1>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={password}
                        required
                    />
                    <button onClick={handleSubmit}>Sign In</button>
                </form>
                <p>
                    Dont Have Account?<br/>
                    <span className="line">
                            <Link to="/register">Sign Up</Link>
                        </span>
                </p>
            </section>

        </div>

    )
}

export default Login