import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center p-4 text-center sm:p-8">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Welcome to Our Awesome Service
          </h1>
          <p className="mb-8 px-4 text-lg text-gray-700 sm:px-0 sm:text-xl">
            We provide the best solutions for your needs.
          </p>
          <button className="text-md rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 sm:px-6 sm:py-3 sm:text-lg">
            Get Started
          </button>
        </section>

        {/* Features Section */}
        <section className="w-full bg-white py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold sm:mb-12 sm:text-3xl">
              Our Features
            </h2>
            <div className="grid gap-6 text-center sm:gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-gray-50 p-4 shadow-md sm:p-6">
                <div className="h-[80px] w-[100px] bg-amber-100" />
                <h3 className="mb-2 text-lg font-semibold sm:text-xl">
                  Feature One
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  Description of feature one, highlighting its benefits and
                  capabilities.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4 shadow-md sm:p-6">
                <div className="h-[80px] w-[100px] bg-amber-100" />
                <h3 className="mb-2 text-lg font-semibold sm:text-xl">
                  Feature Two
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  Description of feature two, showcasing its unique advantages.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4 shadow-md sm:p-6">
                <div className="h-[80px] w-[100px] bg-amber-100" />
                <h3 className="mb-2 text-lg font-semibold sm:text-xl">
                  Feature Three
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  Description of feature three, explaining how it solves a
                  problem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 text-center sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Ready to take the next step?
            </h2>
            <button className="text-md rounded-lg bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 sm:px-6 sm:py-3 sm:text-lg">
              Sign Up Now
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-gray-800 p-6 text-center text-white sm:p-8">
          <p className="text-sm sm:text-base">
            © 2024 Your Company. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
