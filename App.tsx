import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { Header } from './src/components';
import QuizStack from './src/route';
import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';



export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-Semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    });
  }
  
  useEffect(() => {
    loadFonts()
      .then(() => {
        setFontsLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (

    !fontsLoaded ? ( <AppLoading /> ) : 
    ( <NavigationContainer>
      <PaperProvider>
        <StatusBar style="auto" />
        {/* <Header /> */}
        <QuizStack />
      </PaperProvider>
    </NavigationContainer>
    )
  );
}