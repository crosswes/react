import '/src/styles/Header.css';
import '/src/assets/Logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="headerWrapper">
        <img className="logo" src="/src/assets/Logo.svg" alt="Logo"></img>
        <nav>
          <ul className="navigationList">
            <li className="navigationItem--orange">Product</li>
            <li>Customers</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </nav>
        <div className="buttonBox">
          <button className="sign-in-button">
            <span>Sign In</span>
          </button>
          <button className="sign-up-button">
            <span>Sign Up</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
