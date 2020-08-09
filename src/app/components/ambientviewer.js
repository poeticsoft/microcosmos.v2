import React, {
  useEffect,
  useRef
} from 'react'
import { connect } from 'react-redux'

function getRadianAngle(degreeValue) {
  return (degreeValue * Math.PI) / 180
}

const AmbientViewer = connect(state => ({
  cara: state.ui.cara,
  snap: state.ui.snap
}))(props => {

  const canvasRef = useRef()
  let image
  let ctx
  let maxSize
  let safeArea

  useEffect(() => {

    image = new Image()
    image.addEventListener(
      'load', 
      () => {
        
        maxSize = Math.max(image.width, image.height)
        safeArea = 2 * ((maxSize / 2) * Math.sqrt(2))
        ctx = canvasRef.current.getContext('2d')
        canvasRef.current.width = safeArea
        canvasRef.current.height = safeArea        
        ctx.translate(safeArea / 2, safeArea / 2)
        ctx.rotate(getRadianAngle(props.snap.rotation))
        ctx.translate(-safeArea / 2, -safeArea / 2)
        ctx.drawImage(
          image,
          safeArea / 2 - image.width * 0.5,
          safeArea / 2 - image.height * 0.5
        )
        const data = ctx.getImageData(0, 0, safeArea, safeArea)
        canvasRef.current.width = props.snap.croppedAreaPixels.width
        canvasRef.current.height = props.snap.croppedAreaPixels.height
        ctx.putImageData(
          data,
          0 - safeArea / 2 + image.width * 0.5 - props.snap.croppedAreaPixels.x,
          0 - safeArea / 2 + image.height * 0.5 - props.snap.croppedAreaPixels.y
        )
      }
    )
    image.src = props.cara
    
  }, [props.snap.rotation, props.snap.croppedAreaPixels])

  return <div className="AmbientViewer">
    <canvas
      ref={ canvasRef }
    />
  </div>
})

export default AmbientViewer
