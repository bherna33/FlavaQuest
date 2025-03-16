import { Tabs } from 'expo-router';
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { HapticTab } from '@/components';

export default function TabLayout() {
	return (
		<Tabs
  			screenOptions={{
    		tabBarButton: HapticTab,
    		headerShown: false,
  			}}
		>
		<Tabs.Screen
			name="index"
			options={{
			title: 'Home',
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
			tabBarIcon: () => <Ionicons name="settings" size={24} color="black" />
			}}
		/>
	</Tabs>
  );
}
