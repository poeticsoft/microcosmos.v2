export const saveUserAuth = data => {

  localStorage.setItem(
    'PlaymotivCloudUserAcccessToken',
    data.access_token
  )
  localStorage.setItem(
    'PlaymotivCloudUserRefreshToken',
    data.refresh_token
  )
}

export const readUserAuth = () => localStorage.getItem(
  'PlaymotivCloudUserAcccessToken'
)