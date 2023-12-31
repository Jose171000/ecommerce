const LoginTemplate = ({ children }) => {
  return (
    <section className="h-full gradient-from bg-gray-200 md:h-screen">
      <div className="container m-auto py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg flex flex-row">
              <div className="lg:flex lg:flex-wrap lg:w-6/12 g-0">
                <div className="md:p-12 md:mx-6 lg:w-full">
                  <div className="text-center">
                    <img
                      className="mx-auto w-48 mb-4 pt-4"
                      src="https://logodownload.org/wp-content/uploads/2014/04/honda-motos-logo-1.png"
                      //   "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg"
                      alt="logo honda"
                    />
                    <h4 className="text-xl font-semibold mt-1 mb-8 pb-1">
                      Iniciar sesión
                    </h4>
                  </div>
                  {children}
                </div>
              </div>
              <div className="bg-gradient lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-b-lg">
                <div className="text-white px-2 mx-6 my-16 md:px-12 md:mx-6">
                  <span className="text-xl font-semibold mb-6">
                    Más que un e-commerce...
                  </span>
                  <h4 className="text-4xl">somos una tienda en línea</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginTemplate;
