import { useCallback } from 'react';
import { Handle } from '@xyflow/react';
import Loop from '../../assets/loop_svg';
 
function LoopNode(props) {
 
  return (
    <div style={{ display:'flex', border:'1px solid #c3c9d5', width:70, height:70, borderRadius:4, padding:5, justifyContent:'center', alignItems:'center', color:'#c3c9d5',backgroundColor: '#414244'}}>
        <Handle type="target" position="left" style={{ background: '#c3c9d5', width: 5,  borderRadius:0, height:10}} />
        
      <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', color:'#c3c9d5'}}>
      <Loop/>
      </div>
      <Handle type="source" position="right" id="a" style={{ background: '#c3c9d5', width: 10, height:10, left:70, top: 25  }} />
      <Handle type="source" position="right" id="b" style={{ background: '#c3c9d5', width: 10, height:10, left:70, top: 55 }} />
    </div>
  );
}
 
export default LoopNode;