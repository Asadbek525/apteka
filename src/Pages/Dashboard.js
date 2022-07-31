import { Fragment } from "react";
import { Routes, Route } from 'react-router-dom'
import AddMedicine from "../Copmonents/Add_medicine/AddMedicine";
import Header from "../Copmonents/Header/Header";


const Dashboard = () => {
    return (
        <Fragment>
            <header>
                <Header />
            </header>
            <main>
                <Routes>
                    <Route path="/in-medicine" element={<input />} />
                    <Route path="/out-medicine" element={<h1>vh</h1>} />
                    <Route path="/new-medicine" element={<AddMedicine />} />
                </Routes>
            </main>
        </Fragment>
    )
}

export default Dashboard;