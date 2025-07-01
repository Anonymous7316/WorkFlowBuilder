import { useCallback } from 'react';
import { Handle } from '@xyflow/react';
import Condition from '../../assets/condition';
 
function ConditionNode(props) {
 
  return (
    <div style={{ display:'flex', border:'1px solid white', width:70, height:70, borderRadius:4, padding:5, justifyContent:'center', alignItems:'center', color:'white',backgroundColor: '#414244'}}>
        <Handle type="target" position="left" style={{ background: 'white', width: 5,  borderRadius:0, height:10}} />
        
      <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', color:'white'}}>
      <Condition/>
      </div>
      <Handle type="source" position="right" id="a" style={{ background: 'white', width: 10, height:10, left:70, top: 25  }} />
      <Handle type="source" position="right" id="b" style={{ background: 'white', width: 10, height:10, left:70, top: 55 }} />
    </div>
  );
}
 
export default ConditionNode;