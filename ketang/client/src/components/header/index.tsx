import React, { useState, CSSProperties } from 'react';
import { Icon } from 'antd';
import './index.less';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';

let logo = require('../../assets/images/logo.png');
const duration = 600;
const defaultStyle: CSSProperties = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0
};
const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 }
};

interface Props {
  currentCategory: string;
  setCurrentCategory: (currentCategory: string) => any;
}

function Header(props: Props) {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const setCategory = (e: React.MouseEvent<HTMLUListElement>) => {
    let target: HTMLUListElement = e.target as HTMLUListElement;
    let category = target.dataset.category;
    props.setCurrentCategory(category);
    setIsMenuShow(false);
  };
  return (
    <header className="home-header">
      <div className="logo-header">
        <img src={logo.default} />
        <Icon type="bars" onClick={() => setIsMenuShow(!isMenuShow)} />
      </div>
      <Transition in={isMenuShow} timeout={duration}>
        {(state) => (
          <ul
            className="category"
            onClick={setCategory}
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            <li
              data-category="all"
              className={classNames({ active: props.currentCategory == 'all' })}
            >
              All
            </li>
            <li
              data-category="react"
              className={classNames({
                active: props.currentCategory == 'react'
              })}
            >
              React
            </li>
            <li
              data-category="vue"
              className={classNames({ active: props.currentCategory == 'vue' })}
            >
              Vue
            </li>
          </ul>
        )}
      </Transition>
    </header>
  );
}

export default Header;
