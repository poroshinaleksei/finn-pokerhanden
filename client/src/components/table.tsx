import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { HandResponse } from "../types/handResponse";

interface Props {
  results?: HandResponse[];
}

export const ResultTable = ({ results }: Props) => {
  if (!results) {
    return null;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Result</TableCell>
            <TableCell align="right">Card 1</TableCell>
            <TableCell align="right">Card 2</TableCell>
            <TableCell align="right">Card 3</TableCell>
            <TableCell align="right">Card 4</TableCell>
            <TableCell align="right">Card 5</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((result, index) => (
            <TableRow
              key={result._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell component="th" scope="row">
                {result.count}
              </TableCell>
              {result.cards.map((card) => (
                <TableCell align="right">{card.rank + card.suit}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultTable;
