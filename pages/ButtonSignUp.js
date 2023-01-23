import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Stack, IconButton } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
//import { createStackNavigator } from 'react-navigation-stack';
import SignUpPage from './SignUpPage';


const ButtonSign = (props) => {
    //const navigation = useNavigation();
    return (
        <IconButton   
            //navigation={navigation}   
            onPress={() => props.navigation.navigate("SignUp")}
            icon={(props) => <Icon name="login" {...props} />}
            color="yellow"
            style={styles.containerF}
        />
    );
};

export default ButtonSign;

const styles = StyleSheet.create({
  containerF: {
    backgroundColor: 'black',
  },
});

