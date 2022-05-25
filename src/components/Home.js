import React , {Component} from 'react';
import axios from 'axios';

export default class Home extends Component {
  constructor(props){
    super(props);

    this.state={
      Staff:[]
    };

  }

  componentDidMount(){
    this.retrieveStaff();
  }

  retrieveStaff(){
    axios.get("http://localhost:8070/staf").then(res => {
      if(res.data.success){
        this.setState({
          Staff:res.data.existingstaff
        });

        console.log(this.state.Staff)
      }
    });

  }

   onDelete= (id)=>{
    axios.delete(`http://localhost:8070/staf/delete/${id}`).then((res) =>{
       alert("Delete Successfully");
       this.retrieveStaff();
    })
  }
   
  filterData(Staff,searchKey){
    const result = Staff.filter((post)=>
    
       post.Name.toLowerCase().includes(searchKey)||
       post.Address.toLowerCase().includes(searchKey)||
       post.Gender.toLowerCase().includes(searchKey)||
       post.Position.toLowerCase().includes(searchKey)
    )

    this.setState({Staff:result})
  }

  handleSearchArea = (e) =>{
    const searchKey =e.currentTarget.value;

    axios.get("http://localhost:8070/staf").then(res => {
      if(res.data.success){
         this.filterData(res.data.existingstaff,searchKey) 
      }
    });

  }
  render(){
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-lg-9 mt-2 mb-2'>
             <h1 className='container'>All Staff Member List</h1>
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
              <th scope='col'>Name</th>
              <th scope='col'>Address</th>
              <th scope='col'>Gender</th>
              <th scope='col'>Position</th>
              <th scope='col'>Action</th>      
              </tr>  
            </thead>  
          <tbody>
            {this.state.Staff.map((Staff,index)=>(
                <tr >
                    <th scope='row'>{index + 1 }</th>

                        
                        <td >{Staff.Name}</td>
                        <td >{Staff.Address}</td>
                        <td>{Staff.Gender}</td>
                        <td>{Staff.Position}</td>

                       
                        <td>
                        <a className='btn btn-warning' href={`/staff/${Staff._id}`}>
                          <i className='fa fa-eye'></i>&nbsp;View
                        </a>
                              &nbsp;
                        <a className='btn btn-info' href={`/edit/${Staff._id}`}>
                          <i className='fas fa-edit'></i>&nbsp;Edit
                        </a>
                           &nbsp;
                        <a className='btn btn-danger' href='#' onClick={() =>this.onDelete(Staff._id)}>
                          <i className='fa fa-trash'></i>&nbsp;Delete
                        </a>

                        <i class=""></i>
                    </td>
                     
                </tr>
            ))}
          </tbody>

          </table>

          <button className='btn btn-success'><a href='/add'style={{textDecoration:'none' , color:'white'}}>Add New Staff</a></button>

      </div>
    );
  }

}