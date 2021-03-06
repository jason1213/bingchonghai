/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';

const title = '首页';

class HomePage extends React.Component {

  static propTypes = {};

  componentDidMount() {
    document.title = title;
  }

  render() {

    /*
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: html }}
    />
    <h4>Articles</h4>
    */
    return (
      <Layout className={s.content}>
        <h4>{title}</h4>
      </Layout>
    );
  }

}

export default HomePage;
