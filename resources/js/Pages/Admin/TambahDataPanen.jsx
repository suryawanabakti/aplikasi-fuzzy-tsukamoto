import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { IconChevronLeft } from "@tabler/icons-react";
import toast from "react-hot-toast";

export default function TambahDataPanen({ auth, desa, users }) {
    const { data, setData, errors, processing, post, reset } = useForm({
        desa_id: "",
        user_id: "",
        tahun: "",
        bulan: 10,
        hasil_panen: "",
        luas_lahan: "",
        satuan_luas_lahan: "Ha",
        bibit: "",
        satuan_bibit: "kilogram",
        pupuk: "",
        satuan_pupuk: "ton",
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
                        {auth.user.roles[0].name == "admin" && (
                            <div className="mb-3">
                                <label
                                    htmlFor="user_id"
                                    className="form-label required"
                                >
                                    Petani
                                </label>
                                <select
                                    className="form-select"
                                    required
                                    name="user_id"
                                    id="user_id"
                                    defaultValue={data.user_id}
                                    onChange={(e) =>
                                        setData("user_id", e.target.value)
                                    }
                                >
                                    <option value="">Pilih Petani</option>
                                    {users.map((data) => {
                                        return (
                                            <option
                                                key={data.id}
                                                value={data.id}
                                            >
                                                {data.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        )}

                        <div className="mb-3">
                            <label
                                htmlFor="desa_id"
                                className="form-label required"
                            >
                                Desa
                            </label>
                            <select
                                className="form-select"
                                required
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
                                Bulan
                            </label>
                            <select
                                name="bulan"
                                id="bulan"
                                className="form-select"
                                onChange={(e) =>
                                    setData("bulan", e.target.value)
                                }
                                defaultValue={data.bulan}
                            >
                                <option value="1">Januari</option>
                                <option value="2">Februari</option>
                                <option value="3">Maret</option>
                                <option value="4">April</option>
                                <option value="5">Mei</option>
                                <option value="6">Juni</option>
                                <option value="7">July</option>
                                <option value="8">Agustus</option>
                                <option value="9">September</option>
                                <option value="10">Oktober</option>
                                <option value="11">November</option>
                                <option value="12">Desember</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label required">
                                Luas Lahan (Ha)
                            </label>
                            <div className="input-group">
                                {/* Input field */}
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Masukkan luas lahan..."
                                    defaultValue={data.luas_lahan}
                                    onChange={(e) =>
                                        setData("luas_lahan", e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label required">
                                Bibit (kg)
                            </label>
                            <div className="input-group">
                                {/* Radio button 1 */}

                                {/* Input field */}
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Masukkan bibit..."
                                    defaultValue={data.bibit}
                                    onChange={(e) =>
                                        setData("bibit", e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="form-label required">
                                Pupuk (ton)
                            </label>
                            <div className="input-group">
                                {/* Input field */}
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Masukkan pupuk..."
                                    defaultValue={data.pupuk}
                                    onChange={(e) =>
                                        setData("pupuk", e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="form-label required">
                                Hasil Panen (kg)
                            </label>
                            <input
                                type="number"
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
