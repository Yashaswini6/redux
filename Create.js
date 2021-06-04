import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addUser } from '../action/action'; 

class Create extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        };
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(e) {
        e.preventDefault();
        const data = {
            id: Math.floor(Math.random() * 1000),
            name: this.state.name,
            email: this.state.email
        };
        console.log('new data', data);
        this.props.addUser(data);
    }

    render() {
        const { name, email } = this.state;
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3">Create</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={this.submitHandler} >
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" value={name} onChange={(e) => this.setState({ name: e.target.value }) } className="form-control" required ></input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" value={email} onChange={(e) => this.setState({ email: e.target.value }) } className="form-control" required ></input>
                                </div>

                                <div className="form-group mt-3">
                                    <input type="submit" value="Create" className="btn btn-outline-success"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

/* state handler */
const mapStateToProps = (state) => {
    return {
        users: state
    }
}

/* action dispatcher */
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addUser: addUser
    }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Create);