/**
 * This File Provides Typing for React-Navigation Components within the src/app/navigation folder
 *
 */

// Imports | Type Checking
import type {
  NativeStackScreenProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'; // Used to Provide Typechecking within our Screen Components

/**
 * RootStackParam List will be used to provided Typechecking for the Navigator. It provides typing to
 * all parameters that we want to pass to our screen components. This does not handle typing for
 * the Route & Navigation props, only custom params that we create.
 * This will be imported by ./Navigation.tsx to type check our root navigator
 */
type RootStackParamList = {
  SearchScreen: undefined; // Screen with no parameters can be passed undefined as a type.
};

/**
 * RootStackScreenProps will be used to provide TypeChecking within our Screen Components for the Route and Navigation Props.
 * This type will need to be exported and then imported by each Screen Component.
 */
type SearchScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SearchScreen',
  'RootStack'
>;

export { RootStackParamList, SearchScreenProps, NativeStackNavigationOptions };
