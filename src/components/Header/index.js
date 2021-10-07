import React from 'react'
import { View, Text } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo";
import styles from './styles';

function Header() {
  return (
    <View style={styles.container}>
        <Entypo name="notification" size={30} color="#efefef" />
        <Text style={styles.heading}> Meet & Chat</Text>
        <Entypo name="new-message" size={30} color="#efefef" />
    </View>
  )
}

export default Header;
