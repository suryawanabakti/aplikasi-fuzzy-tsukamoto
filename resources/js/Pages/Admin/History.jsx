import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { IconEye, IconTrash } from "@tabler/icons-react";
import toast from "react-hot-toast";

export default function Riwayat({ auth, perhitungan }) {
    const prosesFuzzy = (luas_lahan, bibit, pupuk) => {};

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Riwayat" />
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Riwayat</h4>
                </div>
                <div className="card-body">
                    <table className="table table-striped table-hover table-vcenter">
                        <thead>
                            <tr>
                                <th>Tanggal</th>
                                <th>Luas Lahan</th>
                                <th>Bibit</th>
                                <th>Pupuk</th>
                                <th>Prediksi Produksi</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {perhitungan.map((data) => {
                                return (
                                    <tr key={data.id}>
                                        <td>{data.created_at}</td>
                                        <td>
                                            {data.luas_lahan}m<sup>2</sup> /{" "}
                                            {data.luas_lahan / 10000} Hektar
                                        </td>
                                        <td>
                                            {data.bibit}kg. /{" "}
                                            {data.bibit * 1000} gram
                                        </td>
                                        <td>
                                            {data.pupuk}kg. /{" "}
                                            {data.pupuk * 1000} gram
                                        </td>
                                        <td>{data.hasil}kg</td>
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
        </AuthenticatedLayout>
    );
}
