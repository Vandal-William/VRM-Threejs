import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { VRM } from '@pixiv/three-vrm'
import Maya from '../asset/models/Maya.vrm'

const vrmData = (store) => (next) => (action) => {
    
    const loader = new GLTFLoader();

    if(action.type === 'IMPORT-VRM'){
        loader.load( Maya,  gltf => {
            VRM.from(gltf).then((response) => {
            store.dispatch({
                type: 'SAVE_VRM',
                vrm: response
                });
              response.scene.rotation.y = Math.PI
              return
            })
        
          })
        
    }
  
    next(action);
  };
  
  export default vrmData;