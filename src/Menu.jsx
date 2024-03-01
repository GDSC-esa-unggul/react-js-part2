export default function Menu() {
  return (
    <>
      <div className="content">
        <div className="menu flex flex-col items-center text-center px-12 py-20">
          <div className="text">
            <h1 className="text-3xl font-bold">Menu & Pricing</h1>
            <h4 className="text-xl">Best Seller Our Menu</h4>
          </div>
          <div className="row-menu flex flex-col md:flex-row mt-8 md:gap-8">
            <div className="row">
              <img src="https://ae01.alicdn.com/kf/H35a66a1cbdc342129f3dee961fa13bcbk.jpg_640x640Q90.jpg_.webp" alt="" className="w-60 h-60 rounded-full" />
              <h3 className="mt-4 text-lg font-bold">Lorem, ipsum dolor.</h3>
              <p className="mt-2">Rp.200.000</p>
            </div>
            <div className="row">
              <img src="https://ae01.alicdn.com/kf/H35a66a1cbdc342129f3dee961fa13bcbk.jpg_640x640Q90.jpg_.webp" alt="" className="w-60 h-60 rounded-full" />
              <h3 className="mt-4 text-lg font-bold">Lorem, ipsum dolor.</h3>
              <p className="mt-2">Rp.200.000</p>
            </div>
            <div className="row">
              <img src="https://ae01.alicdn.com/kf/H35a66a1cbdc342129f3dee961fa13bcbk.jpg_640x640Q90.jpg_.webp" alt="" className="w-60 h-60 rounded-full" />
              <h3 className="mt-4 text-lg font-bold">Lorem, ipsum dolor.</h3>
              <p className="mt-2">Rp.200.000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}