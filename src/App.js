import React from 'react'
// import ReactDOM from 'react-dom'
import styles from './styles.css'
import { hot } from 'react-hot-loader'

class App extends React.PureComponent {
    state = {
        count: 0
    }

    render(){
        return (
            <div>
                <h1>Hello, from React</h1>
                <h2>Count: {this.state.count}</h2>
                <button onClick={() => this.setState(state => ({count: state.count + 1}))}>+</button>
                <button onClick={() => this.setState(state => ({count: state.count - 1}))}>-</button>
            </div>
        )
    }
}

export default hot(module)(App);