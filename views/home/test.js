import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const takeImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column',padding: 40, marginTop:20 }}>
      <View style={{marginTop:2}}>
      <Button title="Tomar Foto" onPress={takeImage} style={{marginTop: 20}} />
      </View>
      <View style={{marginTop:10}}>
      <Button title="Agregar Foto" onPress={pickImage} style={{marginTop: 20}} />
     </View>
     {image && <Image source={{ uri: image }} style={{width: 300, height: 300, marginTop: 20}} />}
    </View>
  );
}