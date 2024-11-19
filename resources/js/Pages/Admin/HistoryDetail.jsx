import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { IconChevronLeft } from "@tabler/icons-react";

export default function HistoryDetail({
    auth,
    perhitungan,
    dataPanen,
    luas_lahan_tertinggi,
    luas_lahan_terkecil,
    bibit_tertinggi,
    bibit_terkecil,
    pupuk_terkecil,
    pupuk_tertinggi,
    produksi_terkecil,
    produksi_tertinggi,
}) {
    const getMonth = (bulan) => {
        const months = [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ];
        return months[bulan - 1] || "Bulan tidak valid";
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="History Detail" />
            <div className="row">
                <div className="col-md-6">
                    {" "}
                    <div className="card mb-3">
                        <div className="card-header">
                            <h4 className="card-title">
                                Hasil Panen Sebelumnya
                            </h4>
                        </div>
                        <div
                            className="card-body"
                            style={{ maxHeight: "300px", overflowY: "auto" }}
                        >
                            <table className="table table-striped table-hover table-vcenter">
                                <thead>
                                    <tr>
                                        <th>Tahun</th>
                                        <th>Bulan</th>
                                        <th>Luas Lahan</th>
                                        <th>Bibit</th>
                                        <th>Pupuk</th>
                                        <th>Hasil Panen</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataPanen.map((data) => {
                                        return (
                                            <tr key={data.id}>
                                                <td>{data.tahun}</td>
                                                <td>{getMonth(data.bulan)}</td>
                                                <td>
                                                    {data.luas_lahan} Ha
                                                    {/* {data.luas_lahan / 10000} Hektar */}
                                                </td>
                                                <td>
                                                    {data.bibit}kg. /{" "}
                                                    {data.bibit * 1000} gram
                                                </td>
                                                <td>
                                                    {data.pupuk}ton. /{" "}
                                                    {data.pupuk * 1000} kg
                                                </td>
                                                <td>{data.hasil_panen}kg</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    {" "}
                    <div className="card">
                        <div className="card-header d-flex justify-between">
                            <h4 className="card-title">
                                Riwayat Perhitungan Detail
                            </h4>
                            <Link
                                href={route("riwayat.index")}
                                className="btn btn-danger"
                            >
                                <IconChevronLeft className="icon" /> Kembali
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className="">
                                Luas lahan luas : {luas_lahan_tertinggi} Ha.{" "}
                                <br />
                                Luas lahan sempit : {
                                    luas_lahan_terkecil
                                } Ha. <br /> <br />
                                Bibit banyak : {bibit_tertinggi}kg. <br />
                                Bibit sedikit : {bibit_terkecil}kg. <br />{" "}
                                <br />
                                Pupuk banyak : {pupuk_tertinggi}kg. <br />
                                Pupuk sedikit : {pupuk_terkecil}kg. <br />{" "}
                                <br />
                                Produksi tertinggi : {
                                    produksi_tertinggi
                                }kg. <br />
                                Produksi terendah : {produksi_terkecil}kg.{" "}
                                <br />
                                <br />
                                Luas Lahan : {perhitungan.luas_lahan}m
                                <sup>2</sup>. <br />
                                Bibit : {perhitungan.bibit}kg. <br />
                                pupuk : {perhitungan.pupuk}kg. <br />
                                <br />
                                Derajat Luas Lahan Sempit :{" "}
                                {perhitungan.derajat_lahan_terkecil}m
                                <sup>2</sup>. <br />
                                Derajat Luas Lahan Luas :{" "}
                                {perhitungan.derajat_lahan_tertinggi}m
                                <sup>2</sup>. <br />
                                Derajat bibit sedikit :{" "}
                                {perhitungan.derajat_bibit_terkecil}m
                                <sup>2</sup>. <br />
                                Derajat bibit banyak :{" "}
                                {perhitungan.derajat_bibit_tertinggi}m
                                <sup>2</sup>. <br />
                                Derajat pupuk sedikit :{" "}
                                {perhitungan.derajat_pupuk_terkecil}m
                                <sup>2</sup>. <br />
                                Derajat pupuk banyak :{" "}
                                {perhitungan.derajat_pupuk_tertinggi}m
                                <sup>2</sup>. <br /> <br />
                            </p>
                            <table className="table table-border">
                                <thead>
                                    <tr>
                                        <th>Rule</th>
                                        <th>Predikat</th>
                                        <th>Nilai Z</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>R1</th>
                                        <th>{perhitungan.a1}</th>
                                        <td>{perhitungan.z1}</td>
                                    </tr>
                                    <tr>
                                        <th>R2</th>
                                        <th>{perhitungan.a2}</th>
                                        <td>{perhitungan.z2}</td>
                                    </tr>
                                    <tr>
                                        <th>R3</th>
                                        <th>{perhitungan.a3}</th>
                                        <td>{perhitungan.z3}</td>
                                    </tr>
                                    <tr>
                                        <th>R4</th>
                                        <th>{perhitungan.a4}</th>
                                        <td>{perhitungan.z4}</td>
                                    </tr>
                                    <tr>
                                        <th>R5</th>
                                        <th>{perhitungan.a5}</th>
                                        <td>{perhitungan.z5}</td>
                                    </tr>
                                    <tr>
                                        <th>R6</th>
                                        <th>{perhitungan.a6}</th>
                                        <td>{perhitungan.z6}</td>
                                    </tr>
                                    <tr>
                                        <th>R7</th>
                                        <th>{perhitungan.a7}</th>
                                        <td>{perhitungan.z7}</td>
                                    </tr>
                                    <tr>
                                        <th>R8</th>
                                        <th>{perhitungan.a8}</th>
                                        <td>{perhitungan.z8}</td>
                                    </tr>
                                    <tr>
                                        <th>R9</th>
                                        <th>{perhitungan.a9}</th>
                                        <td>{perhitungan.z9}</td>
                                    </tr>
                                    <tr>
                                        <th>R10</th>
                                        <th>{perhitungan.a10}</th>
                                        <td>{perhitungan.z10}</td>
                                    </tr>
                                    <tr>
                                        <th>R11</th>
                                        <th>{perhitungan.a11}</th>
                                        <td>{perhitungan.z11}</td>
                                    </tr>
                                    <tr>
                                        <th>R12</th>
                                        <th>{perhitungan.a12}</th>
                                        <td>{perhitungan.z12}</td>
                                    </tr>
                                    <tr>
                                        <th>R13</th>
                                        <th>{perhitungan.a13}</th>
                                        <td>{perhitungan.z13}</td>
                                    </tr>
                                    <tr>
                                        <th>R14</th>
                                        <th>{perhitungan.a14}</th>
                                        <td>{perhitungan.z14}</td>
                                    </tr>
                                    <tr>
                                        <th>R15</th>
                                        <th>{perhitungan.a15}</th>
                                        <td>{perhitungan.z15}</td>
                                    </tr>
                                    <tr>
                                        <th>R16</th>
                                        <th>{perhitungan.a16}</th>
                                        <td>{perhitungan.z16}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                            <b>
                                Hasil Perhitungan Fuzzy : {perhitungan.hasil}
                                kg. (
                                {perhitungan.hasil >= dataPanen.hasil_panen
                                    ? "Meningkat"
                                    : "Menurun"}
                                )
                            </b>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
