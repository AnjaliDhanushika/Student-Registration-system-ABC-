import React , {Component} from 'react';

export default class Header extends Component{
    render(){
        return(
        
         <nav>
            <div class="logo">ABC</div>
            <input type="checkbox" id="click" />
            <label for="click" class="menu-btn">
              <i class="fas fa-bars"></i>
            </label>
            <ul>
              <li><a class="active" href="/">Home</a></li>
              <li><a href="/Register">Register Student</a></li>
              <li><a href="/about"> About </a></li>
              <li><a href="/view">CONTACT US</a></li>
              <li><a href="#">Feedback</a></li>
            </ul>
          </nav>
       
            
      )
        
    
    }
}