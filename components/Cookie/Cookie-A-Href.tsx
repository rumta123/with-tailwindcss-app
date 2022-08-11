import { useLocalStorage } from 'usehooks-ts';
import Link from 'next/link';

const CookieAHref = ({}) => {
  const [cookieStatus, setCookieStatus] = useLocalStorage(
    'cookieStatus',
    false
  );

  const toggleTheme = () => {
    setCookieStatus((prevValue) => !prevValue);
  };

  return (
    <>
      {cookieStatus === false && (
        <>
          <div className="bg-success/25 text-success">
            <div className=" container mx-auto flex justify-center">
              <div className="my-auto p-2 pl-3 ">
                This website using cookies (
                <a href="/#cookie-alert">
                  <span className="font-bold">more</span>
                </a>
                )
              </div>
              <div className="my-auto p-1 pr-3">
                {/* <button
                  className="cookie-btn rounded bg-warning/75 py-1 px-2 text-center text-sm text-white hover:bg-warning/100 hover:text-sm"
                  onClick={toggleTheme}
                >
                  Agree
                </button> */}
              </div>
            </div>
            <div className="modal" id="cookie-alert">
              <div className="modal-box border border-secondary/75 text-primary">
                <h3 className="text-lg font-bold">
                  This webiste using cookies!
                </h3>
                <p className="py-4">
                  By continuing to browse this website, you agree to use
                  analytical cookies to collect website visit statistics.
                  <br />
                  <br />
                  You can also turn cookie off <span> </span>
                  <a
                    href="https://duckduckgo.com/?q=how+turn+cookie+for+page&t=h_&ia=web"
                    className="underline"
                    target="_blank"
                  >
                    (more)
                  </a>
                  .
                </p>
                <div className="modal-action">
                  <a href="#" className="btn">
                    Close!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CookieAHref;
