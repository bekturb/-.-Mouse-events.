import React, {useEffect} from 'react';
import {getAdvertising} from "../redux/actions/actions";
import {useDispatch, useSelector} from "react-redux";
import '../styles/Sidebar.scss'
import SideBarCard from "./pages/SideBarCard";

const Sidebar = ({children}) => {

    const dispatch = useDispatch()
    const {advertising} = useSelector(s => s)


    useEffect(() => {
        dispatch(getAdvertising())
    }, [dispatch])

    return (
        <section id='sidebar'>
            <div className="container">
                <div className="sidebar">
                    {
                            advertising.map(el => (
                                <SideBarCard key={el.id} el={el}/>
                            ))
                        }
                </div>
                <main>{children}</main>
            </div>
        </section>
    );
};

export default Sidebar;