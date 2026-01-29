import CheckResultPage from "./check-result/page";
import Footer from "./footer/page";
import MainHeader from "./header-page/page";
import MainPageImageSection from "./mainpage-image-section/page";
import WaitMessagePage from "./wait-message/page";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <MainHeader />

      <main className="flex-1 grid grid-cols-1 md:grid-cols-2">
        {/* LEFT – IMAGE (desktop only) */}
        <MainPageImageSection />

        {/* RIGHT – FORM PANEL */}
        <section className="flex items-center justify-center px-4 sm:px-6 py-6 sm:py-12">
          <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="p-5 sm:p-6">
              <WaitMessagePage />
              {/* <CheckResultPage /> */}
            </div>

            {/* PANEL FOOTER */}
            <div className="px-4 py-3 text-xs text-gray-500 text-center border-t bg-gray-50 rounded-b-xl">
              Secure & Confidential • Official Academic Record
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
