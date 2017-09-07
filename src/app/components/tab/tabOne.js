import React, { Component } from 'react';
import { Image,TouchableOpacity } from "react-native";
import { Container, Content, Card, CardItem, Text, View, Body,Grid,Button,Icon,
Col } from 'native-base';
import { DrawerNavigator,StackNavigator } from "react-navigation";
import { StyleSheet, Platform, Dimensions } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

import styles from './styles';
const cardFour = require("../../../../img/swiper-4.png");
let url='https://dummyimage.com/'+(deviceWidth-35)+'x250/ccc/fff';
let self=null;
export class C_Cols extends Component {
	 constructor(props){
		 super(props)
	 }
	render(){

		return(

			<Col size={1} style={{ backgroundColor: "transparent" }} >

				<TouchableOpacity style={{flex:1}}
					  onPress={() =>{
								// console.warn(this.props.navigation);
								this.props.navigation.navigate("ProductDetails")
							}
						}
					>
				<Card style={{padding:4}}>
					<Image style={{height:100}}
						resizeMode="cover"
						source={{uri:url}} >

					</Image>
					<Text style={{
							fontWeight:"bold",
							paddingTop:1,
							paddingBottom:1,
							color:"#333",
							fontSize:12,
						}} numberOfLines={1}
						>Awesome Card</Text>
						<Text style={{
								fontWeight:"bold",
								paddingTop:1,
								paddingBottom:1,
								color:"#333",
								fontSize:12,
							}} numberOfLines={1}
							>$css</Text>
				</Card>
				</TouchableOpacity>
			</Col>
		)
	}
}
export default class TabOne extends Component {
	// eslint-disable-line

	render() {
		// eslint-disable-line
		let self=this;
		return (
			<Container>

			<Content padder>
				<Card style={{padding:5}}>
					<Image style={{height:250,width:deviceWidth-35}}
						resizeMode="cover"
						source={{uri:url}} >

					</Image>
					<View style={{flexDirection:'row'}}>
						<View style={{flex:1}}>
							<Text style={{
									fontWeight:"bold",
									paddingTop:1,
									paddingBottom:1,
									color:"#333"
								}}>Awesome Card</Text>
						</View>
						<Text style={{
								fontWeight:"bold",
								paddingTop:1,
								paddingBottom:1
							}}>$100</Text>
					</View>
					<View style={{flexDirection:'row'}}>
						<Text style={{
								paddingTop:5,
								paddingBottom:5,
								fontSize:12,
								color:'#555',
								textAlign:'justify'
							}}>
							Awesome Card
							Awesome Card
							Awesome Card
							Awesome Card
							Awesome Card
							Awesome Card
							Awesome Card
							Awesome Card
						</Text>
					</View>
					<View style={{flexDirection:'row'}}>
							<View style={{flex:1}}>
						<Text style={styles.text}>Awesome Card</Text>
					</View>
							<Text style={styles.text}>Awesome Card</Text>
					</View>
				</Card>

				<Grid style={{height:160}}>
					<C_Cols navigation={this.props.navigation}/>
					<C_Cols navigation={this.props.navigation}/>
					<C_Cols navigation={this.props.navigation}/>
				</Grid>
				<Grid style={{height:160}}>
					<C_Cols navigation={this.props.navigation}/>
					<C_Cols navigation={this.props.navigation}/>
					<C_Cols navigation={this.props.navigation}/>
				</Grid>
				<Grid style={{height:160}}>
					<C_Cols navigation={this.props.navigation}/>
					<C_Cols navigation={this.props.navigation}/>
					<C_Cols navigation={this.props.navigation}/>
				</Grid>

			</Content>

			</Container>
		);
	}
}
