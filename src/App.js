/* @flow */

import React from "react";

import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import Drawer from "./Drawer";
import NestedGrid from "./app/components/layout/nested";

const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer },
        NestedGrid: { screen: NestedGrid },
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
