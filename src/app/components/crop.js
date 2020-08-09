// https://codesandbox.io/s/q8q1mnr01w

import React, {
  useEffect
} from 'react'
import { connect } from 'react-redux'
import Cropper from 'react-easy-crop'
import {
  Slider,
  Button
} from 'antd'
import * as Actions from 'app/redux/actions'

const Crop = connect(state => ({
  cara: state.ui.cara,
  crop: state.ui.crop
}))(props => {

  const setCrop = crop => {
    
    props.dispatch(
      Actions.uiSetCrop({
        crop: crop
      })
    )
    
    props.dispatch(Actions.uiSetSnap())
  }

  const onCropComplete = (croppedArea, croppedAreaPixels) => props.dispatch(
    Actions.uiSetCrop({
      croppedArea: croppedArea,
      croppedAreaPixels: croppedAreaPixels
    })
  )

  const setZoom = zoom => props.dispatch(
    Actions.uiSetCrop({
      zoom: zoom
    })
  ) 

  const setRotation = rotation => props.dispatch(
    Actions.uiSetCrop({
      rotation: rotation
    })
  ) 

  const setAspect = () => props.dispatch(
    Actions.uiSetCrop({
      aspect: Math.round(Math.random() * 100)
              /
              Math.round(Math.random() * 100)
    })
  )

  useEffect(() => {

    props.dispatch(Actions.uiSetSnap())
    
  }, [])

  return  <div className="Crop">
    <div className={`
      Cropper
    `}>
      <Cropper
        image={ props.cara }
        crop={ props.crop.crop }
        onCropChange={ setCrop }
        rotation={ props.crop.rotation }
        onRotationChange={ setRotation }
        zoom={ props.crop.zoom }
        onZoomChange={ setZoom }
        maxZoom={ 10 }
        aspect={ props.crop.aspect }
        onCropComplete={ onCropComplete }
        showGrid={ false }
      />
    </div>
    <div className={`
      Controls
    `}>
      <div className={`
        Slider Zoom
      `}>
        <Slider
          value={ props.crop.zoom }
          min={ 1 }
          max={ 10 }
          step={ 0.1 }
          onChange={ setZoom }
        />
      </div>
      <div className={`
        Slider Rotation
      `}>
        <Slider
          value={ props.crop.rotation }
          min={ -360 }
          max={ 360 }
          step={ 1 }
          onChange={ setRotation }
        />
      </div>
      <Button
        onClick={ setAspect }
      >
        Change aspect
      </Button>
      <Button
        onClick={ e => props.dispatch(Actions.uiSetSnap()) }
      >
        Snap
      </Button>
    </div>
  </div>
})

export default Crop