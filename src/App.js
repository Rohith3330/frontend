// import logo from './logo.svg';
import React from 'react'
import './App.css';
import './bootstrap.min.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Landingpage from './screens/landingpage/Landingpage';
import Loginpage from './screens/LoginPage/Loginpage';
import Registerpage from './screens/Registerpage/Registerpage';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
const App=()=> (
    <BrowserRouter>
        <Header/>
        <main style={{minHeight:"93vh"}}>
            {/* <Landingpage/> */}
            <Routes>
                <Route  path="/" element={<Landingpage/>} />
                <Route  path="/login" element={<Loginpage/>} />
                <Route  path="/register" element={<Registerpage/>} />
            </Routes>
           
        </main>
        <Footer/>

    </BrowserRouter>
)
export default App;
