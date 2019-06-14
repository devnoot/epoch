import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";

const Main = ({ children }) => (
  <>
    <Container maxWidth="xl">
      <Table size="medium">
        <TableHead>
          <TableRow>Something</TableRow>
        </TableHead>

        <TableBody>
          <TableRow>Something Else</TableRow>
        </TableBody>
      </Table>
    </Container>
  </>
);

export default Main;
