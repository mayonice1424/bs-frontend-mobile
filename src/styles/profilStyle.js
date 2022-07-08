import { StyleSheet } from "react-native";

const profilStyleScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FCFFFC",
        padding: 0,
        margin: 0,
    },
    content :{
        paddingBottom: 80,
        marginLeft: '4%',
        marginRight: '4%',
    },
    image:{
        width: 119,
        height: 119,
        borderRadius: 10,
    },
    imageContainer:{
        width: 120,
        height: 120,
        borderRadius: 10,
        marginRight: '2%',
        backgroundColor: '#FCFFFC',
        borderColor: '#171717',
        shadowOpacity: 0.8,
        borderRadius: 10,
        elevation: 6,
        shadowRadius: 15 ,
    },
    profilContainer:{
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    status:{
        marginTop: '10%',
        paddingVertical : '1%',
        paddingHorizontal : '10%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilButton:{
        marginTop: '7%',
        paddingVertical : '3%',
        paddingHorizontal : '10%',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
    }
});
export default profilStyleScreen;