import ipfsClient from 'ipfs-http-client'
import React, { Component } from 'react'
import { Route } from 'react-router'
import HomeContainer from './pages/home/HomeContainer'
import MyJumboContainer from './pages/myJumbo/MyJumboContainer'
import DetailContainer from './pages/detail/DetailContainer'
import PickJumboContainer from './pages/pickJumbo/PickJumboContainer'
import PickSymbolContainer from './pages/pickSymbol/PickSymbolContainer'
import RegisterContainer from './pages/register/RegisterContainer'
import RegisterJumboCandidateContainer
  from './pages/registerJumboCandiate/RegisterJumboCandidateContainer'
import RegisterSymbolContainer
  from './pages/registerSymbol/RegisterSymbolContainer'

class App extends Component {
  componentWillMount () {
    window.ipfsClient = ipfsClient('localhost', '5001', { protocol: 'http' })
  }

  render () {
    return (
      <div className={'App'}>
        <Route exact path="/" component={HomeContainer}/>
        <Route exact path="/my-jumbo" component={MyJumboContainer}/>
        <Route path="/detail/:address" component={DetailContainer}/>
        <Route exact path="/pick-jumbo" component={PickJumboContainer}/>
        <Route exact path="/pick-symbol" component={PickSymbolContainer}/>
        <Route exact path="/register" component={RegisterContainer}/>
        <Route exact path="/register-jumbo"
               component={RegisterJumboCandidateContainer}/>
        <Route exact path="/register-symbol"
               component={RegisterSymbolContainer}/>
      </div>
    )
  }
}

export default App
