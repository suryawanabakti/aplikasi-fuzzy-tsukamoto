import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { IconChevronLeft } from "@tabler/icons-react";

export default function HistoryDetail({ auth, perhitungan }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="History Detail" />
            <div className="card">
                <div className="card-header d-flex justify-between">
                    <h4 className="card-title">Riwayat Perhitungan Detail</h4>
                    <Link
                        href={route("riwayat.index")}
                        className="btn btn-danger"
                    >
                        <IconChevronLeft className="icon" /> Kembali
                    </Link>
                </div>
                <div className="card-body">
                    <p className="">
                        Luas lahan luas : 27m<sup>2</sup>. <br />
                        Luas lahan sempit : 14m<sup>2</sup>. <br /> <br />
                        Bibit banyak : 5kg. <br />
                        Bibit sedikit : 2kg. <br /> <br />
                        Pupuk banyak : 10kg. <br />
                        Pupuk sedikit : 3kg. <br /> <br />
                        Produksi tertinggi : 261kg. <br />
                        Produksi terendah : 81kg. <br />
                        <br />
                        Luas Lahan : {perhitungan.luas_lahan}m<sup>2</sup>.{" "}
                        <br />
                        Bibit : {perhitungan.bibit}kg. <br />
                        pupuk : {perhitungan.pupuk}kg. <br />
                        <br />
                        Derajat Luas Lahan Sempit :{" "}
                        {perhitungan.derajat_lahan_terkecil}m<sup>2</sup>.{" "}
                        <br />
                        Derajat Luas Lahan Luas :{" "}
                        {perhitungan.derajat_lahan_tertinggi}m<sup>2</sup>.{" "}
                        <br />
                        Derajat bibit sedikit :{" "}
                        {perhitungan.derajat_bibit_terkecil}m<sup>2</sup>.{" "}
                        <br />
                        Derajat bibit banyak :{" "}
                        {perhitungan.derajat_bibit_tertinggi}m<sup>2</sup>.{" "}
                        <br />
                        Derajat pupuk sedikit :{" "}
                        {perhitungan.derajat_pupuk_terkecil}m<sup>2</sup>.{" "}
                        <br />
                        Derajat pupuk banyak :{" "}
                        {perhitungan.derajat_pupuk_tertinggi}m<sup>2</sup>.{" "}
                        <br /> <br />
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
                    <b>Hasil Perhitungan Fuzzy : {perhitungan.hasil}kg.</b>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
