import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import history from './history';
import './assets/style/common.less';
import Home from './routes/home';
import Mine from './routes/mine';
import Profile from './routes/profile';
import { ConnectedRouter } from 'connected-react-router';
import { ConfigProvider } from 'antd';
import Tab from './components/tabs';
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {/* <ConfigProvider></ConfigProvider> */}
      <main className="main-container">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/mine" exact component={Mine}></Route>
          <Route path="/profile" exact component={Profile}></Route>
        </Switch>
      </main>
      <Tab></Tab>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
