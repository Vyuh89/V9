import React, { useState, useEffect } from "react";
import "../App.css";
import PlayerCount from "./PlayerCount";
import DharmaCount from "./DharmaCount";

const Dharma = () => { 
  const totalButtons = 32;
  const [buttons, setButtons] = useState(Array(totalButtons).fill({ symbol: null, color: "white", name: null }));
  const [kingCount, setKingCount] = useState(0);
  const [queenCount, setQueenCount] = useState(0);
  const [isKingTurn, setIsKingTurn] = useState(() => Math.random() < 0.5);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [goldenLines, setGoldenLines] = useState([]);
  const [pinkLines, setPinkLines] = useState([]);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [removeButtonPosition, setRemoveButtonPosition] = useState({ top: 0, left: 0 });
  const [removeButtonIndex, setRemoveButtonIndex] = useState(null);
  const [kingRemovals, setKingRemovals] = useState(0);
  const [queenRemovals, setQueenRemovals] = useState(0);
  const [kingRemovalCount, setKingRemovalCount] = useState(0);
  const [queenRemovalCount, setQueenRemovalCount] = useState(0);
  const [kingTime, setKingTime] = useState(0);
  const [queenTime, setQueenTime] = useState(0);
  const [winner, setWinner] = useState(null);

  // Inside the Board component
  const [kingLeftDices, setKingLeftDices] = useState(12); // Initial dice count for King
  const [queenLeftDices, setQueenLeftDices] = useState(12); // Initial dice count for Queen
  const [removedPandavNames, setRemovedPandavNames] = useState([]);
  const [removedKauravNames, setRemovedKauravNames] = useState([]);

  const pandavNames = ["🌟 सत्य का पालन", "🕊️ अहिंसा", "⚖️ न्याय प्रियता", "🤝 वचन बद्धता", "🙏 भक्ति", "🧘‍♂️ सहन शीलता", "🎁 दान शीलता", "👨‍👩‍👧‍👦 भाई चारा", "🎯 सम र्पण", "🤝 सह योग", "📚 शिक्षा और ज्ञान", "🧘‍♂️ आत्म संयम"];
  const kauravNames = ["🎭 छल और कपट", "⚔️ अन्याय", "👑 अहंकार", "🔥 हिंसा", "💰 लालच", "🤥 झूठ", "🗡️ क्रूरता", "👿 अनैति कता", "👨‍🏫 गुरुओं का अपमान", "🗝️ विश्वा सघात", "⚔️ अधर्म का साथ", "🛡️ अनुचित युद्ध नीति"];

  const movementRules = {
    0: [1, 3], 1: [0, 2,25], 2: [1, 4], 3: [0,5,27], 4: [2, 7, 28],
    5: [3, 6], 6: [5, 30, 7], 7: [6, 4], 8: [9, 11], 9: [25, 8, 10, 17],
    10: [9, 12], 11: [27, 8, 19, 13], 12: [28, 10, 15, 20], 13: [11, 14],
    14: [30, 13, 22, 15], 15: [14, 12], 16: [17, 19], 17: [9, 18, 16],
    18: [17, 20], 19: [11, 16, 21], 20: [12, 23, 18], 21: [22, 19],
    22: [14, 21, 23], 23: [22, 20] , 24: [25, 27] , 25: [1,24, 26,9] 
    , 26: [25, 28], 27: [3,24,11,29], 28: [4,12,26,31] , 29: [27,30]
    , 30: [6,14,31,29] , 31: [28,30]
  };

  const linesToCheck = [
    [0, 1, 2], [0, 3, 5], [5, 6, 7], [7, 4, 2], [8, 9, 10], [8, 11, 13],
    [13, 14, 15], [15, 12, 10], [16, 17, 18], [16, 19, 21], [21, 22, 23],
    [23, 20, 18],[24, 25, 26], [24,27,29], [26,28,31], [29,30,31],
    [1,25,9,17], [20,12,28,4], [22,14,30,6], [3,27,11,19]
  ];


  useEffect(() => {
    let interval;
    if (kingCount + queenCount > 0) {
      interval = setInterval(() => {
        if (isKingTurn) {
          setKingTime((time) => time + 1);
        } else {
          setQueenTime((time) => time + 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isKingTurn, kingCount, queenCount]);
  // console.log(isKingTurn, "isKingTurn")

  const handleClick = (index) => {
    setButtons((prevButtons) => {
      const newButtons = [...prevButtons];
      const current = newButtons[index];
  
      if (kingCount < 12 - kingRemovals && isKingTurn && kingLeftDices > 0) {
        setKingLeftDices((prev) => Math.max(prev - 1, 0)); // Ensure count doesn't go below 0
      } else if (queenCount < 12 - queenRemovals && !isKingTurn && queenLeftDices > 0) {
        setQueenLeftDices((prev) => Math.max(prev - 1, 0)); // Ensure count doesn't go below 0
      }
  
      return newButtons;
    });
  
    console.log(index, "index");
    const audio = new Audio('gt.mp3');
  
    setButtons((prevButtons) => {
      const newButtons = [...prevButtons];
      const current = newButtons[index];
  
      // Check if it's the player's turn
      if (current.symbol === "." && !isKingTurn) {
        // Create and display the message
        const messageDiv = document.createElement("div");
        messageDiv.textContent = "Not Your Turn !  It's ☠️अधर्म🔥 Turn.";
        messageDiv.className = "turn-message";
        document.body.appendChild(messageDiv);
        // Remove the message after 3 seconds
        setTimeout(() => {
          messageDiv.remove();
        }, 3000);
        return prevButtons;
      }
      if (current.symbol === "'" && isKingTurn) {
        // Create and display the message
        const messageDiv = document.createElement("div");
        messageDiv.textContent = "Not Your Turn ! It's 🛡️धर्म✨ Turn.";
        messageDiv.className = "turn-message";
        document.body.appendChild(messageDiv);
        // Remove the message after 3 seconds
        setTimeout(() => {
          messageDiv.remove();
        }, 3000);
        return prevButtons;
      }
  
      console.log({
        prevButtons,
        selectedIndex: selectedIndex === index,
        currentSymbol: current.symbol,
      });
  
      if (selectedIndex === index) {
        setSelectedIndex(null);
      } else if (current.symbol !== null && selectedIndex === null) {
        if (movementRules[index].some((move) => newButtons[move].symbol === null)) {
          setSelectedIndex(index);
          setIsKingTurn(current.symbol === ".");
          audio.play(); // Play sound for King
        }
      } else if (selectedIndex !== null && current.symbol === null) {
        if (movementRules[selectedIndex].includes(index)) {
          newButtons[index] = newButtons[selectedIndex];
          newButtons[selectedIndex] = { symbol: null, color: "white", name: null };
          setSelectedIndex(null);
          setIsKingTurn(newButtons[index].symbol === "'");
          audio.play(); // Play sound for King
        }
      } else if (kingCount < 12 - kingRemovals && isKingTurn) {
        const availablePandavNames = pandavNames.filter((name) => !removedPandavNames.includes(name));
        newButtons[index] = { 
          symbol: ".", 
          color: "Red", 
          name: availablePandavNames[kingCount] || pandavNames[kingCount] 
        };
        setKingCount(kingCount + 1);
        setIsKingTurn(false);
        audio.play();
      } else if (queenCount < 12 - queenRemovals && !isKingTurn) {
        const availableKauravNames = kauravNames.filter((name) => !removedKauravNames.includes(name));
        newButtons[index] = { 
          symbol: "'", 
          color: "Black", 
          name: availableKauravNames[queenCount] || kauravNames[queenCount] 
        };
        setQueenCount(queenCount + 1);
        setIsKingTurn(true);
        audio.play();
      }
  
      setShowRemoveButton(false);
      return newButtons;
    });
  };

  const handleContextMenu = (event, index) => {
    event.preventDefault(); // Prevent default context menu on all devices

    // Prevent removing dice if the color is Yellow or seagreen
    const currentColor = getButtonColor(index);
    if (currentColor === "darkred" || currentColor === "#141415") return;
    if (buttons[index].symbol === null) return;

    // Get the position of the button
    const buttonRect = event.target.getBoundingClientRect();
    setRemoveButtonPosition({
      top: buttonRect.top + window.scrollY + buttonRect.height / 2,
      left: buttonRect.left + window.scrollX + buttonRect.width / 2,
    });

    // Show the "Remove" button
    setShowRemoveButton(true);
    setRemoveButtonIndex(index);
  };

  // Add long-press support for touch devices
  const handleTouchStart = (event, index) => {
    const touchEvent = event.touches[0]; // Get the first touch point
    const longPressTimer = setTimeout(() => {
      handleContextMenu({
        preventDefault: () => { }, // Mock preventDefault for touch events
        target: {
          getBoundingClientRect: () => ({
            top: touchEvent.clientY,
            left: touchEvent.clientX,
            height: 0,
            width: 0,
          }),
        },
      }, index);
    }, 400); // 0.4 second for long press

    // Store the timer in the event target for cleanup
    event.target.longPressTimer = longPressTimer;
  };

  const handleTouchEnd = (event) => {
    // Clear the long-press timer if the touch ends early
    if (event.target.longPressTimer) {
      clearTimeout(event.target.longPressTimer);
      event.target.longPressTimer = null;
    }
  };

  const handleRemove = () => {
    setButtons((prevButtons) => {
      const newButtons = [...prevButtons];
      const removedPiece = newButtons[removeButtonIndex];
      // Add the removed name to the removed list
      if (removedPiece.symbol === ".") {
        setRemovedPandavNames((prev) => [...prev, removedPiece.name]);
        setKingCount(kingCount - 1);
        setKingRemovals(kingRemovals + 1);
        setQueenRemovalCount(queenRemovalCount + 1);
      } else if (removedPiece.symbol === "'") {
        setRemovedKauravNames((prev) => [...prev, removedPiece.name]);
        setQueenCount(queenCount - 1);
        setQueenRemovals(queenRemovals + 1);
        setKingRemovalCount(kingRemovalCount + 1);
      }
      // Clear the button
      newButtons[removeButtonIndex] = { symbol: null, color: "white", name: null };
      setShowRemoveButton(false);
      return newButtons;
    });
  };

  const getButtonColor = (index) => {
    const isGolden = goldenLines.some((line) => line.includes(index));
    const isBurlywood = pinkLines.some((line) => line.includes(index));
    if (isGolden) return "darkred";
    if (isBurlywood) return "#141415";
    return buttons[index].color;
  };

  useEffect(() => {
    checkForLines();
  }, [buttons]);

  const checkForLines = () => {
    const newGoldenLines = [];
    const newPinkLines = [];
    let newLineFormed = false;
  
    // Check each line to see if it's newly formed
    linesToCheck.forEach((line) => {
      const [a, b, c] = line;
      const isGoldenLine = buttons[a].symbol === "." && buttons[b].symbol === "." && buttons[c].symbol === ".";
      const isPinkLine = buttons[a].symbol === "'" && buttons[b].symbol === "'" && buttons[c].symbol === "'";
  
      // Check if this line wasn't previously marked
      const wasGoldenLine = goldenLines.some(l => l.toString() === line.toString());
      const wasPinkLine = pinkLines.some(l => l.toString() === line.toString());
  
      if (isGoldenLine && !wasGoldenLine) {
        newGoldenLines.push(line);
        newLineFormed = true;
      } else if (isPinkLine && !wasPinkLine) {
        newPinkLines.push(line);
        newLineFormed = true;
      } else if (isGoldenLine) {
        newGoldenLines.push(line); // Keep existing golden lines
      } else if (isPinkLine) {
        newPinkLines.push(line); // Keep existing pink lines
      }
    });
  
    // Only play sound if a new line was formed
    if (newLineFormed) {
      const audio = new Audio('Trick.mp3');
      audio.play();
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, 3000); // Stop after 2 seconds
    }
  
    setGoldenLines(newGoldenLines);
    setPinkLines(newPinkLines);
  };

  // Check for winner
  useEffect(() => {
    if (kingRemovalCount >= 10) {
      setWinner("🛡️धर्म✨");
    } else if (queenRemovalCount >= 10) {
      setWinner("☠️अधर्म🔥");
    }
  }, [kingRemovalCount, queenRemovalCount]);

  // Play audio when the winner is declared
  useEffect(() => {
    if (winner) {
      const audio = new Audio('claps.mp3');
      audio.play();
    }
  }, [winner]);

  return (
    <>

     <DharmaCount
        kingRemovalCount={kingRemovalCount}
        queenRemovalCount={queenRemovalCount}
        kingTime={kingTime}
        queenTime={queenTime}
        kingLeftDices={kingLeftDices}
        queenLeftDices={queenLeftDices}
     />

  <div className="dharma-container Board-background">
  {buttons.map((btn, index) => (
  <button
    key={index}
    className={`dharma-button ${selectedIndex === index ? "selected" : ""}`}
    onClick={() => handleClick(index)}
    onContextMenu={(event) => handleContextMenu(event, index)}
    onTouchStart={(event) => handleTouchStart(event, index)}
    onTouchEnd={handleTouchEnd}
    style={{ backgroundColor: getButtonColor(index) }}
  >
    <div className="button-content">
      {btn.symbol && <div className="piece-symbol">{btn.symbol}</div>}
      {btn.name && <div className="piece-name">{btn.name}</div>}
    </div>
  </button>
))}
        {showRemoveButton && (
          <button
            className="remove-button"
            onClick={handleRemove}
            style={{ position: "fixed", top: removeButtonPosition.top, left: removeButtonPosition.left }}
          >
            Remove
          </button>
        )}

        {winner && (
          <div className="winner-box">
            🎉🎈 Congratulations! <strong>{winner}</strong> Won ! 🏆 🎉🎈🎉🎈🎈🎉🎈🎉🎈🎉🎈🎉
          </div>
        )}

        <div className="c">
          <div className="rectangle"></div>
        </div>

        <div
          className="center-box"
          style={{
            top: "46%",  // Adjust these values as needed
            left: "46%", // Adjust these values as needed
          }}
        >
          <div
            className="blinking-light"
            style={{
              backgroundColor: isKingTurn ? "rgb(235, 35, 16)" : "rgb(10, 10, 10)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "White",
              fontSize: "0.6rem",
              fontWeight: "lighter",
              height: "55px", // Adjust for better display
              width: "200px", // Adjust for better display
              borderRadius: "10px", // Optional: rounded corners
              textAlign: "center",
            }}
          >
            {isKingTurn ? "Turn is 🛡️धर्म✨" : "Turn is ☠️अधर्म🔥"}
          </div>
        </div>

        <svg className="rectangle-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          <rect x="5" y="5" width="90" height="90" fill="none" stroke="red" strokeWidth="0.6" />
          <rect x="15" y="15" width="70" height="70" fill="none" stroke="blue" strokeWidth="0.4" />
          <rect x="25" y="25" width="50" height="50" fill="none" stroke="Green" strokeWidth="0.4" />
          <rect x="35" y="35" width="30" height="30" fill="none" stroke="orange" strokeWidth="0.4" />
          <line x1="50%" y1="5%" x2="50%" y2="20%" stroke="blue" strokeWidth="0.4" />
          <line x1="50%" y1="20%" x2="50%" y2="35%" stroke="blue" strokeWidth="0.4" />
          <line x1="5%" y1="50%" x2="20%" y2="50%" stroke="blue" strokeWidth="0.4" />
          <line x1="20%" y1="50%" x2="35%" y2="50%" stroke="blue" strokeWidth="0.4" />
          <line x1="95%" y1="50%" x2="80%" y2="50%" stroke="blue" strokeWidth="0.4" />
          <line x1="80%" y1="50%" x2="65%" y2="50%" stroke="blue" strokeWidth="0.4" />
          <line x1="50%" y1="95%" x2="50%" y2="80%" stroke="blue" strokeWidth="0.4" />
          <line x1="50%" y1="80%" x2="50%" y2="65%" stroke="blue" strokeWidth="0.4" />
        </svg>
      </div>
    </>
  );
};
export default Dharma;

