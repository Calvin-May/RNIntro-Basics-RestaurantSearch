/**
 * This file sets up the root stack navigator of the app. It will be imported into ./App.tsx
 * and used inside a Navigation Container.
 *
 */

// Imports | React Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Used to create our Navigator

// Imports | Screen Components
import SearchScreen from '@/screens/SearchScreen';
import ResultShowScreen from '@/screens/ResultShowScreen';

// Imports | Typing
import type { NativeStackNavigationOptions, RootStackParamList } from './types';

// For typing, pass our RootStackParamList as a Generic to the createNavigator function
const StackNavigator = createNativeStackNavigator<
  RootStackParamList, // Route Parameter Typing
  'RootStack' // The Id of the Navigator that we are type checking
>();

const RootNavigator = () => {
  return (
    <StackNavigator.Navigator
      initialRouteName='SearchScreen'
      id='RootStack'
      screenOptions={RootNavigatorOptions}
    >
      <StackNavigator.Screen
        name='SearchScreen'
        component={SearchScreen}
        options={SearchScreenOptions}
      />
      <StackNavigator.Screen
        name='ResultShowScreen'
        component={ResultShowScreen}
        options={ResultShowScreenOptions}
      />
    </StackNavigator.Navigator>
  );
};

// Boilerplate for Navigator and Screen Options
const RootNavigatorOptions: NativeStackNavigationOptions = {
  // TODO: Provide Navigator Options
};

const SearchScreenOptions: NativeStackNavigationOptions = {
  title: 'Business Search',
};
const ResultShowScreenOptions: NativeStackNavigationOptions = {
  title: 'Restaurant Title',
};

export { RootNavigator };
