import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rows: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },

  starredIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },

  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },

  text: {
    color: 'white',
    paddingLeft: 15,
    fontSize: 18,
  },

});

export default styles;
