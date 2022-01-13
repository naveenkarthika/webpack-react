import React from 'react';
import Image from './images/webpack.png'
import svg from './images/happy.svg'

function App() {
    return (
        <div className="app">
            <header>
                <h2>Welcome to React Webpack!!</h2>
            </header>
            <section>
                <img src={Image} alt="no image" />
                <img src={svg} alt="no image" />
            </section>
        </div>
    )
}

export default App;
