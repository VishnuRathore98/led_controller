/*
app
Contains the app's navigation, which is file-based. 
The file structure of the app directory determines the app's navigation.

The app has two routes defined by two files: app/(tabs)/index.tsx and app/(tabs)/explore.tsx. 
The layout file in app/(tabs)/_layout.tsx sets up the tab navigator.
*/

import { Button, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function Index() {
  const [selectedDevice, setSelectedDevice] = useState();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        // alignItems: "center",
      }}>
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
        {/* <Text>Home Screen</Text> */}
      </View>
    </View>
  );
}
