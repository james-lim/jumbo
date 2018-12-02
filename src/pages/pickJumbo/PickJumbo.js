import React from 'react'
import Wrapper from '../../components/Wrapper'
import SimpleLayout from '../../layouts/SimpleLayout'

const itemToSection = (item, upvote, downvote) => {
  return (
    <section className="col-4 col-12-narrower feature">
      <div className="image-wrapper">
        <a href="#" className="image featured"><img
          src={item.src}
          alt=""/></a>
      </div>
      <header>
        <h3>{item.score}</h3>
      </header>
      <p>{item.description}</p>
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
            <h2 style={{ textAlign: 'left' }}>Vote Lv3 Jumbo</h2>
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
