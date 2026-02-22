import { Link } from "react-router";


const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
            <div className="text-center">
                {/* Visual Element: A stylized 404 or Icon */}
                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">404 error</p>
                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                    Page not found.
                </h1>
                <p className="mt-4 text-base text-gray-500 max-w-md mx-auto">
                    Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL or the page has moved.
                </p>

                {/* Illustration / Decorative Element */}
                <div className="mt-10 flex justify-center">
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 opacity-25 blur"></div>
                        <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                             <svg className="mx-auto h-12 w-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                    >
                        Go back home
                    </Link>
                    <button
                        onClick={()=> window.location.reload()}
                        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                    >
                        Try again
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;