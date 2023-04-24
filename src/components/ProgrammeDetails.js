import React , {Component} from 'react';
import axios from 'axios';



export default class ProgrammeDetails extends Component{
   
    constructor(props){
        super(props);
    
        this.state={
          programms:[]
        };
    
      }
    
      componentDidMount(){
        this.retrieveProgramme();
      }
    
      retrieveProgramme(){
        axios.get('http://localhost:8070/programme').then(res => {
          if(res.data.success){
            this.setState({
            programms:res.data.existingprogramme
            });
    
            console.log(this.state.programms)
          }
        });
    
      }
    
       onDelete= (id)=>{
        axios.delete(`http://localhost:8070/programme/delete/${id}`).then((res) =>{
           alert("Delete Successfully");
           this.retrieveProgramme();
        })
      }
       
      filterData(programms,searchKey){
        const result = programms.filter((post)=>
        
           post.programeId.toLowerCase().includes(searchKey)||
           post.ProgrameName.toLowerCase().includes(searchKey)||
           post.Duration.toLowerCase().includes(searchKey)||
           post.Cost.toLowerCase().includes(searchKey)
        )
    
        this.setState({programms:result})
      }
    
      handleSearchArea = (e) =>{
        const searchKey =e.currentTarget.value;
    
        axios.get('http://localhost:8070/programme').then(res => {
          if(res.data.success){
             this.filterData(res.data.existingprogramme,searchKey) 
          }
        });
    
      }
      render(){
        return (
     
        
    <div className='container'>
      
            <div className='row'>
              <div className='col-lg-9 mt-2 mb-2'>
    
                <h1 className='container' style={{textAlign:'center' , color:'white' , fontSize:'5'}} >ABC INSITUTE PVT LTD</h1>
                 <h1 className='container'>All Programme  List</h1>
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
                  <th scope='col'>programeId</th>
                  <th scope='col'>ProgrameName</th>
                  <th scope='col'>Duration</th>
                  <th scope='col'>Cost</th>
                  <th scope='col'>Action</th>      
                  </tr>  
                </thead>  
              <tbody>
                {this.state.programms.map((programms,index)=>(
                    <tr >
                        <th scope='row'>{index + 1 }</th>
    
                            
                        <td > 
                              <a href={`/programme/${programms._id}`} >
                              {programms.programeId}
                              </a>
                              </td>

                            <td >{programms.ProgrameName}</td>
                            <td>{programms.Duration}</td>
                            <td>{programms.Cost}</td>
    
                           
                            <td>
                           
                                  &nbsp;
                            <a className='btn btn-info' href={`/edit/${programms._id}`}>
                              <i className='fas fa-edit'></i>&nbsp;Edit
                            </a>
                               &nbsp;
                               <a className='btn btn-primary' href='#' >
                              <i className='fa fa-print'></i>&nbsp;Print
                            </a>
                               &nbsp;
                            <a className='btn btn-danger' href='#' onClick={() =>this.onDelete(programms._id)}>
                              <i className='fa fa-trash'></i>&nbsp;Delete
                            </a>
                          
                           
    
    
    
                            <i className=""></i>
                        </td>
                         
                    </tr>
                ))}
              </tbody>
    
              </table>
    
              <a href="addp"><button>Add Programe</button></a> &nbsp;

          </div>
      
        );
      }
          
}
