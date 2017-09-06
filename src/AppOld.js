import React, { Component } from 'react';
import {View , StyleSheet,Image} from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text,Input,Item,Button } from 'native-base';
import {Background} from './components/common/Background'
let url='https://yt3.ggpht.com/-ta-bz8wRDbE/AAAAAAAAAAI/AAAAAAAAAAA/M2hcPaj1cEU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg';


class CenterProfile extends Component {
  render(){
    return(
      <View style={{backgroundColor:'transparent',backgroundColor:'transparent',position:'relative',alignItems:'center',flex:4}}>
        <Image
          style={{
            height:80,
            width:80,
            borderRadius:40,
            marginTop:40,
            marginBottom:10,
          }}
        source={{uri:url}}/>
        <Text style={{backgroundColor:'transparent',color:'white',lineHeight:30,
        fontWeight:'bold'
      }}>Here User Name</Text>
        <Text style={{backgroundColor:'transparent',color:'white',fontSize:12}}>Here User Descriptions</Text>
          <View style={{position:'absolute',bottom:0,backgroundColor:'transparent'}}>
          <View style={{
        width:10,
        height:10,
        borderStyle:'solid',
        borderTopWidth:0,
        borderRightWidth:10,
        borderBottomWidth:10,
        borderLeftWidth:10,

        opacity:1,
        borderTopColor:'transparent',
        borderRightColor:'transparent',
        borderBottomColor:'#2C3E50',
        borderLeftColor:'transparent',
        zIndex:9999,
        }}
      />

        </View>

        </View>
    )
  }
}
class Right extends Component {
  render(){
    return(
      <View style={{backgroundColor:'transparent',flex:2,alignItems:'center',
      justifyContent:'space-between'}}>
      <View>
      <Icon name="previous" style={{fontSize: 30, color: 'white',
      marginTop:20
      }}/>

      </View>
      <View style={{alignItems:'center'}}>
      <Text style={{backgroundColor:'transparent',color:'white',

        fontSize:30
        }}>789</Text>
      <Text style={{backgroundColor:'transparent',color:'white',fontSize:10}}>Subtitle</Text>

      </View>
      <View>
        <Icon name="add" style={{fontSize: 30, color: 'white',
        marginBottom:20
      }}/>
      </View>

      </View>
    )
  }
}
class Left extends Component {
  render(){
    return(
      <View style={{backgroundColor:'transparent',flex:2,alignItems:'center',
      justifyContent:'space-between'}}>
      <View>
      <Icon name="previous" style={{fontSize: 30, color: 'white',
      marginTop:20
      }}/>

      </View>
      <View style={{alignItems:'center'}}>
      <Text style={{backgroundColor:'transparent',color:'white',

        fontSize:30
        }}>789</Text>
      <Text style={{backgroundColor:'transparent',color:'white',fontSize:10}}>Subtitle</Text>

      </View>
      <View>
        <Icon name="add" style={{fontSize: 30, color: 'white',
        marginBottom:20
      }}/>
      </View>

      </View>
    )
  }
}
export default class AppOld extends Component {
  render() {
    return (
      <Container>
        <View style={{flex:1}}>
        <Background
        overlay={{backgroundColor: 'rgba(36, 113, 163,0.9)'}}
        style={{flex:1}}
        source={{uri:url}}>
          <View style={{flex: 1, flexDirection: 'row',paddingTop:10}}>
            <Left/>
            <CenterProfile/>
            <Right/>
          </View>
        </Background>
        </View>
        <View style={{flex:2}}>
          <View style={{backgroundColor:'#2C3E50',alignItems:'center'}}>
            <Text style={{backgroundColor:'transparent',color:'white',fontSize:12,lineHeight:30}}>
            Here User Descriptions</Text>

             <Item rounded style={{backgroundColor:'white',marginLeft:10,marginRight:10,padding:0,
             borderRadius:8
           }}>
               <Input style={{height:35}}/>
             </Item>
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <Text>1</Text></View>
              <View style={{flex:1,alignItems:'center'}}>
              <Button success style={{margin:10,height:25}}><Text> Success </Text></Button>
              </View>
              <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Text style={{backgroundColor:'transparent',color:'white',fontSize:12}}>2343 dfdads</Text>
              </View>


             </View>
          </View>
        </View>
      </Container>
    );
  }
}
