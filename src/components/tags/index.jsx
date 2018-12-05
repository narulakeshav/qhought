/**
 * @flow
 * External Dependencies
 */
import * as React from 'react';

/**
 * Internal Dependencies
 */
import { GridSection } from '../../helpers/global';
import { TagItem } from './styles';

/**
 * Flow Type
 */
type Props = {
  tags: Array<string>
};

/**
 * Renders Tags for a Quote
 * @param {Props} props
 */
const Tags = (props: Props): React.Element<typeof GridSection> => (
  <GridSection
    split={'1fr '.repeat(props.tags.length)}
    gap="0.5rem"
    justifyEnd
  >
    {props.tags.map((tag) => {
      if (tag !== '') {
        return <TagItem key={tag}>{tag}</TagItem>;
      }
      return '';
    })}
  </GridSection>
);

// Export
export default Tags;
