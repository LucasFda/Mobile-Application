import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, useEffect } from 'react';
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

export default Search;

function Search({ navigation }) {

    const [Research, setResearch] = useState('');
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

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
            <View style={{marginStart: 15, marginTop: 10}}>
                <Ionicons name="ios-menu-outline" size={32} color="white"/>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: -47}}>
            <View style={styles.barrerecherche}>
                <View style={{marginStart: 5, marginTop: 1}}>
                    <Ionicons name="ios-search-outline" size={21} color="#767676" />
                </View>
            </View>
            <TextInput style={styles.research}
					placeholder="        Search on Trends"
                    placeholderTextColor="#767676"
					returnKeyType="search"
                    value={Research}
                    onChangeText={(research)=> setResearch(research)}>
			</TextInput>
            <View style={{ backgroundColor: "#3B3B3B", padding: 0.5, width: 450, marginTop: 21}}/>           
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 310}}>
            <Text style={{color:"white"}}>
                Nothing Here
            </Text>
            <Text style={{padding: 5}}>
            </Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center"}}>
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
                <Ionicons name="search" size={30} color="#EA09D2" />
            </View>
            <View style={{marginStart: 248, marginTop: -32}}>
                <Ionicons name="mail-outline" size={30} color="#767676" /> 
            </View>
            <View style={{marginStart: 360, marginTop: -29}}>
                <FontAwesome name="user-o" size={24} color="#767676" />
            </View>
            <TouchableOpacity style={styles.homepageButton} 
            onPress = { () => {
                navigation.navigate("Homepage")
                setResearch('')
                }}>
			</TouchableOpacity>  
            <TouchableOpacity style={styles.messageButton} 
            onPress = { () => {
                navigation.navigate("Message") 
                setResearch('')
                }}>
			</TouchableOpacity> 
            <TouchableOpacity style={styles.profilButton} 
            onPress = { () => {
                navigation.navigate("Profil")
                setResearch('')
                }}>
			</TouchableOpacity> 
        </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
    },
    barrerecherche: {
		backgroundColor: "#242424",
	    height: 34,
	    borderRadius: 40,
	    padding: 5,
	    fontSize: 16,
     	width: 270,
    	marginTop: 13,
        marginStart: 2,
        justifyContent: "center",
    },
    research: {
		backgroundColor: "transparent",
        color: "white",
	    height: 32,
	    padding: 5,
	    fontSize: 17,
     	width: 234,
    	marginTop: -33,
        marginStart: 25,
        justifyContent: "center",
    },
    homepageButton: {
		backgroundColor: "transparent",
	    height: 90,
     	width: 90,
    	marginTop: -42,
        marginStart: 1,
    },
    messageButton: {
		backgroundColor: "transparent",
	    height: 90,
     	width: 110,
        marginStart: 205,
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