import React from 'react'
import { View, Text } from 'react-native'
import Fontisto from "react-native-vector-icons/Fontisto";
import styles from './styles';

function SearchBar() {
  return (
    <View style={styles.container}>
      <Fontisto name="search" size={20} color={"#858585"} />
      <Text style={styles.searchbartext}> Search</Text>      
    </View>
  )
}

export default SearchBar;
