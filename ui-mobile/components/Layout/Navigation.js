/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../Link';

import config from '../../tools/config';

const { routers } = config;

class Navigation extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <nav className={`mdl-navigation ${this.props.className || ''}` } ref={node => (this.root = node)}>
        {routers.map((router, index) => {
          return (
            <Link key={index} className="mdl-navigation__link" to={router.uri}>{router.name}</Link>
          );
        })}
      </nav>
    );
  }

}

export default Navigation;
