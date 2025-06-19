export function hitungTabungan(setoran, bulan, bungaTahunan) {
  const rincian = [];
  let totalSetoran = 0;
  let totalBunga = 0;

  for (let i = 1; i <= bulan; i++) {
    const setoranKe = setoran;
    const bungaBulanIni = ((setoran * (bungaTahunan / 100)) / 12) * i;
    totalSetoran += setoranKe;
    totalBunga += bungaBulanIni;

    rincian.push({
      bulan: i,
      setoran: setoranKe,
      bunga: bungaBulanIni,
      total: setoranKe + bungaBulanIni,
    });
  }

  return {
    setoran: totalSetoran,
    bunga: totalBunga,
    total: totalSetoran + totalBunga,
    rincian,
  };
}
