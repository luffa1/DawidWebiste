import React from 'react';
import './dawidWebsite.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhoneSquareAlt, faEnvelope, faComments, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    return (
        <div>
            <header>
                <ul className="navbar">
                    <li><a href="#home" className="active">Home</a></li>
                    <li><a href="#about">O mnie</a></li>
                    <li><a href="#trening">Trening</a></li>
                    <li><a href="#dieta">Dieta</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#kontakt">Kontakt</a></li>
                </ul>
            </header>

            <section className="hero-banner" id="home">
                <div className="hero-text">
                    <h1>Trener i dietetyk Dawid Hoppel</h1><br/><br/><br/>
                    <p>“Strength does not come from physical capacity. It comes from an indomitable will.”</p><br/>
                    <p>~Mahatma Gandhi</p>
                </div>
            </section>

            <section id="trening">
                <div className="images-container">
                    <div className="image">
                        <a href="/Trainings/TrainingWeb.html">
                            <img src="images/hantle.jpg" alt=""/>
                        </a>
                        <div className="description">
                            <h2>Trening</h2>
                            <p>Odpowiedni plan treningowy to część sukcesu</p>
                        </div>
                    </div>

                    <div className="image">
                        <a href="/Diet/DietWeb.html">
                            <img src="/images/owoce.jpg" alt=""/>
                        </a>
                        <div className="description">
                            <h2>Dieta</h2>
                            <p>Dobrze dobrana dieta to podstawa!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="main">
                    <img src="/images/testoweZdjecie.jpg" alt=""/>
                    <div className="about-text">
                        <h2>O mnie</h2>
                        <h5>Trener i dietetyk</h5>
                        <p>Cześć jestem dietetykiem sportowym. Skończyłem studia na AWF w Poznaniu. 
                            Od 7 lat trenuje trójbój siłowy.</p>
                    </div>
                </div>
            </section>

            <section id="kontakt">
                <div className="blank">
                    <form action="https://formspree.io/f/mqkodpog" method="POST" id="my-form">
                        <h2>Kontakt</h2>
                        <div className="row">
                            <div className="input-group">
                                <input type="text" id="name" required />
                                <label for="name"><i class="fas fa-user"></i> Imię</label>
                            </div>
                            <div className="input-group">
                                <input type="number" id="number" required />
                                <label for="number"><i className="fas fa-phone-square-alt"></i> Numer telefonu</label>
                            </div>
                        </div>
                        <div className="input-group">
                            <input type="email" id="email" required />
                            <label for="email"><i className="fas fa-envelope"></i> Email</label>
                        </div>
                        <div className="input-group">
                            <textarea name="message" rows="8"></textarea>
                            <label for="message"><i className="fas fa-comments"></i> Wiadomość</label>
                        </div>

                        <button type="submit"><i className="fas fa-paper-plane"></i> Wyślij</button>
                    </form>
                </div>
                <div id="status"></div>
            </section>
        </div>
    )
}        
            const SocialMediaButtons = () => {
            return (
            <div className="wrapper">
                <div className="button">
                    <div className="icon">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </div>
                    <span>Facebook</span>
                </div>

                <div className="button">
                    <div className="icon">
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                    <span>Twitter</span>
                </div>

                <div className="button">
                    <div className="icon">
                        <a href="https://www.instagram.com/dawidhoppel/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                    <span>Instagram</span>
                </div>

                <div className="button">
                    <div className="icon">
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                    <span>YouTube</span>
                </div>
            </div>
    );
};

export default SocialMediaButtons;
