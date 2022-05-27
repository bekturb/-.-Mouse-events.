import './App.scss';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import All from "./components/pages/All";
import Concerts from "./components/pages/Concerts";
import Exhibitions from "./components/pages/Exhibitions";
import Fairs from "./components/pages/Fairs";
import Festivals from "./components/pages/Festivals";
import Free from "./components/pages/Free";
import Kids from "./components/pages/Kids";
import Movie from "./components/pages/Movie";
import Music from "./components/pages/Music";
import Performances from "./components/pages/Performances";
import Sport from "./components/pages/Sport";
import Various from "./components/pages/Various";
import Sidebar from "./components/Sidebar";
import PopularEvents from "./components/pages/PopularEvents";
import SingleDetailPage from "./components/pages/SingleDetailPage";
import Order from "./components/pages/Order";
import Footer from "./components/pages/Footer";

function App() {


    return (
        <div className="App">
            <Header/>
            <Sidebar>
                <Routes>
                    <Route path='/' element={<PopularEvents/>}/>
                    <Route path='/all/:id' element={<All/>}/>
                    <Route path='/concerts/:id' element={<Concerts/>}/>
                    <Route path='/exhibitions/:id' element={<Exhibitions/>}/>
                    <Route path='/fairs/:id' element={<Fairs/>}/>
                    <Route path='/festivals/:id' element={<Festivals/>}/>
                    <Route path='/free/:id' element={<Free/>}/>
                    <Route path='/kids/:id' element={<Kids/>}/>
                    <Route path='/movie/:id' element={<Movie/>}/>
                    <Route path='/music/:id' element={<Music/>}/>
                    <Route path='/performances/:id' element={<Performances/>}/>
                    <Route path='/sport/:id' element={<Sport/>}/>
                    <Route path='/other/:id' element={<Various/>}/>
                    <Route path='/single/:id' element={<SingleDetailPage/>}/>
                    <Route path='/order/:id' element={<Order/>}/>
                </Routes>
            </Sidebar>
            <Footer/>
        </div>
    );
}

export default App;
