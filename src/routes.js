
import React from 'react'
import {Route} from 'react-router'
import IndexPage from './containers/IndexPage'
import { Layout } from 'antd'
import App from './App'

export default  () => <Layout>
      <Route path="/" render={() => <App>
	    <Route exact path='/'  component={IndexPage}/>
      </App>}/>
</Layout>
