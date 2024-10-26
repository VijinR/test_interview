import { useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput, ToastAndroid } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddReceipeScreen = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [receipePhoto, setReceipePhoto] = useState('')
    const [receipeVideo, setReceipeVideo] = useState('')

    const isValidTextInput = () => {
        var isValidTitle = false
        var isValidDesc = false

        if (title !== "") {
            isValidTitle = true
        } else {
            isValidTitle = false
            ToastAndroid.show('Please add a title', ToastAndroid.SHORT);
            return
        }

        if (description !== "") {
            isValidDesc = true
        } else {
            isValidDesc = false
            ToastAndroid.show('Please add a descriptiom', ToastAndroid.SHORT);
            return
        }

        if (isValidTitle && isValidDesc) {
            addDataToLocalStorage()
        }
    }

    const getReceipe = async (receipe) => {
        let receips = await AsyncStorage.getItem(receipe);
        if (receips) {
            return JSON.parse(receips);
        } else {
            return [];
        }
    };

    const addDataToLocalStorage = async () => {
        const newData = {
            title: title,
            description: description,
            image : receipePhoto,
            video : receipeVideo
            
        };
        try {
            let existingReceips = await getReceipe(newData.receipe);
            console.log(existingReceips)
            const updatedReceips = [...existingReceips, newData];
            await AsyncStorage.setItem(
                newData.receipe,
                JSON.stringify(updatedReceips)
            );
        } catch{

        }
    }

    const onPressAddReceipe = () => {
        isValidTextInput()
    }

    const onPressImageAdd = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setReceipePhoto(image.path)
        });
    }

    const onPressVideoAdd = () => {
        ImagePicker.openPicker({
            mediaType: "video",
        }).then((video) => {
            setReceipeVideo(video.path)
        });
    }



    return (
        <View style={styles.container}>

            <Text style={styles.titleStyle}>Add Recipe</Text>

            <TextInput
                style={styles.textInputStyle}
                value={title}
                placeholder="Title"
                onChange={(text) => setTitle(text)}
            />

            <TextInput
                style={styles.textInputStyle}
                value={description}
                placeholder="Description"
                onChange={(text) => setDescription(text)}
            />

            <Text style={styles.titleStyle}>Add Photo</Text>
            <View style={styles.photoViewStyle}>
                {
                    receipePhoto !== "" ? <Image
                        source={{ uri: receipePhoto }}
                        style={styles.photoImageStyle}
                    /> :
                        <Image
                            source={require('../assets/images/dummyBook.png')}
                            style={styles.photoImageStyle}
                        />
                }


                <TouchableOpacity style={styles.plusIconViewStyle}
                    onPress={onPressImageAdd}
                >
                    <Image
                        source={require('../assets/images/plusIcon.png')}
                        style={{ height: 20, width: 20 }}
                    />
                </TouchableOpacity>

            </View>

            <Text style={styles.titleStyle}>Add Video</Text>
            <View style={styles.photoViewStyle}>
                <Image
                    source={require('../assets/images/dummyBook.png')}
                    style={styles.photoImageStyle}
                />

                <TouchableOpacity style={styles.plusIconViewStyle}
                    onPress={onPressVideoAdd}
                >
                    <Image
                        source={require('../assets/images/plusIcon.png')}
                        style={{ height: 20, width: 20 }}
                    />
                </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.addReceipeButtonStyle}
                onPress={onPressAddReceipe}
            >
                <Text style={styles.addReceipeButtonTextStyle}>Add Recipe</Text>
            </TouchableOpacity>

        </View>
    )
}
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
    textInputStyle: {
        height: 45,
        borderRadius: 8,
        borderWidth: 1,
        marginHorizontal: 12,
        marginTop: 20
    },
    photTitleStyle: {
        fontWeight: 'medium',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16
    },
    photoViewStyle: {
        alignSelf: 'center',
        height: 80,
        width: 80,
        marginTop: 20
    },
    photoImageStyle: {
        height: 80,
        width: 80,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8
    },
    plusIconViewStyle: {
        height: 30,
        width: 30,
        position: 'absolute',
        bottom: -15,
        right: -15,
        backgroundColor: 'gray',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
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
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
export default AddReceipeScreen