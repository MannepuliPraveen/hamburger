import Header from '../Header'

import './index.css'
const Home = () => (
  <div>
    <Header />
    <div className="homeRoute">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.pn"
        alt="home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="homeIcon"
      />
    </div>
  </div>
)
export default Home
