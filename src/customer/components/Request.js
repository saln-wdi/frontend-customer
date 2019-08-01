import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import {indexing} from '../api'
import './Request.css'

class Request extends Component {
    state = 
    {
        date: "",
        description: ""
    }

    handleChange = event => {
        this.setState({
        [event.target.name]: event.target.value
    })
    }

    handleSubmit = event => {
        event.preventDefault()
        const {uid, cid, sid} = this.props.match.params
        indexing(this.props.user, uid, cid, sid, this.state)
        .then(
            res => {
                this.setState({
                    date: "",
                    description: ""
                })
                this.props.history.goBack()
            }
        )
        .catch(error => console.log(error))

    }
    render() {
        return(
            
                 <div className="card">
                <h5 class="card-header info-color white-text text-center py-4">
        <strong id ="head-color">Send request</strong>
    </h5>
               <form className="text-center" id ="eds" onSubmit={this.handleSubmit}>
               <div className="md-form mt-3">
                   <label  id="nlabel" htmlFor="date">Date</label>
                   <input type="date" name="date"
                   value={this.state.date} onChange={this.handleChange}/></div>
                   <div className="md-form mt-3">
                   <label id="dlabel" htmlFor="description">Description</label>
                   <textarea className="form-control" id="formGroupExampleInput" name="description"
                   value={this.state.description} onChange={this.handleChange}/></div>
                   <input id ="ser" className="btn btn-secondary" type="submit" value="Request" />
               </form>
            </div>
        )
    }
}

export default withRouter(Request)