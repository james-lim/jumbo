import React, { Component } from 'react'
import Header from './Header'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styler = styled.div`
#header-wrapper {
width:100%;
  height:500px;
  background: url('images/bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
}
`
export default class JumboHeader extends Component {
  render () {
    return (
      <Styler>
        <Header>
          <section id="hero" className="container"
                   style={{
                     position: 'relative',
                     width: '100%',
                     height: '100%',
                   }}>
            <div to={'my-jumbo'}
                  style={{
                    width: '100%',
                    position: 'absolute',
                    bottom: '0',
                  }}>
              <img
                src={`images/${this.props.jumbo}_d.png`}/>
            </div>
          </section>
        </Header>
      </Styler>
    )
  }
}
