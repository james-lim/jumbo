import React from 'react'
import Wrapper from '../../components/Wrapper'
import SimpleLayout from '../../layouts/SimpleLayout'

const RegisterJumboCandidate = () => {
  return (
    <SimpleLayout>
      <Wrapper>
        <div className="container">
          <div className="row">
            <section className="col-6 col-12-narrower feature">
              <div className="image-wrapper first">
                <a href="#" className="image featured first"><img
                  src="images/pic01.jpg" alt=""/></a>
              </div>
              <header>
                <h2>Semper magna neque vel<br/>
                  adipiscing curabitur</h2>
              </header>
              <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit.
                Curabitur vel
                sem sit dolor neque semper magna. Lorem ipsum dolor sit amet
                consectetur et sed
                adipiscing elit. Curabitur vel sem sit.</p>
              <ul className="actions">
                <li><a href="#" className="button">Elevate my awareness</a></li>
              </ul>
            </section>
            <section className="col-6 col-12-narrower feature">
              <div className="image-wrapper">
                <a href="#" className="image featured"><img src="images/pic02.jpg"
                                                        alt=""/></a>
              </div>
              <header>
                <h2>Amet lorem ipsum dolor<br/>
                  sit consequat magna</h2>
              </header>
              <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit.
                Curabitur vel
                sem sit dolor neque semper magna. Lorem ipsum dolor sit amet
                consectetur et sed
                adipiscing elit. Curabitur vel sem sit.</p>
              <ul className="actions">
                <li><a href="#" className="button">Elevate my awareness</a></li>
              </ul>
            </section>
          </div>
        </div>
      </Wrapper>
    </SimpleLayout>
  )
}

export default RegisterJumboCandidate
