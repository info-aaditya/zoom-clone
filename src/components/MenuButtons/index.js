import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from './styles';

const items = [
  {
    id: 1,
    name: "video-camera",
    title: "New Meeting",
    customColor: "#FF751F"
  },

  {
    id: 2,
    name: "plus-square",
    title: "Join"
  },

  {
    id: 3,
    name: "calendar",
    title: " Schedule"
  },

  {
    id: 4,
    name: "upload",
    title: " Share Screen"
  },
]

function MenuButtons() {
  return (
    <View style={styles.container}>
      {items.map((item, index) => 
        <View
          key={index}
          style={styles.buttonContainer}>
          <TouchableOpacity 
            style={{
              ...styles.button,
              backgroundColor: item.customColor ? item.customColor : "#0470DC"
            }}
          >
            <View>
            <FontAwesome name={item.name} size={20} color={"#efefef"} />
            </View>
          </TouchableOpacity>
          <Text style={styles.menutext}>{item.title}</Text>
        </View>
      )}
    </View>
  )
}

export default MenuButtons;
