import React , {Component} from 'react';
import axios from 'axios';

export default class AddStaff extends Component{
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

        const {Name,Address,Gender,Position} = this.state;  
        
        const data = {
            Name:Name,
            Address:Address,
            Gender:Gender,
            Position:Position
        }

        console.log(data)
        
        axios.post('http://localhost:8070/staf/save',data).then((res)=>{
            if(res.data.success){
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

    render(){
        return(
         <div className='container'>
                 <h1>Add Staff </h1>

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

            

             

           <button type="submit" class="btn btn-primary" style={{marginTop:'15px'}} onClick={this.onSubmit} >Save </button>
         </form>

    </div>


        )
    }
}