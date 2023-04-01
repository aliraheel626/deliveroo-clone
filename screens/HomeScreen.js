import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, TextInput, ScrollView } from "react-native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  });
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <Header />

      {/* Search */}
      <Search />
      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="Everyones been enjoying these juicy discounts"
          featuredCategory="featured"
        />
        <FeaturedRow
          id="12345"
          title="Offers Near You"
          description="Why not support your local restauraunt tonight"
          featuredCategory="featured"
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const Header = () => {
  return (
    <View className="flex-row pb-3 items-center mx-4 space-x-2">
      <Image
        source={{ uri: "https://links.papareact.com/wru" }}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
      />
      <View className="flex-1">
        <View>
          <Text className="font-bold text-gray-500 text-xs">Deliver Now!</Text>
        </View>
        {/* <Text className="font-bold text-xl align-middle">
          Current Location
          <ChevronDownIcon className="mt-5" size={20} color="#00CCBB" />
        </Text> */}
        <View className="flex-row">
          <View>
            <Text className="font-bold text-xl flex-row">Current Location</Text>
          </View>
          <View className=" mt-2">
            <ChevronDownIcon className="" size={20} color="#00CCBB" />
          </View>
        </View>
      </View>
      <UserIcon size={35} color="#00CCBB" />
    </View>
  );
};
const Search = () => {
  return (
    <View className="flex-row items-center space-x-2 pb-2 mx-4">
      <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 items-center">
        <MagnifyingGlassIcon color="gray" size={20} />
        <TextInput
          placeholder="Restraunts and Cuisines"
          keyboardType="default"
        />
      </View>
      <AdjustmentsVerticalIcon color="#00CCBB" />
    </View>
  );
};

export default HomeScreen;
