import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const image = {
  uri: "https://assets.nflxext.com/ffe/siteui/vlv3/e316821f-7177-48f4-b748-e44a8b0840df/6ea04966-5593-47f2-ab98-d38e26b63a8d/PK-en-20220406-popsignuptwoweeks-perspective_alpha_website_medium.jpg",
};

const BackGroundImage = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      {/* 1 */}
      <View style={styles.text}>
        <View style={styles.header}>
          <Text style={styles.netflixText}>Netflix</Text>
          <Text style={styles.signInText}>Sign In</Text>
        </View>
      </View>
      {/* 2 */}
      <View style={styles.center}>
        <Text style={styles.centerText}>
          Unlimited movies, TV <br></br>shows, and more.
        </Text>
        <Text style={styles.cancelText}>Watch anywhere. Cancel anytime.</Text>
        <Text style={styles.emailText}>
          Ready to watch? Enter your email to create or restart your membership.
        </Text>
        {/* 3 */}
        <View style={styles.last}>
          <TextInput style={styles.textInput} placeholder="Email address" />
          <TouchableOpacity style={styles.button1} onPress={"clicked"}>
            <Text style={styles.buttonText}>Get Started ></Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "20px",
    marginLeft: "30px",
    marginRight: "30px",
  },
  netflixText: {
    display: "flex",
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
  },
  signInText: {
    borderRadius: 2,
    display: "flex",
    backgroundColor: "red",
    color: "white",
    fontSize: 30,
    padding: "5px",
    fontWeight: "bold",
  },
  center: {
    flex: 1,
    marginTop: -30,
    justifyContent: "center",
    textAlign: "center",
  },
  centerText: {
    marginTop: "-50px",
    display: "flex",
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  cancelText: {
    fontSize: 22,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  emailText: {
    fontSize: 20,
    color: "white",
    justifyContent: "center",
    marginTop: 15,
    alignItems: "center",
  },
  last: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 15,
  },
  textInput: {
    width: "40%",
    backgroundColor: "white",
    height: 40,
    padding: 10,
  },
  buttonText: {
    width: "100%",
    padding: 10,
    backgroundColor: "red",
    height: 40,
    color: "white",
    fontWeight: "bold",
  },
});

export default BackGroundImage;
