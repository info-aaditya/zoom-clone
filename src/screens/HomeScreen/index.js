import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import MenuButtons from "../../components/MenuButtons";
import ContactsMenu from "../../components/ContactsMenu";
import styles from './styles';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{height: "100%"}}>
        <Header/>
        <SearchBar/>
        <MenuButtons/>
        <ContactsMenu />
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen;
