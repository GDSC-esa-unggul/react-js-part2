export default function Footer() {
  return (
    <>
      <footer className="content">
        <div className="footer flex flex-col md:flex-row justify-between items-center text-center md:text-left px-12 py-20 bg-beige">
          <div className="row-footer text">
            <h3 className="text-2xl">Tokokue</h3>
            <p className="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, culpa!</p>
          </div>
          <div className="row-footer text mt-8 md:mt-0">
            <h3 className="text-2xl">About</h3>
            <p className="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, culpa!</p>
          </div>
          <div className="row-footer text mt-8 md:mt-0">
            <h3 className="text-2xl">Contact</h3>
            <div className="flex flex-col mt-4">
              <div className="flex items-center">
                <i className="fas fa-address-card"></i>
                <p className="ml-2">Jl. Lorem ipsum dolor sit amet consectetur adipisicing elit. Kode Pos: 57365</p>
              </div>
              <div className="flex items-center mt-2">
                <i className="fas fa-phone"></i>
                <p className="ml-2">+628636566578</p>
              </div>
              <div className="flex items-center mt-2">
                <i className="fas fa-envelope"></i>
                <p className="ml-2">tokokue@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="row-footer text mt-8 md:mt-0">
            <h3 className="text-2xl">Social Media</h3>
            <div className="flex flex-col mt-4">
              <div className="flex items-center">
                <i className="fab fa-facebook"></i>
                <p className="ml-2">@tokokue</p>
              </div>
              <div className="flex items-center mt-2">
                <i className="fab fa-youtube"></i>
                <p className="ml-2">@tokokue</p>
              </div>
              <div className="flex items-center mt-2">
                <i className="fab fa-instagram-square"></i>
                <p className="ml-2">@tokokue</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}