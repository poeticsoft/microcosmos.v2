import immutableUpdate from 'immutable-update'
import * as Actions from './actions'
import {
  isBrowser,
  isTablet,
  isMobile
} from 'react-device-detect'

const initialState = {
  responsive: {
    window: {},
    device: ''
  },
  cara: 'caras/microcosmos_12.jpeg',
  crop: {
    crop: { x: 0, y: 0 },
    aspect: 1,
    rotation: 0,
    zoom: 1,
    croppedArea: null,
    croppedAreaPixels: {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }
  },
  snap: {
    rotation: 0,
    croppedAreaPixels: {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }
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

  [Actions.UI_SET_CROP]: (state, action) => {
    
    return immutableUpdate(
      state,
      {
        crop: action.payload.data
      }
    )
  },

  [Actions.UI_SET_SNAP]: (state, action) => {
    
    return immutableUpdate(
      state,
      {
        snap: {
          rotation: state.crop.rotation,
          croppedAreaPixels: state.crop.croppedAreaPixels
        }
      }
    )
  }
} 

const reducer = (state = initialState, action) => reducers[action.type] ? 
  reducers[action.type](state, action)
  :
  state

export default reducer