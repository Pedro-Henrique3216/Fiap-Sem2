import { Text, View } from "react-native";


export default function PersonalInformation({name, email}) {

    return(
        <View>
            <Text style={{color: '#fff', fontSize: 20, marginTop: 20}}>
                Name: {name}
            </Text>
            <Text style={{color: '#fff', fontSize: 20, marginTop: 20}}>
                Email: {email}
            </Text>
        </View>
    )

}