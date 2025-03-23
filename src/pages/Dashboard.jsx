import React from 'react';
import Sidebar from '../components/Sidebar';
import In4DashboardDisplay from '../components/In4DashboardDisplay';
const Dashboard = () => {
    return (
        <div className = 'flex'>
            <Sidebar />  
            <div className = 'ml-64 flex-1 h-screen p-6 bg-gray-400'>
                <In4DashboardDisplay/>
            </div>
        </div>

    )
}

export default Dashboard;