/* @flow */

import React from "react";

import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import Drawer from "./Drawer";
import NestedGrid from "./app/components/layout/nested";
import ProductDetails from "./app/components/product/details";
const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer },
        ProductDetails: { screen: ProductDetails }
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none",
    }
);

export default () =>
    <Root>
        <AppNavigator />
    </Root>;
