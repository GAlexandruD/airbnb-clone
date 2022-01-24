function Footer() {
  return (
    <div className=" flex justify-center place-content-between mx-auto px-8 sm:px-16 bg-gray-100">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
        <div className="p-2 space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
        <div className="p-2 space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessibility</p>
          <p>This is not a real site</p>
          <p>It is a pretty awesome clone</p>
          <p>Referrals accepted</p>
          <p>Oh yeah!</p>
        </div>
        <div className="p-2 space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p>Alexandru Developer</p>
          <p>Made this site</p>
          <p>Using React</p>
          <p>And Next</p>
          <p>And Tailwind</p>
        </div>
        <div className="p-2 space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Help Centre</p>
          <p>Phone Number</p>
          <p>Not Added</p>
          <p>Call Me</p>
          <p>Today</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
