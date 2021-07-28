import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
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
    MaterialIcons,
} from '@expo/vector-icons';
import { auth } from '../../firebase';

export default Register;

function Register({ navigation }) {
    
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const focusPassword = useRef();
    const SignUp = () => {
       auth
        .createUserWithEmailAndPassword(Email, Password)
        .then(() => {
            console.log('User', (Email), 'has been created!');
            navigation.navigate("Login")
        })
        .catch(error => {
            var errorMessage = error.message;
            Alert.alert("Error :/", errorMessage)
        })
    };

    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
            <View style={{marginStart: 17, marginTop: 15}}>
                <MaterialIcons name="keyboard-arrow-left" size={36} color="white" />
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 70}}>
            <Text style={styles.sentence}>
                Create 
                <Text> </Text>  
                <Text style={{ color: "white", fontSize: 36, fontWeight: "100",}}>
                an account in
                </Text>
            </Text>
            </View>
            <View  style={{ alignItems: "center", justifyContent: "center", marginTop: 10}}>
            <Image style={{width: 243,height: 75}}
			    source={require("../assets/TRENDS_6.png")}>
			</Image>
            </View>
            <Text style={{ padding: 40.35 }}>
				</Text>
				<View style={styles.login}>
                    <View style={{ marginStart: 304, marginTop: -2.7}} >
					<AntDesign name="user" size={32} color="#EA09D2" />
                    </View>
				</View>
                <TextInput style={styles.email}
					placeholder="Email"
					returnKeyType="next"
                    value= {Email}
                    onSubmitEditing={ () => focusPassword.current.focus()}
                    onChangeText={(email)=> setEmail(email)}>
			    </TextInput>
				<Text style={{ padding: 2.25}}>
				</Text>
				<View style={styles.login} >
                    <View style={{marginStart: 305, marginTop: -1.5}} >
					<Feather name="lock" size={29} color="#EA09D2" />
                    </View>
				</View>
                <TextInput style={styles.password}
					placeholder="Password"
					returnKeyType="next"
                    value= {Password}
                    ref={focusPassword}
                    onChangeText={(password)=> setPassword(password)}>
			    </TextInput>
            <TouchableOpacity style={styles.returnButton} 
            onPress = { () => {
                navigation.navigate("Login")
                setEmail('')
                setPassword('')
                }}>
			</TouchableOpacity>
            <View style={{marginTop: 450, alignItems: "center", justifyContent: "center"}} >
            <AntDesign name="check" size={40} color="#EA09D2" /> 
            </View>
            <TouchableOpacity style={styles.valid}
            onPress={ () => {
                SignUp()
                setEmail('')
                setPassword('') 
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
    	marginTop: -465,
        marginStart: 3,
    },
    sentence: {
		color: "white",
        fontSize: 36,
        fontWeight: "500",
    },
    login: {
		backgroundColor: "#FBFBFB",
	    height: 50,
	    borderRadius: 30,
	    padding: 11,
	    fontSize: 16,
     	width: 365,
    	marginStart: 24.5,
    },
    email: {
		backgroundColor: "transparent",
	    height: 50,
	    padding: 0,
	    fontSize: 16,
     	width: 290,
    	marginTop: -50,
        marginStart: 38.5,
        justifyContent: "center",
    },
    password: {
		backgroundColor: "transparent",
	    height: 50,
	    padding: 0,
	    fontSize: 16,
     	width: 290,
    	marginTop: -50,
        marginStart: 38.5,
        justifyContent: "center",
    },
    valid: {
		backgroundColor: "transparent",
	    height: 75,
     	width: 75,
    	marginTop: -58,
        marginStart: 169,
    },
});