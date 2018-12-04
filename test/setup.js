/**
 * External Dependencies
 * @see /src/components/* for component tests
 */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Use the react-16 adapter for enzyme
Enzyme.configure({
  adapter: new Adapter()
});
