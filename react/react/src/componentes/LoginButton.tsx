import { Button } from "@chakra-ui/react";

interface LoginButtonProps {
  onClick: () => void;
}

export const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
  return <Button onClick={onClick}>Entrar</Button>;
};