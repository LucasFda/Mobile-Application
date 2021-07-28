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
    ActivityIndicator,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {
	Ionicons,
	AntDesign,
	Feather,
} from '@expo/vector-icons';
import { auth } from '../../firebase';

export default Login;

function Login({ navigation }) {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const focusPassword = useRef();
    const SignIn = () => {
       auth
        .signInWithEmailAndPassword(Email, Password)
        .then((userCredential) => {
            console.log((Email), 'is sign in!');
            navigation.navigate("Homepage", {Email: Email})
        })
        .catch((error) => {
            var errorMessage = error.message;
            Alert.alert("Eror", errorMessage)
        });
    }

    return (
	
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<SafeAreaView style={styles.container}>
			<Image style={{width: 300, height: 180, marginTop: 90}}
			       source={require("../assets/TRENDS_3.png")}>
			</Image>
			<Text style={{ padding: 42 }}>
				</Text>
				<TextInput style={styles.login}
					placeholder="Email"
					returnKeyType="next"
                    value= {Email}
					onSubmitEditing={ () => focusPassword.current.focus()}
                    onChangeText={(email)=> setEmail(email)}>
				</TextInput>
				<View style={{ marginStart: 330, marginTop: -42 }}>
					<AntDesign name="user" size={32} color="#EA09D2" />
				</View>
				<Text style={{ padding: 7 }}>
				</Text>
				<TextInput style={styles.login}
					placeholder="Password"
					returnKeyType="next"
                    value= {Password}
					secureTextEntry={true}
					ref={focusPassword}
                    onChangeText={(password)=> setPassword(password)}>
				</TextInput>
				<View style={{ marginStart: 330, marginTop: -39 }}>
					<Feather name="lock" size={29} color="#EA09D2" />
				</View>
				<TouchableOpacity
                onPress = { () => {
                    SignIn()
                    setEmail('')
                    setPassword('') 
                    }}>
					<LinearGradient 
					start={{x: 0, y: 0}}
					end={{x:1.2, y: 0}}
					colors={['#6441a5', '#EA09D2']} 
					style={styles.linearGradient}>
						<AntDesign name="swapright" size={45} color="black" />	
					</LinearGradient>
				</TouchableOpacity>
                <View style={{marginStart: 329, marginTop: 210}}>
                <AntDesign name="adduser" size={35} color="#EA09D2" />
                </View>
                <TouchableOpacity style={styles.signupButton} 
                onPress = { () => {
                    navigation.navigate("Register")
                    setEmail('')
                    setPassword('')
                    }}>
			    </TouchableOpacity> 
				</SafeAreaView>
		</TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000000",
		alignItems: "center",
		justifyContent: "center",
    },
    login: {
		backgroundColor: "#FBFBFB",
	    height: 50,
	    borderRadius: 30,
	    padding: 14,
	    fontSize: 16,
     	width: 315,
    	marginStart: -50,
    },
	linearGradient: {
		height: 75, 
		borderRadius: 40, 
		padding: 14, 
		width: 75, 
		marginTop: 45, 
		alignItems: "center", 
		justifyContent: "center",
	},
    signupButton: {
		backgroundColor: "transparent",
	    height: 65,
     	width: 80,
        marginStart: 328,
        marginTop: -45,
    },
});
