import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { IconChevronLeft } from "@tabler/icons-react";
import toast from "react-hot-toast";

export default function EditDataPanen({ auth, desa, datapanen }) {
    const { data, setData, errors, processing, patch, reset } = useForm({
        desa_id: datapanen.desa_id,
        tahun: datapanen.tahun,
        hasil_panen: datapanen.hasil_panen,
        luas_lahan: datapanen.luas_lahan,
        bibit: datapanen.bibit,
        pupuk: datapanen.pupuk,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route("admin.data-panen.update", datapanen.id), {
            onSuccess: () => {
                toast.success("Berhasil ubah data panen");
                reset;
            },
        });
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Data Panen" />
            <div className="card">
                <div className="card-header d-flex justify-between">
                    <h4 className="card-title">Edit Data Panen</h4>
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
                                Luas Lahan
                            </label>
                            <input
                                required
                                type="text"
                                className="form-control"
                                placeholder="Masukkan luas lahan..."
                                defaultValue={data.luas_lahan}
                                onChange={(e) =>
                                    setData("luas_lahan", e.target.value)
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label required">
                                Bibit
                            </label>
                            <input
                                required
                                type="text"
                                className="form-control"
                                placeholder="Masukkan bibit..."
                                defaultValue={data.bibit}
                                onChange={(e) =>
                                    setData("bibit", e.target.value)
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label required">
                                Pupuk
                            </label>
                            <input
                                required
                                type="text"
                                className="form-control"
                                placeholder="Masukkan pupuk..."
                                defaultValue={data.pupuk}
                                onChange={(e) =>
                                    setData("pupuk", e.target.value)
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
