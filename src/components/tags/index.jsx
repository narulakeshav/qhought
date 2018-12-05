/**
 * @flow
 * External Dependencies
 */
import * as React from 'react';

/**
 * Internal Dependencies
 */
import { GridSection } from '../../helpers/global';
import { TagContainer, TagItem } from './styles';

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
  <TagContainer>
    {props.tags.map((tag) => {
      if (tag !== '') {
        return <TagItem key={tag}>{tag}</TagItem>;
      }
      return '';
    })}
  </TagContainer>
);

// Export
export default Tags;
