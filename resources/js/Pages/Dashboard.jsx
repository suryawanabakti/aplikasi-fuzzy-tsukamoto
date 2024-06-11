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
                            <p>
                                Terong Belanda, juga dikenal sebagai tamarillo,
                                adalah buah yang berasal dari dataran tinggi
                                Andes di Amerika Selatan, terutama ditemukan di
                                negara-negara seperti Kolombia, Ekuador, Peru,
                                Chili, dan Bolivia. Nama ilmiahnya adalah
                                Solanum betaceum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
