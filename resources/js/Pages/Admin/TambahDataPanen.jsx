import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { IconChevronLeft } from "@tabler/icons-react";
import toast from "react-hot-toast";

export default function TambahDataPanen({ auth, desa }) {
    const { data, setData, errors, processing, post, reset } = useForm({
        desa_id: "",
        tahun: "",
        hasil_panen: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.data-panen.store"), {
            onSuccess: () => {
                toast.success("Berhasil tambah data panen");
                reset;
            },
        });
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Tambah Data Panen" />
            <div className="card">
                <div className="card-header d-flex justify-between">
                    <h4 className="card-title">Tambah Data Panen</h4>
                    <a
                        href={route("admin.data-panen.index")}
                        className="btn btn-primary"
                    >
                        <IconChevronLeft className="icon" /> Kembali
                    </a>
                </div>
                <form onSubmit={submit}>
                    <div className="card-body">
                        <div className="mb-3">
                            <label
                                htmlFor="desa_id"
                                className="form-label required"
                            >
                                Desa
                            </label>
                            <select
                                className="form-select"
                                name="desa_id"
                                id="desa_id"
                                defaultValue={data.desa_id}
                                onChange={(e) =>
                                    setData("desa_id", e.target.value)
                                }
                            >
                                <option value="">Pilih Desa</option>
                                {desa.map((data) => {
                                    return (
                                        <option key={data.id} value={data.id}>
                                            {data.nama}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label required">
                                Tahun
                            </label>
                            <input
                                required
                                type="text"
                                className="form-control"
                                placeholder="Masukkan tahun..."
                                defaultValue={data.tahun}
                                onChange={(e) =>
                                    setData("tahun", e.target.value)
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label required">
                                Hasil Panen
                            </label>
                            <input
                                type="text"
                                required
                                defaultValue={data.hasil_panen}
                                className="form-control"
                                placeholder="Masukkan hasil panen..."
                                onChange={(e) =>
                                    setData("hasil_panen", e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="card-footer">
                        <button
                            className={`btn btn-danger ${
                                processing && "btn-loading"
                            }`}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
