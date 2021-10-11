import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import mapDispatchToProps from '@/store/actions/mine';
import { MineState, LOGIN_TYPES } from '@/typings/state';
import { PropsWithChildren } from 'react-router/node_modules/@types/react';
import Nav from '@/components/nav';

type Props = PropsWithChildren<
  RouteComponentProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps
>;

function Mine(props: Props) {
  let content;
  if (props.loginState === LOGIN_TYPES.UN_VALIDATE) {
    content = null;
  }
  return (
    <section>
      <Nav history={props.history}>个人中心</Nav>
      {content}
    </section>
  );
}

const mapStateToProps = (state: any) => state.mine;
export default connect(mapStateToProps, mapDispatchToProps)(Mine);
