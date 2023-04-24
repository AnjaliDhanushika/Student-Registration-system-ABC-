import React , {Component} from 'react';
import axios from 'axios';


export default class Updatestudent extends Component{

    constructor(props){
        super(props);

        this.state={
            StudentId:"",
            StudentName:"",
            Address:"",
            Contact:""
           
        }
    }

    onSubmit=(e)=>{
        e.preventDefault();
        const id = this.props.match.params.id;

        const {StudentId,StudentName,Address,Contact} = this.state;  
        
        const data = {
            StudentId:StudentId,
            StudentName:StudentName,
            Address:Address,
            Contact:Contact
        }

        console.log(data)
        
        axios.put(`http://localhost:8070/student/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Student Details Updated")
                this.setState(

                   {
                    StudentId:"",
                    StudentName:"",
                    Address:"",
                    Contact:""
                   }

                )
            }
        })
    
    } 

    componentDidMount(){
        
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/student/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    StudentId:res.data.students.StudentId,
                    StudentName:res.data.students.StudentName,
                    Address:res.data.students.Address,
                    Contact:res.data.students.Contact
                         
                });

                console.log(this.state.student);
            
            }
        });
     }


    render(){
        return(

    <div className='row'>
    <div className='col-lg-9 mt-2 mb-2'>

      <h1 className='container'></h1>
       <h1 className='container'>Update Student Details</h1>
       
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

</form>

&nbsp;
           <button type="submit" class="btn btn-dark" style={{marginTop:'15px'}} onClick={this.onSubmit} > Update </button>



    </div>

</div>
       

        )
    }

}