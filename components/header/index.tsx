import React from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';
import { IHeaderProps } from './index.d';

const cx = classnames.bind(styles);

/**
 * 헤더
 */
const Header: React.FC<IHeaderProps> = ({
  onClickBack = () => null,
  title = '타이틀',
}) => (
  <header className={cx('header')}>
    <div className={cx('nav-header')}>
      <button
        type="button"
        className={cx('go-back-btn')}
        onClick={onClickBack}
      >
        <span className={cx('blind')}>이전</span>
      </button>
      <div className={cx('tit')}>{title}</div>
    </div>
  </header>
);

export default Header;
