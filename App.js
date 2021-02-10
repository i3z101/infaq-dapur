import React, { useEffect } from 'react';
import { LogBox, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, CarterOne_400Regular } from '@expo-google-fonts/carter-one';
import { Coiny_400Regular } from '@expo-google-fonts/coiny';
import { Cairo_200ExtraLight, Cairo_300Light, Cairo_400Regular, Cairo_600SemiBold, Cairo_700Bold, Cairo_900Black } from '@expo-google-fonts/cairo';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import packageReducer from './store/reducers/reducer';
import ContainerNavigation from './view/navigation/ContainerNavigation';
import cartReducer from './store/reducers/cartReducer';
import donationReview from './store/reducers/donationReducer';


export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);
    LogBox.ignoreLogs(['Unhandled promise rejection: Error: Native splash screen is already hidden. Call this method before rendering any view.']);
  }, [])
  const [fontLoaded] = useFonts({
    carter: CarterOne_400Regular,
    coiny: Coiny_400Regular,
    cairoExLight: Cairo_200ExtraLight,
    cairoLight: Cairo_300Light,
    cairoRegular: Cairo_400Regular,
    cairoSemi: Cairo_600SemiBold,
    cairoBold: Cairo_700Bold
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  const reducers = combineReducers({
    packageReducer: packageReducer,
    cart: cartReducer,
    donationReview: donationReview
  })

  const store = createStore(reducers);
  return (
    <Provider store={store}>
      <ContainerNavigation />
      <SafeAreaView />
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
