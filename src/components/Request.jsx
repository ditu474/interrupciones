import {
  styled,
  Box,
  Button,
  CircularProgress,
  List,
  Typography,
  ListItem,
  ListItemText,
} from "@mui/material";

import useGetPokemons from "../hooks/useGetPokemons";

const RootStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: theme.spacing(5),
}));

const Request = () => {
  const { pokemons, loading, startRequest, abortRequest } = useGetPokemons();

  return (
    <RootStyle>
      {!loading && (
        <Button variant="contained" color="success" onClick={startRequest}>
          Empezar
        </Button>
      )}
      {loading && (
        <>
          <CircularProgress />
          <Button variant="contained" color="error" onClick={abortRequest}>
            Interrumpir
          </Button>
        </>
      )}
      <Box sx={{ height: 50 }} />
      <Typography variant="h4">Pokemones</Typography>
      <List dense>
        {pokemons.map((pokemon) => (
          <ListItem key={pokemon.id}>
            <ListItemText primary={pokemon.name} />
          </ListItem>
        ))}
      </List>
    </RootStyle>
  );
};

export default Request;
