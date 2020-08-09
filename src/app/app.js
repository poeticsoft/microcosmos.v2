
import React, {
  useEffect
} from 'react'
import { debounce } from 'lodash'
import { Provider } from 'react-redux'
import store from './redux/store'
import * as Actions from './redux/actions'
import Crop from './components/crop'
import AmbientViewer from './components/ambientviewer'

const App = props => {

  useEffect(() => {

    window.addEventListener(
      'resize',
      debounce(() => store.dispatch(Actions.uiSetResponsiveWindow()))
    )

    store.dispatch(Actions.uiSetResponsiveWindow())
    store.dispatch(Actions.uiSetResponsiveDevice())

    store.dispatch(Actions.uiMessage({
      type: 'success',
      text: 'Message'
    }))

    return () => window.removeEventListener('resize', null)
  }, [])
  
  return <Provider store={ store }>
    <Crop />
    <AmbientViewer />
  </Provider> 
}

export default App