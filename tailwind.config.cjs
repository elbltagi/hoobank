/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/componants/header/Header.jsx",
    "./src/componants/header/links.jsx",
    "./src/componants/top-content/Home.jsx",
    "./src/componants/top-content/number.jsx",
    "./src/componants/Rewards/elment.jsx",
    "./src/componants/Rewards/Rewards.jsx",
    "./src/componants/Button.jsx",
    "./src/componants/Payment/payment.jsx",
    "./src/componants/Card/Card.jsx",
    "./src/componants/Review/Review.jsx",
    "./src/componants/Review/ReviewCard.jsx",
    "./src/componants/Review/brands.jsx",
    "./src/componants/Review/Start.jsx",
    "./src/componants/Footer/Footer.jsx",
    "./src/componants/Footer/Links.jsx"
  ],
  theme: {
    extend: {
      width:{
        custom:"483px",
      },
      colors:{
        main:"#00040F",
        header_link:"rgba(255,255,255,0.7)"
      },
      fontFamily:{
        Poppins:"'Poppins'"
      },
    
      
    },
    
  },
  plugins: [
    
  ],
}
