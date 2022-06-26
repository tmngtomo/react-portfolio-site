import CoverImage from '../images/cover-image.jpg';
import ProfileImage from '../images/profile-image.png';

export const Header = () =>{
  return (
    <header className="main-cover" style={{backgroundImage:`url(${CoverImage})`}}>
      <div className="overlay">
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            {/* カバー画像 */}
            <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
            <h1 className="title-text">Hashimoto　Tomomi</h1>
            <h3 className="title-text">Web Developer</h3>
            <ul className="social-icons">
              <li className="icon-link">
              </li>
              <li className="icon-link">

              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>




    </header>
  );
}
