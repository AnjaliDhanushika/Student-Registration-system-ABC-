import React , {Component} from 'react';
import{BrowserRouter, Routes,Route} from 'react-router-dom';
import AddStaff from './components/AddStaff';
import EditStaff from './components/EditStaff';
import Home from './components/Home';
import StaffDetails from './components/StaffDetails';
import Header from './components/Header';

export default class App extends Component{
    render(){
        return(
    
            <BrowserRouter>
            <div className="App">  
                            <Header></Header>
                    <Routes>

                     <Route path ="/"  exact element = {<Home/>}></Route>
                     <Route path ="/add"  exact element = {<AddStaff/>}></Route>
                     <Route path ="/edit/:id"  exact element = {<EditStaff/>}></Route>
                     <Route path ="/staff/:id"  exact element = {<StaffDetails/>}></Route>
        
                    </Routes>
        
                </div>
            </BrowserRouter>
        )

    }
}