import "react-native-gesture-handler";
import React from "react";
import Login from "./app/screens/login";
import Homepage from "./app/screens/homepage";
import Search from "./app/screens/search";
import Message from "./app/screens/message";
import Profil from "./app/screens/profil";
import Settings from "./app/screens/settings";
import Register from "./app/screens/register";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {

	const Stack = createStackNavigator();

	return (

		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
				name="Login"
				component={Login}
				options={{ title: "Login", headerShown: false, animationEnabled: false  }}
				/>
				<Stack.Screen
				name="Register"
				component={Register}
				options={{ title: "Register", headerShown: false, animationEnabled: false  }}
				/>
				<Stack.Screen
				name="Homepage"
				component={Homepage}
				options={{ title: "Homepage", headerShown: false, animationEnabled: true }}
				/>
				<Stack.Screen
				name="Search"
				component={Search}
				options={{ title: "Search", headerShown: false, animationEnabled: false }}
				/>
				<Stack.Screen
				name="Message"
				component={Message}
				options={{ title: "Message", headerShown: false, animationEnabled: false }}
				/>
				<Stack.Screen
				name="Profil"
				component={Profil}
				options={{ title: "Profil", headerShown: false, animationEnabled: false }}
				/>
				<Stack.Screen
				name="Settings"
				component={Settings}
				options={{ title: "Settings", headerShown: false, animationEnabled: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}