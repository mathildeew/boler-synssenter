import BolerLogo from "./bolerLogo";

export default function Footer() {
  return (
    <footer className="bg-lightBlue w-full">
      <div className="footerContainer bg-darkPurple flex justify-center px-4 py-16 md:px-10 md:py-28 lg:px-16">
        {/* <BolerLogo /> */}
        <div className="w-full max-w-[1460px] text-lightBlue grid gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <h3>Åpningstider</h3>
            <div className="flex flex-col gap-3">
              <div>
                <p>Mandag - fredag:</p>
                <p>10.00 - 19.00</p>
              </div>
              <div>
                <p>Lørdag:</p>
                <p>10.00 - 18.00</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3>Kontakt oss</h3>
            <div className="flex flex-col gap-3">
              <div>
                <p>22 26 22 68</p>
                <a href="mailto:post@bolersynssenter.no">post@bolersynssenter.no</a>
              </div>
              <div>
                <p>Bøler Synssenter</p>
                <p>Utmarkveien 1</p>
                <p>0689 Oslo</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <p>Design og nettside av</p>
            <a href="https://www.mathildeelinor.no" className="underline">
              Mathilde Elinor
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
