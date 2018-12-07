import React, { Component } from 'react';
import { Footer, FooterTab } from 'native-base';
import CButtonTab from '../CButtonTab';

export default class CFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <CButtonTab
            propsActiveTab={this.props.propsActiveTab === 'Home' ? 'active' : ''}
            propsNavigationTab={this.props.propsNavigation}
            propsTypeIconTab="FontAwesome"
            propsNameTab="Home"
            propsSlugIconTab="home"
          />
          <CButtonTab
            propsActiveTab={this.props.propsActiveTab === 'Cards' ? 'active' : ''}
            propsNavigationTab={this.props.propsNavigation}
            propsTypeIconTab="MaterialCommunityIcons"
            propsNameTab="Cards"
            propsSlugIconTab="cards"
          />
          <CButtonTab
            propsActiveTab={this.props.propsActiveTab === 'AddItem' ? 'active' : ''}
            propsNavigationTab={this.props.propsNavigation}
            propsTypeIconTab="MaterialIcons"
            propsNameTab="AddItem"
            propsSlugIconTab="add"
          />
          <CButtonTab
            propsActiveTab={this.props.propsActiveTab === 'Config' ? 'active' : ''}
            propsNavigationTab={this.props.propsNavigation}
            propsTypeIconTab="FontAwesome"
            propsNameTab="Config"
            propsSlugIconTab="cog"
          />
        </FooterTab>
      </Footer>
    );
  }
}
