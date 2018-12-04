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
  // describe('<Quote> with props', () => {
  //   let mountedQuoteComp;
  //   const QuoteComp = () => {
  //     if (!mountedQuoteComp) {
  //       mountedQuoteComp = shallow(
  //         <Quote
  //           quote={{
  //             _id: '2c891',
  //             quote: 'I am an inspiring quote',
  //             author: 'Moe Wagner',
  //             background: 'https://bg.com/background.jpg',
  //             tags: [ 'Item 1' ],
  //             laughs: 0,
  //             loves: 0,
  //             claps: 0
  //           }}
  //         />
  //       );
  //     }

  //     return mountedQuoteComp;
  //   };

  //   it('should render <Quote>', () => {
  //     const quoteSection = QuoteComp().find('section');
  //     console.log(QuoteComp());
  //     expect(quoteSection.length).toBeGreaterThan(0);
  //   });
  // });
  describe('<Quote> without props', () => {
    let mountedQuoteComp;
    const QuoteComp = () => {
      if (!mountedQuoteComp) {
        console.log('<Quote/> not mounted. Setting it NOW.');
        mountedQuoteComp = shallow(
          <Quote />
        );
        console.log('VAL:', mountedQuoteComp);
      }
      return mountedQuoteComp;
    };

    it('should not render and throw error', () => {
      const r = QuoteComp().find('section');
      console.log(r);
      expect(r).toBeNull();
    });
  });
});
