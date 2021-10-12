import React from 'react';
import Header from '../../components/header';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import mapDispatchToProps from '@/store/actions/profile';
import { PropsWithChildren } from 'react-router/node_modules/@types/react';
type Props = PropsWithChildren<
  RouteComponentProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps
>;

function Profile(props: Props) {
  return (
    <>
      <Header
        currentCategory={props.currentCategory}
        setCurrentCategory={props.setCurrentCategory}
      ></Header>
    </>
  );
}

const mapStateToProps = (state: any) => state.profile;

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
