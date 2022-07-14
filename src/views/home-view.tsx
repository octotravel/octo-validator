import { Grid, Box, Container } from "@mui/material";
import { FC } from "react";
import Header from "../components.tsx/header";
import FormInputView from "./form-view";
import OutputView from "./output";

const HomeView: FC = () => {
  

  return (
    <>
      <Header title="Validation" />
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={5}>
            <Grid item md={5} xs={12}>
            <FormInputView/>
            </Grid>
            <Grid item md={7} xs={12}>
              <OutputView/>
              <div className="datagrid-title">Nameservers</div>
              <div className="datagrid-content">Third Party</div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default HomeView;
