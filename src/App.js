import "./styles.css";

import {
  PDFDownloadLink,
  Document,
  Page,
  View,
  Text,
} from "@react-pdf/renderer";
import styles from "./styles";

const MyDoc = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.table}>
        {/* HEADER ROW */}
        <View style={styles.headerRow}>
          {/* Logo Cell */}
          <View style={styles.logoCell}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ marginRight: 8 }}>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", lineHeight: 0.9 }}
                >
                  ///
                </Text>
              </View>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", letterSpacing: 1.5 }}
              >
                BOREDM
              </Text>
            </View>
          </View>

          {/* Title Cell */}
          <View style={styles.titleCell}>
            <Text style={styles.mainTitle}>Riverside Condominiums</Text>
            <Text style={styles.subtitle}>General Location - Project</Text>
          </View>

          {/* Page Number Cell */}
          <View style={styles.pageCell}>
            <Text style={styles.pageNumber}>B-17</Text>
            <Text style={styles.pageText}>Page 1 of 1</Text>
          </View>
        </View>

        {/* DATA SECTION - Rows with Single Remarks Column */}
        <View style={{ flexDirection: "row" }}>
          {/* LEFT SIDE - All Data Rows (55% width) */}
          <View style={{ width: "55%" }}>
            {/* ROW 1 - Drilling Firm, Project No */}
            <View style={styles.dataRowWithoutRemarks}>
              <View style={styles.dataCellWide}>
                <Text style={styles.label}>Drilling Firm:</Text>
                <Text style={styles.value}>BoreDM Drilling</Text>
              </View>
              <View style={styles.dataCellRightWide}>
                <Text style={styles.label}>Project No.:</Text>
                <Text style={styles.value}>25-3332</Text>
              </View>
            </View>

            {/* ROW 2 - Driller, Date Drilled */}
            <View style={styles.dataRowWithoutRemarks}>
              <View style={styles.dataCellWide}>
                <Text style={styles.label}>Driller:</Text>
                <Text style={styles.value}>PA</Text>
              </View>
              <View style={styles.dataCellRightWide}>
                <Text style={styles.label}>Date Drilled:</Text>
                <Text style={styles.value}>03/05/2025</Text>
              </View>
            </View>

            {/* ROW 3 - Logged By, Boring Depth */}
            <View style={styles.dataRowWithoutRemarks}>
              <View style={styles.dataCellWide}>
                <Text style={styles.label}>Logged By:</Text>
                <Text style={styles.value}>LA</Text>
              </View>
              <View style={styles.dataCellRightWide}>
                <Text style={styles.label}>Boring Depth:</Text>
                <Text style={styles.value}>-</Text>
              </View>
            </View>

            {/* ROW 4 - Water, Boring Elevation */}
            <View style={styles.dataRowWithoutRemarks}>
              <View style={styles.dataCellWide}>
                <Text style={{ fontWeight: "bold", fontSize: 14 }}>∇</Text>
                <Text style={styles.label}> Water :</Text>
                <Text style={styles.value}>N/A</Text>
              </View>
              <View style={styles.dataCellRightWide}>
                <Text style={styles.label}>Boring Elevation:</Text>
                <Text style={styles.value}>N/A</Text>
              </View>
            </View>
          </View>

          {/* RIGHT SIDE - Single Remarks Column (45% width) */}
          <View style={styles.remarksColumn}>
            <Text style={styles.label}>Remarks:</Text>
          </View>
        </View>

        {/* ROW 5 - Hammer Type, Brand Address (Full Width) */}
        <View style={styles.fullRow}>
          <View style={styles.fullRowLeft}>
            <Text style={styles.label}>Hammer Type:</Text>
            <Text style={styles.value}>-</Text>
          </View>
          <View style={styles.fullRowRight}>
            <Text style={styles.label}>Brand Address:</Text>
            <Text style={styles.value}>4909 N. 44th St, Phoenix, AZ 85018</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <PDFDownloadLink document={<MyDoc />} fileName="Result.pdf">
        {({ loading, error }) =>
          loading
            ? "Preparing PDF..."
            : error
            ? "Error generating PDF"
            : "Download PDF"
        }
      </PDFDownloadLink>
    </div>
  );
}
