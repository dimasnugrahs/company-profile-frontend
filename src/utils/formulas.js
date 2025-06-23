// src/utils/formulas.js

export function hitungTabungan(nama, setoran, bulan, bungaTahunan) {
  const rincian = [];
  let totalSetoran = 0;
  let totalBunga = 0;

  for (let i = 1; i <= bulan; i++) {
    const saldoAwal = totalSetoran;
    totalSetoran += setoran;

    const bunga = (saldoAwal * bungaTahunan) / 100 / 12;
    totalBunga += bunga;

    rincian.push({
      bulan: i,
      setoran,
      saldoAwal,
      bunga,
      saldoAkhir: saldoAwal + setoran + bunga,
    });
  }

  const kenaPajak = totalBunga > 7500000;
  const pajak = kenaPajak ? totalBunga * 0.2 : 0;
  const saldoAkhir = totalSetoran + totalBunga - pajak;

  return {
    nama,
    totalSetoran,
    totalBunga,
    pajak,
    saldoAkhir,
    rincian,
  };
}
