import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

type SideBarContextProps = UseDisclosureReturn;

interface SideBarProviderProps {
    children: ReactNode;
}

const SideBarContext = createContext({} as SideBarContextProps);

export function SiderBarContextProvider({ children }: SideBarProviderProps) {

    const disclosure = useDisclosure();
    const router = useRouter();

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])

    return (
        <SideBarContext.Provider value={disclosure}>
            {children}
        </SideBarContext.Provider>
    )
}

export const useSideBar = () => useContext(SideBarContext);