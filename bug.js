import * as WebBrowser from 'expo-web-browser';

const handlePress = async () => {
  let result = await WebBrowser.openBrowserAsync('https://www.example.com');
  console.log('Result: ', result);
};