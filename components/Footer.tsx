import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Torama. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4">
          <Link href="/privacy" className="hover:text-blue-600">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-blue-600">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
