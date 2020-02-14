
import React, {
  useEffect
} from 'react'
import { debounce } from 'lodash'
import { Provider } from 'react-redux'
import store from './redux/store'
import * as Actions from './redux/actions'

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
    MICROCOSMOS
  </Provider> 
}

export default App