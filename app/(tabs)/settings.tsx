import { SettingsLink } from "@/components";
import { SafeAreaView, Text, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Settings() {
	return (
		<SafeAreaView className="flex-1">
			<Text className="text-6xl font-bold p-4">
				Settings
			</Text>
			<View className="flex-1 bg-gray-300 p-2 ">
				<Text className="text-4xl font-bold px-2 py-4">
					General 
				</Text>

				<SettingsLink
					text="Account Information"
					icon={<Feather name="user" size={24} color="black" />}
				/>
				<SettingsLink
					text="Security"
					icon={<MaterialCommunityIcons name="security" size={24} color="black" />}
				/>
				<SettingsLink
					text="Appearance"
					icon={<AntDesign name="setting" size={24} color="black" />}
				/>
				<SettingsLink
					text="Notifications"
					icon={<Feather name="bell" size={24} color="black" />}
				/>
				<SettingsLink
					text="Delete Account"
					textStyles="text-red-500"
					icon={<MaterialIcons name="delete-forever" size={24} color="black" />}
				/>

				<Text className="text-4xl font-bold px-2 py-4">
					Support 
				</Text>

				<SettingsLink
					text="Feedback"
					icon={<MaterialIcons name="feedback" size={24} color="black" />}
				/>
				<SettingsLink
					text="Terms of Use"
					icon={<MaterialCommunityIcons name="file-document-multiple-outline" size={24} color="black" />}
				/>
				<SettingsLink
					text="Report an Issue"
					icon={<MaterialIcons name="report-problem" size={24} color="black" />}
				/>
			</View>
		</SafeAreaView>
	);
}
