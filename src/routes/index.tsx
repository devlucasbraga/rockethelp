import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import Signin from "../screens/Signin";
// import { AppRoutes } from "./app.routes";

export function Routes() {
  const [loading, setLoading] = useState();
  const [user, setUser] = useState<FirebaseAuthTypes.User>();

  return (
    <NavigationContainer>
      <Signin />
    </NavigationContainer>
  );
}
