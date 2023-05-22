import { createStackNavigator } from '@react-navigation/stack';
import { Header } from '../components';
import Detail from '../screens/detail';
import Home from '../screens/home';
import Questions from '../screens/questions';

const Stack = createStackNavigator();

const QuizStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: (props) => props.route.name === 'Home' ? <Header title="Hello, Jonathan" /> : <Header title="Detail Quiz" goBack />, headerShown: true }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Questions" component={Questions} />
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

export default QuizStack;