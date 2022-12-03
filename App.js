import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import 'react-native-reanimated'
import 'react-native-gesture-handler';
import HomeStackScreen from './StackScreen/HomeStackScreen';
import AuthenticationStack from './StackScreen/AuthenticationStack';
import { Provider, useSelector } from 'react-redux';
import { selectToken } from './feature/UserStore';
import store from './app/store';
import ScreenList from './ScreenList';
export default function App() {
  LogBox.ignoreLogs(['ColorPropType will be','PointPropType will be','EdgeInsetsPropType will be','ViewPropTypes will be','Overwriting fontFamily'])

  // const app=useSelector(selectToken)

  return (
    <Provider store={store}>
        {/* <View> */}
          <ScreenList/>
        {/* </View> */}
    </Provider>
   
   
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
