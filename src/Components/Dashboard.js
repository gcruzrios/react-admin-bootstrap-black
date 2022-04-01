import React from 'react'
import Footer from '../Layout/Footer';
import Nav from '../Layout/Nav';
import Sidebar from '../Layout/Sidebar';
import Table from '../Layout/Table';
import Title from '../Layout/Title';
const Dashboard = () => {
  return (
    <>
        <Nav/>
        <div id="layoutSidenav">            
            <Sidebar/>
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <Title/>
                        <Table/>
                    </div>
                </main>
                <Footer/>
            </div>
        </div>


    </>
  )
}

export default Dashboard