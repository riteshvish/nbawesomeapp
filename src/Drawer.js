/* @flow */

import React from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "./components/home/";
import NHTab from "./app/components";
import SideBar from "./app/components/sidebar";

const DrawerExample = DrawerNavigator(
  {
    Home: { screen: Home },
    NHTab: { screen: NHTab }
  },
  {
    initialRouteName: "NHTab",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default DrawerExample;
