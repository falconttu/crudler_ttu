import { StyleSheet, Text, View } from "react-native";
import ModuleView from "../entity/modules/ModuleIView";
import Screen from "../layouts/Screen";

export const ModuleViewScreen = ({ navigate, route }) => {
  //--Initialisations--
  const { module } = route.params;

  //--State--
  //--Handlers--
  //--View--
  return (
    <Screen>
      <ModuleView module={module} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;
