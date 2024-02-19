import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DashboardView from "../../View/DashboardView/DashboardView";
import LoginView from "../../View/LoginView/LoginView";

const stack = createStackNavigator();

const Navigator = () => {

    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="LoginView">
                <stack.Screen name="Login" options={{headerShown: false}} component={LoginView} />
                <stack.Screen name="Home" options={{headerShown: false}} component={DashboardView} />
            </stack.Navigator>
        </NavigationContainer>

    )
}

export default Navigator