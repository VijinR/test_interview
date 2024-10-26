import { } from 'react'
import { View, StyleSheet, Text, SafeAreaview, FlatList, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: 1,
        image: require('../assets/images/dummyBook.png')
    },
    {
        id: 2,
        image: require('../assets/images/dummyBook.png')
    },
    {
        id: 3,
        image: require('../assets/images/dummyBook.png')
    }
]

const ReceipeList = () => {
    const navigation = useNavigation();

    const renderReceipeData = ({ item }) => {
        return (
            <View style={{ borderWidth: 1, marginHorizontal: 12, marginBottom: 16, borderRadius: 10, borderColor: 'gray' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={item.image}
                        style={{ height: 100, width: 100, marginVertical: 16, marginLeft: 8 }}
                    />
                    <View style={{ marginVertical: 16, marginHorizontal: 16, flex: 1 }}>
                        <Text style={styles.bookTitleStyle} numberOfLines={1}>Book Name</Text>
                        <Text style={styles.bookDescriptionStyle}>Description</Text>
                    </View>
                </View>

            </View>
        )
    }

    const onPressAddReceipe = () => {
        navigation.navigate('AddReceipeScreen')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>Recipe Book</Text>

            <TouchableOpacity style={styles.addReceipeButtonStyle}
                onPress={onPressAddReceipe}
            >
                <Text style={styles.addReceipeButtonTextStyle}>Add Recipe</Text>
            </TouchableOpacity>

            <FlatList
                style={{ flex: 1, marginTop: 12 }}
                data={DATA}
                renderItem={renderReceipeData}
            />

        </View>

    )

}

export default ReceipeList
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    titleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20
    },
    addReceipeButtonTextStyle: {
        fontWeight: 'medium',
        textAlign: 'center',
        fontSize: 16
    },
    addReceipeButtonStyle: {
        height: 40,
        width: 140,
        borderWidth: 1,
        borderRadius: 20,
        alignSelf: "center",
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bookTitleStyle: {
        fontWeight: 'bold',
        width: '75%'
    },
    bookDescriptionStyle: {
        fontWeight: 'medium',
        width: '75%'
    },
});