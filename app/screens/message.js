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

export default Message;

function Message({ navigation }) {
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
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: -33}}>
            <Text style={styles.writing}>
                Messages
            </Text>  
            </View>
            <View style={{ backgroundColor: "#3B3B3B", padding: 0.5, width: 450, marginTop: 21.5}}/>
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 310}}>
            <Text style={{color:"white"}}>
                Nothing Here
            </Text>
            <Text style={{padding: 5}}>
            </Text>
            <Text style={{color:"white", alignItems: "center", justifyContent: "center"}}
                onPress = { () => SignOut()}>
                Sign Out
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
                <Ionicons name="mail" size={30} color="#EA09D2" />
            </View>
            <View style={{marginStart: 360, marginTop: -29}}>
                <FontAwesome name="user-o" size={24} color="#767676" />
            </View>
            <TouchableOpacity style={styles.homepageButton} 
            onPress = { () => navigation.navigate("Homepage")}>
			</TouchableOpacity>  
            <TouchableOpacity style={styles.searchButton} 
            onPress = { () => navigation.navigate("Search")}>
			</TouchableOpacity> 
            <TouchableOpacity style={styles.profilButton} 
            onPress = { () => navigation.navigate("Profil")}>
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
        marginStart: 6.5,
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
    profilButton: {
		backgroundColor: "transparent",
	    height: 90,
     	width: 95,
        marginStart: 320,
        marginTop: -90,
    },
});