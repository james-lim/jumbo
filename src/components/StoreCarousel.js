import PropTypes from 'prop-types'
import React from 'react'
import Slider from 'react-slick'
import Wrapper from './Wrapper'

const dataToTestaurant = (restaurant) => {
  return (
    <div key={restaurant.name}>
      {/*<section className="col-3 col-12-narrower feature">*/}
      <div className="image-wrapper">
        <a href="#" className="image featured">
          <img
            src={restaurant.image}
            alt=""/>
        </a>
      </div>
      <header>
        <h3>{restaurant.name}</h3>
      </header>
      <p>{restaurant.description}</p>
      <p>{restaurant.location}</p>
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
        <section className="container">
          <header className="major">
            <h2 style={{ textAlign: 'left' }}>{this.props.name}</h2>
          </header>
          <Slider {...settings}>
            {this.props.restaurants.map(dataToTestaurant)}
            <br/>
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
