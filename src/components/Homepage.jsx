import arxenaLogo from '../assets/arxena-logo.png';
import poweredByChatgpt from '../assets/powered_by_gpt4.png';
import '../utils/homepage.css';
import Footer from './Footer';
import Header from './Header';
export default function Homepage() {
    return (
        <div>
            <Header />
            <div className="search-organization-container">
                <div className="search-organization-wrapper">
                    <div className='organization-logo'>
                        <a href="">
                            <img src={arxenaLogo} alt="" />
                        </a>
                    </div>
                    <div className='search-field-wrapper'>
                        <input className='search-field' type="search" name="" placeholder='🔍 Search any compnay org chart' id="" />

                    </div>

                    <div className='gpt4-wrapper'>
                        <img className='gpt-4' src={poweredByChatgpt} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}
