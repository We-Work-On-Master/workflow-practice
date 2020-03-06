const store = require('./../../store')
const config = require('./../config')

const viewBooks = function () {
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'GET',
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // }
  })
}

module.exports = {
  viewBooks
}
