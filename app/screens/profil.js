import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import {
	TextInput,
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	SafeAreaView,
	Image,
	TouchableOpacity,
	TouchableHighlight,
	Button,
	Alert,
	Dimensions,
	Keyboard,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {
	Ionicons,
	AntDesign,
	Feather,
    FontAwesome,
} from '@expo/vector-icons';
import { auth } from '../../firebase';

export default Profil;

function Profil({ navigation }) {
    const SignOut = () => {
        auth
            .signOut().then(() => {
            console.log('User is sign out!')
            navigation.navigate("Login")
          }).catch((error) => {
            var errorMessage = error.message;
            alert("Error :/", errorMessage)
          });
    }

    return (

        <SafeAreaView style={styles.container}>
            <View style={{marginStart: 15, marginTop: 10}}>
                <Ionicons name="ios-menu-outline" size={32} color="white"/>
            </View>
            <View style={{marginStart: 368.5, marginTop: -30.5}}>
                <AntDesign name="setting" size={26.5} color="white" />
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: -28}}>
            <Text style={styles.writing}>
                Profil
            </Text>  
            </View>
            <View style={{ backgroundColor: "#3B3B3B", padding: 0.5, width: 450, marginTop: 20.5}}/>
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 310}}>
            <Text style={{color:"white"}}>
                Nothing Here
            </Text>
            <Text style={{padding: 5}}>
            </Text>
            <Text style={{color:"white", alignItems: "center", justifyContent: "center"}}
                onPress = { () => SignOut()}>
                Sign OUt
            </Text>
            </View>
            <View style={{ backgroundColor: "#3B3B3B", padding: 0.5, width: 450, marginTop: 323}}/>
            <View style={{marginStart: 30, marginTop: 16}}>
                <Ionicons name="ios-home-outline" size={28} color="#767676" />
            </View>
            <View style={{marginStart: 133, marginTop: -30}}>
                <Ionicons name="search-outline" size={30} color="#767676" />
            </View>
            <View style={{marginStart: 248, marginTop: -32}}>
                <Ionicons name="mail-outline" size={30} color="#767676" /> 
            </View>
            <View style={{marginStart: 360.5, marginTop: -30.5}}>
                <FontAwesome name="user" size={27} color="#EA09D2" />
            </View>            
            <TouchableOpacity style={styles.homepageButton} 
            onPress = { () => navigation.navigate("Homepage")}>
			</TouchableOpacity> 
            <TouchableOpacity style={styles.searchButton} 
            onPress = { () => navigation.navigate("Search")}>
			</TouchableOpacity>  
            <TouchableOpacity style={styles.messageButton} 
            onPress = { () => navigation.navigate("Message")}>
			</TouchableOpacity> 
            <TouchableOpacity style={styles.settingsButton} 
            onPress = { () => navigation.navigate("Settings")}>
			</TouchableOpacity>     
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
    },
    writing: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
        marginTop: 1.5,
        marginStart: 1.5,
    },
    homepageButton: {
		backgroundColor: "transparent",
	    height: 90,
     	width: 90,
    	marginTop: -42,
        marginStart: 1,
    },
    searchButton: {
		backgroundColor: "transparent",
	    height: 90,
     	width: 105,
        marginStart: 95,
        marginTop: -90,
    },
    messageButton: {
		backgroundColor: "transparent",
	    height: 90,
     	width: 110,
        marginStart: 205,
        marginTop: -90,
    },
    settingsButton: {
		backgroundColor: "transparent",
	    height: 60,
     	width: 70,
    	marginTop: -855,
        marginStart: 342,
    },
});