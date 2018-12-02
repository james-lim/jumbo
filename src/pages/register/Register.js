import React from 'react'
import Wrapper from '../../components/Wrapper'
import SimpleLayout from '../../layouts/SimpleLayout'
import { ContractForm } from 'drizzle-react-components'

const Register = () => {
  return (
    <SimpleLayout>
      <Wrapper>
        <div className="container">
          <ContractForm
            contract={'JumboGuide'}
            method={'registerRestaurant'}
            labels={['image', 'name', 'location']}
          />
        </div>
      </Wrapper>
    </SimpleLayout>
  )
}

export default Register
