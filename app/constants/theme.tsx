import { Dimensions } from "react-native";

const dimension = Dimensions.get('window');
const { width, height } = dimension;
const color = {
    second:'#57F154',
    primary:'#52D6F3',
    title:'#1EA3D0',
    text:'#000000',
    bgc:'#D6DCDD'
}

export {dimension,color}