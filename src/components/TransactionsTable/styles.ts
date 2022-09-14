import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table{
  width: 100%;
  border-spacing: 0 0.5rem;
  
  th{
    color:${({ theme }) => theme.colors.textBody};
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    ligh-height: 1.5rem;
  }
  td{
    padding: 1rem 2rem;
    border: 0;
    background-color:${({ theme }) => theme.colors.shape};
    color:${({ theme }) => theme.colors.textBody};
    border-radius: 0.25rem;

    &:first-child{
      color:${({ theme }) => theme.colors.textTitle};
    }

    &.deposit{
      color:${({ theme }) => theme.colors.green};
    }

    &.withdraw{
      color:${({ theme }) => theme.colors.red};
    }
  }
}
`
