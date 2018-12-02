import React, { Component } from 'react'
import Header from './Header'
import styled from 'styled-components'

const Styler = styled.div`
#header-wrapper {
width:100%;
  height:500px;
  background: url('images/bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  background-attachment: fixed;
}
`
const Jumbo = styled.div`
#hero {
width:100%;
  height:500px;
  background: url('images/jumbo.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size:300px;
  background-attachment: fixed;
}
`

export default class JumboHeader extends Component {
  render () {
    return (
      <Styler>
        <Header>
          <Jumbo>
            <section id="hero" className="container">

            </section>
          </Jumbo>
        </Header>
      </Styler>
    )
  }
}
