import FlashMessage from "@/Components/FlashMessage";
import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { IconPlus, IconEdit, IconTrash } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function Index({ auth, users, search }) {
    const { flash } = usePage().props;
    console.log(flash);
    const [show, setShow] = useState(flash.message ? true : false);

    const [term, setTerm] = useState(search ? search : "");

    const handleSearch = (e) => {
        if (e.keyCode == 13) {
            router.visit(route("admin.users.index"), {
                method: "get",
                data: {
                    search: e.target.value,
                },
            });
        }
    };

    useEffect(() => {
        setShow(flash.message ? true : false);
    }, [flash]);
    const header = (
        <div className="row g-2 align-items-center">
            <FlashMessage flash={flash} show={show} setShow={setShow} />
            <div className="col">
                <h2 className="page-title">Petani</h2>
                <div className="text-muted mt-1">
                    {users.meta.from}-{users.meta.to} of {users.meta.total}{" "}
                    people
                </div>
            </div>
            <div className="col-auto ms-auto d-print-none">
                <div className="d-flex">
                    <input
                        type="search"
                        className="form-control d-inline-block w-9 me-3"
                        placeholder="Search user…"
                        onKeyUp={handleSearch}
                        onChange={(e) => setTerm(e.target.value)}
                        value={term}
                    />
                    <Link
                        href={route("admin.users.create")}
                        className="btn btn-primary"
                    >
                        {/* Download SVG icon from http://tabler-icons.io/i/plus */}
                        <IconPlus className="icon" />
                        New user
                    </Link>
                </div>
            </div>
        </div>
    );

    return (
        <AuthenticatedLayout user={auth.user} header={header}>
            <Head title="Users" />
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <table className="table card-table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Nama</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.data.map((data, index) => {
                                    return (
                                        <tr key={data.id}>
                                            <td>{index + 1}</td>
                                            <td>{data.name}</td>
                                            <td className="flex gap-2">
                                                <Link
                                                    href={route(
                                                        "admin.users.edit",
                                                        data.id
                                                    )}
                                                    className="btn btn-warning"
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "admin.users.destroy",
                                                        data.id
                                                    )}
                                                    preserveScroll={true}
                                                    onBefore={() =>
                                                        confirm(
                                                            "Apakah anda yakin menghapus " +
                                                                data.name
                                                        )
                                                    }
                                                    className="btn btn-danger"
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
            </div>
            <Pagination
                links={users.meta.links}
                search={search ? search : ""}
            />
        </AuthenticatedLayout>
    );
}
