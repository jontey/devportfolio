
/* Load libraries
*/
import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'bootstrap'
import 'bootstrap/scss/bootstrap.scss'
import 'font-awesome/scss/font-awesome.scss'

/* Custom scripts/styles
*/
import './scripts.js'
import '../scss/styles.scss'

if (process.env.NODE_ENV !== 'production') {
  require('../index.html')
}