/**
 * This file sets up the root stack navigator of the app. It will be imported into ./App.tsx
 * and used inside a Navigation Container.
 *
 */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';

const StackNavigator = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name='SearchScreen' component={SearchScreen} />
    </StackNavigator.Navigator>
  );
};

export { RootNavigator };
