import React, { useState } from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

const Play = () => {
  const navigate = useNavigate();

  // State to manage the modal visibility for Vyuh
  const [showVyuhModal, setShowVyuhModal] = useState(false);
  const [selectedVyuhRole, setSelectedVyuhRole] = useState(''); // To store the Vyuh selected role

  // State to manage the modal visibility for ColdWar
  const [showColdWarModal, setShowColdWarModal] = useState(false);
  const [selectedColdWarRole, setSelectedColdWarRole] = useState(''); // To store the ColdWar selected role

  const handleMahabharatClick = () => {
    setShowVyuhModal(true); // Show the Vyuh role selection modal
  };

  const handleModalOverlayClick = (e) => {
    if (!e.target.closest(".modal-box")) {
      setShowVyuhModal(false);
      setShowColdWarModal(false);
    }
  };

  const handleSuperPowerClick = () => {
    setShowColdWarModal(true); // Show the ColdWar role selection modal
  };

  const handleVyuhRoleSelect = (role) => {
    setSelectedVyuhRole(role); // Set the selected Vyuh role
    navigate('/board', { state: { role } }); // Navigate to board with the Vyuh role
  };

  const handleColdWarRoleSelect = (role) => {
    setSelectedColdWarRole(role); // Set the selected ColdWar role
    navigate('/bond', { state: { role } }); // Navigate to bond with the ColdWar role
  };

  return (
    <div className="play-container">
      <button className="play-button" onClick={handleMahabharatClick}>
        🎲 व्यूह (Vyuh) 🎲
      </button>
      <button className="play-button" onClick={handleSuperPowerClick}>
        🏆 Cold War 🏆
      </button>
      <button className="play-button" onClick={() => window.location.href = "https://youtu.be/0_ExuB2Oj7s"}>
        🏆 How to Play 🎮
      </button>
      {/* Vyuh Role Selection Modal */}
      {showVyuhModal && (
        <div className="modal-overlay" onClick={handleModalOverlayClick}>
          <div className="modal-box">
            <h2>Choose Your Role</h2>

            {/* Pandav Section */}
            <button onClick={() => handleVyuhRoleSelect('Pandav')} className="role-button">
              पांडव 🛡️
            </button>
            <div className="role-names">
              <p style={{ color: 'yellow', fontWeight: 'bold', marginBottom: '10px' }}>
                आपके 9 योद्धा ये हैं:
              </p>
              <small>
                <span>👑 युधिष्ठिर</span>, <span>🏹 अर्जुन</span>, <span>💪 भीम</span>, <span>⚔️ नकुल</span>, <span>🛡️ सहदेव</span>, <span>🔥 अभिमन्यु</span>, <span>🎯 धृष्टद्युम्न</span>, <span>🪓 सत्यकी</span>, <span>👹 घटोत्कच</span>
              </small>
            </div>
            <hr className="role-separator" />

            {/* Kaurav Section */}
            <button onClick={() => handleVyuhRoleSelect('Kaurav')} className="role-button">
              कौरव ⚔️
            </button>
            <div className="role-names">
              <p style={{ color: 'yellow', fontWeight: 'bold', marginBottom: '10px' }}>
                आपके 9 योद्धा ये हैं:
              </p>
              <small>
                <span>🛡️ भीष्म</span>, <span>🎓 द्रोणाचार्य</span>, <span>🔥 कर्ण</span>, <span>🥶 अश्वत्थामा</span>, <span>🗡 कृपाचार्य</span>, <span>🔪 कृतवर्मा</span>, <span>🎭 दुर्योधन</span>, <span>🥻 दुशासन</span>, <span>🎃 युयुत्सु</span>
              </small>
            </div>
          </div>
        </div>
      )}

      {/* ColdWar Role Selection Modal */}
      {showColdWarModal && (
        <div className="modal-overlay" onClick={handleModalOverlayClick}>
          <div className="modal-box">
            <h2>Choose Your Group</h2>
            {/* Eastern Allies Section */}
            <button onClick={() => handleColdWarRoleSelect('Eastern Allies')} className="role-button">
              Eastern Allies🌍
            </button>
            <div className="role-names">
              <p style={{ color: 'yellow', fontWeight: 'bold', marginBottom: '10px' }}>
                Your nine countries are this:
              </p>
              <small>
                🇷🇺 RUSSIA, 🇨🇳 CHINA, 🇮🇳 INDIA, 🇷🇴 ROMANIA, 🇵🇱 POLAND, 🇭🇺 HUNGARY, 🇰🇵 NORTH KOREA, 🇮🇩 INDONESIA, 🇪🇬 EGYPT
              </small>
            </div>
            <hr className="role-separator" />
            {/* Western Allies Section */}
            <button onClick={() => handleColdWarRoleSelect('Western Allies')} className="role-button">
              Western Allies🛡️
            </button>
            <div className="role-names">
              <p style={{ color: 'yellow', fontWeight: 'bold', marginBottom: '10px' }}>
                Your nine countries are this:
              </p>
              <small>
                🇺🇸 UNITED STATES, 🇨🇦 CANADA, 🇫🇷 FRANCE, 🇬🇧 UNITED KINGDOM, 🇩🇪 GERMANY, 🇮🇹 ITALY, 🇦🇺 AUSTRALIA, 🇰🇷 SOUTH KOREA, 🇯🇵 JAPAN
              </small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Play;
