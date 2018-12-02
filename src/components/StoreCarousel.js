import PropTypes from 'prop-types'
import React from 'react'
import Slider from 'react-slick'
import Wrapper from './Wrapper'

const dataToTestaurant = (restaurant) => {
  return (
    <div>
      {/*<section className="col-3 col-12-narrower feature">*/}
      <div className="image-wrapper">
        <a href="#" className="image featured">
          <img
            src="https://images.unsplash.com/photo-1543654796-9472cd7ef9bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c226bb573aff6b762dc75a7f01ce9db1&auto=format&fit=crop&w=1950&q=80"
            alt=""/>
        </a>
      </div>
      <header>
        <h3>Dolor sit consequat magna</h3>
      </header>
      <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit.
        Curabitur
        vel sem sit dolor neque semper magna lorem ipsum.</p>
      {/*</section>*/}
    </div>
  )
}
export default class StoreCarousel extends React.Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    }
    return (
      <Wrapper>
        <section class="container">
          <header class="major">
            <h2 style={{ textAlign: 'left' }}>{this.props.name}</h2>
          </header>
          <Slider {...settings}>
            <br/>
            {this.props.restaurants.map(dataToTestaurant)}
          </Slider>
        </section>
      </Wrapper>
    )
  }
}

StoreCarousel.propTypes = {
  name: PropTypes.string,
  restaurants: PropTypes.array,
}
