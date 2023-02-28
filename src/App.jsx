import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import {logo} from "./assets/index"
import Header from './componants/header/Header';
import Home from './componants/top-content/Home';
import Rewards from './componants/Rewards/Rewards';
import Payment from './componants/Payment/payment';
import Card from './componants/Card/Card';
import Review from './componants/Review/Review';
import Footer from './componants/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App overflow-hidden max-lg:px-5 flex z-0 px-24 items-center gap-20 flex-col min-h-screen justify-start w-full bg-main'>
      <Header/>
      <Home/>
      <Rewards/>
      <Payment/>
      <Card/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default App
