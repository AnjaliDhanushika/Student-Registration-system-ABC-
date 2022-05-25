import React , {Component} from 'react';
import axios from 'axios';



export default class StaffDetails extends Component{
   constructor(props){
       super(props);

       this.state={
          stf:{}
       };      
   }

   componentDidMount(){
    
    const id  = this.props.match.params.id;

    axios.get(`/http://localhost:8070/staf/${id}`).then((res)=>{

        if (res.data.success){
            this.setState({
                stf:res.data.stf
            });

            console.log(this.state.stf)
              
           }
        });
   }

   
   render(){
    const {Name,Address,Gender,Position} = this.state.stf;
    
        return(  
                 
          <div className = 'container' style={{marginTop:'20px'}}>
         
         
       <h1>E{Name}<span class="badge badge-secondary"></span></h1>
       <h2> {Address} <span class="badge badge-secondary"></span></h2>
       <h3> {Gender}  <span class="badge badge-secondary"></span></h3>
       <h4> {Position} <span class="badge badge-secondary"></span></h4>
     
          </div>
        )

    }
}