import React, { useEffect } from 'react';
import './Footer.css'; // Import the separate CSS file

const Partners = () => {
  // useEffect(() => {
  //   let btn = document.querySelector(".partners-button")
  //   btn?.click()
  // }, [])
  const handleDonateClick = (e) => {
    // Check if the user is on mobile
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    console.log(isMobile)
    if (isMobile) {
      // Ask user which payment method they prefer
      // const paymentMethod = window.prompt(
      //   "Donate via:\n1️⃣ Google Pay (Type 'G')\n2️⃣ PhonePe (Type 'P')",
      //   "G"
      // );

      // console.log(e?.isTrusted,"e?.target?.isTrusted")
      // e = { ...e, isTrusted: true }
      let upiURL = "";

      // if (paymentMethod?.toUpperCase() === "G") {
      // upiURL = `upi://pay?pa=shanatpandey.5-2@okaxis&pn=Vyuh&cu=INR`;
      // } else if (paymentMethod?.toUpperCase() === "P") {
      upiURL = `upi://pay?pa=9644692482-2@ibl&pn=Vyuh&cu=INR`;
      // } else {
      //   alert("Invalid option! Please type 'G' for Google Pay or 'P' for PhonePe.");
      //   return;
      // }

      // Open the UPI payment link for mobile users
      window.open(upiURL, '_blank');
    } else {
      alert("UPI payments are only supported on mobile devices. Please use your phone to complete the donation.");
    }
  };

  return (
    <div className="partners-container">
      <h1 className="partners-title">Support Vyuh's Journey</h1>
      <p className="partners-message">
        At <strong>Vyuh</strong>, we’re not just building a game – we’re creating an experience, a community, and a vision. 
        Every step we take is made possible by the generous support and belief of individuals like you who share in our dream.
      </p>
      <p className="partners-message">
        With your contribution, you’re not only supporting a game but helping us foster creativity, innovation, and 
        connection among players around the world. No amount is too small; every donation brings us closer to our 
        goal of making Vyuh a name recognized across the gaming universe.
      </p>
      <p className="partners-message">
        By donating, you become a part of something larger than us all—a shared mission to revolutionize gaming. 
        Your support means the world to us and motivates us to keep pushing forward. Thank you for believing in us and 
        for being a vital part of our journey. Let’s make Vyuh’s impact unforgettable, together!
      </p>

      <button onClick={handleDonateClick} className="partners-button">Buy me a coffee☕️</button>
      <div className="qr-code-container">
      <img src="Donate.jpg" alt="QR Code for Donation" className="qr-code-image" />
      </div>
      <p style={{ textAlign: "center" }}> </p>
      <p style={{ textAlign: "center" }}>😊Thanks a lot!✨</p>
      <p style={{ textAlign: "center" }}> </p>
    </div>
  );
};

export default Partners;
