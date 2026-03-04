import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LayoutDashboard, ShoppingBag, Users, Settings, ExternalLink } from 'lucide-react';
import { Navigate } from 'react-router-dom';

const Admin = () => {
    const { user } = useAuth();

    if (!user || user.role !== 'admin') {
        return <Navigate to="/login" />;
    }

    const stats = [
        { label: 'Total Sales', value: '$12,450', icon: <ShoppingBag size={20} /> },
        { label: 'New Customers', value: '124', icon: <Users size={20} /> },
        { label: 'Pending Orders', value: '18', icon: <LayoutDashboard size={20} /> },
    ];

    return (
        <div className="admin-page container">
            <div className="admin-header">
                <h1>Store Management</h1>
                <div className="admin-user">
                    <span>Admin: {user.name}</span>
                </div>
            </div>

            <div className="stats-grid">
                {stats.map((stat, i) => (
                    <div key={i} className="stat-card card">
                        <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-data">
                            <span className="stat-label">{stat.label}</span>
                            <span className="stat-value">{stat.value}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="admin-actions">
                <div className="action-card card">
                    <h2>Content Management</h2>
                    <p>Update products, prices, and navigation menu via Sanity Studio.</p>
                    <a href="#" className="btn-primary">
                        Open Sanity Studio <ExternalLink size={18} />
                    </a>
                </div>

                <div className="action-card card">
                    <h2>Store Settings</h2>
                    <p>Configure shipping rates, payment gateways, and store information.</p>
                    <button className="btn-outline">
                        <Settings size={18} /> Manage Settings
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Admin;
