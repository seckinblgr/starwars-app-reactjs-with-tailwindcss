import {
  UilEnvelopeAlt,
  UilInstagram,
  UilGithubAlt,
  UilTwitter,
  UilLinkedin,
} from "@iconscout/react-unicons";
// added to footer icons library

function Footer() {
  return (
    <div>
      <div>
        <div className="  w-full   bottom-0 h-fitt text-white  bg-black flex justify-center items-center p-6">
          <div className="social  flex  space-x-5  ">
            <div className="border-2 rounded-full hover:border-white transition-all hover:scale-110 border-gray-500 p-2">
              <a
                href="mailto:secoblgr52@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UilEnvelopeAlt size={20} color={"#ecfeff"}></UilEnvelopeAlt>
              </a>
            </div>
            <div className="border-2 border-gray-500 hover:scale-110 transition-all hover:border-white rounded-full p-2">
              <a
                href="https://www.instagram.com/seckinblgr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UilInstagram size={20} color={"#ecfeff"}></UilInstagram>
              </a>
            </div>
            <div className="border-2 border-gray-500 hover:scale-110 transition-all hover:border-white rounded-full p-2">
              <a
                href="https://github.com/seckinblgr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UilGithubAlt size={20} color={"#ecfeff"}></UilGithubAlt>
              </a>
            </div>
            <div className="border-2 border-gray-500 hover:scale-110  transition-all hover:border-white rounded-full p-2">
              <a
                href="https://twitter.com/seckinbulgur"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UilTwitter size={20} color={"#ecfeff"}></UilTwitter>
              </a>
            </div>
            <div className="border-2 border-gray-500  hover:scale-110 transition-all  hover:border-white rounded-full p-2">
              <a
                href="https://www.linkedin.com/in/seckinbulgur/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UilLinkedin size={20} color={"#ecfeff"}></UilLinkedin>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
