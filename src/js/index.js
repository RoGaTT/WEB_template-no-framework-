import _ from 'lodash'
import header from 'html/includes/header.html'

export default () => {
    console.log('App inited')
    const app = document.getElementById('app')
    var compiled = _.template(header);
    
    console.log(compiled({ 'user': 'pebbles' }))
    // app.innerHTML()
}