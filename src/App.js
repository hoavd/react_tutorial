import logo from './logo.svg';
import './App.css';
import Clock from "./component/Clock";
import {useEffect, useState} from 'react';
import {Counter} from './features/counter/Counter';
import SideMenu from "./page/SideMenu";


function App() {
    const [gmt, setGmt] = useState("");

    const container = {
        display: 'flex'
    };
    return (
        // <div className="App">
        //   <div style={container}>
        //     <div>
        //       <label>Múi giờ </label>
        //       <input type="number" maxLength={2} value={gmt} onChange={e => setGmt(e.target.value)} />
        //     </div>
        //     <Clock gmt ={gmt}/>
        //   </div>
        // </div>
        <div className="App">
            <header className="App-header">
                <SideMenu/>
                <Counter/>
                {/* <Login/> */}
            </header>
        </div>
    );
}

export default App;
