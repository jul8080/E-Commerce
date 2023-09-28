import Login from './authentaction/Login';
import SignUp from './authentaction/SignUp';
import Main from './screens/Main';
import { StatusBar } from 'react-native'
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
  const [loaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Helvetica': require('./assets/fonts/Helvetica.ttf'),
    'Helvetica-Bold': require('./assets/fonts/Helvetica-Bold.ttf'),
  })
  if (!loaded) return null
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
      >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
      </Stack.Navigator>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
    </NavigationContainer >
  );
}

