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
});
