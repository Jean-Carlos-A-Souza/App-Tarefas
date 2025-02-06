import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import { themas } from "../global/themes";
import BottomRoutes from "./index.bottom";
import EditTask from "../pages/editTask";

export default function Routes(){
    const Stack = createStackNavigator()

    return(
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
                cardStyle:{
                    backgroundColor: themas.colors.background
                }
            }}
        >
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="BottomRoutes"
                component={BottomRoutes}
            />
            <Stack.Screen 
                name="EditTask" 
                component={EditTask} 
            />
        </Stack.Navigator>
    )
}