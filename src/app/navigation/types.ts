/**
 * This File Provides Typing for React-Navigation Components within the src/app/navigation folder
 *
 */

// Imports | Type Checking
import type {
  NativeStackScreenProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'; // Used to Provide Typechecking within our Screen Components

// Provide Type Checking for the Root Navigator

/**
 * RootStackParam List will be used to provided Typechecking for the Navigator. It provides typing to
 * all parameters that we want to pass to our screen components. This does not handle typing for
 * the Route & Navigation props, only custom params that we create.
 * This will be imported by ./Navigation.tsx to type check our root navigator
 */
type RootStackParamList = {
  SearchScreen: undefined; // Screen with no parameters can be passed undefined as a type.
  ResultShowScreen: undefined;
};

// Provide Type Checking for Screen Components

//
/** Providing Typechecking for Individual Screens
 * RootStackScreenProps will be used to provide TypeChecking within our Screen Components for the Route and Navigation Props.
 * This type will need to be exported and then imported by each Screen Component.
 */
// type SearchScreenProps = NativeStackScreenProps<
//   RootStackParamList,
//   'SearchScreen',
//   'RootStack'
// >;

/** Automatically Provide Typechecking for All Screens in the RootStackParamList
 * RootStackScreenProps will be used to provide TypeChecking within our Screen Components for the Route and Navigation Props.
 * This type will need to be exported and then imported by each Screen Component.
 * Explanation: RootStackScreen Props is a Generic that extends inherits the Keys of RootStackParamList. This means that when using this as a type
 * in our screen component we must pass a parameter. The Only allowed parameters are the keys found in our RootStackParamList type, this means that
 * only allowed values are any Screen Components that we add to our navigator.
 */
type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T, 'RootStack'>;

// Provide Default Types for React-Navigation hooks and components

/**
 *  A Global Namespace used to provide Default types for useNavigation, Link, Ref, and other hooks provided by React Navigation.
 * This will ensure type-safety when using hooks like useNavigation or components ike Link and Ref.
 * It will also make sure that you have correct nesting on the linking prop.
 */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {} // Use the RootStackParamList we created in our Navigation types and extend it
  }
}

export {
  RootStackParamList,
  RootStackScreenProps,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
};
