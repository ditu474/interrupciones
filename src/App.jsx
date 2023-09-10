import { styled, Box, Typography } from "@mui/material";

import Request from "./components/Request";

const RootStyle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const TittleStyle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
}));

const App = () => {
  return (
    <RootStyle>
      <TittleStyle variant="h1">Interrupciones</TittleStyle>
      <Request />
    </RootStyle>
  );
};

export default App;
