import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../action/action';

class Home extends Component {

    constructor(props) {
        super(props);
        this.deleteHandler = this.deleteHandler.bind(this);
    }

    deleteHandler(id) {
        if(window.confirm("Are you sure to delete?")) {
            this.props.deleteUser(id);
        } else {
            return false;
        }
    }
    
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3">Home</h3>
                </div>
            </div>

            <div className="row">
                {
                    this.props.users ? (
                        this.props.users.map((item,key) => {
                            return (
                                <div className="col-md-4 mt-3" key={key}>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="text-center"> { item.name } </h3>
                                        </div>
                                        <div className="card-body">
                                            <p><strong>Email</strong>
                                            <span className="float-end"> { item.email } </span> </p>
                                        </div>
                                        <div className="card-footer">
                                            <Link to={`/update/${item.id}`} className="btn btn-outline-info">Edit</Link>
                                            <button onClick={() => this.deleteHandler(item.id)} className="btn btn-outline-danger float-end">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div className="col-md-12">
                            <div class="spinner-border text-success" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )
                }
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
        deleteUser: deleteUser
    }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);