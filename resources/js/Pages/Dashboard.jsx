import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Home" />
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Terong Belanda</h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/download.jpg" alt="" />
                        </div>
                        <div className="col-md-4">
                            <img src="/download.jpg" alt="" />
                        </div>
                        <div className="col-md-4">
                            <img src="/download.jpg" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-3">
                            <h3>
                                Prediksi Hasil Panen Terong Belanda - SPK Cerdas
                                untuk Pertanian
                            </h3>
                            <p>
                                Selamat datang di sistem pendukung keputusan
                                berbasis web yang dirancang khusus untuk
                                membantu petani dan pelaku agribisnis dalam
                                memprediksi hasil panen terong belanda. Dengan
                                memanfaatkan teknologi terkini, website ini
                                menawarkan prediksi yang akurat berdasarkan data
                                historis, kondisi cuaca, kualitas tanah, serta
                                berbagai faktor pertanian lainnya.
                            </p>
                            <h4>Fitur-fitur utama yang ditawarkan meliputi:</h4>
                            <p>
                                <b>Analisis Data yang Mendalam :</b>
                                Menggunakan algoritma canggih untuk menganalisis
                                data historis dan memberikan prediksi hasil
                                panen yang mendekati kenyataan.
                            </p>

                            <p>
                                <b>Visualisasi Data :</b>
                                Menyajikan prediksi dalam bentuk grafik dan
                                tabel yang mudah dipahami, membantu petani dalam
                                mengambil keputusan yang tepat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
