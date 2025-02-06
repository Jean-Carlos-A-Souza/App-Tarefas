import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/home";
import User from "../pages/user";
import TabBar from "../components/TabBar";

import { AuthProviderList } from "../context/authContext_List";

const Tab = createBottomTabNavigator();

export default function BottomRoutes(){
    return(
        <AuthProviderList>        
            <Tab.Navigator
                screenOptions={{
                    headerShown:false
                }}
                tabBar={props=><TabBar{...props}/>}
                >
                <Tab.Screen
                    name="Home"
                    component={Home}
                />
                <Tab.Screen
                    name="User"
                    component={User}
                />
            </Tab.Navigator> 
        </AuthProviderList>
 
    )
}