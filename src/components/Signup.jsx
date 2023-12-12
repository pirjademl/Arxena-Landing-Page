import Sidebar from "./Sidebar";
import '../utils/signup.css';
import arxenaLogo from '../assets/arxena-logo.png';
import CountryCodeSelector from './CountryCodeSelector';

export default function Signup() {
  return (
    <div className="signup-sidebar-wrapper">
      <a className="logo-link" href="">
        <img className="logo" src={arxenaLogo} alt="" />
      </a>
      <div className="signup-page-container">
        <div className="signup-form-container">
          <div className="signup-form">
            <p>Get started with 10 free org-chart credits.
              No credit card is needed.</p>
            <form className='main-form'>
              <div className="form-group">
                <input className='input' type="text" id="fullName" name="fullName" placeholder="Enter your full name" />
              </div>

              <div className="form-group mobile-no-country-code">
                <CountryCodeSelector />
                <input className='input' type="text" id="mobileNumber" name="mobileNumber" placeholder="Enter your mobile number with country code" />
              </div>

              <div className="form-group">
                <input className='input' type="email" id="email" name="email" placeholder="Enter your  business email" />
              </div>
              <div className="form-group">
                <input className='input' type="password" id="password" name="password" placeholder="Enter your password" />
              </div>

              <div className="form-group">
                <select className='dropdown' id="workFor" name="workFor">
                  <option value="" disabled selected>Select where you work</option>
                  <option value="recruitmentAgency">Recruitment Agency</option>
                  <option value="corporate">Corporate</option>
                </select>
              </div>

              <div className="form-group">
                <button className='submit-btn' type="submit">Create a Account</button>
              </div>

              <div className="form-bottom">
                <div className='signup'>
                  <p>Already have an account?</p> <a href="/login">Log in</a>
                </div>
                <div className='terms'>
                  <p><span>Account lock:</span> We discourage licence sharing. Your account will be accessible from this device only</p>
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
}
