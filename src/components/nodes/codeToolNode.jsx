import { useCallback } from 'react';
import { Handle } from '@xyflow/react';
import Tool from '../../assets/codeTool_svg';
 
function codeToolNode(props) {
 
  return (
    <div style={{ display:'flex', border:'1px solid #c3c9d5', width:50, height:50, padding:5, justifyContent:'center', alignItems:'center', color:'#c3c9d5', backgroundColor:'#2c2d3a', borderRadius:'100%'}}>
      <Handle type="target" position="top" style={{ background: '#c3c9d5', width: 10, height:10 }} />
      <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', color:'#c3c9d5', scale:0.6}}>
      <Tool/>
      </div>
    </div>
  );
}
 
export default codeToolNode;