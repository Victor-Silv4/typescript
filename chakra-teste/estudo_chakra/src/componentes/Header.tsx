import { Box, Flex, Text } from "@chakra-ui/react"

export const Header = () => {
    return (
        <>
            <Box bg="black" width="100vw" height="200px" color="white" >
                <Flex height="100%" align="center" justify="center" >
                    <Text fontSize= "3rem" textTransform="uppercase">DIO Bank</Text>
                </Flex>
            </Box>
        </>
    )
}