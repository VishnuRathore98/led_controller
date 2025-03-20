/*
app
Contains the app's navigation, which is file-based. 
The file structure of the app directory determines the app's navigation.

The app has two routes defined by two files: app/(tabs)/index.tsx and app/(tabs)/explore.tsx. 
The layout file in app/(tabs)/_layout.tsx sets up the tab navigator.
*/
import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import RNBluetoothClassic from "react-native-bluetooth-classic";
// import { Button, Text, TextInput, View } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import { useState } from "react";

export default function Index() {
  //   const [selectedDevice, setSelectedDevice] = useState();

  async function getDevices() {
    try {
      const devices = await RNBluetoothClassic.getBondedDevices();
      console.log("Paired devices:", devices);
      // setDevices([...devices]);
    } catch (error) {
      console.error("Error getting paired devices:", error);
    }
  }

  async function connectToDevice() {
    try {
      const connected = await RNBluetoothClassic.connectToDevice(
        "00:22:09:01:0C:81"
      );
      if (connected) {
        console.log(`Connected to ${"00:22:09:01:0C:81"}`);
      }
    } catch (error) {
      console.error("Failed to connect:", error);
    }
  }

  async function turnOn() {
    try {
      const response = await RNBluetoothClassic.writeToDevice(
        "00:22:09:01:0C:81",
        "ON"
      );
      console.log(response);
    } catch (error) {
      console.log("Send ON error", error);
    }
  }

  async function turnOff() {
    try {
      const response = await RNBluetoothClassic.writeToDevice(
        "00:22:09:01:0C:81",
        "OFF"
      );
      console.log(response);
    } catch (error) {
      console.log("Send OFF error", error);
    }
  }
  return (
    <View>
      <Button title='Connect Device' onPress={connectToDevice} />
      <View style={{ marginBottom: 20 }}></View>
      <Button title='LED ON' onPress={turnOn} />
      <View style={{ marginBottom: 20 }}></View>
      <Button title='LED OFF' onPress={turnOff} />
      {/*
          <Picker
            selectedValue={selectedDevice}
            onValueChange={(itemValue, itemIndex) =>
            setSelectedDevice(itemValue)
            }>
            <Picker.Item label='Select a device' value='0' />
            <Picker.Item label='Device 1' value='1' />
            <Picker.Item label='Device 2' value='2' />
          </Picker>
          <View
            style={{
              flex: 1,
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Text>{selectedDevice!=0? "Device "+selectedDevice: "No Device"} connected!</Text>
            <View style={{width:200}}><Button title='On' /></View>
            <View style={{width:200}}><Button title='Off' /></View>
            <View style={{width:200}}><Button title='Connect' /></View>
            <View style={{width:200}}><Button title='Disconnect' /></View>
      */}
    </View>
  );
}
