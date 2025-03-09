export default {
    preset: "ts-jest",
    testEnvironment: "jsdom", // Alterar para jsdom para suportar testes de componentes React
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest", // Transforma .ts e .tsx com ts-jest
    },
  };