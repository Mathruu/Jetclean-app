import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import OcorrenciaView from "../../View/OcorrenciasView/OcorrenciasView";
import HomeView from "../../View/HomeView/HomeView";

const drawer = createDrawerNavigator();

const NavigatorDrawer = () => {
    

    return (

        <drawer.Navigator>
            <drawer.Screen name="home" component={HomeView}
                        options={
                            {
                                drawerLabel: 'Início',
                                drawerIcon: (size) => <FontAwesome name="home" size={20} color="black" />
                            }
                        }
                    />
            <drawer.Screen name="Ocorrências" component={OcorrenciaView}
                        options={
                            {
                                drawerLabel: 'Ocorrências',
                                drawerIcon: (size) => <AntDesign name="tags" size={20} color="black" />
                            }
                        }
                    />
        </drawer.Navigator>
    )
}

export default NavigatorDrawer