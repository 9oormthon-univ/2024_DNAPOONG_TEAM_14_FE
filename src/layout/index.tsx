import { Outlet, useLocation } from "react-router-dom"

import { Header } from "./header/Header"
import { Footer } from "./footer/Footer"

export const Layout = () => {
  const location = useLocation()

  return (
    <div className="relative">
      <div className="text-cir_black_01 w-[24.375rem]">
        <div
          className={`fixed top-0 left-0 z-10 w-full ${
            location.pathname.includes("/types") ||
            location.pathname.includes("/category") ||
            location.pathname.includes("/bookmark") ||
            location.pathname.includes("/accept")
              ? ""
              : "bg-cir_white"
          }`}
        >
          <Header />
        </div>
        <div className="mx-auto min-h-screen">
          <Outlet />
        </div>
        {location.pathname !== "/accept" && location.pathname !== "/types" && (
          <div className="fixed bottom-0 left-0 w-full z-10">
            <Footer />
          </div>
        )}
      </div>
    </div>
  )
}
