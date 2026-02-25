import OpenWearables from "open-wearables";
import { useState } from "react";
import { Button, Text } from "react-native";
import { Group } from "./Group";
import { Input } from "./Input";
import { INITIAL_HOST } from "../utils/constants";

export function HostGroup() {
  const [hostInput, setHostInput] = useState(INITIAL_HOST);

  return (
    <Group name="Host">
      <Input
        onChangeText={(text) => setHostInput(text)}
        value={hostInput}
        placeholder="Configure host"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Text>Update host and click "Save"</Text>
      <Button title="Save" onPress={() => OpenWearables.configure(hostInput)} />
    </Group>
  );
}
