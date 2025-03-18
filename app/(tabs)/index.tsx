import { Item, Trending } from "@/components";
import { Card, InLine, SearchBar, Carousel} from "@/components/ui";
import React from "react";
import { View, ScrollView, Text, SafeAreaView, RefreshControl} from "react-native";

export default function Index() {

	const [refreshing, setRefreshing] = React.useState(false);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 2000);
	}, [])

    return (
		<SafeAreaView className='flex-1'>
			<ScrollView
				showsVerticalScrollIndicator={false}
				refreshControl={
					<RefreshControl
						refreshing = {refreshing}
						onRefresh={onRefresh}
						tintColor={"black"} // IOS
						title="Fetching more Flavors"
						titleColor={"black"}
						// colors={"blue"} // Android
					/>
				}
			>
				<View>
					<Text className="font-bold text-4xl text-center m-4 py-4">
						Start Your Quest for Flavor!
					</Text>

					<SearchBar
						placeholder="🔍 Search Foods, Drinks, Deserts"
					/>

					<Trending
						imageStyles =""
						containerStyles="bg-gray-300 m-4 rounded-3xl h-64 shadow-sm"
						buttonStyles="border-2 m-4 p-3 rounded-2xl"
						titleStyles="text-3xl font-bold my-4 ml-5 "
						textStyles="text-2xl text-center"
						column="max-w-64 mt-5"
					/>

					<Carousel
						// styles="rounded-xl"
						items={[
							<Card
								title="Trinidad & Tobago"
								containerStyles=" bg-gray-300 rounded-2xl h-24 w-24 justify-center ml-4"
							/>,
							<Card
								title="Haiti"
								containerStyles=" bg-gray-300 rounded-2xl h-24 w-24 justify-center ml-4"
							/>,
							<Card
								title="Africa"
								containerStyles=" bg-gray-300 rounded-2xl h-24 w-24 justify-center ml-4"
							/>,
							<Card
								title="Jamaica"
								containerStyles=" bg-gray-300 rounded-2xl h-24 w-24 justify-center ml-4"
							/>,
							<Card
								title="Chinese"
								containerStyles=" bg-gray-300 rounded-2xl h-24 w-24 justify-center ml-4"
							/>,
							<Card
								title="Japanese"
								containerStyles=" bg-gray-300 rounded-2xl h-24 w-24 justify-center ml-4"
							/>,
							<Card
								title="Korean"
								containerStyles=" bg-gray-300 rounded-2xl h-24 w-24 justify-center ml-4"
							/>,
						]}
					/>

					<InLine
						leftText="Recommended For You"
						leftTextStyle="text-2xl font-bold"
						rightText="See All"
						rightTextStyle=" mt-2"
						container="m-4"
					/>

					<Carousel
						// styles="rounded-xl"
						items={[
							<Item
								foodName="Food Item"
								containerStyles="w-72 ml-4"
								foodContainerStyles="w-72 h-48 bg-gray-300 rounded-3xl shadow-sm"
								buttonContainerStyles="items-end"
								buttonStyles="bg-gray-50 border-2 rounded-2xl w-14 h-12"
							/>,
							<Item
								foodName="Food Item2"
								containerStyles="w-72 ml-4"
								foodContainerStyles="w-72 h-48 bg-gray-300 rounded-3xl shadow-sm"
								buttonContainerStyles="items-end"
								buttonStyles="bg-gray-50 border-2 rounded-2xl w-14 h-12"
							/>,
							<Item
								foodName="Food Item3"
								containerStyles="w-72 ml-4"
								foodContainerStyles="w-72 h-48 bg-gray-300 rounded-3xl shadow-sm"
								buttonContainerStyles="items-end"
								buttonStyles="bg-gray-50 border-2 rounded-2xl w-14 h-12"
							/>,
							<Item
								foodName="Food Item4"
								containerStyles="w-72 ml-4"
								foodContainerStyles="w-72 h-48 bg-gray-300 rounded-3xl shadow-sm"
								buttonContainerStyles="items-end"
								buttonStyles="bg-gray-50 border-2 rounded-2xl w-14 h-12"
							/>,
							<Item
								foodName="Food Item5"
								containerStyles="w-72 ml-4"
								foodContainerStyles="w-72 h-48 bg-gray-300 rounded-3xl shadow-sm"
								buttonContainerStyles="items-end"
								buttonStyles="bg-gray-50 border-2 rounded-2xl w-14 h-12"
							/>,
						]}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
    );
}
