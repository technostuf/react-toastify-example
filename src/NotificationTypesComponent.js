import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotificationTypesComponent = () => {
    const showErrorToast = () => {
        toast.error("Error message", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000
        })
    };
    const showSuccessToast = () => {
        toast.success("Success message")
    };

    const showInfoToast = () => {
        toast.info("Info message")
    };

    const showWarnToast = () => {
        toast.warn("Warning message")
    };

    return (
        <div className="container">
            <div className="row register-form ">
                <h1>React toast notification types example - technostuf.com</h1>
                <div className="col-md-6" >
                    <div className="row mb-5">
                        <button className="btn btn-danger" onClick={showErrorToast}>Show Error Notification</button>
                    </div>
                    <div className="row mb-5">
                        <button className="btn btn-success" onClick={showSuccessToast}>Show Success Notification</button>
                    </div>
                    <div className="row mb-5">
                        <button className="btn btn-info" onClick={showInfoToast}>Show Info Notification </button>
                    </div>
                    <div className="row mb-5">
                        <button className="btn btn-warning" onClick={showWarnToast}>Show Warning Notification</button>
                    </div>
                    <ToastContainer />
                </div >
            </div >
        </div>
    )
}
export default NotificationTypesComponent;