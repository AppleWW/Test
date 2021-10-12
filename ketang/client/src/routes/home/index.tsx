import React from 'react';
import Header from '../../components/header';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { CombinedState } from 'redux';
import HomeState from '../../store/reducers/home';
import mapDispatchToProps from '@/store/actions/home';
import { PropsWithChildren } from 'react-router/node_modules/@types/react';
type Props = PropsWithChildren<
  RouteComponentProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps
>;

function Home(props: Props) {
  return (
    <>
      <Header
        currentCategory={props.currentCategory}
        setCurrentCategory={props.setCurrentCategory}
      ></Header>
    </>
  );
}

const mapStateToProps = (state: any) => state.home;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
