import Home from './Home'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create'
import Blogdetail from './Blogdetails'
import Notfound from './Notfound'
import Update from './Update'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/create">
              <Create></Create>
            </Route>
            <Route path="/update/blogs/:id">
              <Update></Update>
            </Route>
            <Route path="/blogs/:id">
              <Blogdetail></Blogdetail>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
