import React from 'react';
import { shallow } from 'enzyme';
import Header from '../index';

describe('header component', () => {
  const props = {
    loggedInUserName: 'Test User',
  };

  const component = shallow(<Header {...props} />);

  it('renders the <Header /> component', () => {
    expect(component.exists('header')).toBe(true);
  });

  it('renders user name in link', () => {
    const link = component.find('.header__login');
    expect(link.text()).toBe(props.loggedInUserName);
  });

  it('renders Sign In if no props passed', () => {
    const wrapper = shallow(<Header />);
    const link = wrapper.find('.header__login');
    expect(link.text()).toBe('Sign in');
  });
});
