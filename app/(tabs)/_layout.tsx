import { Tabs } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native';

export default function TabLayout() {
  return (
	<SafeAreaView className='flex-1'>
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
	</SafeAreaView>
  );
}
