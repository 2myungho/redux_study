import { fireEvent, render, screen } from '@testing-library/react';
import Settings from './Settings';

test('shoud show Setting button, when render Setting Component', () => {
  //given
  const logout = jest.fn(() => '클릭');

  //when
  render(<Settings logout={logout} />);
  const settingButton = screen.getByRole('button');

  //then
  expect(settingButton).toBeDefined();
});

test('shoud show 로그아웃, when click dropdown button', () => {
  //given
  const logout = jest.fn(() => '클릭');
  render(<Settings logout={logout} />);
  const settingButton = screen.getByRole('button');

  //when
  fireEvent.click(settingButton);

  //then
  const logoutMenu = screen.getByRole('menuitem');
  expect(logoutMenu).toBeDefined();
});

test('shoud call logout function, when click 로그아웃', () => {
  //given
  const logout = jest.fn(() => '클릭');
  render(<Settings logout={logout} />);
  const settingButton = screen.getByRole('button');
  fireEvent.click(settingButton);
  const logoutMenu = screen.getByRole('menuitem');
  expect(logoutMenu).toBeDefined();

  //when
  fireEvent.click(logoutMenu);

  //then
  expect(logout).toBeCalled();
});
