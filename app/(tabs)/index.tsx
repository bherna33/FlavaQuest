import { Carousel, Culture } from "@/components/Culture";
import { Item, Recommended } from "@/components/Recommended";
import SearchBar from "@/components/SearchBar";
import Title from "@/components/Title";
import { Trending } from "@/components/Trending";
import { View, SafeAreaView, ScrollView} from "react-native";

export default function Index() {
    return (
		<SafeAreaView className="flex-1">
			<ScrollView 
				showsVerticalScrollIndicator={false}
				
			>
				<View>
					<Title
						title="Start Your Quest for Flavor! "
						className="font-bold text-4xl text-center m-4 py-4"
					/>
					<SearchBar
						placeholder="🔍 Search Foods, Drinks, Deserts"
						className="border-2 p-4 rounded-2xl m-4"
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
						carouselStyles="rounded-xl"
						items={[
							<Culture
								title="Trinidad & Tobago"
								containerStyles=" bg-gray-300 rounded-2xl h-24 w-24 justify-center ml-4"
							/>,

							<Culture
								title="Haiti"
								containerStyles=" bg-gray-300 rounded-2xl h-24 w-24 justify-center ml-4"
							/>,

							<Culture
								title="Africa"
								containerStyles=" bg-gray-300 rounded-2xl h-24 w-24 justify-center ml-4"
							/>,

							<Culture
								title="Jamaica"
								containerStyles=" bg-gray-300 rounded-2xl h-24 w-24 justify-center ml-4"
							/>,

							<Culture
								title="Chinese"
								containerStyles=" bg-gray-300 rounded-2xl h-24 w-24 justify-center ml-4"
							/>,

						]}
					/>

					<Recommended
						title="Recommended For You"
						titleStyle="text-2xl font-bold"
						subTitle="See All"
						subTitleStyle="mt-2"
						containerStyle="m-4"
						titleContainerStyles="items-start absolute"
						subTitleContainerStyles="items-end"
					/>

					<Carousel
						carouselStyles="rounded-xl"
						items={[
							<Item
								foodName="Food Item"
								containerStyles="w-72  ml-4"
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
