import React from "react";
import Button from "./components/button/Button"
import './App.css';


const App: React.FC = () => {
    return (
        <Button state='text-only' text='click' size='large'/>
    );
}

export default App;
