//to check this run this block inside app.js
{
  /* <NativeBaseProvider>
      <Box style={styles.container}>
        <PostInfo
          name="Mandy Portman"
          time="30 mins ago"
          likes="32"
          comments="22"
        />
      </Box>
    </NativeBaseProvider> */
}

import { View, StyleSheet } from "react-native";
import React from "react";
import { HStack, Box, Avatar, Text, VStack } from "native-base";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const PostInfo = (props) => {
  return (
    <Box>
      <HStack space={16}>
        <Box>
          <HStack>
            <Box>
              <Avatar
                source={{
                  uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                }}
              ></Avatar>
            </Box>

            <Box ml={4}>
              <VStack>
                <Text bold fontSize="lg">
                  {props.name}
                </Text>
                <Text>{props.time}</Text>
              </VStack>
            </Box>
          </HStack>
        </Box>

        <Box>
          <HStack space={6}>
            <Box>
              <HStack>
                <AntDesign name="heart" size={24} color="red" />
                <Text ml={2}>{props.likes}</Text>
              </HStack>
            </Box>
            <Box>
              <HStack>
                <EvilIcons name="comment" size={28} color="black" />
                <Text ml={2}>{props.comments}</Text>
              </HStack>
            </Box>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PostInfo;
