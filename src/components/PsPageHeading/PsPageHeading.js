import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const PsPageHeading = styled(Paper)(({ theme }) => ({
  // background: 'transparent',
  padding: "5px",
  margin: "13px 0",
  boxShadow: "none",
  color: "#4c4c4c",
  fontWeight: "600",
  fontSize: "16px",
  cursor: "default",
  display: "flex",
  justifyContent: "space-between",
}));

export default PsPageHeading;
