// https://codesandbox.io/s/q8q1mnr01w

import React, { 
  useState, 
  useCallback
} from 'react'
import Cropper from 'react-easy-crop'
import {
  Slider,
  Button
} from 'antd'
// import ImgDialog from './imgdialog'
import getCroppedImg from './cropImage'

const caraimg = 'caras/microcosmos_12.jpeg'

const Crop = props => {

  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [aspect, setAspect] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {

    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const showCroppedImage = useCallback(async () => {

    try {

      const croppedImage = await getCroppedImg(
        caraimg,
        croppedAreaPixels,
        rotation
      )
      console.log('donee', { croppedImage })
      setCroppedImage(croppedImage)
    } catch (e) {

      console.error(e)
    }

  }, [croppedAreaPixels, rotation])

  const onClose = useCallback(() => {

    setCroppedImage(null)

  }, [])

  const changeAspect = () => setAspect(
    Math.round(Math.random() * 100)
    /
    Math.round(Math.random() * 100)
  )

  return  <div className="Crop">
    <div className={`
      Cropper
    `}>
      <Cropper
        image={ caraimg }
        crop={ crop }
        rotation={ rotation }
        zoom={ zoom }
        maxZoom={ 10 }
        aspect={ aspect }
        showGrid={ false }
        onCropChange={ setCrop }
        onRotationChange={ setRotation }
        onCropComplete={ onCropComplete }
        onZoomChange={ setZoom }
      />
    </div>
    <div className={`
      Controls
    `}>
      <div className={`
        Slider Zoom
      `}>
        <Slider
          value={ zoom }
          min={ 1 }
          max={ 10 }
          step={ 0.1 }
          onChange={ zoom => setZoom(zoom)}
        />
      </div>
      <div className={`
        Slider Rotation
      `}>
        <Slider
          value={rotation}
          min={ -360 }
          max={ 360 }
          step={ 1 }
          onChange={ rotation => setRotation(rotation)}
        />
      </div>
      <Button
        onClick={changeAspect}
      >
        Change aspect
      </Button>
    </div>
  </div>
}

export default Crop