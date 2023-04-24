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
  render(){
    return (
      <div className='container'>
    
            <h1 className='container'>Badulla central Collage</h1>
             <h1 className='container'>All Staff Member List</h1>
          </div>

              )
           }
        }