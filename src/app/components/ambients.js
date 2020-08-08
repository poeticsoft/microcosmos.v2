
import React, {
  useState,
  useEffect
} from 'react'

const ambientList = {
  ambienta: {
    image: 'assets/img/ambient/ambienta.png',
    set: {}
  },
  ambientb: {
    image: 'assets/img/ambient/ambientb.png',
    set: {}
  }
}

const AmbientSelector = props => {

  console.log(props)

  return <div
    className={`
      Selector
      ${props.selected ? 'selected' : '' }
    `}
    onClick={ () => { props.setSelected(props.id) } }
    style={{ backgroundImage: `url(${ props.image })` }}
  />
}

const Ambient = props => {

  return <div 
    className="Ambient">
    <div className="Crop"
      style={{

      }}
    ></div>
    <div className="Space"
      style={{
        backgroundImage: `url(${ ambientList[props.ambient].image })`
      }}
    >
    </div>
  </div>
}

const Ambients = props => {  

  const [ selected, setSelected ] = useState()
  const [ ambient, setAmbient ] = useState()

  const select = id => {

    id == selected ? setSelected() : setSelected(id)
  }
  
  return <div className="Ambients">
    {
      ambient ?
        <Ambient ambient={ selected } />
        :
        <></>
    }
    <div className="Selectors">
      {
        Object.keys(ambientList)
        .map(key => <AmbientSelector
          key={ key } 
          id={ key }
          selected={ selected == key }
          setSelected={ select }
          setAmbient={ setAmbient }
          { ...ambientList[key] }  
        />)
      }
    </div>
  </div>
}

export default Ambients