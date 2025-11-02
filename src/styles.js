import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  table: {
    border: "1pt solid black",
  },
  headerRow: {
    flexDirection: "row",
    borderBottom: "1pt solid black",
  },
  logoCell: {
    width: "25%",
    borderRight: "1pt solid black",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  titleCell: {
    width: "50%",
    borderRight: "1pt solid black",
    padding: 8,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  pageCell: {
    width: "25%",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 11,
    textAlign: "center",
    marginTop: 2,
  },
  pageNumber: {
    fontSize: 16,
    fontWeight: "bold",
  },
  pageText: {
    fontSize: 9,
    marginTop: 2,
  },
  dataRow: {
    flexDirection: "row",
    borderBottom: "1pt solid black",
  },
  dataCell: {
    width: "42%",
    borderRight: "1pt solid black",
    padding: 4,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  dataCellRight: {
    width: "33%",
    borderRight: "1pt solid black",
    padding: 4,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  remarksCell: {
    width: "25%",
    padding: 4,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    marginLeft: 4,
  },
  // NEW STYLES FOR MERGED REMARKS CELL
  dataRowWithoutRemarks: {
    flexDirection: "row",
    borderBottom: "1pt solid black",
  },
  dataCellWide: {
    width: "48%",
    borderRight: "1pt solid black",
    padding: 4,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  dataCellRightWide: {
    width: "52%",
    borderRight: "1pt solid black",
    padding: 4,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  remarksColumn: {
    width: "45%",
    borderBottom: "1pt solid black",
    padding: 4,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  // LAST ROW STYLES - CRITICAL FOR ALIGNMENT
  fullRow: {
    flexDirection: "row",
  },
  fullRowLeft: {
    width: "26.4%", // 48% of 55% = 26.4%
    borderRight: "1pt solid black",
    padding: 4,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  fullRowRight: {
    width: "73.6%", // 52% of 55% + 45% = 28.6% + 45% = 73.6%
    padding: 4,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

export default styles;
