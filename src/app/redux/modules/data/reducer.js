import immutableUpdate from 'immutable-update'
import * as actions from './actions'

const initialState = {
  
} 

const reducers = {  

  [actions.GAME_GAME_LOADED]: (state, action) => immutableUpdate(
    state,
    {  }
  )
} 

const reducer = (state = initialState, action) => reducers[action.type] ? 
  reducers[action.type](state, action)
  :
  state

export default reducer