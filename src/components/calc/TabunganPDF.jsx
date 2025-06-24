import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Gaya PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  section: {
    marginBottom: 10,
    lineHeight: 1.4,
  },
  table: {
    display: "table",
    width: "auto",
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 4,
    flex: 1,
    textAlign: "center",
  },
  header: {
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
  },
});

// Komponen PDF
const TabunganPDF = ({ nama, ringkasan, hasil }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.title}>Hasil Simulasi Tabungan</Text>

      <View style={styles.section}>
        <Text>Nama Nasabah: {nama}</Text>
        <Text>Total Setoran: Rp {ringkasan.totalSetoran.toLocaleString()}</Text>
        <Text>Total Bunga: Rp {ringkasan.totalBunga.toLocaleString()}</Text>
        <Text>Total Pajak: Rp {ringkasan.totalPajak.toLocaleString()}</Text>
        <Text>
          Total Tabungan Saat Jatuh Tempo: Rp{" "}
          {ringkasan.totalSaldo.toLocaleString()}
        </Text>
      </View>

      <View style={styles.table}>
        <View style={[styles.row, styles.header]}>
          <Text style={styles.cell}>Bulan</Text>
          <Text style={styles.cell}>Setoran</Text>
          <Text style={styles.cell}>Bunga</Text>
          <Text style={styles.cell}>Pajak</Text>
          <Text style={styles.cell}>Akumulasi</Text>
        </View>
        {hasil.map((item) => (
          <View style={styles.row} key={item.bulan}>
            <Text style={styles.cell}>{item.bulan}</Text>
            <Text style={styles.cell}>Rp {item.setoran.toLocaleString()}</Text>
            <Text style={styles.cell}>Rp {item.bunga.toLocaleString()}</Text>
            <Text style={styles.cell}>
              Rp {(item.pajak || 0).toLocaleString()}
            </Text>
            <Text style={styles.cell}>
              Rp {item.akumulasi.toLocaleString()}
            </Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default TabunganPDF;
