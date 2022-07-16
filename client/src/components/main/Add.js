import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button , Image} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export default function Add({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(CameraType.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (camera) {
            const data = await camera.takePictureAsync(null);
            setImage(data.uri)
        }
    }
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex: 1 }} >
        <View style={styles.cameraContainer } >
                <Camera
                    ref = {ref=> setCamera(ref)}
                    style={styles.fixedRatio} type={type} ratio={'1:1'} />
       
        </View>
    
    <Button
    color = '#a42fcd'
    title = "Flip Image"
    onPress={() => {
      setType(type === CameraType.back ? CameraType.front : CameraType.back);
    }}/>
            
            <Button color='#a42fcd' title="Take Picture" onPress={() => takePicture()} />
            <Button color='#a42fcd' title="Pick Image From Gallery" onPress={() => pickImage()} />
            <Button color='#a42fcd' title="Save" onPress={() => navigation.navigate('Save',{image})} />
            {image && <Image source={{ uri: image }} style={{flex: 1}} />}
        </View>
  );
}
const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        flexDirection:'row'
    },
    fixedRatio: {
        flex: 1,
        aspectRatio: 1,
        
    },
   
    
 }); 

