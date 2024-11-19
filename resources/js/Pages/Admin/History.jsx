import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { IconEye, IconTrash } from "@tabler/icons-react";
import toast from "react-hot-toast";

export default function Riwayat({ auth, perhitungan, dataPanen }) {
    const prosesFuzzy = (luas_lahan, bibit, pupuk) => {};
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
            <Head title="Riwayat" />
            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-2">
                        <div className="card-header">
                            <h4 className="card-title">Riwayat</h4>
                        </div>
                        <div
                            className="card-body"
                            style={{ maxHeight: "400px", overflowY: "auto" }}
                        >
                            <table className="table table-striped table-hover table-vcenter">
                                <thead>
                                    <tr>
                                        <th>Tahun</th>
                                        <th>Bulan</th>
                                        <th>Luas Lahan</th>
                                        <th>Bibit</th>
                                        <th>Pupuk</th>
                                        <th>Prediksi Produksi</th>
                                        <th>Keanggotaan</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {perhitungan.map((data) => {
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
                                                <td>{data.hasil}kg</td>
                                                <td>
                                                    {data.hasil >=
                                                    dataPanen.hasil_panen
                                                        ? "Meningkat"
                                                        : "Menurun"}
                                                </td>
                                                <td className="d-flex gap-2">
                                                    <Link
                                                        className="btn btn-icon btn-info"
                                                        href={route(
                                                            "riwayat.show",
                                                            data.id
                                                        )}
                                                    >
                                                        <IconEye className="icon" />
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "riwayat.destroy",
                                                            data.id
                                                        )}
                                                        className="btn btn-danger btn-icon"
                                                        as="button"
                                                        method="delete"
                                                        onSuccess={() =>
                                                            toast.success(
                                                                "Berhasil hapus "
                                                            )
                                                        }
                                                    >
                                                        <IconTrash className="icon" />
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">
                                Hasil panen sebelumnya
                            </h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Tahun</th>
                                            <th>Bulan</th>
                                            <th>Luas Lahan</th>
                                            <th>Bibit</th>
                                            <th>Pupuk</th>
                                            <th>Hasil Panen</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataPanen.map((data, index) => {
                                            return (
                                                <tr key={data.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{data.tahun}</td>
                                                    <td>
                                                        {getMonth(data.bulan)}
                                                    </td>
                                                    <td>
                                                        {data.luas_lahan} Ha
                                                    </td>
                                                    <td>{data.bibit} kg</td>
                                                    <td>{data.pupuk} ton</td>
                                                    <td>
                                                        {data.hasil_panen} kg
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </AuthenticatedLayout>
    );
}
