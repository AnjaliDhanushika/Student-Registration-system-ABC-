import React , {Component} from 'react';
import axios from 'axios';


export default class UpdateProgram extends Component{

    constructor(props){
        super(props);

        this.state={
            programeId:"",
            ProgrameName:"",
            Duration:"",
            Cost:""
           
        }
    }

    onSubmit=(e)=>{
        e.preventDefault();
        const id = this.props.match.params.id;

        const {StudentId,StudentName,Address,Contact} = this.state;  
        
        const data = {
            programeId:programeId,
            ProgrameName:ProgrameName,
            Duration:Duration,
            Cost:Cost
        }

        console.log(data)
        
        axios.put(`http://localhost:8070/programme/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Programme Details Updated")
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

    componentDidMount(){
        
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/programme/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    programeId:res.data.students.programeId,
                    ProgrameName:res.data.students.ProgrameName,
                    Duration:res.data.students.Duration,
                    Cost:res.data.students.Cost
                         
                });

                console.log(this.state.programms);
            
            }
        });
     }
     render(){
        return(

         <div className='container'>
         <div className='row'>
         <h1 className='container'>Update  Programme Details</h1>
      

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
           <button type="submit" class="btn btn-dark" style={{marginTop:'15px'}} onClick={this.onSubmit} > Update </button>



    </div>

</div>



        )

     }
    }