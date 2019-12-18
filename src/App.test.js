import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/Start Time/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('the score is zero', () => {
  const { container } = render(< App/>)
  const startScore = container.querySelector('.score').innerHTML;
  expect(startScore).toBe('0');
})


//when click add button, it increments the score
  //start game with 20 points, verify state
  //make sure game logic is correct
