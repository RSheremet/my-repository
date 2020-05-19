import React from 'react';
import ReactDOM from 'react-dom';
import SocialNetworkApp from "./App";


it('rendres learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocialNetworkApp />, div);
  ReactDOM.unmountComponentAtNode(div);


});

/*test('renders learn react link', () => {
  const { getByText } = render(<SocialNetworkApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/
