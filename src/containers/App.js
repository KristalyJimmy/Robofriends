import React, { useState, useEffect} from 'react';
import ErrorBoundry from '../components/ErrorBoundry';
import Searchbox from '../components/Searchbox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import './App.css';

function App() {
    // constructor(){
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0);

    // componentDidMount(){
    //     }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users =>setRobots(users));
    },[count])
   
    const onSearchChange = (event) => {
        setSearchfield (event.target.value);
      
    }

    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    }) 
    return !robots.length ? <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <button onClick={()=>setCount(count+1)}>ClickMe!</button>
                <Searchbox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
    
export default App;