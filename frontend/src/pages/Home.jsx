import {Link as LinkRouter} from "react-router-dom"

export default function Home() {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pb-48 h-screen">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                    <div className="sm:max-w-lg flex flex-col items-center gap-8">
                        <div className="w-64 h-64 rounded-lg overflow-hidden">
                            <img
                                className="w-full h-full object-center object-cover"
                                src="https://d22fxaf9t8d39k.cloudfront.net/069a6da2fc2461dc066a2b8a4e375760e137aa8a7cbd1acd00cb87d1f39813d243880.png"
                                alt="Workflow"
                            />
                        </div>

                        <h1 className="text-4xl font font-bold tracking-tight text-gray-900 sm:tracking-tight sm:text-6xl">
                            Hola de nuevo!
                        </h1>
                        <LinkRouter
                            to="/store"
                            className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                        >
                            Acceso tienda
                        </LinkRouter>
                        <LinkRouter
                            to="/user"
                            className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                        >
                            Acceso usuario
                        </LinkRouter>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                                                <img
                                                    src="https://d22fxaf9t8d39k.cloudfront.net/73586101e062121717667543e04032777c85731cab0036545ce68b60a397a58143880.jpeg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src="https://d22fxaf9t8d39k.cloudfront.net/bf2d875f624d518fc7d2b891cadc78c9d78efd8de0d5a872d4ed3f2f7c5a311643880.jpeg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src="https://d22fxaf9t8d39k.cloudfront.net/5c4200957de01ad23d4bc1dd6a07ca0c009b8c54c642516e0c7ab91958208d2843880.jpeg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src="https://d22fxaf9t8d39k.cloudfront.net/e396279c8d3674aece450dc78ce93b2a139e05173d75522819109abb079f630b43880.jpeg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src="https://d22fxaf9t8d39k.cloudfront.net/ddeb0d04be97b3bf19152af439dd8ec136b8bdf810086165a87164421a24e04f43880.jpeg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src="https://d22fxaf9t8d39k.cloudfront.net/0089b431f17e108f72b5fbea27e05a53b0be36e44a9f9dd52622585e056d53ea43880.jpeg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src="https://d22fxaf9t8d39k.cloudfront.net/b49a37f1c63bd60383f8bcd514fc9edc9db3b3beaed6467803fc926708ab377943880.jpeg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
