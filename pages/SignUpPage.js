import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Constants from 'expo-constants';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


function SignUpPage(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log("Dismiss");
    }}>


    <View style={styles.container}>
    
    <Icon name="rocket" size={32} color="#900" />

      

      <Text style={styles.containerTitles}> Email </Text>
      <TextInput 
        style={[styles.input, styles.input.one]}
        placeholder="Your email address"
        //value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text style={styles.containerTitles} > Password </Text>
      <TextInput 
        style={[styles.input, styles.input.two]}
        placeholder="Your password"
        //value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      
      <Text style={styles.positionText}> ✅ I agree to the<Text style={styles.textStyle}> Terms of Services</Text> and<Text style={styles.textStyle}> Private Policy </Text></Text>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <Text> Have an account? <Text style={styles.textStyle}>Sign In </Text></Text>
    </View>

    </TouchableWithoutFeedback>
  );
}


export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  containerTitles: {
    position: 'relative',
    right: 100,
    marginTop: 15,
  },
  adjustIcon: {
     position: 'absolute',
     top: 80,
     left: 40,
     
  },
  title: {
    fontSize: 24,
    marginBottom: 100,
    marginRight: 190,
    /*position: 'absolute',
    top: 80,
    right: 200,*/
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    padding: 12,
    margin: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    one: {
       backgroundColor: 'lightgreen'
    },
    two: {
      backgroundColor: 'yellow'
    }
  },
  
  button: {
    backgroundColor: 'green',
    padding: 12,
    marginBottom: 12,
    marginTop: 44,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  positionText: {
    position: "relative",
    left: -3,
    fontSize: 10
  },
  textStyle: {
    color: 'darkgreen',
    fontWeight: 'bold',
  }
});