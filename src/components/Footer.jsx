import '../utils/footer.css';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
export default function Footer() {

    return (
        <div>
            <footer className="main-footer">
                <div className="footer-wrapper">
                    <div className="col-1">
                        <p className="org-footer-heading">
                            OrgGPT - Talent Identification Software for Ambitious Companies
                        </p>
                        <div className="org-footer-links">
                            <a href="">pricing</a>
                            <a href="">Terms of service</a>
                            <a href="">Privacy Policy</a>
                            <a href="">How to use</a>
                            <a href="">Download Extension</a>
                        </div>
                    </div>
                    <div className="col-2">
                        <a href="#LinkedinURl">
                            <LinkedinIcon size={24} />

                        </a>

                        <a href="#twitterurl">
                            <TwitterIcon size={24} />

                        </a>

                        <a href="#facebook">
                            <FacebookIcon size={24} />

                        </a>
                    </div>
                </div>

            </footer>
        </div>
    )
}
