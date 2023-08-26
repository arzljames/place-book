import MenuButton from "@/components/ui/button/MenuButton";
import SearchBar from "@/components/ui/input/SearchBar";
import { Grid, Container } from "@mantine/core";

export function SearchFilter() {
  return (
    <>
      <Container my="md" pt={40}>
        <Grid>
          <Grid.Col xs={12}>
            <Grid>
              <Grid.Col xs={10}>
                <SearchBar />
              </Grid.Col>
              <Grid.Col xs={2}>
                <MenuButton />
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}

export default SearchFilter;
