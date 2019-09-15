import React from 'react';
import './App.css';
import Page1 from './components/Page1';
import Footer from './components/Footer';

export const AppContext = React.createContext('not a date');
export const AppProvider = AppContext.Provider;

function App() {

    return (
        <AppProvider value={new Date().toLocaleDateString()}>
            <div className="App">
                <Page1/>
            </div>
            <Footer/>
        </AppProvider>
    );
}

export default App;
