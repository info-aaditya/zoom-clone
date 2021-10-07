import React from 'react'
import { View, Text, Image } from 'react-native'
import AntDesign from  "react-native-vector-icons/AntDesign"
import styles from './styles';

const contactsMenuButtons = [
  {
    type: "starred",
    name: "Starred",
  },

  {
    type: "Contact",
    photo: require("../../assets/images/Aaditya.jpg"),
    name: "Aaditya",
  },

  {
    type: "Contact",
    photo: require("../../assets/images/Ravi.jpg"),
    name: "Ravi",
  },

  {
    type: "Contact",
    photo: require("../../assets/images/Bishnu.jpg"),
    name: "Bishnu",
  },
  
]

function ContactsMenu() {
  return (
    <View>
      {/* Contact Container */}
      {contactsMenuButtons.map((contact, index) =>
        <View
          key={index}
          style={styles.rows}>
            {/* Image */}
            {contact.type == "starred" ? (
              <View style={styles.starredIcon}>
                <AntDesign name="star" size={30} color= "#efefef"/>
              </View> ) :
              (
                <Image  source={contact.photo} style={styles.image} />
              )
            }
          {/* Text */}
          <Text style={styles.text}>{contact.name}</Text>
        </View>
      )}
    </View>
  )
}

export default ContactsMenu;
