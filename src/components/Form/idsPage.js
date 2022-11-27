import Split from 'react-split'
import Form from './form'

export default function IdsPage() {

return (
<div className="App">
<Split
        className='flex'
        sizes={[50, 50]}
        style={{height:"100%",width:"100%",display:"flex",margin:"auto"}}
        minSize={500}
      >
        <div style={{height:"100%",width:"100%"}}>
          <Form/>
        </div>
        <Split
          direction='vertical'
          sizes={[50, 50]}
          style={{width:"100%",height:"100%",margin:"auto"}}
        >
          <div>HI</div>
          <div>HI</div>
        </Split>
</Split>
</div>
)
}