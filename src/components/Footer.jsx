export default function Footer() {
  return (
    <footer className="text-white md:py-6 py-4 pb-[50px]">
      <div className="container mx-auto px-4 flex md:flex-row flex-col justify-between">
        <p className="md:pb-0 pb-2">&copy; {new Date().getFullYear()} Neuberg Diagnostics. All Rights Reserved.</p>
        <p>Marketed By: VortexOne GrowthTech Pvt. Ltd.</p>
      </div>
    </footer>
  );
}