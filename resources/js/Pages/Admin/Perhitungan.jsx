import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import toast from "react-hot-toast";

export default function Perhitungan({ auth }) {
    const { data, setData, errors, processing, post, reset } = useForm({
        luas_lahan: "",
        bibit: "",
        pupuk: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("perhitungan.store"), {
            onSuccess: () => {
                toast.success("Berhasil tambah perhitungan");
                reset;
            },
        });
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Perhitungan" />
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Perhitungan</h4>
                </div>
                <form onSubmit={submit}>
                    <div className="card-body">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label required">
                                Luas Lahan (m<sup>2</sup>)
                            </label>
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
                        <div className="mb-3">
                            <label htmlFor="" className="form-label required">
                                Bahan baku bibit (kg)
                            </label>
                            <input
                                type="number"
                                defaultValue={data.bibit}
                                className="form-control"
                                placeholder="Masukkan bahan baku bibit..."
                                onChange={(e) =>
                                    setData("bibit", e.target.value)
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label required">
                                Pupuk (kg)
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Masukkan pupuk..."
                                defaultValue={data.pupuk}
                                onChange={(e) =>
                                    setData("pupuk", e.target.value)
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
