import immutableUpdate from 'immutable-update'
import * as Actions from './Actions'
import {
  isBrowser,
  isTablet,
  isMobile
} from 'react-device-detect'

const initialState = {
  responsive: {
    window: {},
    device: ''
  }
} 

const reducers = {  

  [Actions.UI_SET_RESPONSIVE_WINDOW]: (state, action) => immutableUpdate(
    state,
    {
      responsive: {
        window: {
          w: window.innerWidth,
          h: window.innerHeight,
          o: window.innerWidth >= window.innerHeight ? 'landscape' : 'portrait'
        }
      }
    }
  ),

  [Actions.UI_SET_RESPONSIVE_DEVICE]: (state, action) => {

    let device = []
    isBrowser && device.push('browser')
    isTablet && device.push('tablet')
    isMobile && device.push('mobile') 
    device = device.join(' ')
    
    return immutableUpdate(
      state,
      {
        responsive: {
          device: device
        }
      }
    )
  },
} 

const reducer = (state = initialState, action) => reducers[action.type] ? 
  reducers[action.type](state, action)
  :
  state

export default reducer