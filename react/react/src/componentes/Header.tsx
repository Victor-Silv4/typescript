import { 
    Box,
    Flex,
    Text, 
} from "@chakra-ui/react"

export const Header = () => {
    return (
        
            <Flex direction={"row"}  align={"center"}
            justify={"center"} bg={"#392061"} padding={"50px"}>
                <Box>
                    <img src="https://hermes.dio.me/assets/diome/logo.png" alt="Dio Logo"  width={"50%"} height={"50%"} />
                </Box>
                <Text fontSize={"3rem"} width={"100%"} textTransform={"uppercase"} color={"#F46036"} fontFamily={"Arial"} fontWeight={"bold"}>DIO Bank</Text>
            </Flex>
    )
}