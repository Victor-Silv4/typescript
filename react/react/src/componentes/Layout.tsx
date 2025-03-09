import { Footer } from "./Footer"
import { Header } from "./Header"

import { 
    Flex
} from "@chakra-ui/react"

export const Layout = ({ children }: any) => {
    return (
        <>
            <Flex direction={"column"} bg={"#000"} color={"#fff"}>
            <Header />
                { children }
            <Footer />
            </Flex>
        </>
    );
}