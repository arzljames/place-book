import { TextInput, TextInputProps } from "@mantine/core";
import { BsSearch } from "react-icons/bs";

export function SearchBar(props: TextInputProps) {
  return (
    <TextInput
      icon={<BsSearch />}
      radius="lg"
      size="md"
      placeholder="Search and book places"
      rightSectionWidth={42}
      {...props}
    />
  );
}

export default SearchBar;
