import React from "react";
import "./FloatingMessage.css";

export default function FloatingMessage({ type = "success", message }) {
    return (
        <div className={`floating-message ${type}`}>
            {message}
        </div>
    );
}
