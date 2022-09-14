import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyled } from "./styles/global";
import { ThemeProvider, DefaultTheme } from "styled-components";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionsModal } from "./components/NewTransactionsModal";
import { TransactionsProvider } from "./hooks/useTransactions";
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { usePersistedState } from "./hooks/usePersistState";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  };

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} toggleTheme={toggleTheme} />
        <Dashboard />
        <NewTransactionsModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
        <GlobalStyled />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
