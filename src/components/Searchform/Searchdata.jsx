import React, { useState } from 'react'
import dbData from "../../db/db.json";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 4
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function Searchdata() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isDisabled, setDisabled] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const transactions = dbData.transactions;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = (transaction) => {
    setSelectedTransaction(transaction);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 420 }}>
            <Table stickyHeader id="table-to-xls">
            <TableHead>
                <TableRow>
                  <StyledTableCell align="center"></StyledTableCell> 
                  <StyledTableCell align="center">ID</StyledTableCell> 
                  <StyledTableCell align="center">MTCN</StyledTableCell>
                  <StyledTableCell align="center">Transaction Type</StyledTableCell> 
                  <StyledTableCell align="center">Rec Curr</StyledTableCell> 
                  <StyledTableCell align="center">Pay Curr</StyledTableCell> 
                  <StyledTableCell align="center">Rec Country</StyledTableCell>
                  <StyledTableCell align="center">Pay Country</StyledTableCell>
                  <StyledTableCell align="center">Status</StyledTableCell>
                  <StyledTableCell align="center">Direction</StyledTableCell>
                  <StyledTableCell align="center">Settlement</StyledTableCell>
                  <StyledTableCell align="center">Recording Date</StyledTableCell>
                  <StyledTableCell align="center">Sending Country</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {transactions
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((transaction) => {
                    return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={transaction.id}>
                        <TableCell align='center'>
                          <IconButton aria-label="delete" onClick={() => handleOpen(transaction)}>
                            <VisibilityIcon />
                          </IconButton>
                        </TableCell>
                        <TableCell align='center'>{transaction.id}</TableCell>
                        <TableCell align='center'>{transaction.mtcn}</TableCell>
                        <TableCell align='center'>{transaction.transactionType}</TableCell>
                        <TableCell align='center'>{transaction.sendingSideCurrency}</TableCell>
                        <TableCell align='center'>{transaction.sendingSideCurrency}</TableCell>
                        <TableCell align='center'>{transaction.recordingCountry}</TableCell>
                        <TableCell align='center'>{transaction.payOutCountry}</TableCell>
                        <TableCell align='center'>{transaction.status}</TableCell>
                        <TableCell align='center'>{transaction.direction}</TableCell>
                        <TableCell align='center'>{transaction.settlementStatus}</TableCell>
                        <TableCell align='center'>{transaction.recordingDate}</TableCell>
                        <TableCell align='center'>{transaction.sendingSideCountry}</TableCell>
                    </TableRow>
                    );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <div className='d-grid d-md-flex justify-content-md-around mb-2 mt-3'>
        <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button btn_dwn"
                    table="table-to-xls"
                    filename="Western Union"
                    sheet="tablexls"
                    buttonText="Download"/>
          <TablePagination
              rowsPerPageOptions={[5, 10, 15, 100]}
              component="div"
              count={transactions.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
        </Paper>
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style} style={{width:'683px'}}>
                <Typography id="transition-modal-title" variant="h5" component="h2"><b>
                  Transaction Summary</b>
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  <form>
                    <div mat-dialog-content className="content">
                      <div className="rows">
                        <div className="input-field">
                          <input type="text" name="TransactionType" id="disabledTextInput" className="form-control" placeholder={selectedTransaction?.mtcn} onClick={(e)=> setDisabled(!isDisabled)} disabled={isDisabled} />
                          <label>MTCN</label>
                        </div>

                        <div className="input-field">
                          <input type="text" id="disabledTextInput" name="SentPrincipal" className="form-control" placeholder={selectedTransaction?.sendPrincipal} onClick={(e)=> setDisabled(!isDisabled)} disabled={isDisabled} />
                          <label> Sent Principal</label>
                        </div>

                        <div className="input-field">
                          <input type="text" name="SendingCountry" id="disabledTextInput" className="form-control" placeholder={selectedTransaction?.sendingSideCountry} onClick={(e)=> setDisabled(!isDisabled)} disabled={isDisabled} />
                          <label>Sending Country</label>
                        </div>
                      </div>


                      <div className="rows">
                        <div className="input-field">
                          <input type="dropdown" name="direction" id="disabledTextInput" className="form-control" placeholder={selectedTransaction?.direction} onClick={(e)=> setDisabled(!isDisabled)} disabled={isDisabled} />
                          <label>Direction</label>
                        </div>

                        <div className="input-field">
                          <input type="text" name="PayoutPrincipal" id="disabledTextInput" className="form-control" placeholder={selectedTransaction?.payoutPrincipal} onClick={(e)=> setDisabled(!isDisabled)} disabled={isDisabled} />
                          <label>Payout Principal</label>
                        </div>

                        <div className="input-field">
                          <input type="text" name="PayoutCountry" id="disabledTextInput" className="form-control" placeholder={selectedTransaction?.payOutCountry} onClick={(e)=> setDisabled(!isDisabled)} disabled={isDisabled} />
                          <label>Payout Country</label>
                        </div>
                      </div> 


                      <div className="rows">
                        <div className="input-field">
                          <input type="text" name="PayoutStatus" id="disabledTextInput" className="form-control" placeholder={selectedTransaction?.status} onClick={(e)=> setDisabled(!isDisabled)} disabled={isDisabled} />
                          <label>Payout Status</label>
                        </div>

                        <div className="input-field">
                          <input type="text" name="ClearPrincipal" id="disabledTextInput" className="form-control" placeholder={selectedTransaction?.clearPrincipal} onClick={(e)=> setDisabled(!isDisabled)} disabled={isDisabled} />
                          <label>Clear Principal</label>
                        </div>

                        <div className="input-field">
                          <input type="text" name="ClearPrincipal(LOC)" id="disabledTextInput" className="form-control" placeholder={selectedTransaction?.clearprincipalLOC} onClick={(e)=> setDisabled(!isDisabled)} disabled={isDisabled} />
                          <label>Clear Principal(LOC)</label>
                        </div> 
                      </div> 

                      <div className="rows">
                        <div className="input-field">
                          <input type="text" name="SettlementStatus" id="disabledTextInput" className="form-control" placeholder={selectedTransaction?.settlementStatus} onClick={(e)=> setDisabled(!isDisabled)} disabled={isDisabled} />
                          <label>Settlement Status</label>
                        </div>

                        <div className="input-field">
                          <input type="text" name="TotalChanges" id="disabledTextInput" className="form-control" placeholder={selectedTransaction?.totalCharges} onClick={(e)=> setDisabled(!isDisabled)} disabled={isDisabled} />
                          <label>Total Charges</label>
                        </div>

                        <div className="input-field">
                          <input type="text" name="AgentIncome" id="disabledTextInput" className="form-control" placeholder={selectedTransaction?.agentIncome} onClick={(e)=> setDisabled(!isDisabled)} disabled={isDisabled} />
                          <label>Agent Income</label>
                        </div>
                      </div>

                      <div className="rows">
                        <div className="input-field">
                          <input type="text" name="ImportStatus" id="disabledTextInput" className="form-control" placeholder={selectedTransaction?.importStatus} onClick={(e)=> setDisabled(!isDisabled)} disabled={isDisabled} />
                          <label>Import Status</label>
                        </div>

                        <div className="input-field">
                          <input type="text" name="RecordingDate" id="disabledTextInput" className="form-control" placeholder={selectedTransaction?.recordingDate} onClick={(e)=> setDisabled(!isDisabled)} disabled={isDisabled} />
                          <label>Recording Date</label>
                        </div>

                        <div className="input-field">
                          <input type="text" name="RecordingDate(LOC)" id="disabledTextInput" className="form-control" placeholder={selectedTransaction?.recordingDateLOC} onClick={(e)=> setDisabled(!isDisabled)} disabled={isDisabled} />
                          <label>Recording Date(LOC)</label>
                        </div>
                      </div>

                    </div>
                  </form>
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </div>
    </>
  );
}