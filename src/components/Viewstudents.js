import React , {Component} from 'react';
import axios from 'axios';


export default class Viewstudents extends Component{

    constructor(props){
        super(props);

        this.state={
                student:{}
           
        };
    }

    componentDidMount(){
        
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/student/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    student:res.data.students
                });

                console.log(this.state.student);
            
            }
        });
     }

   

    render(){

        const {StudentId,StudentName,Address,Contact} = this.state.student;

        return(

    <div className='row'>
    <div className='col-lg-9 mt-2 mb-2'>

      <h1 className='container'></h1>
       <h1 className='container'>View Student Details</h1>
       
          <div>
           <h3>{StudentId}</h3>

           <dl className="row">
            <dt className= "col-sm-3">Student Name</dt>
            <dd className="col-sm-9">{StudentName}</dd>
          
            <dt className= "col-sm-3">Address</dt>
            <dd className="col-sm-9">{Address}</dd>
          
            <dt className= "col-sm-3">Contact Number</dt>
            <dd className="col-sm-9">{Contact}</dd>
          
           </dl>

             </div>



    </div>
   
    </div>
        )
    }

}