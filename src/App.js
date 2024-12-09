import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import './App.css'
const App = () => (
  <div className="appPage">
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <NotFound />
  </div>
)

export default App
