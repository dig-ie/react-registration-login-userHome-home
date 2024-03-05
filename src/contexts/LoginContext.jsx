import { createContext } from "react";
import { useState } from "react";


export const LoggedContext = createContext();

// 2. Criar um componente Provider para envolver os componentes que precisam acessar o contexto
export const LoggedContextProvider = ({ children }) => {
  const [contextValue, setContextValue] = useState(false);


// Função para atualizar o valor do contexto
    const updateContextValue = (newValue) => {
        setContextValue(newValue);
    };

    return (
        <LoggedContext.Provider value={{ contextValue, updateContextValue }}>
          {children}
        </LoggedContext.Provider>
      );
}



