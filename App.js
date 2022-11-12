import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import 'react-native-reanimated'
import 'react-native-gesture-handler';
import Screen from './components/Screen';
import Authentication from './components/Authentication';
import Scanner from './components/Scanner';
import MapItem from './components/MapItem';
import HomeStackScreen from './StackScreen/HomeStackScreen';
export default function App() {
  LogBox.ignoreLogs(['ColorPropType will be','PointPropType will be','EdgeInsetsPropType will be','ViewPropTypes will be','Overwriting fontFamily'])

const app=true
  return (
   <>
   {
  app?
  <HomeStackScreen/>
  :
  <View style={styles.container}>
  <Authentication/>
  </View>
   }
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
