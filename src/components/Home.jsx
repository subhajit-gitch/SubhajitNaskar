import '../css/Home.css';
import CV from '../image/Subhajit-Naskar-CV.pdf';
import ProfilePic from '../image/ProfilePic.png'//image
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Home() {
    const [data] = useTypewriter({
        words: ["Web Desiger", "Web Developer", "Cinematographer"],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className="home-container">
            <div className="text-section">
                <h1>Hi, I'm <span className="highlight">Subhajit</span></h1>
                <h2>{data} <Cursor /></h2>

                <a href={CV} download="Subhajit-Naskar-CV.pdf">
                    <button className="downloadCV-button">Download CV</button>
                </a>
            </div>
            <div className="image-section">
                <div className="hexagon">
                    <img src={ProfilePic} alt="ProfilePic" />
                </div>
            </div>
        </div>
    );
};
