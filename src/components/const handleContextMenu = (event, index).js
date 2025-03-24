  const handleContextMenu = (event, index) => {
    if (!isRemovePhase) return; // Block remove option outside remove phase

    event.preventDefault();
    const currentColor = getButtonColor(index);
    const currentSymbol = buttons[index].symbol;

    console.log("context menu: ", currentColor, currentSymbol);

    if (isKingTurn) {
      console.log("king turn");
      // Check for King's conditions
      if (currentSymbol === "P" && buttons[index].color === "rgb(246, 118, 6)") {
        showRemoveButtonAtPosition(event, index);
      }
    } else {
      console.log("queen turn");
      // Check for Queen's conditions
      if (currentSymbol === "K" && buttons[index].color === "rgb(24, 170, 228)") {
        showRemoveButtonAtPosition(event, index);
      }
    }

  };