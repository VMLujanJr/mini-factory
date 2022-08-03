import React from "react"

const Footer = () => {
  return (
    <footer className=" content-between lg:text-left text-white bg-custom-teal ">
      <div className="flex justify-between items-center lg:justify-between p-6 border-b border-gray-300">
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-1 je md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex items-center justify-end md:justify-end 
          ">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cubes"
                className="w-4 mr-3" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z">
                </path>
              </svg>
              MINI FACTORY
            </h6>
            <p>
              This Project, While still in development, will serve as a online outlet for all things miniatuare and mighty!
              Regardless if it is bound for a glass case of the dangerous plains of your next table top adventure
              we are here to supply the adventure!
            </p>
          </div>
          <div className="flex flex-column">
            <h6 className="uppercase font-semibold mb-4 flex align-items: md:justify-end text-white">
              Team Members
            </h6>
            <div>
              <p className="mb-4">
                <a href="https://github.com/VMLujanJr" target='_blank' className="text-white">Victor Lujan</a>
              </p>
              <p className="mb-4">
                <a href="https://github.com/Michael-Tulmen" target='_blank' className="text-white">Michael Tulmen</a>
              </p>
              <p className="mb-4">
                <a href="https://github.com/BrandonDaws" target='_blank' className="text-white">Brandon Velarde</a>
              </p>
              <p>
                <a href="https://github.com/KeithVIP" target='_blank' className="text-white">Keith Yanosy</a>
              </p>
              <p>
                <a href="https://github.com/Camilaf99" target='_blank' className="text-white">Camila Fernandez</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-6">
        <span>© 2022 Copyright</span>
      </div>
    </footer>

  )
}

export default Footer;
