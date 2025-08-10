export default function Footer() {
  return (
    <footer className="text-white py-6">
      <div className="container mx-auto px-4 flex justify-between">
        <p>&copy; {new Date().getFullYear()} Neuberg Diagnostics. All Rights Reserved.</p>
        <p>Marketed By: VortexOne GrowthTech Pvt. Ltd.</p>
      </div>
    </footer>
  );
}