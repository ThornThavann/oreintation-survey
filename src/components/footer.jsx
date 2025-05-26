const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        
        {/* Left - Contact Info */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-medium">អ៊ីមែល :</span>
            <a href="mailto:pse@gmail.com" className="hover:underline">pse@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">លេខទូរស័ព្ទ :</span>
            <div className="flex flex-col">
              <span>096 40 78 543</span>
              <span>096 40 78 543</span>
            </div>
          </div>
        </div>

        {/* Right - Website and Socials */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-medium">គេហទំព័រ :</span>
            <a href="https://pse.ngo" target="_blank" rel="noopener noreferrer" className="hover:underline">pse.ngo</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">បណ្តាញសង្គម :</span>
            <div className="flex flex-col">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
