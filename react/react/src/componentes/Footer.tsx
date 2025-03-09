import { 
    Flex,
    Text, 
} from "@chakra-ui/react"

export const Footer = () => {
    return (
        <Flex align={"center"} justify={"center"} height={"100px"} marginTop={"30px"} bg={"#fff"} color={"#000"}>
            <Text>
                Desenvolvido por Victor Augusto
            </Text>
        </Flex>
    )
}