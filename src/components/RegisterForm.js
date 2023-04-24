import React , {Component} from 'react';
import axios from 'axios';

export default class Addstudent extends Component{
    constructor(props){
        super(props);

        this.state={
            StudentId:"",
            StudentName:"",
            Address:"",
            Contact:""
           
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

        const {StudentId,StudentName,Address,Contact , program} = this.state;  
        
        const data = {
            StudentId:StudentId,
            StudentName:StudentName,
            Address:Address,
            Contact:Contact,
            program:program
        }

        console.log(data)
        
        axios.post('http://localhost:8070/student/save',data).then((res)=>{
            if(res.data.success){
                this.setState(

                   {
                    StudentId:"",
                    StudentName:"",
                    Address:"",
                    Contact:"",
                    program:""
                   }

                )
            }
        })
    
    } 

    render(){
        return(



         <div className='container'>
         <div className='row'>
         <h1 className='container'>Register Student to Programme</h1>
      

         <form>

<div className='container'>
      <label for="exampleInputId"> Student Id</label>
      <input type="text" class="form-control" name='StudentId' placeholder="Enter Student Id" value={this.state.StudentId} onChange={this.handleInputChange}/>
     
</div> &nbsp;

<div className='container'>
     <label for="exampleInputName">Student Name</label>
     <input type="text" class="form-control" name='StudentName' placeholder="type Full Name" value={this.state.StudentName} onChange={this.handleInputChange}/>
</div>

&nbsp;

<div className='container'>
     <label for="exampleInputAddress">Address</label>
     <input type="text" class="form-control" name='Address'  placeholder="address type" value={this.state.Address} onChange={this.handleInputChange}/>
</div>

&nbsp;

<div className='container'>
     <label for="exampleInputContact">Contact Number</label>
     <input type="text" class="form-control" name='Contact' placeholder="contact nu" value={this.state.Contact} onChange={this.handleInputChange}/>
</div>

&nbsp;


<div className='container'>
     <label for="exampleInputProgram">Programme Name</label>
     <input type="text" class="form-control" name='program' placeholder="contact nu" value={this.state.program} onChange={this.handleInputChange}/>
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