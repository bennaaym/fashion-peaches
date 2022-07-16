import React ,{useState} from 'react'
import { View, TextInput, Image, Button } from 'react-native'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
require("firebase/firestore")
require("firebase/firebase-storage")
export default function Save(props) {
  const [caption, setCaption] = useState("");
  const childPath =`post/${Math.random().toString(36)}`

  const uploadImage = async () => {
    const uri = props.route.params.image;
    const response = await fetch(uri)
    const blob = await response.blob();

    const task = firebase.storage().ref().child(childPath).put(blob);
    const taskProgress = snapshot => {
      console.log(`transferred:${snapshot.bytesTransferred}`)
    }

    const taskCompleted = () => {
      snapshot.ref.getDownloadURL().then((snapshot) => {
        console.log(snapshot)
      })


    }

    const taskError = snapshot => {
      console.log(snapshot)
    }
    task.on("state_changed",taskProgress,taskError,taskCompleted)
  }


               


  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: props.route.params.image }} />
      <TextInput
        placeholder="Write a Caption..."
        onChangeText={(caption) =>  setCaption(caption) }
      />
      <Button title="Save" onPress={()=>uploadImage()}/>
    </View>
  )
}
