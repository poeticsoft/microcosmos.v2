
import React, {
  useEffect
} from 'react'
import { debounce } from 'lodash'
import { Provider } from 'react-redux'
import store from './redux/store'
import * as Actions from './redux/actions'
import Crop from './components/crop'

const App = props => {

  useEffect(() => {

    window.addEventListener(
      'resize',
      debounce(() => store.dispatch(Actions.uiSetResponsiveWindow()))
    )

    store.dispatch(Actions.uiSetResponsiveWindow())
    store.dispatch(Actions.uiSetResponsiveDevice())

    return () => window.removeEventListener('resize', null)
  }, [])
  
  return <Provider store={ store }>
    <Crop />
  </Provider> 
}

export default App