const Footer = () => {
  const cuurentYear = new Date().getFullYear();
  return (
    <div className="w-[100vw] bg-[#397DF0] text-sm text-center py-2 font-mono mt-10 tracking-tighter">
      &copy; {cuurentYear} Created from scratch by&nbsp;
      <a href="https://www.linkedin.com/in/nacreddine-chouich/" className="no-underline font-bold font-mono">Nacereddine Chouich</a>. 
      All rights reserved
    </div>
  );
};

export default Footer;
