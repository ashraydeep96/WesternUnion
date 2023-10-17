import React, { useEffect, useState } from "react";
import "./Searchform.css";
import dbData from "../../db/db.json";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
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

const Searchform = () => {
  const transactions = dbData.transactions;
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isDisabled, setDisabled] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const totalRecords = searchData ? searchData.length : 0;
  const rowsPerPageOptions = [5, 10, totalRecords];
  const [totalPages,setTotalPages] = useState(Math.ceil(data.length / rowsPerPage));

  //db
  useEffect(() => {
    const transactions = dbData.transactions;
    setData(transactions);
    setSearchData(transactions);
  }, []);

  //FormFields
  // const [mtcn, setMtcn] = useState("");
  const [Direction, setDirection] = useState("");
  const [Status, setStatus] = useState("");
  const [Fixed, setFixed] = useState("");
  const [Recording, setRecording] = useState("");
  const [Payout, setPayout] = useState("");
  const [Currency, setCurrency] = useState("");

  //Search Filters
  const handleSearch = (event) => {
    event.preventDefault();
    // console.log(data, mtcn);
    const newData = data.filter(
      (x) =>
        (Direction === "" || x.direction === Direction.toString()) &&
        (Status === "" || x.status === Status.toString()) &&
        (Fixed === "" || x.fixedTransaction === Fixed.toString()) &&
        (Recording === "" || x.recordingCountry === Recording.toString()) &&
        (Payout === "" || x.payOutCountry === Payout.toString()) &&
        (Currency === "" || x.sendingSideCurrency === Currency.toString())
    );
    // console.log(newData);
    setSearchData(newData);
    const newTotalPages = Math.ceil(newData.length / rowsPerPage);
    setTotalPages(newTotalPages);
    setPage(0);
  };

  const countryNames = [
    ...new Set(
      transactions.map((transactions) => transactions.recordingCountry)
    ),
  ].sort();
  const payoutcountryNames = [
    ...new Set(transactions.map((transactions) => transactions.payOutCountry)),
  ].sort();
  const currency = [
    ...new Set(
      transactions.map((searchData) => searchData.sendingSideCurrency)
    ),
  ].sort();
  const fixed = [
    ...new Set(
      transactions.map((transactions) => transactions.fixedTransaction)
    ),
  ].sort((a, b) => a - b);
  const direction = [
    ...new Set(transactions.map((transactions) => transactions.direction)),
  ].sort();
  const status = [
    ...new Set(transactions.map((transactions) => transactions.status)),
  ].sort();

  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = +event.target.value;
    const newTotalPages = Math.ceil(searchData.length / newRowsPerPage);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
    setTotalPages(newTotalPages);
    console.log(totalPages)
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = (transaction) => {
    setSelectedTransaction(transaction);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* Search Form */}
      <div className="row" style={{ width: "100%", marginTop: "1rem" }}>
        <div className="col-4">
          <div className="searchContainer">
            <form onSubmit={handleSearch}>
              <div className="searchForm">
                <h2>Transaction Criteria</h2>
                <div className="form-floating2">
                  <lable className="labell" htmlFor="floatingTextarea">
                    Direction
                  </lable>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setDirection(e.target.value)}
                  >
                    <option value="">Select</option>
                    {direction.map((direction, index) => (
                      <option
                        key={index}
                        value={direction}
                        style={{ color: "black" }}
                      >
                        {direction}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-floating2">
                  <lable className="labell" htmlFor="floatingTextarea">
                    Status
                  </lable>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="">Select</option>
                    {status.map((status, index) => (
                      <option
                        key={index}
                        value={status}
                        style={{ color: "black" }}
                      >
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-floating2">
                  <lable className="labell" htmlFor="floatingTextarea">
                    Fixed Transaction
                  </lable>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setFixed(e.target.value)}
                  >
                    <option value="">Select</option>
                    {fixed.map((fixedTransaction, index) => (
                      <option
                        key={index}
                        value={fixedTransaction}
                        style={{ color: "black" }}
                      >
                        {fixedTransaction}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-floating2">
                  <lable className="labell" htmlFor="floatingTextarea">
                    Recording Country
                  </lable>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setRecording(e.target.value)}
                  >
                    <option value="">Select</option>
                    {countryNames.map((recordingCountry, index) => (
                      <option
                        key={index}
                        value={recordingCountry}
                        style={{ color: "black" }}
                      >
                        {recordingCountry}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-floating2">
                  <lable className="labell" htmlFor="floatingTextarea">
                    Pay Out Country
                  </lable>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setPayout(e.target.value)}
                  >
                    <option value="">Select</option>
                    {payoutcountryNames.map((payoutcountry, index) => (
                      <option
                        key={index}
                        value={payoutcountry}
                        style={{ color: "black" }}
                      >
                        {payoutcountry}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-floating2">
                  <lable className="labell" htmlFor="floatingTextarea">
                    Sending Side Currency
                  </lable>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setCurrency(e.target.value)}
                  >
                    <option value="">Select</option>
                    {currency.map((currency, index) => (
                      <option
                        key={index}
                        value={currency}
                        style={{ color: "black" }}
                      >
                        {currency}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <button className="btn" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Data Table */}
        <div className="table">
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 420 }}>
              <Table stickyHeader id="table-to-xls">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center"></StyledTableCell>
                    <StyledTableCell align="center">ID</StyledTableCell>
                    <StyledTableCell align="center">MTCN</StyledTableCell>
                    <StyledTableCell align="center">
                      Transaction Type
                    </StyledTableCell>
                    <StyledTableCell align="center">Rec Curr</StyledTableCell>
                    <StyledTableCell align="center">Pay Curr</StyledTableCell>
                    <StyledTableCell align="center">
                      Rec Country
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Pay Country
                    </StyledTableCell>
                    <StyledTableCell align="center">Status</StyledTableCell>
                    <StyledTableCell align="center">Direction</StyledTableCell>
                    <StyledTableCell align="center">Settlement</StyledTableCell>
                    <StyledTableCell align="center">
                      Recording Date
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Sending Country
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {searchData && searchData.length > 0
                    ? searchData
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((transaction) => {
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={transaction.id}
                            >
                              <TableCell align="center">
                                <IconButton
                                  aria-label="delete"
                                  onClick={() => handleOpen(transaction)}
                                >
                                  <VisibilityIcon />
                                </IconButton>
                              </TableCell>
                              <TableCell align="center">
                                {transaction.id}
                              </TableCell>
                              <TableCell align="center">
                                {transaction.mtcn}
                              </TableCell>
                              <TableCell align="center">
                                {transaction.transactionType}
                              </TableCell>
                              <TableCell align="center">
                                {transaction.sendingSideCurrency}
                              </TableCell>
                              <TableCell align="center">
                                {transaction.sendingSideCurrency}
                              </TableCell>
                              <TableCell align="center">
                                {transaction.recordingCountry}
                              </TableCell>
                              <TableCell align="center">
                                {transaction.payOutCountry}
                              </TableCell>
                              <TableCell align="center">
                                {transaction.status}
                              </TableCell>
                              <TableCell align="center">
                                {transaction.direction}
                              </TableCell>
                              <TableCell align="center">
                                {transaction.settlementStatus}
                              </TableCell>
                              <TableCell align="center">
                                {transaction.recordingDate}
                              </TableCell>
                              <TableCell align="center">
                                {transaction.sendingSideCountry}
                              </TableCell>
                            </TableRow>
                          );
                        })
                    : data
                    .slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    .map((transaction) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={transaction.id}
                        >
                          <TableCell align="center">
                            <IconButton
                              aria-label="delete"
                              onClick={() => handleOpen(transaction)}
                            >
                              <VisibilityIcon />
                            </IconButton>
                          </TableCell>
                          <TableCell align="center">
                            {transaction.id}
                          </TableCell>
                          <TableCell align="center">
                            {transaction.mtcn}
                          </TableCell>
                          <TableCell align="center">
                            {transaction.transactionType}
                          </TableCell>
                          <TableCell align="center">
                            {transaction.sendingSideCurrency}
                          </TableCell>
                          <TableCell align="center">
                            {transaction.sendingSideCurrency}
                          </TableCell>
                          <TableCell align="center">
                            {transaction.recordingCountry}
                          </TableCell>
                          <TableCell align="center">
                            {transaction.payOutCountry}
                          </TableCell>
                          <TableCell align="center">
                            {transaction.status}
                          </TableCell>
                          <TableCell align="center">
                            {transaction.direction}
                          </TableCell>
                          <TableCell align="center">
                            {transaction.settlementStatus}
                          </TableCell>
                          <TableCell align="center">
                            {transaction.recordingDate}
                          </TableCell>
                          <TableCell align="center">
                            {transaction.sendingSideCountry}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="d-grid d-md-flex justify-content-md-around mb-2 mt-3">
              {/* Download Button */}
              <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="download-table-xls-button btn_dwn"
                table="table-to-xls"
                filename="Western Union"
                sheet="tablexls"
                buttonText="Download"
              />

              {/* Pagination */}
              <TablePagination
                rowsPerPageOptions={rowsPerPageOptions}
                component="div"
                count={totalRecords}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </div>
          </Paper>
          <div>
            {/* Modal */}
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
                <Box sx={style} style={{ width: "683px" }}>
                  <Typography
                    id="transition-modal-title"
                    variant="h5"
                    component="h2"
                  >
                    <b>Transaction Summary</b>
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    <form>
                      <div mat-dialog-content className="content">
                        <div className="rows">
                          <div className="input-field">
                            <input
                              type="text"
                              name="TransactionType"
                              id="disabledTextInput"
                              className="form-control"
                              placeholder={selectedTransaction?.mtcn}
                              onClick={(e) => setDisabled(!isDisabled)}
                              disabled={isDisabled}
                            />
                            <label>MTCN</label>
                          </div>

                          <div className="input-field">
                            <input
                              type="text"
                              id="disabledTextInput"
                              name="SentPrincipal"
                              className="form-control"
                              placeholder={selectedTransaction?.sendPrincipal}
                              onClick={(e) => setDisabled(!isDisabled)}
                              disabled={isDisabled}
                            />
                            <label> Sent Principal</label>
                          </div>

                          <div className="input-field">
                            <input
                              type="text"
                              name="SendingCountry"
                              id="disabledTextInput"
                              className="form-control"
                              placeholder={
                                selectedTransaction?.sendingSideCountry
                              }
                              onClick={(e) => setDisabled(!isDisabled)}
                              disabled={isDisabled}
                            />
                            <label>Sending Country</label>
                          </div>
                        </div>

                        <div className="rows">
                          <div className="input-field">
                            <input
                              type="dropdown"
                              name="direction"
                              id="disabledTextInput"
                              className="form-control"
                              placeholder={selectedTransaction?.direction}
                              onClick={(e) => setDisabled(!isDisabled)}
                              disabled={isDisabled}
                            />
                            <label>Direction</label>
                          </div>

                          <div className="input-field">
                            <input
                              type="text"
                              name="PayoutPrincipal"
                              id="disabledTextInput"
                              className="form-control"
                              placeholder={selectedTransaction?.payoutPrincipal}
                              onClick={(e) => setDisabled(!isDisabled)}
                              disabled={isDisabled}
                            />
                            <label>Payout Principal</label>
                          </div>

                          <div className="input-field">
                            <input
                              type="text"
                              name="PayoutCountry"
                              id="disabledTextInput"
                              className="form-control"
                              placeholder={selectedTransaction?.payOutCountry}
                              onClick={(e) => setDisabled(!isDisabled)}
                              disabled={isDisabled}
                            />
                            <label>Payout Country</label>
                          </div>
                        </div>

                        <div className="rows">
                          <div className="input-field">
                            <input
                              type="text"
                              name="PayoutStatus"
                              id="disabledTextInput"
                              className="form-control"
                              placeholder={selectedTransaction?.status}
                              onClick={(e) => setDisabled(!isDisabled)}
                              disabled={isDisabled}
                            />
                            <label>Payout Status</label>
                          </div>

                          <div className="input-field">
                            <input
                              type="text"
                              name="ClearPrincipal"
                              id="disabledTextInput"
                              className="form-control"
                              placeholder={selectedTransaction?.clearPrincipal}
                              onClick={(e) => setDisabled(!isDisabled)}
                              disabled={isDisabled}
                            />
                            <label>Clear Principal</label>
                          </div>

                          <div className="input-field">
                            <input
                              type="text"
                              name="ClearPrincipal(LOC)"
                              id="disabledTextInput"
                              className="form-control"
                              placeholder={
                                selectedTransaction?.clearprincipalLOC
                              }
                              onClick={(e) => setDisabled(!isDisabled)}
                              disabled={isDisabled}
                            />
                            <label>Clear Principal(LOC)</label>
                          </div>
                        </div>

                        <div className="rows">
                          <div className="input-field">
                            <input
                              type="text"
                              name="SettlementStatus"
                              id="disabledTextInput"
                              className="form-control"
                              placeholder={
                                selectedTransaction?.settlementStatus
                              }
                              onClick={(e) => setDisabled(!isDisabled)}
                              disabled={isDisabled}
                            />
                            <label>Settlement Status</label>
                          </div>

                          <div className="input-field">
                            <input
                              type="text"
                              name="TotalChanges"
                              id="disabledTextInput"
                              className="form-control"
                              placeholder={selectedTransaction?.totalCharges}
                              onClick={(e) => setDisabled(!isDisabled)}
                              disabled={isDisabled}
                            />
                            <label>Total Charges</label>
                          </div>

                          <div className="input-field">
                            <input
                              type="text"
                              name="AgentIncome"
                              id="disabledTextInput"
                              className="form-control"
                              placeholder={selectedTransaction?.agentIncome}
                              onClick={(e) => setDisabled(!isDisabled)}
                              disabled={isDisabled}
                            />
                            <label>Agent Income</label>
                          </div>
                        </div>

                        <div className="rows">
                          <div className="input-field">
                            <input
                              type="text"
                              name="ImportStatus"
                              id="disabledTextInput"
                              className="form-control"
                              placeholder={selectedTransaction?.importStatus}
                              onClick={(e) => setDisabled(!isDisabled)}
                              disabled={isDisabled}
                            />
                            <label>Import Status</label>
                          </div>

                          <div className="input-field">
                            <input
                              type="text"
                              name="RecordingDate"
                              id="disabledTextInput"
                              className="form-control"
                              placeholder={selectedTransaction?.recordingDate}
                              onClick={(e) => setDisabled(!isDisabled)}
                              disabled={isDisabled}
                            />
                            <label>Recording Date</label>
                          </div>

                          <div className="input-field">
                            <input
                              type="text"
                              name="RecordingDate(LOC)"
                              id="disabledTextInput"
                              className="form-control"
                              placeholder={
                                selectedTransaction?.recordingDateLOC
                              }
                              onClick={(e) => setDisabled(!isDisabled)}
                              disabled={isDisabled}
                            />
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
        </div>
      </div>
    </div>
  );
};

export default Searchform;
