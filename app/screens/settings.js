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
    MaterialIcons,
} from '@expo/vector-icons';
import { auth } from '../../firebase';

export default Settings;

function Settings({ navigation }) {
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
                <MaterialIcons name="keyboard-arrow-left" size={34} color="white" />
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: -33}}>
            <Text style={styles.writing}>
                Settings
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
            <TouchableOpacity style={styles.returnButton} 
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
        marginStart: 4,
    },
    returnButton: {
		backgroundColor: "transparent",
	    height: 70,
     	width: 70,
    	marginTop: -442,
        marginStart: 1,
    },
});