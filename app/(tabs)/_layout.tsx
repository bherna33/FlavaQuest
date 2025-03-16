import { Tabs } from 'expo-router';
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
	<Tabs>
		<Tabs.Screen
			name="index"
			options={{
			title: 'Home',
			headerShown:false,
			tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
			}}
		/>
		<Tabs.Screen
			name="explore"
			options={{
			title: 'Explore',
			tabBarIcon: () => <FontAwesome name="search" size={24} color="black" />
			}}
		/>
		<Tabs.Screen
			name="camera"
			options={{
			title: 'Camera',
			headerShown:false,
			tabBarIcon: () => <Entypo name="camera" size={24} color="black" />,
			}}
		/>
		<Tabs.Screen
			name="recipes"
			options={{
			title: 'Recipes',
			tabBarIcon: () => <FontAwesome name="bookmark" size={24} color="black" />
			}}
		/>
		<Tabs.Screen
			name="settings"
			options={{
			title: 'Settings',
			headerShown:false,
			tabBarIcon: () => <Ionicons name="settings" size={24} color="black" />
			}}
		/>
	</Tabs>
  );
}
