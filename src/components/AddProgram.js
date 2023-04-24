import React , {Component} from 'react';
import axios from 'axios';

export default class AddProgram extends Component{
    constructor(props){
        super(props);

        this.state={
            programeId:"",
            ProgrameName:"",
            Duration:"",
            Cost:""
           
        }
    }

    handleInputChange = (event)=>{
        const {name,value}= event.currentTarget;
        this.setState({
            ...this.state,
            [name]:value

        })
    }

    onSubmit=(e)=>{
        e.preventDefault();

        const {programeId,ProgrameName,Duration,Cost} = this.state;  
        
        const data = {
            programeId:programeId,
            ProgrameName:ProgrameName,
            Duration:Duration,
            Cost:Cost
        }

        console.log(data)
        
        axios.post('http://localhost:8070/programme/save',data).then((res)=>{
            if(res.data.success){
                this.setState(

                   {
                    programeId:"",
                    ProgrameName:"",
                    Duration:"",
                    Cost:""
                   }

                )
            }
        })
    
    } 

    render(){
        return(

         <div className='container'>
         <div className='row'>
         <h1 className='container'>Add  Programme Details</h1>
      

         <form>

<div className='container'>
      <label for="exampleInputId"> Programme Id</label>
      <input type="text" class="form-control" name='programeId' placeholder="" value={this.state.programeId} onChange={this.handleInputChange}/>
     
</div>

&nbsp;

<div className='container'>
     <label for="exampleInputName">Programme Name</label>
     <input type="text" class="form-control" name='ProgrameName' placeholder="" value={this.state.ProgrameName} onChange={this.handleInputChange}/>
</div>
&nbsp;
<div className='container'>
     <label for="exampleInputDuration">Duration</label>
     <input type="text" class="form-control" name='Duration'  placeholder="" value={this.state.Duration} onChange={this.handleInputChange}/>
</div>
&nbsp;
<div className='container'>
     <label for="exampleInputContact">Cost</label>
     <input type="text" class="form-control" name='Cost' placeholder="" value={this.state.Cost} onChange={this.handleInputChange}/>
</div>
&nbsp;
</form>

&nbsp;
           <button type="submit" class="btn btn-dark" style={{marginTop:'15px'}} onClick={this.onSubmit} > SAVE </button>



    </div>

</div>



        )
    }
}