import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Perhitungan({ auth, setting }) {
    const { data, setData, errors, processing, post, reset } = useForm({
        luas_lahan: "",
        bibit: "",
        pupuk: "",
        p_luas_lahan: "1",
        p_bibit: "1",
        p_pupuk: "1",
        max_luas_lahan: setting?.max_luas_lahan,
        min_luas_lahan: setting?.min_luas_lahan,
        max_bibit: setting?.max_bibit,
        min_bibit: setting?.min_bibit,
        max_pupuk: setting?.max_pupuk,
        min_pupuk: setting?.min_pupuk,
        max_hasil: setting?.max_hasil,
        min_hasil: setting?.min_hasil,
        bulan: 12,
        tahun: 2024,
    });

    const [luasLahan, setLuasLahan] = useState("2");
    const [bibit, setBibit] = useState("1");
    const [pupuk, setpupuk] = useState("1");

    const submit = (e) => {
        e.preventDefault();
        post(route("perhitungan.store"), {
            onSuccess: () => {
                toast.success("Berhasil tambah perhitungan");
                reset();
            },
            onError: () => {
                toast.error("Gagal tambah perhitungan");
            },
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Perhitungan" />

            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Variable</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="mb-3 row">
                                    <div className="col-6">
                                        <label
                                            htmlFor="max_luas_lahan"
                                            className="form-label"
                                        >
                                            Luas Lahan Terbesar ~{" "}
                                            {data.p_luas_lahan == "1" ? (
                                                "Hektar"
                                            ) : (
                                                <>
                                                    m<sup>2</sup>
                                                </>
                                            )}
                                            .{" "}
                                        </label>
                                        <input
                                            id="max_luas_lahan"
                                            type="number"
                                            className="form-control"
                                            value={data.max_luas_lahan}
                                            onChange={(e) =>
                                                setData(
                                                    "max_luas_lahan",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label
                                            htmlFor="min_luas_lahan"
                                            className="form-label"
                                        >
                                            Luas Lahan Terkecil ~{" "}
                                            {data.p_luas_lahan == "1" ? (
                                                "Hektar"
                                            ) : (
                                                <>
                                                    m<sup>2</sup>
                                                </>
                                            )}
                                            .{" "}
                                        </label>
                                        <input
                                            id="min_luas_lahan"
                                            type="number"
                                            className="form-control"
                                            value={data.min_luas_lahan}
                                            onChange={(e) =>
                                                setData(
                                                    "min_luas_lahan",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-6">
                                        <label
                                            htmlFor="max_bibit"
                                            className="form-label"
                                        >
                                            Bibit terbanyak ~{" "}
                                            {data.p_bibit == "1" ? (
                                                "kg"
                                            ) : (
                                                <>gram</>
                                            )}
                                        </label>
                                        <input
                                            id="max_bibit"
                                            type="number"
                                            className="form-control"
                                            value={data.max_bibit}
                                            onChange={(e) =>
                                                setData(
                                                    "max_bibit",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label
                                            htmlFor="bibit_tersedikit"
                                            className="form-label"
                                        >
                                            Bibit Tersedikit ~{" "}
                                            {data.p_bibit == "1" ? (
                                                "kg"
                                            ) : (
                                                <>gram</>
                                            )}
                                        </label>
                                        <input
                                            id="bibit_tersedikit"
                                            type="number"
                                            className="form-control"
                                            value={data.min_bibit}
                                            onChange={(e) =>
                                                setData(
                                                    "min_bibit",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-6">
                                        <label
                                            htmlFor="max_pupuk"
                                            className="form-label"
                                        >
                                            Pupuk Terbanyak ~ ton
                                        </label>
                                        <input
                                            id="max_pupuk"
                                            type="number"
                                            className="form-control"
                                            value={data.max_pupuk}
                                            onChange={(e) =>
                                                setData(
                                                    "max_pupuk",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label
                                            htmlFor="min_pupuk"
                                            className="form-label"
                                        >
                                            Pupuk Sedikit ~ ton
                                        </label>
                                        <input
                                            id="min_pupuk"
                                            type="number"
                                            className="form-control"
                                            value={data.min_pupuk}
                                            onChange={(e) =>
                                                setData(
                                                    "min_pupuk",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-6">
                                        <label
                                            htmlFor="max_hasil"
                                            className="form-label"
                                        >
                                            Produksi Terbanyak ~ kg
                                        </label>
                                        <input
                                            id="max_hasil"
                                            type="number"
                                            className="form-control"
                                            value={data.max_hasil}
                                            onChange={(e) =>
                                                setData(
                                                    "max_hasil",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label
                                            htmlFor="min_hasil"
                                            className="form-label"
                                        >
                                            Produksi sedikit ~ kg
                                        </label>
                                        <input
                                            id="min_hasil"
                                            type="number"
                                            className="form-control"
                                            value={data.min_hasil}
                                            onChange={(e) =>
                                                setData(
                                                    "min_hasil",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Perhitungan</h4>
                        </div>
                        <form onSubmit={submit}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="mb-3 col-md-6">
                                        <label
                                            htmlFor=""
                                            className="form-label required"
                                        >
                                            Tahun
                                        </label>
                                        <input
                                            value={data.tahun}
                                            type="number"
                                            className="form-control"
                                            onChange={(e) =>
                                                setData("tahun", e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="mb-3 col-md-6">
                                        <label
                                            htmlFor=""
                                            className="form-label required"
                                        >
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
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor=""
                                        className="form-label required"
                                    >
                                        Luas Lahan ~{" "}
                                        {data.p_luas_lahan == "1" ? (
                                            "Hektar"
                                        ) : (
                                            <>
                                                m<sup>2</sup>
                                            </>
                                        )}
                                        .{" "}
                                    </label>
                                    <input
                                        type="number"
                                        required
                                        className="form-control"
                                        placeholder="Masukkan luas lahan..."
                                        defaultValue={data.luas_lahan}
                                        onChange={(e) =>
                                            setData(
                                                "luas_lahan",
                                                e.target.value
                                            )
                                        }
                                    />
                                    {errors.luas_lahan && (
                                        <small className="text-danger">
                                            {errors.luas_lahan}
                                        </small>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor=""
                                        className="form-label required"
                                    >
                                        Bahan baku bibit ~{" "}
                                        {data.p_bibit == "1" ? "kg" : <>gram</>}
                                        .
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        defaultValue={data.bibit}
                                        className="form-control"
                                        placeholder="Masukkan bahan baku bibit..."
                                        onChange={(e) =>
                                            setData("bibit", e.target.value)
                                        }
                                    />
                                    {errors.bibit && (
                                        <small className="text-danger">
                                            {errors.bibit}
                                        </small>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor=""
                                        className="form-label required"
                                    >
                                        Pupuk ~{" "}
                                        {data.p_pupuk == "1" ? "Ton" : <>kg</>}.
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        className="form-control"
                                        placeholder="Masukkan pupuk..."
                                        defaultValue={data.pupuk}
                                        onChange={(e) =>
                                            setData("pupuk", e.target.value)
                                        }
                                    />
                                    {errors.pupuk && (
                                        <small className="text-danger">
                                            {errors.pupuk}
                                        </small>
                                    )}
                                </div>

                                <div className=" d-flex justify-content-between mb-2">
                                    <button
                                        className={`btn btn-danger me-2 ${
                                            processing && "btn-loading"
                                        } d-flex justify-end`}
                                        onClick={submit}
                                    >
                                        Hitung
                                    </button>
                                    <button
                                        className={`btn btn-danger ${
                                            processing && "btn-loading"
                                        } d-flex justify-end`}
                                    >
                                        Clear
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
