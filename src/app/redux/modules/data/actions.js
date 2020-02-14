export const gameLoad = () => dispatch => {
  
  return fetch(
    'https://dev1.playmotiv.cloud/wp-json/playmotivcloud/v2/games',
    {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + api.token
      }
    }
  )
  .then(res => res.json())
  .then(data => dispatch(gameGamesLoaded(data)))
}

export const GAME_GAME_LOADED = 'GAME_GAME_LOADED'
export const gameGameLoaded = data => ({
  type: GAME_GAME_LOADED,
  payload: {
    data: data
  }
})