import { CurrentRenderContext } from '@react-navigation/native';
import { WhiteBalance } from 'expo-camera';
import React from 'react'
import { View, Button, Image, StyleSheet, ImageBackground, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

function Home({navigation}) {
  return (
      <View style={{
          flex: 1, backgroundColor:'black'}}>
          <ImageBackground source={require('./assets/images/home.png')} resizeMode="cover" style={styles.backgroundImage}>
              <TouchableOpacity style={styles.button} margin='20' color='#a42fcd' onPress={() => navigation.navigate('Social')}><Text style={styles.text}>Social</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button} color='#a42fcd'  onPress={() => navigation.navigate('Chat')}><Text style={styles.text}>Connect</Text></TouchableOpacity>
            </ImageBackground>  
      </View>
      
  )
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 20,
        backgroundColor: '#a42fcd',
        width: 300,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 10,
        textAlign:'center',
        
    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',

    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignContenet:'center',
        width: null,
      }
   
    
 }); 

export default Home