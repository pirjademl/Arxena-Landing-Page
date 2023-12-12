import '../utils/header.css';
import arxenaLogo from '../assets/arxena-logo.png';
import { useNavigate } from 'react-router-dom';
export default function Header() {
    const navigate = useNavigate();
    return (
        <div>
            <header>
                <nav className='top-navbar'>
                    <a href="">
                        <img className='brand-logo' src={arxenaLogo} alt="Arxena Logo" />
                    </a>
                    <div className="user-signup-login-section">
                        <button onClick={()=>navigate('/signup')}  className='btn sign-up'>Sign up</button>
                        <button onClick={()=>navigate('/login')} className='btn login'>Log  in</button>
                    </div>
                </nav>
            </header>

        </div>
    )
}
