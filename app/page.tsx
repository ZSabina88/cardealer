import FilterPage from "./components/FilterPage";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="h-[50px] w-[100vw] bg-slate-200 py-4 px-6">
      <Header />
      <FilterPage />
    </div>
  );
}
