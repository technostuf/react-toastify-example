import React from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotificationComponent = () => {
    const showToast = () => {
        toast.success("Success message")
    };

    return (
        <div className="container">
            <div className="row register-form ">
                <h1>React toast notification example - technostuf.com</h1>
                <div className="col-md-6" >
                    <button className="btn btn-primary" onClick={showToast}>Show Notification</button>
                    <ToastContainer />
                </div >
            </div >
        </div>
    )
}
export default NotificationComponent;