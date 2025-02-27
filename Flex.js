import { View } from "react-native";
import Quadrado from "./src/Components/Quadrado";

export default ()=>{
    return(
        <View style = {{
            flex:1, 
            backgroundColor:"grey",
            justifyContent: "center",
            alignItems:"center"
            }}>
            <View style={{flexDirection:"row"}}>
                <Quadrado/>
                <Quadrado cor="#ff80a1"/>
                <Quadrado cor="#9212ed"/>
            </View>
        </View>
    )
}