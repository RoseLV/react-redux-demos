import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { increase, decrease } from './action.js'

class Counter extends Component {
  constructor(props) {
    super(props);
    // this.incrementAsync = this.incrementAsync.bind(this);
    // this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  static mapStateToProps = state => {
    // mapStateToProps() in Connect(Counter) must return a plain object. 
    // Instead received 0.
    // return state (not ok)
    return {
      count: state
    }
  }
  static mapDispatchToProps = dispatch => {
    return bindActionCreators({
      increase,
      decrease
    }, dispatch)
  }

  render() {
    const { count, increase, decrease } = this.props
    return (
      <p>
        
        Clicked: {count} times
        {' '}
        <button onClick={increase}>
          +
        </button>
        {' '}
        <button onClick={decrease}>
          -
        </button>
        {'                 '}
      </p>
    )
  }
}

Counter.propTypes = {
  // value: PropTypes.number.isRequired,
  // onIncrement: PropTypes.func.isRequired,
  // onDecrement: PropTypes.func.isRequired
}

export default connect(
  Counter.mapStateToProps,
  Counter.mapDispatchToProps
)(Counter);
