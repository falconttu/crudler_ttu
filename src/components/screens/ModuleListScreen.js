import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import Screen from "../layouts/Screen";

import initialModules from "../../data/modules.js";
export const ModuleListScreen = () => {
  //--Initialisations--
  const modules = initialModules;
  //--State--
  //--Handlers--
  const handleSelect = () => alert("Item Selected")
  //--View--
  return (
    <Screen>
      <ScrollView style={styles.container}>
        {modules.map((module) => {
          return (
            <Pressable key={module.ModuleCode} onPress={handleSelect}>
              <View style={styles.item}>
                <Text style={styles.text}>
                  {module.ModuleCode} {module.ModuleName}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "lightgray",
  },
  text: {
    onSize: 16,
  },
});

export default ModuleListScreen;
