import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <section className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-white w-1/2 px-12">
        <h1 className="text-4xl text-black font-extrabold tracking-tighter">
          Welcome to One Stop Store
        </h1>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </section>
  );
}
