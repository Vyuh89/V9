import React from 'react';
import "../App.css";

const Learn = () => {
  return (
    <div className="learn-page">
      <h1 className="learn-heading">Learn Game</h1>

      {/* Video Section - Moved Above */}
      <div className="video-section">
        <h2 className="section-title">Watch the Vyuh Tutorial</h2>
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="LearnM.mp4" 
            title="Vyuh Game Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      {/* Article Section */}
      <div className="article-section">
        <h2 className="section-title">Understanding Vyuh</h2>
        <div className="article-box">
          <p className="article-text">
            Vyuh is an exciting game that combines strategy, planning, intelligence & photographic memory of brain.
            In this article, we will explore the origins of the game, its rules, and how you can master it.
            Vyuh is easy to learn but requires skill to master. Whether you are a beginner or an expert,
            this game is perfect for everyone.
          </p>
          <p className="article-text">
            Vyuh is a game based on the ancient concept of Chakravyuha (चक्रव्यूह), offering an exciting mix of strategy and planning.
            It is considered a test of intelligence, but despite its complexity, Vyuh is easy to learn and can be enjoyed by players 
            of all skill levels. The game is played on a 3x3 square board with 24 positions and 18 dice. The main goal of Vyuh is
            to form "tricks." Once a player forms a trick, they take one of their opponent's dice. The first player to collect 9 dices wins,
            and the game ends.
          </p>

          <h3 className="rules-heading">Game Rules:</h3>
          <div className="rules-box">
            <div className="rule-item">🐎 Only 2 players can play at a time🐎</div>
            <div className="rule-item">🎲 Each player gets 9-9 dice to start the game 🎲</div>
            <div className="rule-item">🏌️‍♂️ Players take turns placing dice one by one on the board 🏌️‍♂️</div>
            <div className="rule-item">Once you've placed your dice on an empty square, you can only move it if the next square is also empty.</div>
            <div className="rule-item">🟨🟨🟨 The objective is to create a trick (align 3 dice of the same color in a row) 🟩🟩🟩</div>
            <div className="rule-item">👉When this (🟨🟨🟨 / 🟩🟩🟩) trick is formed, the player takes one of their opponent's dice and earns a point👈</div>
            <div className="rule-item">⚔ The opponent has no way to break the trick ⚔</div>
            <div className="rule-item">⛳Players can form or remove only their own tricks while playing, as long as the following blocks are empty⛳</div>
            <div className="rule-item">🏆The player who collects the 9 dices becomes the WINNER🏆</div>
          </div>

          {/* Hindi Rules Section */}
          <div className="rules-box">
            <div className="rule-item">-------------------------------------📚Game Rules: हिंदी🥇  📚--------------------------------------</div>
            <div className="rule-item">🐎 केवल 2 खिलाड़ी एक समय में खेल सकते हैं🐎</div>
            <div className="rule-item">🎲 प्रत्येक खिलाड़ी को खेल शुरू करने के लिए 9-9 dice मिलते हैं 🎲</div>
            <div className="rule-item">🏌️‍♂️ खिलाड़ी बारी-बारी से बोर्ड पर एक-एक करके dice रखते हैं 🏌️‍♂️</div>
            <div className="rule-item">एक बार जब आपने खाली स्क्वायर पर अपना dice रख दिया, तो आप इसे तभी हिला सकते हैं जब अगला स्क्वायर भी खाली हो।</div>
            <div className="rule-item">🟨🟨🟨 लक्ष्य एक ट्रिक बनाना है (एक पंक्ति में एक ही रंग के 3 dice रखना 🟩🟩🟩</div>
            <div className="rule-item">👉जब यह (🟨🟨🟨 / 🟩🟩🟩) ट्रिक बनती है, तो खिलाड़ी अपने प्रतिकूल के किसी एक dice को ले लेता है और एक अंक कमाता है👈</div>
            <div className="rule-item">⚔ बनी हुई ट्रिक को कोई भी नहीं तोड़ सकता ⚔</div>
            <div className="rule-item">⛳खिलाड़ी खेलते समय केवल अपनी खुद की ट्रिक्स बना या हटा सकते हैं, जब तक कि निम्नलिखित ब्लॉक खाली हों⛳</div>
            <div className="rule-item">🏆जो खिलाड़ी 9 dice इकट्ठा करता है वह विजेता बनता है🏆</div>
          </div>

          <p className="article-text closing">
            "Your exceptional participation in this game reflects your intelligence and sharp mind! Keep honing your skills and stay sharp!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learn;
