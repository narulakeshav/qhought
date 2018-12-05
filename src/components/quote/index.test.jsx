/**
 * External Dependencies
 */
import * as React from 'react';
import { shallow } from 'enzyme';

/**
 * Internal Dependencies
 */
import Quote from './index';
/**
 * Testing <Quote> card component
 */
describe('<Quote> Component', () => {
  // <Quote> with empty props
  describe('<Quote> with empty props', () => {
    // eslint-disable-next-line
    let props = {};
    let mountedQuote;
    const QuoteComp = () => {
      if (!mountedQuote) {
        props.quote = {};
        mountedQuote = shallow(
          <Quote quote={props.quote} />
        );
      }

      return mountedQuote;
    };

    it('Should not render a <Quote>', () => {
      const comp = QuoteComp().find('section');
      expect(comp.length).toBe(0);
    });
  });

  // <Quote> with empty props
  describe('<Quote> with "quote" props', () => {
    // eslint-disable-next-line
    let props = {};
    let mountedQuote;
    const QuoteComp = () => {
      if (!mountedQuote) {
        props.quote = {
          __typename: 'Quote',
          _id: '2c891',
          quote: 'I am an inspiring quote',
          author: 'Moe Wagner',
          background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)),url("https://source.unsplash.com/1920x1920/?obama") no-repeat center',
          tags: [ 'Item 1' ],
          laughs: 0,
          loves: 0,
          claps: 0
        };
        mountedQuote = shallow(
          <Quote quote={props.quote} selectQuote={jest.fn()} />
        );
      }

      return mountedQuote;
    };

    // Renders the quote
    it('renders <Quote>', () => {
      const comp = QuoteComp().find('styles__QuoteCard');
      const wrapper = comp.first();
      expect(wrapper.children()).toEqual(comp.children());
      expect(comp.length).toBeGreaterThan(0);
    });

    // Contains the quote text in H4 tag
    it('contains the quote text', () => {
      const quoteText = QuoteComp().find('text__H4');
      expect(quoteText.render().text()).toBe('I am an inspiring quote');
    });
  });
});
