import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 px-4">
      <div className="container mx-auto">
        <div className="mb-4">
          <p className="text-sm">
            More ways to shop: <a href="#" className="text-blue-500 hover:underline">Find an Apple Store</a> or <a href="#" className="text-blue-500 hover:underline">other retailer</a> near you.
          </p>
          <p className="text-sm">Or call 000800-040-1966</p>
        </div>
        <hr className="border-gray-700 my-4" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs mb-2 md:mb-0">&copy; 2024 Apple Inc. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end">
            {['Privacy Policy', 'Terms of Use', 'Sales Policy', 'Legal', 'Site Map'].map((item, index) => (
              <React.Fragment key={item}>
                <a href="#" className="text-xs hover:underline mx-2">{item}</a>
                {index < 4 && <span className="text-xs mx-2 hidden md:inline">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer