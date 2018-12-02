import React from 'react'
import Wrapper from '../../components/Wrapper'
import SimpleLayout from '../../layouts/SimpleLayout'

const itemToSection = (item, upvote, downvote) => {
  return (
    <section className="col-4 col-12-narrower feature">
      <div className="image-wrapper">
        <a href="#" className="image featured"><img
          src="https://images.unsplash.com/photo-1543654796-9472cd7ef9bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c226bb573aff6b762dc75a7f01ce9db1&auto=format&fit=crop&w=1950&q=80"
          alt=""/></a>
      </div>
      <header>
        <h3>Dolor sit consequat magna</h3>
      </header>
      <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit.
        Curabitur
        vel sem sit dolor neque semper magna lorem ipsum.</p>
      <ul className="actions">
        <li><a onClick={upvote} className="button">Like</a></li>
        <li><a onClick={downvote} className="button">Dislike</a></li>
      </ul>
    </section>
  )
}

const PickJumbo = ({ items, upvote, downvote }) => {
  return (
    <SimpleLayout>
      <Wrapper>
        <section className="container">
          <header className="major">
            <h2 style={{ textAlign: 'left' }}>Pick Jumbo</h2>
          </header>
          <div className="row features">
            {items.map(item => itemToSection(item, upvote, downvote))}
          </div>
        </section>
      </Wrapper>
    </SimpleLayout>
  )
}

export default PickJumbo
