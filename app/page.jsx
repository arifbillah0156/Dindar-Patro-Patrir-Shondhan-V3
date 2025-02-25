import HomeAddBiodata from "@/components/HomeAddBiodata";
import HomePageText from "@/components/HomePageText";
import HomeSearchForm from "@/components/HomeSearchForm";

export default function Home() {
  return (
    <div
      className="h-max w-[100%] bg-cover bg-center pb-24 mb-[-41px] rounded-3xl"
      style={{
        backgroundImage: `url(/Images/BG5.jpg)`,
      }}
    >
      <HomePageText />

      <HomeAddBiodata />

      <HomeSearchForm />
    </div>
  );
}
