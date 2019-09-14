import React from 'react';
import './App.css';
import Page1 from './components/Page1';

export const AppContext = React.createContext('xxxx');
export const AppProvider = AppContext.Provider;

function App() {

    return (
        <AppProvider value={new Date().toUTCString()}>
            <div className="App">
                <Page1/>
            </div>
        </AppProvider>
    );
}

export default App;
