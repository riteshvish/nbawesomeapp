import React, {Component} from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  List,
  ListItem,
  Tabs,
  Tab,
  Badge,
  ScrollableTab
} from "native-base";
const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
// var uri="https://cdn-images-1.medium.com/max/800/1*9OBTDUSE0XEgZLemVBFfxg.png"
let uri='https://dummyimage.com/'+(375-35)+'x250/ccc/fff';
export default class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
    };
  }
  _renderScrollViewContent() {
    const data = Array.from({length: 30});
    return (
      <View style={styles.scrollViewContent}>
        {data.map((_, i) =>
          <View key={i} style={styles.row}>
            <Text>{i}</Text>
          </View>
        )}
      </View>
    );
  }

  render() {
    const headerHeight = this.state.scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });
  const imageOpacity = this.state.scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });
  const textOpacity = this.state.scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });
  const imageTranslate = this.state.scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });
    return (
      <View style={styles.fill}>
        <ScrollView
          style={styles.fill}
          style={styles.fill}
         scrollEventThrottle={16}
         onScroll={Animated.event(
           [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
         )}
        >
          {this._renderScrollViewContent()}
        </ScrollView>
      <Animated.View style={[styles.header, {height: headerHeight}]}>
        <Animated.View
            style={[
              styles.backgroundImage,
              {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
            ]}

          >

          <ScrollView pagingEnabled={true}  horizontal={true}>
          <Image source={{uri:uri}} style={{flex:1,height:HEADER_MAX_HEIGHT,width:375}}>
            <Text style={{backgroundColor:'transparent'}}>1</Text>
          </Image>

          <Image source={{uri:uri}} style={{flex:1,height:HEADER_MAX_HEIGHT,width:375}}>
            <Text style={{backgroundColor:'transparent'}}>2</Text>
          </Image>

          <Image source={{uri:uri}} style={{flex:1,height:HEADER_MAX_HEIGHT,width:375}}>
            <Text style={{backgroundColor:'transparent'}}>3</Text>
          </Image>

          </ScrollView>
        </Animated.View>




        <Header style={{backgroundColor:'transparent',flexDirection:'row'}} hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Animated.View
              style={[
                styles.backgroundImage,
                {opacity: textOpacity},
              ]}

              >
            <Title style={{marginTop:-10}}>Animated</Title>
            </Animated.View>
          </Body>
          <Right style={{flexDirection:'row'}}>
            <Button transparent><Icon name="search" /></Button>
            <Button badge transparent>
              <Icon name="cart" />
              <Badge primary style={{marginLeft:-10,margin:0,padding:0}} >
                  <Text style={{fontSize:10,margin:0,padding:0}}>20</Text>
              </Badge>
            </Button>
          </Right>
        </Header>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: '#fff',
  overflow: 'hidden',
},
bar: {
  height: 32,
},
title: {
  backgroundColor: 'transparent',
  color: 'white',
  fontSize: 18,
},
scrollViewContent: {
  marginTop: HEADER_MAX_HEIGHT,
},

backgroundImage: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  width: null,
  height: HEADER_MAX_HEIGHT,

},
});
