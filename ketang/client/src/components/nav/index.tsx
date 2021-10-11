import React, { PropsWithChildren } from 'react';
import { Link, NavLink, RouteComponentProps } from 'react-router-dom';
import { Icon } from 'antd';
import { History } from 'history';

import './index.less';
type Props = PropsWithChildren<{
  history: History;
}>;

function Nav(props: Props) {
  return (
    <nav className="nav-header">
      <Icon type="left" onClick={() => props.history.goBack()} />
      {/* {props.children} */}
      111
    </nav>
  );
}

export default Nav;
