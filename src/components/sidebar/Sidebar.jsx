import "./Sidebar.css"
import { useNavigate } from "react-router-dom"
import {useState} from 'react'



export default function Sidebar() {
    
    const navigate = useNavigate()

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarLists">
                        <li className="sidebarItems active" onClick={() => {
                            navigate("/")
                        }}> Home  </li>
                        <li className="sidebarItems" onClick={() => {
                            navigate("/admin")
                        }}>
                            Administrator
                        </li>
                        <li className="sidebarItems" onClick={() => {
                            navigate("/employee")
                        }}>
                            Employee
                        </li>
                        <li className="sidebarItems"onClick={() => {
                            navigate("/rate")
                        }}>
                            Account
                            </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

