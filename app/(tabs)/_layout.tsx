import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
	<Tabs>
		<Tabs.Screen
			name="index"
			options={{
			title: 'Home',
			headerShown:false,
			}}
		/>
		<Tabs.Screen
			name="explore"
			options={{
			title: 'Explore',
			}}
		/>
		<Tabs.Screen
			name="camera"
			options={{
			title: 'Camera',
			}}
		/>
		<Tabs.Screen
			name="recipes"
			options={{
			title: 'Recipes',
			}}
		/>
		<Tabs.Screen
			name="profile"
			options={{
			title: 'Profile',
			}}
		/>
	</Tabs>
  );
}
