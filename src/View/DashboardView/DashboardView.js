import {View, StyleSheet, Text} from "react-native";
import NavigatorDrawer from "../../Components/Navigator/NavigatorDrawer";

const DashboradView = ({ navigation}) => {

    return(

        <NavigatorDrawer/>

        // <View style={StyleSheet.container}>
        //     <Text>Pagina Home</Text>
        // </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        paddingTop: "8%",
    }
})

export default DashboradView