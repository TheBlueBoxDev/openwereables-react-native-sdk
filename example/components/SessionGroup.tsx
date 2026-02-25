import OpenWearables from "open-wearables";
import { useState } from "react";
import { Button, Text } from "react-native";
import { Group } from "./Group";
import { Input } from "./Input";

export function SessionGroup({
  credentials,
  onRefresh,
}: {
  credentials: Record<string, any>;
  onRefresh: () => void;
}) {
  const [userId, setUserId] = useState("");
  const [apiKey, setApiKey] = useState("");

  return (
    <Group name="Session">
      {credentials["userId"] ? (
        <Text>User ID: {credentials["userId"]}</Text>
      ) : (
        <Input
          onChangeText={(text) => setUserId(text)}
          value={userId}
          placeholder="User ID"
          autoCorrect={false}
          autoCapitalize="none"
        />
      )}
      {credentials["apiKey"] ? (
        <Text>API Key: {credentials["apiKey"]}</Text>
      ) : (
        <Input
          onChangeText={(text) => setApiKey(text)}
          value={apiKey}
          placeholder="API Key"
          autoCorrect={false}
          autoCapitalize="none"
        />
      )}
      <Button
        title={OpenWearables.isSessionValid() ? "Sign out" : "Sign in"}
        color={OpenWearables.isSessionValid() ? "red" : undefined}
        disabled={
          !(
            OpenWearables.isSessionValid() ||
            (userId.length > 0 && apiKey.length > 0)
          )
        }
        onPress={() => {
          if (OpenWearables.isSessionValid()) {
            OpenWearables.signOut();
          } else {
            OpenWearables.signIn(userId, null, null, apiKey);
          }
          onRefresh();
        }}
      />
    </Group>
  );
}
