import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Rules({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Rules" />
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Rules</h4>
                </div>
                <div className="card-body">
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <th>R1</th>
                                <td>
                                    Jika lahan sempit dan bibit sedikit dan
                                    pupuk sedikit dan produk berkurang.
                                </td>
                            </tr>
                            <tr>
                                <th>R2</th>
                                <td>
                                    Jika lahan sempit dan bibit banyak dan pupuk
                                    sedikit dan produk berkurang.
                                </td>
                            </tr>
                            <tr>
                                <th>R3</th>
                                <td>
                                    Jika lahan sempit dan bibit sedikit dan
                                    pupuk banyak dan produk berkurang.
                                </td>
                            </tr>
                            <tr>
                                <th>R4</th>
                                <td>
                                    Jika lahan sempit dan bibit banyak dan pupuk
                                    banyak dan produk berkurang.
                                </td>
                            </tr>
                            <tr>
                                <th>R5</th>
                                <td>
                                    {" "}
                                    Jika lahan sempit dan bibit sedikit dan
                                    pupuk sedikit dan produk bertambah.
                                </td>
                            </tr>
                            <tr>
                                <th>R6</th>
                                <td>
                                    Jika lahan sempit dan bibit banyak dan pupuk
                                    sedikit dan produk bertambah.
                                </td>
                            </tr>
                            <tr>
                                <th>R7</th>
                                <td>
                                    Jika lahan sempit dan dabibit sedikit dan
                                    pupuk banyak dan produk bertambah.
                                </td>
                            </tr>
                            <tr>
                                <th>R8</th>
                                <td>
                                    Jika lahan sempit dan bibit sedikit dan
                                    pupuk banyak dan produk bertambah.
                                </td>
                            </tr>
                            <tr>
                                <th>R9</th>
                                <td>
                                    {" "}
                                    Jika lahan luas dan bibit sedikit dan pupuk
                                    sedikit dan produk berkurang.
                                </td>
                            </tr>
                            <tr>
                                <th>R10</th>
                                <td>
                                    {" "}
                                    Jika lahan luas dan bibit banyak dan pupuk
                                    sedikit dan produk berkurang.
                                </td>
                            </tr>
                            <tr>
                                <th>R11</th>
                                <td>
                                    {" "}
                                    Jika lahan luas dan bibit sedikit dan pupuk
                                    banyak dan produk berkurang.
                                </td>
                            </tr>
                            <tr>
                                <th>R12</th>
                                <td>
                                    {" "}
                                    Jika lahan luas dan bibit banyak dan pupuk
                                    banyak dan produk berkurang.
                                </td>
                            </tr>
                            <tr>
                                <th>R13</th>
                                <td>
                                    Jika lahan luas dan bibit sedikit dan pupuk
                                    sedikit dan produk bertambah.
                                </td>
                            </tr>
                            <tr>
                                <th>R14</th>
                                <td>
                                    {" "}
                                    Jika lahan luas dan bibit banyak dan pupuk
                                    sedikit dan produk bertambah.
                                </td>
                            </tr>
                            <tr>
                                <th>R15</th>
                                <td>
                                    {" "}
                                    Jika lahan luas dan bibit sedikit dan pupuk
                                    banyak dan produk bertambah.
                                </td>
                            </tr>
                            <tr>
                                <th>R16</th>
                                <td>
                                    {" "}
                                    Jika lahan luas dan bibit banyak dan pupuk
                                    banyak dan produk bertambah.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
