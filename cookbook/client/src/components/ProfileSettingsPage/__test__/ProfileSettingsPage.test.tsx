import React from 'react';
import { shallow } from 'enzyme';
import ProfileSettingsPage from '../index';
import { ICookbook, IRecipe } from '../../../interfacesServer';

describe('profile settings page component', () => {
  const props = {
    user: {
      id: 1,
      name: 'Tet Test',
      photo: 'images/user1.png',
      email: 'johndoe@test.com',
      password: 'user1',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      savedRecipes: [] as IRecipe[],
      savedCookbooks: [] as ICookbook[],
    },
    // changeUserBio: jest.fn(),
    // changeUserName: jest.fn(),
    // changeUserEmail: jest.fn(),
    // changeUserPassword: jest.fn(),
    // updateUserPhoto: jest.fn(),
    logOut: jest.fn(),
    deleteUser: jest.fn(),
  };

  const component = shallow(<ProfileSettingsPage {...props} />);

  it('renders the <ProfileSettingsPage /> component', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders default image if no user photo passed', () => {
    const newProps = {
      ...props,
      user: {
        id: 1,
        name: 'Test Test',
        photo: '',
        email: 'johndoe@test.com',
        password: 'user1',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        savedRecipes: [] as IRecipe[],
        savedCookbooks: [] as ICookbook[],
      },
    };
    const wrapper = shallow(<ProfileSettingsPage {...newProps} />);
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe('./assets/images/photo-mask.png');
  });

  it('delete user on delete button click', () => {
    const btn = component.find('.profile-page--settings__btns__btn--delete');
    btn.simulate('click');
    expect(props.deleteUser).toHaveBeenCalled();
  });
});
