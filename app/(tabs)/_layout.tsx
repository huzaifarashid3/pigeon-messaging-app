import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';


export default function TabLayout() {
  return (
    <Tabs
    >
      <Tabs.Screen name="main_screen" options={{
        title: 'Main',
        tabBarIcon: ({ color }) => <FontAwesome name="home" size={20} color={color} />
      }} />
      <Tabs.Screen name="chat_screen" options={{
        title: 'Chat',
        tabBarIcon: ({ color }) => <FontAwesome name="comments" size={20} color={color} />
      }} />
      <Tabs.Screen name="setting_screen" options={{
        title: 'Settings',
        tabBarIcon: ({ color }) => <FontAwesome name="cog" size={20} color={color} />
      }} />
    </Tabs>
  );
}
