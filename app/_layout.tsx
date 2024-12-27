
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: '(tabs)',
};

export default function RootLayout() {


  setTimeout(() => {
    SplashScreen.hideAsync();
  }, 5000);


  return <RootLayoutNav />;
}

function RootLayoutNav() {


  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
