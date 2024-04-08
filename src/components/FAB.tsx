import { FAB } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { theme } from "../theme/colors";
import { useState } from "react";

export const Fab = () => {
    const [editMode, setEditMode] = useState(false);
  return (
    <FAB
      mode="elevated"
      label={!editMode ? 'Edit' : 'Save'}
      icon={() =>
        !editMode ? (
          <FontAwesome5
            name="pen"
            size={18}
            style={{color: theme.colors.tertiary}}
          />
        ) : (
          <FontAwesome5
            name="save"
            size={20}
            style={{
              color: theme.colors.tertiary,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          />
        )
      }
      style={{
        backgroundColor: theme.colors.secondary,
        width: '25%',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      }}
      onPress={() => setEditMode(!editMode)} // Toggle editMode state
    />
  );
};
