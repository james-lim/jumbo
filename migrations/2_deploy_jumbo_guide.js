const JumboGuide = artifacts.require('JumboGuide')

module.exports = function (deployer, network, accounts) {
  deployer.deploy(JumboGuide).then(async guide => {
    // Register restaurants
    await guide.registerRestaurant(
      'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9647d95a500b5e222258fb03ed086ed1&auto=format&fit=crop&w=2800&q=80',
      'Vege restaurant',
      'Nonce genesis',
      {from: accounts[2]}
    )
    await guide.registerRestaurant(
      'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9647d95a500b5e222258fb03ed086ed1&auto=format&fit=crop&w=2800&q=80',
      'Vege restaurant',
      'Nonce genesis',
      {from: accounts[3]}
    )
    await guide.registerRestaurant(
      'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9647d95a500b5e222258fb03ed086ed1&auto=format&fit=crop&w=2800&q=80',
      'Vege restaurant',
      'Nonce genesis',
      {from: accounts[4]}
    )
    await guide.registerRestaurant(
      'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9647d95a500b5e222258fb03ed086ed1&auto=format&fit=crop&w=2800&q=80',
      'Vege restaurant',
      'Nonce genesis',
      {from: accounts[5]}
    )
    await guide.registerRestaurant(
      'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9647d95a500b5e222258fb03ed086ed1&auto=format&fit=crop&w=2800&q=80',
      'Vege restaurant',
      'Nonce genesis',
      {from: accounts[6]}
    )
    await guide.registerRestaurant(
      'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9647d95a500b5e222258fb03ed086ed1&auto=format&fit=crop&w=2800&q=80',
      'Vege restaurant',
      'Nonce genesis',
      {from: accounts[7]}
    )

    // Vote to restaurants
    // await guide.vote()
  })
}
