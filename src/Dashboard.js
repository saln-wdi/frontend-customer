import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import './Dashboard.css'


class Dashboard extends Component {

    handleClick = event => {
        event.target.value.length ? this.props.history.push('/users') : this.props.history.push('/requests')
    }
    render () {
        return (
            <div id="dash"> 
           
                <div className="display-1 img-fluid">
                <h2>My Dashboard</h2>
                <button id="first" className="btn btn-secondary" value="c" onClick={this.handleClick}>Company</button>
                <button id="first" className="btn btn-secondary" onClick={this.handleClick}>Requests</button>
            </div></div>
        )
    }
}

export default withRouter(Dashboard)