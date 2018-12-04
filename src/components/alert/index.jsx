/**
 * @flow
 * External Dependencies
 */
import * as React from 'react';

/**
 * Internal Dependencies
 */
import {
  AlertBannerItem,
  BannerIcon,
  BannerInfo,
  CloseBtn
} from './styles';

// Global styles
import { Text } from '../../helpers/global';

/**
 * Flow Type
 */
type Props = {
  duration?: number,
  type: string,
  icon: string,
  title: string,
  info: string,
  hide: Function,
};

type State = {
  show: boolean,
};

/**
 * Local Variables
 */
let T;

/**
 * Renders Alert Banner
 * @param {Props} props
 */
class AlertBanner extends React.Component<Props, State> {
  state = {
    show: true,
  };

  // Default Props
  static defaultProps = {
    duration: 115000
  };

  /**
   * Set timeout to hide in x seconds.
   */
  componentDidMount = () => {
    T = setTimeout(() => {
      this.setState({
        show: false
      });
      this.props.hide();
    }, this.props.duration);
  }

  /**
   * Hide Alert on 'x' button click
   */
  hideAlert = () => {
    this.setState({ show: false });
    this.props.hide();
  }

  /**
   * Clear timeout on mouse hover, so the alert
   * doesn't hide.
   */
  onMouseEnter = () => {
    clearTimeout(T);
  }

  /**
   * Set Timeout to show = false in 5s
   */
  onMouseLeave = () => {
    T = setTimeout(() => {
      this.setState({
        show: false
      });
    }, 115000);
  }

  // Render
  render() {
    return (
      <AlertBannerItem
        show={this.state.show}
        split="50px 1fr 50px"
        gap="1rem"
        alignVertically
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <BannerIcon color={this.props.type}>
          <i className="material-icons">{this.props.icon}</i>
        </BannerIcon>
        <BannerInfo>
          <Text
            weightBold
            fontSize={16}
            textDarker
            fontSans
            lineHeight={120}
          >
            {this.props.title}
          </Text>
          <Text
            textLight
            fontSans
            fontSize={15}
            lineHeight={120}
            dangerouslySetInnerHTML={{ __html: this.props.info }}
          />
        </BannerInfo>
        <CloseBtn onClick={this.hideAlert}>
          <i className="material-icons">close</i>
        </CloseBtn>
      </AlertBannerItem>
    );
  }
}

// Export
export default AlertBanner;
