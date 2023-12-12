import '../utils/login.css';
import arxenaLogo from '../assets/arxena-logo.png';
import Sidebar from './Sidebar';
const Login = () => {
    return (

        <div className="login-sidebar-wrapper">
            <a className='logo-link' href="#">
                <img className='logo' src={arxenaLogo} alt="" />
            </a>
            <div className="login-page-container">
                <div className="login-form-container">
                    <div className="login-form">
                        <h2>Welcome Back  !</h2>
                        <form className='form'>
                            <div className="form-group">

                                <input className='input' type="text" id="username" name="username" placeholder="Enter your username" />
                            </div>

                            <div className="form-group">

                                <input className='input' type="password" id="password" name="password" placeholder="Enter your password" />
                            </div>

                            <div className="form-group">
                                <button className='submit-btn' type="submit">Login</button>
                            </div>
                            <div className="form-bottom">
                                <div className='forgot-password'>
                                    <p>Forgot password </p>
                                    <a href="/password-reset">Reset it here</a>
                                </div>
                                <div className='signup'>
                                    <p>Need a account?</p> <a href="/signup">Sign up for free
                                    </a>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>



            </div>
            <div className='sidebar-wrapper'>
                <Sidebar />
            </div>
        </div>

    );
};

export default Login;
