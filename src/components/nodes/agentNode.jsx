import { useCallback } from 'react';
import { Handle } from '@xyflow/react';
import Agent from '../../assets/agent_svg';
 
function AgentNode(props) {
 
  return (
    <div style={{ display:'flex', border:'1px solid #c3c9d5', width:210, height:70, borderRadius:4, padding:5, justifyContent:'center', alignItems:'center', color:'#c3c9d5',backgroundColor: '#414244'}}>
        <Handle type="target" position="left" style={{ background: '#c3c9d5', width: 5,  borderRadius:0, height:10}} />
        
      <div style={{display:'flex', justifyContent:'center', alignItems:'center',color:'white', gap:20, scale:0.8}}>
        <Agent/>
        <div style={{display:'flex', flexDirection:'column', gap:5}}>
            <label>Analyze the Info (AI Agent)</label>
            <label style={{ fontSize:12, color: '#8c8ea6'}}>Tools Agent</label>
        </div>
      </div>
      <Handle type="source" position="right" id="a" style={{ background: '#c3c9d5', width: 10, height:10 }} />
      <Handle type="source" position="bottom" id="model" style={{ background: '#8c8ea6', width: 10, height:10, left: 40, bottom:-5, borderRadius:0, border:'none', transform:'rotate(45deg)' }} />
      <Handle type="source" position="bottom" id="memory" style={{ background: '#8c8ea6', width: 10, height:10, left: 130, borderRadius:0, border:'none', transform:'rotate(45deg)', bottom:-5  }} />
      <Handle type="source" position="bottom" id="tool" style={{ background: '#8c8ea6', width: 10, height:10, left: 180, borderRadius:0, border:'none', transform:'rotate(45deg)', bottom:-5  }} />
    </div>
  );
}
 
export default AgentNode;