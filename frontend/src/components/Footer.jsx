const Footer = () => {
  return (
    <div className="px-5 text-[#737373] md:px-10">
      <p className="pb-5">Questions? Contact Us</p>

      <hr />

      <div className="grid grid-cols-2 md:grid-cols-4 md:text-md py-10 max-w-5xl">
        <ul className="flex flex-col space-y-2">
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>

        <ul className="flex flex-col space-y-2">
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>

        <ul className="flex flex-col space-y-2">
          <li>Account</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Only on Netflix</li>
        </ul>

        <ul className="flex flex-col space-y-2">
          <li>Media Center</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <hr />
      <div className="flex justify-between items-center py-5">
        <p>Developed by Victor Gaona 2025</p>
        <p>Netflix Copyright &copy; 2025</p>
      </div>
    </div>
  );
};

export default Footer;
