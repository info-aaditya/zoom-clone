import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingBottom: 10,
    borderBottomColor: "#1F1F1F",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonContainer: {
    alignItems: "center",
    flex: 1,
  },

  button: {
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius: 25,
  },
  
  menutext: {
    color: '#858585',
    fontSize: 12,
    paddingTop: 10,
    fontWeight: '600',
  },

});

export default styles;
