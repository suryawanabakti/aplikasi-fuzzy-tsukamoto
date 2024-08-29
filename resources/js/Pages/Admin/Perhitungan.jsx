import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Perhitungan({ auth }) {
    const { data, setData, errors, processing, post, reset } = useForm({
        luas_lahan: "",
        bibit: "",
        pupuk: "",
        p_luas_lahan: "2",
        p_bibit: "1",
        p_pupuk: "1",
        luas_lahan_terbesar: 27,
        luas_lahan_terkecil: 14,
        bibit_terbanyak: 5,
        bibit_terkecil: 2,
        pupuk_terbanyak: 10,
        pupuk_terkecil: 3,
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
            <div className="text-end d-flex justify-content-end mb-2">
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

            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">
                                Pengaturan Perhitungan
                            </h4>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Luas Lahan
                                </label>
                                <>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="inlineRadio1"
                                            defaultValue="option1"
                                            checked={data.p_luas_lahan == "1"}
                                            onChange={() =>
                                                setData("p_luas_lahan", "1")
                                            }
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="inlineRadio1"
                                        >
                                            Hektar
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="inlineRadio2"
                                            value="2"
                                            checked={data.p_luas_lahan == "2"}
                                            onChange={() =>
                                                setData("p_luas_lahan", "2")
                                            }
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="inlineRadio2"
                                        >
                                            m <sup>2</sup>
                                        </label>
                                    </div>
                                </>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Bahan Baku Bibit
                                </label>
                                <>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="pengaturan_bibit"
                                            id="bibitkg"
                                            checked={data.p_bibit == "1"}
                                            onChange={() =>
                                                setData("p_bibit", "1")
                                            }
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="bibitkg"
                                        >
                                            Kg
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="pengaturan_bibit"
                                            id="bibitgram"
                                            checked={data.p_bibit == "2"}
                                            onChange={() =>
                                                setData("p_bibit", "2")
                                            }
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="bibitgram"
                                        >
                                            gram
                                        </label>
                                    </div>
                                </>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Pupuk
                                </label>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="pengaturan_pupuk"
                                        id="pupukkg"
                                        checked={data.p_pupuk == "1"}
                                        onChange={() => setData("p_pupuk", "1")}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="pupukkg"
                                    >
                                        Kg
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="pengaturan_pupuk"
                                        id="pupukgram"
                                        checked={data.p_pupuk == "2"}
                                        onChange={() => setData("p_pupuk", "2")}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="pupukgram"
                                    >
                                        gram
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                                            htmlFor="luas_lahan_terbesar"
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
                                            id="luas_lahan_terbesar"
                                            type="number"
                                            className="form-control"
                                            value={data.luas_lahan_terbesar}
                                            onChange={(e) =>
                                                setData(
                                                    "luas_lahan_terbesar",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label
                                            htmlFor="luas_lahan_terkecil"
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
                                            id="luas_lahan_terkecil"
                                            type="number"
                                            className="form-control"
                                            value={data.luas_lahan_terkecil}
                                            onChange={(e) =>
                                                setData(
                                                    "luas_lahan_terkecil",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-6">
                                        <label
                                            htmlFor="bibit_terbanyak"
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
                                            id="bibit_terbanyak"
                                            type="number"
                                            className="form-control"
                                            value={data.bibit_terbanyak}
                                            onChange={(e) =>
                                                setData(
                                                    "bibit_terbanyak",
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
                                            value={data.bibit_terkecil}
                                            onChange={(e) =>
                                                setData(
                                                    "bibit_terkecil",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col-6">
                                        <label
                                            htmlFor="pupuk_terbanyak"
                                            className="form-label"
                                        >
                                            Pupuk Terbanyak ~{" "}
                                            {data.p_pupuk == "1" ? (
                                                "kg"
                                            ) : (
                                                <>gram</>
                                            )}
                                        </label>
                                        <input
                                            id="pupuk_terbanyak"
                                            type="number"
                                            className="form-control"
                                            value={data.pupuk_terbanyak}
                                            onChange={(e) =>
                                                setData(
                                                    "pupuk_terbanyak",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label
                                            htmlFor="pupuk_sedikit"
                                            className="form-label"
                                        >
                                            Pupuk Sedikit ~{" "}
                                            {data.p_pupuku == "1" ? (
                                                "kg"
                                            ) : (
                                                <>gram</>
                                            )}
                                        </label>
                                        <input
                                            id="pupuk_sedikit"
                                            type="number"
                                            className="form-control"
                                            value={data.pupuk_terkecil}
                                            onChange={(e) =>
                                                setData(
                                                    "pupuk_terkecil",
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
                                        {data.p_pupuk == "1" ? "kg" : <>gram</>}
                                        .
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
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
