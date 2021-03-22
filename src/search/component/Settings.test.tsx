import { fireEvent, render, screen } from '@testing-library/react';
import Settings from './Settings';

test('Setting test', () => {
  const logout = jest.fn(() => '클릭');
  render(<Settings logout={logout} />);

  screen.debug();
  const button = screen.getByRole('button');
  expect(button).toBeDefined();
  fireEvent.click(button);

  screen.debug();
  // const li = screen.getByText('로그아웃');
  const li = screen.getByRole('menuitem');
  expect(li).toBeDefined();
  fireEvent.click(li);

  console.log(logout.mock.results);
  //test
});
