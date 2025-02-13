import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Create this CSS file for styling

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            {/* Page 1: Hero Section */}
            <div className="page hero-section">
                <div className="hero-content d-flex flex-col">
                    <h1 className="hero-title">Enter the Epic Battle of Mahabharata</h1>
                    <p className="hero-subtitle">Choose your side and rewrite history!</p>
                    <button className="play-button" onClick={() => navigate("/play")}>
                        🏆 Play Now 🏆
                    </button>
                </div>
            </div>

            {/* Page 2: Warriors Section */}
            <div className="page warriors-section">
                <div className="warriors-grid">
                    <div className="warrior-card">
                        <img src="Krisna.jpg" alt="Krishna" className="warrior-image" />
                        <h3>Shree Krishna</h3>
                        <p>The divine charioteer, philosopher, and embodiment of love and wisdom. His teachings in the Bhagavad Gita illuminate the path of righteousness and devotion.</p>
                    </div>
                    <div className="warrior-card">
                        <img src="Arjuna.jpg" alt="Arjuna" className="warrior-image" />
                        <h3>Arjun</h3>
                        <p>Arjuna, the greatest archer of the Mahabharata, was a master of archery and warfare, blessed with divine weapons and unparalleled skill. Trained by Guru Dronacharya and guided by Lord Krishna✨</p>

                    </div>
                    <div className="warrior-card">
                        <img src="Bhishma.jpg" alt="Bhishma" className="warrior-image" />
                        <h3>Bhishma</h3>
                        <p>Bhishma, the invincible warrior and the pillar of the Kuru dynasty, was unmatched in strength, wisdom, and loyalty. Bound by his vow of celibacy and unwavering devotion to duty.</p>
                    </div>
                    <div className="warrior-card">
                        <img src="Karna.jpg" alt="Karna" className="warrior-image" />
                        <h3>Karna</h3>
                        <p>Karna: The unsung hero, unmatched in generosity, loyalty, and skill. A true warrior of the Mahabharata.🏹</p>
                    </div>
                </div>
            </div>

            {/* Page 3: War Scene Section */}
            <div className="page war-scene-section d-flex flex-col">
                <h2 className="section-title">The Great War of Kurukshetra</h2>
                <div className="war-scene-content d-flex flex-col">
                    <p>
                        Witness the epic battle between the Pandavas and Kauravas. Choose your side, strategize, and lead your army to victory!
                    </p>
                    <button className="cta-button" onClick={() => navigate("/play")}>
                        🎮 Join the Battle Now 🎮
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;