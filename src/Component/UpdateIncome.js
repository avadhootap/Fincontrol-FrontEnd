import React, { Component } from 'react'
import IncomeService from '../Services/IncomeService';

class UpdateIncome extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            amount: "",
            date: "",
            description: "",
            categoryType: "",
        }
        this.changeamountHandler = this.changeamountHandler.bind(this);
        this.changedateHandler = this.changedateHandler.bind(this);
        this.changedescriptionHandler = this.changedescriptionHandler.bind(this);
        this.changecategoryTypeHandler = this.changecategoryTypeHandler.bind(this);
        this.updateIncome = this.updateEIncome.bind(this);
    }

    componentDidMount(){
        IncomeService.getIncomeById(this.state.id).then( (res) =>{
            let income = res.data;
            this.setState({amount: income.amount,
                date: income.date,
                description : income.description,
                categoryType: income.categoryType

            });
        });
    }

    updateIncome = (e) => {
        e.preventDefault();
        let income = {amount: this.state.amount, date: this.state.date, description: this.state.description,categoryType:this.state.categoryType};
        console.log('income => ' + JSON.stringify(income));
        console.log('id => ' + JSON.stringify(this.state.id));
        IncomeService.updateIncome(income, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    }
    
    changeamountHandler= (event) => {
        this.setState({amount: event.target.value});
    }

    changedateHandler= (event) => {
        this.setState({date: event.target.value});
    }

    changedescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changecategoryTypeHandler= (event) => {
        this.setState({categoryType: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Income</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Amount: </label>
                                            <input placeholder="Amount" name="amount" className="form-control" 
                                                value={this.state.amount} onChange={this.changeamountHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Date: </label>
                                            <input placeholder="Date" name="date" className="form-control" 
                                                value={this.state.date} onChange={this.changedateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changedescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Category Type: </label>
                                            <input placeholder=" Category Type" name="categoryType" className="form-control" 
                                                value={this.state.categoryType} onChange={this.changecategoryTypeHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateIncome}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateIncome;