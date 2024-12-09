import Header from '../Header'
import './index.css'
const NotFound = () => (
  <>
    <Header />
    <div className="NotFound">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="notFoundImage"
      />
    </div>
  </>
)
export default NotFound
