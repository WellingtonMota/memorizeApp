import React, { Component } from 'react';
import { Button, Icon, Text } from 'native-base';

export default class CButtonTab extends Component {
  render() {
    if (this.props.propsActiveTab === 'active') {
      return (
        <Button
          active
          onPress={() => this.props.propsNavigationTab.navigation.push(this.props.propsNameTab, {
            title: this.props.propsNameTab,
          })}
        >
          <Icon type={this.props.propsTypeIconTab} name={this.props.propsSlugIconTab} />
          <Text>{this.props.propsNameTab}</Text>
        </Button>
      );
    }
    return (
      <Button
        onPress={() => this.props.propsNavigationTab.navigation.push(this.props.propsNameTab, {
          title: this.props.propsNameTab,
        })}
      >
        <Icon type={this.props.propsTypeIconTab} name={this.props.propsSlugIconTab} />
        <Text>{this.props.propsNameTab}</Text>
      </Button>
    );
  }
}
