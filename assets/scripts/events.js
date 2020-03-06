const ui = require('./ui')
const api = require('./api')

const onIndex = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.viewBooks(data)
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

module.exports = {
  onIndex
}
