import { Login } from "../services/Login"
import { 
    Container,
    Flex,
    Text, 
    Input,
    Field,
    Button
} from "@chakra-ui/react"

import { useState } from "react";
import { LoginButton } from "./LoginButton";


export const InputContainer = () => {
    const [name, setName] = useState("");

    const handleLogin = () => {
        Login(name); // Chama a função Login com o nome digitado
    };

    return (
        <>
            <Container minHeight={"300px"} maxWidth={"500px"} marginTop={"50px"} bg={"#fff"} padding={"20px"} borderRadius={"20px"} color={"#000"}>
                <Flex height={"100%"}direction={"column"} align={"center"}
                justify={"center"} gap={"20px"}>
                    <Text>
                        Faça login
                    </Text>
                    <Field.Root invalid>
                    <Field.Label>Name</Field.Label>
                    <Input
                    placeholder="Enter your name"  value={name}
                    onChange={(e) => setName(e.target.value)}/>

                    
                    <Field.ErrorText>This field is required</Field.ErrorText>
                    </Field.Root>

                    <Field.Root invalid>
                    <Field.Label>Password</Field.Label>
                    <Input placeholder="Enter your password" />
                    <Field.ErrorText>This field is required</Field.ErrorText>
                    </Field.Root>
                    
                    <LoginButton onClick={handleLogin}/>
                </Flex>
            </Container>
        </>
    )
}