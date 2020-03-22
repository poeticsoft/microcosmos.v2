import { message } from 'antd';

export const uiMessage = msg => (dispatch, getState) => {
  
  message[msg.type](msg.text);
}

export const UI_SET_RESPONSIVE_WINDOW = 'UI_SET_RESPONSIVE_WINDOW'
export const uiSetResponsiveWindow = () => ({ type: UI_SET_RESPONSIVE_WINDOW })

export const UI_SET_RESPONSIVE_DEVICE = 'UI_SET_RESPONSIVE_DEVICE'
export const uiSetResponsiveDevice = () => ({ type: UI_SET_RESPONSIVE_DEVICE })