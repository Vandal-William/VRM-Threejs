import store from './store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom'
import React, { useEffect, useRef,} from 'react'
import { useThree, Canvas } from 'react-three-fiber'
import * as THREE from 'three'




function App () {
  const dispatch = useDispatch()
  const { aspect } = useThree()
  const { current: camera } = useRef(new THREE.PerspectiveCamera(30, aspect, 0.01, 20))
  camera.position.set(0, 0.6, 4)

  useEffect(() => {
    dispatch({
      type: 'IMPORT-VRM'
    })
  }, [])  

  const vrm = useSelector(state => state.vrm)

  return (
    <>
      <Canvas camera={camera}>
        <spotLight position={[0, 0, 50]} />
        {vrm && <primitive object={vrm.scene} />}
      </Canvas>
    </>
  )
}


ReactDOM.render(
<Provider store={store}>
<App /> 
</Provider>

, document.getElementById('root')

)