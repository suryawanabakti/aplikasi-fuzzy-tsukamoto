import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
        show_password: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <div className="row g-0 flex-fill">
                <div className="col-12 col-lg-6 col-xl-4 border-top-wide border-danger d-flex flex-column justify-content-center">
                    <div className="container container-tight my-5 px-lg-5">
                        <div className="text-center mb-4">
                            <Link
                                href="/"
                                className="navbar-brand navbar-brand-autodark"
                            >
                                Terong Belanda
                            </Link>
                        </div>
                        <h2 className="h3 text-center mb-3">
                            Masuk Ke Akun Anda
                        </h2>
                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your username"
                                    autoComplete="username"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                {errors.email && (
                                    <small className="text-danger">
                                        {errors.email}
                                    </small>
                                )}
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Password</label>
                                <div className="input-group input-group-flat">
                                    <input
                                        type={`${
                                            !data.show_password
                                                ? "password"
                                                : "text"
                                        }`}
                                        className="form-control"
                                        placeholder="Your password"
                                        autoComplete="off"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />
                                    <span className="input-group-text">
                                        <a
                                            href="#"
                                            tabIndex={-1}
                                            className="link-secondary"
                                            onClick={() =>
                                                setData(
                                                    "show_password",
                                                    !data.show_password
                                                )
                                            }
                                        >
                                            {/* Download SVG icon from http://tabler-icons.io/i/eye */}
                                            {!data.show_password ? (
                                                <IconEye className="icon" />
                                            ) : (
                                                <IconEyeOff className="icon" />
                                            )}
                                        </a>
                                    </span>
                                </div>
                                {errors.password && (
                                    <small className="text-danger">
                                        {errors.password}
                                    </small>
                                )}
                            </div>
                            <div className="mb-2">
                                <label className="form-check">
                                    <input
                                        type="checkbox"
                                        tabIndex={-1}
                                        className="form-check-input"
                                        name="remember"
                                        value={1}
                                        onChange={(e) =>
                                            setData("remember", e.target.value)
                                        }
                                    />
                                    <span className="form-check-label">
                                        Remember me on this device
                                    </span>
                                </label>
                            </div>
                            <div className="form-footer">
                                <button
                                    type="submit"
                                    className={`btn btn-danger w-100 ${
                                        processing ? "btn-loading" : ""
                                    }`}
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                        <div className="text-center text-muted mt-3">
                            Made with 🍐 by Lisawati.
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-8 d-none d-lg-block">
                    {/* Photo */}
                    <div
                        className="bg-cover h-100 min-vh-100"
                        style={{
                            backgroundImage: "url(/terongbelanda.jpg)",
                        }}
                    />
                </div>
            </div>
        </GuestLayout>
    );
}
