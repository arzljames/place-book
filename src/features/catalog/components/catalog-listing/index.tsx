import CatalogCard from "@/components/ui/card/CatalogCard";
import { Grid, Container } from "@mantine/core";
import data from "@/data/places.json";
import _ from "lodash";
import { ICatalog } from "@/interfaces";

const CatalogListing = () => {
  return (
    <Container my="md" pt={20} pb={40}>
      <Grid>
        {_.map(data, (place: ICatalog, key: number) => {
          return (
            <Grid.Col key={key} xs={4}>
              <CatalogCard data={place} />
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CatalogListing;
