

export default function () {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Why Choose Us?
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    We deliver cutting-edge software solutions tailored to your business needs.
                </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Benefit 1: Expertise */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Industry Expertise</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                    10+ years of experience building scalable, secure, and high-performance applications.
                    </p>
                </div>

                {/* Benefit 2: Custom Solutions */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Tailored Solutions</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                    Bespoke software designed to solve your unique challenges, not cookie-cutter templates.
                    </p>
                </div>

                {/* Benefit 3: Support */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-14 h-14 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">24/7 Support</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                    Dedicated support team ready to assist you anytime, anywhere.
                    </p>
                </div>
                </div>
            </div>
        </section>
    )
}