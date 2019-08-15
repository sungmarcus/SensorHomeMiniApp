import React, { Component } from "react";
import {  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
ScrollView} from "react-native";
import SensorView from "./SensorView";
import { NavigationApi } from 'react-native-ernnavigation-api'


const axis = ["x", "y", "z"];

const availableSensors = {
  accelerometer: axis,
  gyroscope: axis,
  magnetometer: axis,
  barometer: ["pressure"]
};
const viewComponents = Object.entries(availableSensors).map(([name, values]) =>
  SensorView(name, values)
);

export default class App extends Component {

  _onPressReport(){
    NavigationApi.requests().navigate('ReportingMiniApp', {'initialPayload': ("next")}).catch(() => {
     console.log("Navigation failed.");
   })
  }_onPressMap(){
    NavigationApi.requests().navigate('HeatMapMiniApp', {'initialPayload': ("next")}).catch(() => {
     console.log("Navigation failed.");
   })
  }_onPressID(){
    NavigationApi.requests().navigate('HCEMiniApp', {'initialPayload': ("next")}).catch(() => {
     console.log("Navigation failed.");
   })
  }_onPressNoise(){
    NavigationApi.requests().navigate('NoiseLevelsMiniApp', {'initialPayload': ("next")}).catch(() => {
     console.log("Navigation failed.");
   })
  }

  render() {
    
    return (
      <ScrollView>
        {viewComponents.map((Comp, index) => <Comp key={index} />)}
        <TouchableOpacity onPress={this._onPressReport} style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Report Issues</Text>
				</TouchableOpacity>
        <TouchableOpacity onPress={this._onPressMap} style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Map of Crowds</Text>
				</TouchableOpacity>
        <TouchableOpacity onPress={this._onPressID} style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Smart ID</Text>
				</TouchableOpacity>
        <TouchableOpacity onPress={this._onPressNoise} style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Noise Map</Text>
				</TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: { fontSize: 24 },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  input: {
    width: window.width - 40,
    fontSize: 24,
    padding: 5,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1
  },
  buttonContainer: {
		backgroundColor: "#34495e",
		marginTop: 10,
		marginBottom: 10,
		padding: 10,
		borderRadius: 5,
		alignItems: "center"
	},
	buttonText: {
		color: "#fff",
		fontSize: 24
  }
});

