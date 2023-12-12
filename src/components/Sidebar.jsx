import helperImgae from '../assets/mannan_pacha_dp.webp';
import '../utils/sidebar.css';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
export default function Sidebar() {
    return (
        <div>
            <div className="sidebar">
                <div className="helper-info">
                    <img src={helperImgae} alt="" />
                    <img src="person-photo.jpg" alt="" />

                </div>

                <div className="main-content">
                    <div className="blockquote-container">
                        <p>
                            Arxena helps me map with large F100 accounts saving me hours of manual work for resourcing projects.
                        </p>
                    </div>
                </div>
                <div className='helper-details'>
                    <div className='name-and-desg'>
                        <h3>Mannan Pacha</h3>
                        <p> Manager - Ernst & Young</p>
                    </div>
                </div>
                <div className='contact-info'>
                    <p>Connect with me on</p>
                    <div className='icons'>
                        <a href="#linkedin">
                            <LinkedinIcon size={30} round={true} />
                        </a>
                        <a href="#facebook">
                            <FacebookIcon size={30} round={true} />
                        </a>
                        <a href="twitter">
                            <TwitterIcon size={30} round={true} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
