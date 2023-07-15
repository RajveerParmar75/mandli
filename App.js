const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LoanTransactions from "./screens/LoanTransactions";
import HomeLoan from "./screens/HomeLoan";
import Saving from "./screens/Saving";
import Loan from "./screens/Loan";
import AccountProfile from "./screens/AccountProfile";
import AddMember from "./screens/AddMember";
import HomeSaving from "./screens/HomeSaving";
import GroupScreen from "./screens/GroupScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Roboto_regular: require("./assets/fonts/Roboto_regular.ttf"),
    Roboto_medium: require("./assets/fonts/Roboto_medium.ttf"),
    Roboto_semibold: require("./assets/fonts/Roboto_semibold.ttf"),
    Roboto_bold: require("./assets/fonts/Roboto_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LoanTransactions"
              component={LoanTransactions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeLoan"
              component={HomeLoan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Saving"
              component={Saving}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Loan"
              component={Loan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountProfile"
              component={AccountProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddMember"
              component={AddMember}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeSaving"
              component={HomeSaving}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group2"
              component={GroupScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
