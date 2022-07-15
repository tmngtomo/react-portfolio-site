import CoverImage from '../images/cover-image.jpg';
import ProfileImage from '../images/IMG_2725-4.png';
import { FaTwitter, FaGithub } from 'react-icons/fa';

export const Header = () =>{
  return (
    <header className="main-cover" style={{backgroundImage:`url(${CoverImage})`}}>
      <div className="overlay">
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            {/* カバー画像 */}
            <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
            <h1 className="title-text">HashimotoTomomi</h1>
            <h3 className="title-text">Front End Developer</h3>
            <ul className="social-icons">
              <li className="icon-link">
              <a href="https://twitter.com/">
                <FaTwitter color="white" size="2rem" />
              </a>
              </li>
              <li className="icon-link">
                <a href="https://github.com/">
                  <FaGithub color="white" size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>




    </header>
  );
}
