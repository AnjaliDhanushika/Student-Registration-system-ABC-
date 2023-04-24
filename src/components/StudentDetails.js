import React , {Component} from 'react';
import axios from 'axios';



export default class StudentDetails extends Component{
   
    constructor(props){
        super(props);
    
        this.state={
          students:[]
        };
    
      }
    
      componentDidMount(){
        this.retrieveStudents();
      }
    
      retrieveStudents(){
        axios.get('http://localhost:8070/student').then(res => {
          if(res.data.success){
            this.setState({
              students:res.data.existingstudents
            });
    
            console.log(this.state.students)
          }
        });
    
      }
    
       onDelete= (id)=>{
        axios.delete(`http://localhost:8070/student/delete/${id}`).then((res) =>{
           alert("Delete Successfully");
           this.retrieveStudents();
        })
      }
       
      filterData(students,searchKey){
        const result = students.filter((post)=>
        
           post.StudentId.toLowerCase().includes(searchKey)||
           post.StudentName.toLowerCase().includes(searchKey)||
           post.Address.toLowerCase().includes(searchKey)||
           post.Contact.toLowerCase().includes(searchKey)
        )
    
        this.setState({students:result})
      }
    
      handleSearchArea = (e) =>{
        const searchKey =e.currentTarget.value;
    
        axios.get('http://localhost:8070/student').then(res => {
          if(res.data.success){
             this.filterData(res.data.existingstudents,searchKey) 
          }
        });
    
      }
      render(){
        return (
     
    <div className='container'>
      
            <div className='row'>
              <div className='col-lg-9 mt-2 mb-2'>
    
                <h1 className='container' style={{textAlign:'center' , color:'white' , fontSize:'5'}} >ABC INSITUTE PVT LTD</h1>
                 <h1 className='container'>All Sudents  List</h1>
              </div>
    
              <div className='col-lg-3 mt-2 mb-2'>
                  < input  className='form-control' type='search' placeholder='Search Here' name='searchQuery' 
                  onChange={this.handleSearchArea}>
                  </input>
              </div>
            </div>
            
              <table className = "table">
                <thead>
                  <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>StudentId</th>
                  <th scope='col'>StudentName</th>
                  <th scope='col'>Address</th>
                  <th scope='col'>Contact</th>
                  <th scope='col'>Action</th>      
                  </tr>  
                </thead>  
              <tbody>
                {this.state.students.map((students,index)=>(
                    <tr >
                        <th scope='row'>{index + 1 }</th>
    
                            
                            <td > 
                              <a href={`/student/${students._id}`} >
                              {students.StudentId}
                              </a>
                              </td>


                            <td >{students.StudentName}</td>
                            <td>{students.Address}</td>
                            <td>{students.Contact}</td>
    
                           
                            <td>
                          
                                  &nbsp;
                            <a className='btn btn-info' href={`/edit/${students._id}`}>
                              <i className='fas fa-edit'></i>&nbsp;Edit
                            </a>
                               &nbsp;
                               <a className='btn btn-primary' href='#' >
                              <i className='fa fa-print'></i>&nbsp;Print
                            </a>
                               &nbsp;
                            <a className='btn btn-danger' href='#' onClick={() =>this.onDelete(students._id)}>
                              <i className='fa fa-trash'></i>&nbsp;Delete
                            </a>
                          
                           
    
    
    
                            <i className=""></i>
                        </td>
                         
                    </tr>
                ))}
              </tbody>
    
              </table>
    
              <a href="add"><button>NEW STUDENT</button></a> &nbsp;


          </div>
        
        );
      }
          
}
