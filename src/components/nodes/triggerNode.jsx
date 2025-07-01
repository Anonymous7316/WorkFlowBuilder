import { useCallback } from 'react';
import { Handle } from '@xyflow/react';
import Trigger from '../../assets/trigger_svg';
 
function TriggerNode(props) {
 
  return (
    <div style={{ display:'flex', border:'1px solid white', width:70, height:70, borderRadius:'30px 4px 4px 30px', padding:5, justifyContent:'center', alignItems:'center', color:'white',backgroundColor: '#414244'}}>
        
      <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', color:'white'}}>
      <Trigger/>
      </div>
      <Handle type="source" position="right" id="a" style={{ background: 'white', width: 10, height:10 }} />
    </div>
  );
}
 
export default TriggerNode;