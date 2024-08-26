import { Tabs } from "expo-router";

const Layout = () => (
  <Tabs
    initialRouteName="index"
    screenOptions={{
      tabBarActiveTintColor: "white",
    }}
  ></Tabs>
);

export default Layout;
