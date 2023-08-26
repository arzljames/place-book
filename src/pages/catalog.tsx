// import { SearchBar } from "@/features/cart/components";
import {
  CatalogBanner,
  CatalogListing,
  SearchFilter,
} from "@/features/catalog";

const Catalog = () => {
  return (
    <>
      <CatalogBanner />
      <SearchFilter />
      <CatalogListing />
    </>
  );
};

export default Catalog;
