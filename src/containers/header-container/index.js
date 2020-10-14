import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import detectActive from '@utils/detect-active';
import LayoutHeader from '@components/layouts/layout-header';
import MenuTop from '@components/menus/menu-top';
import Logo from '@components/elements/logo';

class HeaderContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      items: detectActive(
        [
          { title: 'Home', to: '/', active: false },
          { title: 'About', to: '/about', active: false },
        ],
        props.location,
      ),
    };
  }

  componentDidUpdate(nextProps) {
    const { items } = this.state;
    const { location } = this.props;

    if (location !== nextProps.location) {
      this.setState({
        items: detectActive(items, nextProps.location),
      });
    }
  }

  render() {
    const { items } = this.state;

    return <LayoutHeader left={<Logo />} center={<MenuTop items={items} />} />;
  }
}

export default compose(
  withRouter,
  connect(state => ({})),
)(HeaderContainer);
