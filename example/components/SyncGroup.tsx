import OpenWearables from "open-wearables";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { Group } from "./Group";

export function SyncGroup() {
  return (
    <Group name="Sync">
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          alignSelf: "center",
        }}
      >
        <Text style={{ fontSize: 16 }}>Background Sync</Text>
        <TouchableOpacity
          onPress={() => {
            if (OpenWearables.isSyncActive()) {
              OpenWearables.stopBackgroundSync();
            } else {
              OpenWearables.startBackgroundSync();
            }
          }}
        >
          <Text
            style={{
              backgroundColor: OpenWearables.isSyncActive() ? "red" : "green",
              padding: 6,
              borderRadius: 6,
              color: "white",
            }}
          >
            {OpenWearables.isSyncActive() ? "STOP" : "START"}
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Manual Sync"
        disabled={OpenWearables.isSyncActive()}
        onPress={async () => {
          await OpenWearables.syncNow();
        }}
      />
    </Group>
  );
}
