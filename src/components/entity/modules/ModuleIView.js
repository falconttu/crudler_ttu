import { StyleSheet, Text, View, Alert } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import { Button, ButtonTray } from "../../UI/Button.js";
import Icons from "../../UI/Icons.js";

const ModuleView = ({ module, onDelete }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  const handleDelete = () => onDelete(module);

  const requestDelete = () =>
    Alert.alert(
      "Delete Warning",
      `Are you sure that you want to delete ${module.ModuleCode} ${module.ModuleName}`,
      [{ text: "Cancel" }, { text: "Confirm Delete" , onPress: handleDelete}]
    );
  // View --------------------------------
  return (
    <View style={styles.container}>
      <FullWidthImage
        source={{ uri: module.ModuleImage }}
        style={styles.image}
      />

      <View style={styles.infoTray}>
        <Text style={styles.boldText}>
          {module.ModuleCode} {module.ModuleName}
        </Text>
        <Text style={styles.text}>Level {module.ModuleLevel}</Text>
        <Text style={styles.text}>
          {module.ModuleLeaderName}
          <Text style={styles.dimText}>(Moudle Leader)</Text>
        </Text>
      </View>

      <ButtonTray>
        <Button icon={<Icons.Edit />} label="Modify" />
        <Button
          icon={<Icons.Delete />}
          label="Delete"
          styleButton={{ backgroundColor: "#f26e6e" }}
          styleLabel={{ color: "#990055" }}
          onClick={requestDelete}
        />
      </ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  text: { fontSize: 16 },
  boldText: { fontSize: 16, fontWeight: "bold" },
  dimText: { color: "grey" },
  infoTray: { gap: 5 },
  image: { borderRadius: 3 },
  container: { gap: 5 },
});

export default ModuleView;
