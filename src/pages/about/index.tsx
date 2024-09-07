import { Statistics } from "../../components/Statistics";
import  Header  from "../../components/header";

const About = () => {
  return (
    <>
      <Header />
      <section id="about" className="container py-24 mx-auto sm:py-32">
        <div className="bg-muted/50 rounded-lg py-12">
          <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
            <img
              src="/Logo1.png"
              alt=""
              className="w-[300px] object-contain rounded-lg"
            />
            <div className="bg-green-0 flex flex-col justify-between px-8">
              <div className="pb-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-b from-blue-600 to-purple-700 text-transparent bg-clip-text">
                    About{" "}
                  </span>
                  Hem Contracts
                </h2>
                <p className="text-xl text-muted-foreground mt-4">
                  We, HEM CONTRACTS LLP are a team of experienced Plumbing Contractors. We bring to you an assurance of quality deliverables, prompt service and effective execution. We have been in the industry for more than 9 years now and boast of a rich roster of satisfied clients.
                </p>
                {/* create a bullet list */}
                <div className="flex flex-col gap-2 mt-4">
                  <div className="px-4 py-1 border border-gray-200 rounded-full w-fit">Provileading specialty Plumbing contractor with the highly skilled labor force in Mumbai, Thane, Navi Mumbai & Pune.</div>
                  <div className="px-4 py-1 border border-gray-200 rounded-full w-fit">Providing fully integrated Plumbing services on Commercial, Industrial, Residential, Hotels & Data Centers Projects.</div>
                  <div className="px-4 py-1 border border-gray-200 rounded-full w-fit">We have an efficient communication systems between the Design, Construction and Client teams</div>
                  <div className="px-4 py-1 border border-gray-200 rounded-full w-fit">work closely with Engineering, PMC, MEP Consultations and Principal Contractors.</div>
                </div>
              </div>
              <Statistics />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;