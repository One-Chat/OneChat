// Screens //
import LoginScreen from './LogInScreen';
import SignupScreen from './SignupScreen';

// Navigation //
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='LoginScreen'>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Signup'
        component={SignupScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
