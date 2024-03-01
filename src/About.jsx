export default function About() {
  return (
    <>
      <div className="m-2">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left px-12 py-20">
          <img
            src="./assets/image-1.webp"
            alt=""
            className="w-96 h-96 rounded-lg mb-10 md:mb-0"
          />
          <div className="p-2">
            <h1 className="text-3xl font-bold">About Us</h1>
            <h4 className="text-xl">Welcome to our shop</h4>
            <p className="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores esse mollitia voluptatibus, placeat quo quaerat consectetur recusandae laborum, commodi officia laudantium nihil totam perferendis eos? Voluptatibus veritatis impedit deleniti eos?</p>
            <div className="row-about flex flex-col md:flex-row mt-4">
              <div className="row md:mr-4">
                <h4 className="bg-brown-500 text-white font-bold px-4 py-2 rounded-lg">100% HEALTHY</h4>
                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aperiam?</p>
              </div>
              <div className="row">
                <h4 className="bg-brown-500 text-white font-bold px-4 py-2 rounded-lg">100% FRESH</h4>
                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aperiam?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}