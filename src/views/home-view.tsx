import { Grid, Box, Container,Button } from "@mui/material";
import { FC } from "react";
import FormInput from "../components.tsx/formInput";
import Header from "../components.tsx/header";
import SelectBox from "../components.tsx/select-box";
import {capability, productTimes} from '../utils/constant'
import FormInputView from "./form-view";

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
