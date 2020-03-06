const bookHandlebar = require('../templates/books-handlbars')

const onIndexSuccess = function (response) {
    console.log('Indexed books')
    const booksOutput = bookHandlebar({ books: response.books })
    $('.content').html(booksOutput)
}

const onIndexFailure = function (response) {
  console.log('Failed to index books')
}

module.exports = {
  onIndexSuccess,
  onIndexFailure
}
