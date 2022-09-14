import logoImg from '../../assets/logo.svg'
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { shade } from "polished";
import { Container, Content } from './styles'
import { useContext } from 'react';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
  toggleTheme(): void;
}

export function Header({ onOpenNewTransactionModal, toggleTheme }: HeaderProps) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
        <Switch
          className="mode-dark"
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={40}
          handleDiameter={20}
          offColor={shade(0.1, colors.green)}
          onColor={colors.blueLight}
        />
      </Content>
    </Container>
  )
}
