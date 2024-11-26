import { StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import { Button, ButtonTray } from "../../UI/Button.js";
import Icons from "../../UI/Icons.js";

const ModuleView = ({ module }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
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
