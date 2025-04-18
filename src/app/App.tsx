// React & React-Native Imports
//...

// React Navigation
import { NavigationContainer } from '@react-navigation/native';

// Navigators
import { RootNavigator, RootStackParamList } from '@/app/navigation';

// App
export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
