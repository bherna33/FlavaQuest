import { Tabs} from 'expo-router';
import React from 'react';
import "../../global.css"

export default function TabLayout() {

  return (
    <Tabs
      // screenOptions={{
      // tabBarStyle: { 
      //   backgroundColor: "bg-sky-600", // Dark background

      // },
      // tabBarActiveTintColor: "blue", // Active tab color
      //   tabBarInactiveTintColor: "white", // Inactive tab color
      //   tabBarLabelStyle: {
      //     fontSize: 12,
      //     fontWeight: "bold",
      //   },
      // }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          // headerShown:false,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
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
