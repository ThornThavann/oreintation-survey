const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white px-4 py-6 max-w-6xl mx-auto w-full">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-6 text-sm">
          {/* Left Column */}
          <div className="space-y-2 w-full md:w-1/2">
            <div className="flex gap-2">
              <span className="font-medium">អ៊ីមែល :</span>
              <span>pse@gmail.com</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium">លេខទូរស័ព្ទ :</span>
              <span>096 40 78 543</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium invisible">លេខទូរស័ព្ទ :</span>
              <span>096 40 78 543</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-2 w-full md:w-1/2 md:text-right">
            <div className="flex justify-start md:justify-end gap-2">
              <span className="font-medium">វេបសាយ :</span>
              <span>pse.ngo</span>
            </div>
            <div className="flex justify-start md:justify-end gap-2">
              <span className="font-medium">បណ្តាញសង្គម :</span>
              <span>Facebook</span>
            </div>
            <div className="flex justify-start md:justify-end gap-2">
              <span className="font-medium invisible">បណ្តាញសង្គម :</span>
              <span>Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
