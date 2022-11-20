function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real Airbnb site</p>
        <p>It's a pretty awesome clone</p>
      </div>

      <div className="space-y-4 text-xs test-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>CT</p>
        <p>Presents</p>
        <p>Airbnb website - clone</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help center</p>
        <p>Trust & Safety</p>
        <p>Contact</p>
      </div>
    </div>
  );
}

export default Footer;
