import React, { Component } from "react";

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
  Badge
} from "native-base";
let self=null;
import TabOne from './tabOne';
import TabTwo from './tabTwo';
import TabThree from './tabThree';

import styles from "./styles";

const datas = [
  {
    route: "BasicTab",
    text: "Basic Tabs"
  },
  {
    route: "ConfigTab",
    text: "Advanced Tabs"
  },
  {
    route: "ScrollableTab",
    text: "Scrollable Tabs"
  }
];

class NHTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true
    };
  }

  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false
    });
  }

  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false
    });
  }

  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true
    });
  }

  openDetails(data) {
    return () => {
       self.props.navigation.navigate("DrawerOpen")
    }
  }

  render() {
    self=this;
    return (
      <Container style={styles.container}>

        <Header hasTabs>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>My Store</Title>
          </Body>
          <Right>
            <Button transparent><Icon name="search" /></Button>
            <Button badge transparent>
              <Icon name="cart" />
              <Badge primary style={{marginLeft:-10,margin:0,padding:0}} >
                  <Text style={{fontSize:10,margin:0,padding:0}}>20</Text>
              </Badge>
            </Button>
          </Right>

        </Header>

          <Tabs>
            <Tab heading="Tab1">
              <TabOne openDetails={this.openDetails} navigation={this.props.navigation}/>
            </Tab>
            <Tab heading="Tab2">
              <TabTwo navigate={this.props.navigation}/>
            </Tab>
            <Tab heading="Tab3">
              <TabThree navigate={this.props.navigation}/>
            </Tab>
          </Tabs>


      </Container>
    );
  }
}

export default NHTab;
