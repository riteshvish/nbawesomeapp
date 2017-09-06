import React, { Component } from 'react';
import {View , StyleSheet,Image} from 'react-native';
import { Container, Content, Tab, Grid,Col,Tabs, TabHeading, Icon, Text } from 'native-base';
export class Background extends Component {
  render() {
    return (
      <View style={this.props.style}>
          <Image source={this.props.source}
           style=  {StyleSheet.absoluteFillObject}
           resizeMode='cover'>

           </Image>
         <View style={[this.props.overlay,styles.overlay]} />
         {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
   overlay: {
     ...StyleSheet.absoluteFillObject
   }
 })
