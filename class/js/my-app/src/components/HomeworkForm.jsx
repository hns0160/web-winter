import React from 'react';


class HomeworkForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            submitted: false
        }
        // this.summation = 0
        this.incrementClick = this.incrementClick.bind(this)
        this.toggleClick = this.toggleClick.bind(this)
    }


    incrementClick(){
        const newState = {counter: this.state.counter + 1}
        this.setState(newState)

     
    }

    submittedString(){
        return this.state.submitted ? "True":"False"
    }

    toggleClick(){
        this.setState(prevState => ({submitted : !prevState.submitted}))
    }

    preventRefresh(event){
        event.preventDefault()
    }

    // summ(){
    //     this.summation = 1 + this.state.counter
    // }

    render() {
        return (
            <form onSubmit={this.preventRefresh}>
                <h2>
                    
                    <button onClick={this.incrementClick}>{this.state.counter}</button>
                    {/* <button onClick={this.summ()}>{this.summation}</button> */}
                </h2>

                <h2>
                    <button onClick={this.toggleClick}>{this.submittedString()}</button>
                </h2>
            </form>
            
        )
    }
}



export default HomeworkForm