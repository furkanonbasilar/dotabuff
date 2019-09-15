import React, { Component, Fragment } from 'react';
import Toolbar from '../UI/Toolbar/Toolbar';
import HeroesPage from '../Heroes/HeroesPage/HeroesPage'
import { Route, Switch } from 'react-router-dom'
import SecondToolbar from '../UI/Toolbar/SecondToolbar/SecondToolbar';
import Introduction from '../Heroes/Introduction/Introduction';
import Dashboard from '../Dashboard/Dashboard';
import Matches from '../Matches/Matches';
import Items from '../Items/Items';
import Footer from '../UI/Footer/Footer'

class App extends Component {
  state = {
    show: false
  }


  onMouseEnterHandler = () => {
    this.setState({
      show:true
    })
  }

  // https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?key=DDCC07E931EDE97D954E6368578FB8F6


  render() {
    return (
        <div className="container-fluid" style={{ color:'white',backgroundColor:'#1C242D', paddingLeft: 0, paddingRight: 0 }}>
          <Toolbar enter={this.onMouseEnterHandler}/>
          {this.state.show ? <SecondToolbar /> : <Fragment /> }
          <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/introduction' component={Introduction} />
            <Route path='/heroes' component={HeroesPage} />
            <Route path='/matches' component={Matches} />
            <Route path='/items' component={Items} />
          </Switch>
          <Footer />
        </div>
    )
  }
}

export default App;