import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSideBar } from "../../hooks/SideBarDrawerContext";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";


export function Header() {

    const { onOpen } = useSideBar()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex
            as="header"
            w="100%"
            maxW={1480}
            mx="auto"
            h="20"
            mt="4"
            px="6"
            align="center"
        >
            {!isWideVersion && (
                <IconButton mr="2" aria-label="Open sidebar" icon={<Icon as={RiMenuLine} />} fontSize="24" variant="unstyled" onClick={onOpen}>

                </IconButton>
            )}
            <Logo />

            {isWideVersion && <SearchBox />}

            <Flex
                align="center"
                ml="auto"
            >
                <NotificationsNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    );
}