import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { IconPlus } from "@tabler/icons-react";

export default function DataPanen({ auth, dataPanen }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Data Panen" />
            <div className="card">
                <div className="card-header d-flex justify-between">
                    <h4 className="card-title">Data Panen</h4>
                    <Link
                        href={route("admin.data-panen.create")}
                        className="btn btn-danger"
                    >
                        <IconPlus className="icon" />
                        Tambah Data
                    </Link>
                </div>
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Desa</th>
                                <th>Luas Lahan</th>
                                <th>Tahun</th>
                                <th>Hasil Panen</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataPanen.map((data, index) => {
                                return (
                                    <tr key={data.id}>
                                        <td>{index + 1}</td>
                                        <td>{data.desa.nama}</td>
                                        <td>{data.desa.luas_lahan}</td>
                                        <td>{data.tahun}</td>
                                        <td>{data.hasil_panen}</td>
                                        <td>
                                            <Link
                                                href={route(
                                                    "admin.data-panen.destroy",
                                                    data.id
                                                )}
                                                className="btn btn-danger btn-sm"
                                                method="delete"
                                                onBefore={() =>
                                                    confirm(
                                                        "Apakah anda yakin ?"
                                                    )
                                                }
                                            >
                                                Hapus
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
