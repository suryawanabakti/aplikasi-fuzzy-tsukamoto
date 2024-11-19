import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { IconNumber, IconTrees, IconUsers } from "@tabler/icons-react";

export default function Dashboard({
    auth,
    countPetani,
    countPanen,
    countPerhitungan,
}) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Home" />
            <div className="row row-cards">
                <div className="col-sm-6 col-lg-4">
                    <div className="card card-sm">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <span className="bg-danger text-white avatar">
                                        {/* Download SVG icon from http://tabler-icons.io/i/currency-dollar */}
                                        <IconUsers className="icon" />
                                    </span>
                                </div>
                                <div className="col">
                                    <div className="font-weight-medium">
                                        {countPetani} Petani
                                    </div>
                                    <div className="text-secondary">
                                        {countPetani} tambahan tahun ini.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="card card-sm">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <span className="bg-danger text-white avatar">
                                        {/* Download SVG icon from http://tabler-icons.io/i/currency-dollar */}
                                        <IconTrees className="icon" />
                                    </span>
                                </div>
                                <div className="col">
                                    <div className="font-weight-medium">
                                        {countPanen} Data Panen
                                    </div>
                                    <div className="text-secondary">
                                        {countPanen} tambahan tahun ini.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="card card-sm">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <span className="bg-danger text-white avatar">
                                        {/* Download SVG icon from http://tabler-icons.io/i/currency-dollar */}
                                        <IconNumber className="icon" />
                                    </span>
                                </div>
                                <div className="col">
                                    <div className="font-weight-medium">
                                        {countPerhitungan} Perhitungan
                                    </div>
                                    <div className="text-secondary">
                                        {countPerhitungan} tambahan tahun ini.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
