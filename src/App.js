import React , {Component} from 'react';
import{BrowserRouter, Routes,Route} from 'react-router-dom';
import Addstudent from './components/Addstudent';
import Home from './components/Home';
import Header from './components/Header';
import StudentDetails from './components/StudentDetails';
import ProgrammeDetails from './components/ProgrammeDetails';
import AddProgram from './components/AddProgram';
import RegisterForm from './components/RegisterForm';
import Updatestudent from './components/Updatestudent';
import './App.css';
import Viewstudents from './components/Viewstudents';
import ViewProgram from './components/ViewProgram';
import About from './components/About';


export default class App extends Component{
    render(){

        const isBackgroundRed = true;

        return(
    

            <BrowserRouter>
            <div className="App">  
            <div className={isBackgroundRed ? 'background-red' : 'background-blue'} />

                            <Header></Header>
                    <Routes>

                     <Route path ="/"  exact element = {<Home/>}></Route>
                     <Route path ="/about"  exact element = {<About/>}></Route>
                     <Route path ="/contact"  exact element = {<Addstudent/>}></Route>
                     <Route path ="/add"  exact element = {<Addstudent/>}></Route>
                     <Route path ="/view"  exact element = {<StudentDetails/>}></Route>
                     <Route path ="/edit/:id"  exact element = {<Updatestudent/>}></Route>
                     <Route path ="/student/:id"   exact element = {<Viewstudents/>}></Route>
                     <Route path ="/viewp"  exact element = {<ProgrammeDetails/>}></Route>
                     <Route path ="/addp"  exact element = {<AddProgram/>}></Route>
                     <Route path ="/Register"   exact element = {<RegisterForm/>}></Route>
                     <Route path ="/programme/:id"   exact element = {<ViewProgram/>}></Route>



        
                    </Routes>


        
                </div>
            </BrowserRouter>

            
        )

    }
}