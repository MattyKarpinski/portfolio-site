import './Header.css';
import Logo from '../../assets/logo.svg';
import CV from '../../assets/Eng-CV-Mateusz-Karpinski.pdf';
import PrimaryButton from '../../features/primary-button/PrimaryButton';

const Header = () => {
  return (
    <section className='container'>
      <header>
        <img src={Logo} alt="Logo" />
        <nav>
          <ul className='header__list'>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#projects">Resume</a>
            </li>
            <li>
              <a href="#stack">Other</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <a href={CV} download = 'CV Mateusz Karpiński'>
          <PrimaryButton>Download CV</PrimaryButton>
        </a>
      </header>
    </section>
  )
}

export default Header