import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Victor Bastos</Text>
                    <Text color="gray.300" fontSize="small">
                        bastosleft@gmail.com
                         </Text>
                </Box>
            )}
            <Avatar size="md" name="Victor Bastos" src="https://avatars.githubusercontent.com/u/49718337?v=4" />
        </Flex>
    );
}