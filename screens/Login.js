import React,{component} from 'react';

import{
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput,
    Image,
    ImageBackground,
    Alert,
    KeyboardAvoidingView  
} from "react-native";

import firebase from 'firebase';

const bgImage  = require("../assets/background2.png");
const appIcon = rquire("../assets/appIcon.png");
const appName = require("../assets/appName.png");

export default class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        };
    }
handleLogin = (email,password) =>{
    firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then(() =>{
        this.props.navigation.navigate("bottomTab");
    })
    .catch(error => {
        Alert.alert(error.message)
    });
};
    render(){
        const{email,password} = this.state;
        return(
            <keyBoarAvoidingView  behaviour = "padding" style = {styles.conatiner}>

<ImageBackground   source = {bgImage} styles = {styles.bgImage}   >
<View style = {styles.upperContainer}>

   <Image Source = {appIcon} style={styles.appIcon}/>
    <Image Source = {appName} style = {styles.appName}/>
</View>


<View style = {styles.lowerContainer}>
<TextInput
              style={styles.textinput}
              onChangeText={text => this.setState({ email: text })}
              placeholder={"Enter Email"}
              placeholderTextColor={"#FFFFFF"}
              autoFocus
            />
            <TextInput
              style={[styles.textinput, { marginTop: 20 }]}
              onChangeText={text => this.setState({ password: text })}
              placeholder={"Enter Password"}
              placeholderTextColor={"#FFFFFF"}
              secureTextEntry
            />

            <TouchableOpacity
            style = {[styles.button,{marginTop:20}]}

            onPress = {() => this.handleLogin(email,password)}
            
            >
                
            </TouchableOpacity>
</View>
</ImageBackground>
            </keyBoarAvoidingView>
           
            
           )
    }
} 