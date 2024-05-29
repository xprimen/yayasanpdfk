"use client";
// import moment from "moment";
import { useRouter } from "next/navigation";
// import { Fade } from "react-awesome-reveal";
// moment.locale("id-ID");

function Home() {
  const router = useRouter();
  return (
    <>
      <p className="text-5xl">Home Public</p>
    </>
  );
}

export default Home;
