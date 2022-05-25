import React , {Component} from 'react';
import axios from 'axios';

export default class EditStaff extends Component{

        constructor(props){
        super(props);

        this.state={
            Name:"",
            Address:"",
            Gender:"",
            Position:""
           
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
       
        const id = this.props.match.params.id;
        const {Name,Address,Gender,Position} = this.state;  
        
        const data = {
            Name:Name,
            Address:Address,
            Gender:Gender,
            Position:Position
        }

        console.log(data)
        
        axios.put(`http://localhost:8070/staf/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Staff Details Updated SuccesFully")
                this.setState(

                   {
                    Name:"",
                    Address:"",
                    Gender:"",
                    Position:""
                   }

                )
            }
        })
    
    } 

    
    componentDidMount(){
    
        const id = this.props.match.params.id;
 
        axios.get(`http://localhost:8070/staf/${id}`).then((res)=>{
    
            if (res.data.success){
                this.setState({
                    Name:res.data.staf.Name,
                    Address:res.data.staf.Address,
                    Gender:res.data.staf.Gender,
                    Position:res.data.staf.Position

                });
                   console.log(this.state.staf);
               }
            });
       }
    render(){
        return(
            <div className='container'>
               <h1> Edit Staff</h1>                    
             <form>

         <div className='container'>
              <label for="exampleInputName">Name</label>
              <input type="text" class="form-control" name='Name' placeholder="Enter Your Name" value={this.state.Name} onChange={this.handleInputChange}/>
     
         </div>

         <div className='container'>
            <label for="exampleInputAddress">Address</label>
            <input type="text" class="form-control" name='Address' placeholder="Address" value={this.state.Address} onChange={this.handleInputChange}/>
         </div>

        <div className='container'>
           <label for="exampleInputGender">Gender</label>
           <input type="text" class="form-control" name='Gender'  placeholder="Male/Female" value={this.state.Gender} onChange={this.handleInputChange}/>
        </div>

       <div className='container'>
           <label for="exampleInputPosition">Position</label>
           <input type="text" class="form-control" name='Position' placeholder="Position" value={this.state.Position} onChange={this.handleInputChange}/>
       </div>


        <button type="submit" class="btn btn-primary" style={{marginTop:'15px'}} onClick={this.onSubmit} >Update </button>
      </form>

     </div>
        )   
    }
}