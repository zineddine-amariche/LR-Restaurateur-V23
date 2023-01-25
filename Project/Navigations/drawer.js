import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./RootStack/DrawerContent"
import Commandes from "../Pages/Screens-2-Commandes/Commandes--Screen--1";
import Accueil from "../Pages/Screens-2-Commandes/screen-1-Accueil";
import Details from "../Pages/Screens-2-Commandes/Details-Cmd--Screen--1";
import Imprission from "../Pages/Screens-4-Others/Parametres/imprimante/imprission";
import Reservation from "../Pages/Screens-3-Réservations/Reservation--Screen--1";
import CommandesTerminer from "../Pages/Screens-2-Commandes/Commandes--Screen--2";
import Espace from "../Pages/Screens-2-Commandes/screen-2-Espace";
import Parametre from "../Pages/Screens-4-Others/Parametres/Screen-1-Paramètre/SettingsScreen";
import Horaires from "../Pages/Screens-4-Others/Parametres/Horaire";
// import SaveReservation from "../Pages/Screens-3-Réservations/Reservation--Screen--1/Components/saveRedervation";
const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
    return (
        <Drawer.Navigator drawerContent={props =>
            <DrawerContent {...props} />}>
            {/* <Drawer.Screen name="ListCommandeScreen" component={ListCommandeScreen} /> */}
            <Drawer.Screen name="Espace" component={Espace} />
            <Drawer.Screen name="Accueil" component={Accueil} />
            <Drawer.Screen name="Commandes" component={Commandes} />
            <Drawer.Screen name="Details" component={Details} />
            <Drawer.Screen name="Parametre" component={Parametre} />
            <Drawer.Screen name="Imprission" component={Imprission} />
            <Drawer.Screen name="Reservation" component={Reservation} />
            {/* <Drawer.Screen name="SaveReservation" component={SaveReservation} /> */}
            <Drawer.Screen name="CommandesTerminer" component={CommandesTerminer} />
            <Drawer.Screen name="Horaires" component={Horaires} />
            
            {/* <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="InstructionScreen" component={InstructionScreen} />
            <Drawer.Screen name="HoraireScreen" component={HoraireScreen} />
            <Drawer.Screen name="FermetureScreen" component={FermetureScreen} />
            <Drawer.Screen name="HoraireSetting" component={HoraireSetting} />
            <Drawer.Screen name="DetailsSetTime" component={DetailsSetTime} />
            <Drawer.Screen name="InfoScreen" component={InfoScreen} />
            <Drawer.Screen name="Imprission" component={Imprission} />
            <Drawer.Screen name="InfoScreenToConfirm" component={InfoScreenToConfirm} />
            <Drawer.Screen name="CommandeFuture" component={CommandeFuture} />
            <Drawer.Screen name="CommandeDuJour" component={CommandeDuJour} />
            <Drawer.Screen name="CommandeTScreen" component={CommandeTScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} /> */}

        </Drawer.Navigator>)
}
export default DrawerScreen