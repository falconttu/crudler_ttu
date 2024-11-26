import { StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";

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
