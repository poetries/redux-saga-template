
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { fetchPoetryRequest } from '../actions/';

class IndexPage extends Component {
    render() {
        const {poetryList} = this.props
          return <div>
            <button className="btn" onClick={e=>this.props.fetchPoetryRequest({user:'poetries',age:23})}>
                    fetPoetryList
            </button>
            {this.props.poetryList.fetching&&<div>加载中....</div>}
            {poetryList&&poetryList.data.map(v=><div key={`${v.poetry_title}${Math.random()}`}>{v.poetry_title}-{v.author}-{v.poetry_body}</div>)}
          </div>
      }
}


const mapStateToProps = (state, ownProps) => ({
    poetryList:state.poetry
})

export default connect(mapStateToProps, {
    fetchPoetryRequest
})(IndexPage)