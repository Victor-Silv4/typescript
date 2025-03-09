import { Box, Flex, Text } from "@chakra-ui/react"

export const Footer = () => {
    return (
        <>
            <Box bg="black" width="100vw" height="100px" color="white" _hover={{ bg: "red" } }>
                <Flex direction="column" align="center" justify="center" height="100%">
                    <Text>Desenvolvido por Victor</Text>
                </Flex>
            </Box>
        </>
    )
}