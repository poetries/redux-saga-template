/* eslint-disable */
import React, {Component, PropTypes} from 'react';
import './App.css';
import {connect} from 'react-redux'
import { Layout } from 'antd'

class App extends Component {
      constructor(props) {
	    super(props)
      }

      render() {

	    return (
		  <Layout className="layout">
			{this.props.children}
		  </Layout>
	    )
      }
}


const mapStateToProps = (state, ownProps) => {
      return {
      }
}

export default connect(mapStateToProps, {
})(App)