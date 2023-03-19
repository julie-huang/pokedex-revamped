import { SetStateAction } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import types from "../../service/types.json";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

type PokemonSearchFiltersProps = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  typeFilter: string[];
  setTypeFilter: React.Dispatch<SetStateAction<never[]>>;
};

export const PokemonSearchFilters = ({
  searchQuery,
  setSearchQuery,
  typeFilter,
  setTypeFilter,
}: PokemonSearchFiltersProps) => {
  const handleSearch = (event: { target: { value: string } }) => {
    setSearchQuery(event.target.value);
  };

  const handleSelectChange = (event: any, values: any) => {
    setTypeFilter(values.map((value: { english: string }) => value.english));
  };

  return (
    <Grid
      columns={{ xs: 12, sm: 6 }}
      spacing={2}
      container
      direction="row"
      alignItems="flex-start"
      justifyContent="center"
      paddingY={2}
    >
      <Grid item xs={12} sm={3}>
        <OutlinedInput
          fullWidth
          placeholder="Search by Pokemon"
          id="pokemon-search"
          value={searchQuery}
          onChange={handleSearch}
          startAdornment={<SearchIcon sx={{ mr: 1 }} />}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Autocomplete
          fullWidth={true}
          multiple
          id="type-filter"
          options={types}
          disableCloseOnSelect
          getOptionLabel={(option) => option.english}
          onChange={handleSelectChange}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
                value={option.english}
              />
              {option.english}
            </li>
          )}
          renderInput={(params) => (
            <TextField {...params} label="Search by Type" placeholder="Types" />
          )}
        />
      </Grid>
    </Grid>
  );
};
