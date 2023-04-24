import React , {Component} from 'react';
import axios from 'axios';


export default class ViewProgram extends Component{

    constructor(props){
        super(props);

        this.state={
                program:{}
           
        };
    }

    componentDidMount(){
        
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/programme/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    program:res.data.programms
                });

                console.log(this.state.program);
            
            }
        });
     }

   

    render(){

        const {programeId,ProgrameName,Duration,Cost} = this.state.program;

        return(

    <div className='row'>
    <div className='col-lg-9 mt-2 mb-2'>

      <h1 className='container'></h1>
       <h1 className='container'>View Programme Details</h1>
       
          <div>
           <h3>{programeId}</h3>

           <dl className="row">
            <dt className= "col-sm-3">Programme Name</dt>
            <dd className="col-sm-9">{ProgrameName}</dd>
          
            <dt className= "col-sm-3">Duration</dt>
            <dd className="col-sm-9">{Duration}</dd>
          
            <dt className= "col-sm-3">Cost</dt>
            <dd className="col-sm-9">{Cost}</dd>
          
           </dl>

             </div>



    </div>
   
    </div>
        )
    }

}