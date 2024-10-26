
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReceipeList from '../screens/ReceipeListScreen';
import AddReceipeScreen from '../screens/AddReceipeScreen';

const RootStack = () => {
const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ReceipeList" component={ReceipeList} options={{headerShown:false}} />
                <Stack.Screen name="AddReceipeScreen" component={AddReceipeScreen} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;