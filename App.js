import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImagePicker from './app/components/ImagePicker';
import LocalNotification from './app/components/LocalNotification';
import SecureStoreDemo from './app/components/SecureStoreDemo';
import ShareImage from './app/components/ShareImage';

export default function App() {
  return (
    <>
      {/* <SecureStoreDemo /> */}
      <ImagePicker />
      {/* <LocalNotification /> */}
      {/* <ShareImage /> */}
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
