import { useCallback } from 'react';
import { Handle } from '@xyflow/react';
import AddValue from '../../assets/add_value';
 
function AddNode(props) {
 
  return (
    <div style={{ display:'flex', border:'1px solid white', width:70, height:70, borderRadius:4, padding:5, justifyContent:'center', alignItems:'center', color:'white',backgroundColor: '#414244'}}>
        <Handle type="target" position="left" style={{ background: 'white', width: 5,  borderRadius:0, height:10}} />
        
      <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', color:'white'}}>
        <AddValue/>
      </div>
      <Handle type="source" position="right" id="a" style={{ background: 'white', width: 10, height:10 }} />
    </div>
  );
}
 
export default AddNode;