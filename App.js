import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import 'react-native-reanimated'
import 'react-native-gesture-handler';
import HomeStackScreen from './StackScreen/HomeStackScreen';
import AuthenticationStack from './StackScreen/AuthenticationStack';
export default function App() {
  LogBox.ignoreLogs(['ColorPropType will be','PointPropType will be','EdgeInsetsPropType will be','ViewPropTypes will be','Overwriting fontFamily'])

const app=false
  return (
   <>
   {
  app?
  <HomeStackScreen/>
  :
  <AuthenticationStack/>
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
