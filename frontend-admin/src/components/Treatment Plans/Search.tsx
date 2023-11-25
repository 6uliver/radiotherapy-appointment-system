import styled from "styled-components";

const Container = styled.div``;

const SearchContainer = styled.div`
  display: flex;
`;

const SearchField = styled.input`
  padding: 15px;
  font-size: 20px;
  width: 100%;
`;

interface Props {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export function Search({ searchTerm, setSearchTerm }: Props) {
  return (
    <Container>
      <SearchContainer>
        <SearchField
          placeholder="Search by name or SSN number"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
    </Container>
  );
}
