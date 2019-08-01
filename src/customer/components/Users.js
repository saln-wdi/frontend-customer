import React, {Component} from 'react'
import {index} from '../api'
import { Link, withRouter } from 'react-router-dom'
import './Category.css'


class Users extends Component {
    state = {
        users:[]
    }
    componentDidMount = () => {
        index(this.props.user)
        .then( 
            res => 
                 this.setState({
                    users: res.data.users
                })
            
        )
        .catch(error => console.error(error))
    }
    render() {
        return(
            <div>
                 <h3> Lists of business</h3>
                {this.state.users.map(user => 
                
                    <Link  to={`/users/${user.id}`}  key={user.id}>
                        <h1 className="list-group-item-success">{user.user}</h1>
                    </Link> 
                   // console.log(user.user)  
                )}
                
            </div>
        )  
    }
    
}

export default withRouter(Users)