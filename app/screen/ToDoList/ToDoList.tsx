import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { color, dimension } from "../../constants/theme";

const ToDoList = () => {
  const [result, setResult] = useState("");
  const [list, setList] = useState([]);
  const handleAdd = () => {
    if (result.length === 0) {
      alert("Bạn vui lòng nhập công việc");
      return false;
    }
    setList([...list, result]);
    setResult("");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.root}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>ToDo List</Text>
          <ScrollView
            style={{ height: dimension.height * 0.75, marginHorizontal: 10 }}
            showsVerticalScrollIndicator={false}
          >
            {list.map((item, index) => (
              <TouchableOpacity
                style={styles.list}
                key={index}
                onPress={() => {
                  Alert.alert(
                    "Thông báo",
                    "Bạn có chắc muốn xoá cái này không?",
                [{ text: "Cancel" }, { text: "Delete", onPress : () => {
                      let listTmp = [...list];
                      listTmp.splice(index,1);
                      setList(listTmp)
                    } }]
                  );
                }}
              >
                <View style={styles.number}>
                  {/* <Text style={styles.numberText}>{index}</Text> */}
                  <Text style={styles.numberText}>
                    {index+1 < 10 ? `0${index+1}` : index+1}
                  </Text>
                </View>
                <Text style={styles.textList}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.search}>
          <TextInput
            style={styles.inputText}
            placeholder="Thêm công việc của bạn"
            value={result}
            onChangeText={(text) => setResult(text)}
            autoFocus={true}
          ></TextInput>
          <TouchableOpacity
            style={styles.buttonSearch}
            onPress={() => {
              handleAdd();
            }}
          >
            <Text style={styles.textButtomSearch}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bgc,
  },
  root: {
    flex: 1,
    marginVertical: dimension.height * 0.01,
    marginHorizontal: dimension.width * 0.05,
    justifyContent: "space-between",
  },
  textHeader: {
    color: color.title,
    fontSize: 24,
    fontWeight: "bold",
  },
  list: {
    height: dimension.height * 0.06,
    backgroundColor: "#fff",
    marginTop: 20,
    borderRadius: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    backgroundColor: color.primary ,
    // backgroundColor: color.primary,
    width: dimension.width * 0.1,
    height: dimension.height * 0.04,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: "#fff",
    fontWeight: "bold",
  },
  textList: {
    marginLeft: 50,
  },
  header: {},
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: color.title,
    width: dimension.width * 0.7,
    paddingLeft: 20,
  },
  buttonSearch: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: color.title,
    justifyContent: "center",
    alignItems: "center",
  },
  textButtomSearch: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
