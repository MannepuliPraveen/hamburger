import Header from '../Header'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'
const Home = () => (
  <div>
    <Header />
    <div className="aboutRoute">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="aboutIcon"
      />
    </div>
  </div>
)
export default Home
