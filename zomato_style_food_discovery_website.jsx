import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function KLDDD() {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.dts.freefiremax";

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1605902711622-cfb43c44367f"
          alt="Battle Royale Gaming"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-4xl md:text-6xl font-extrabold tracking-wide"
        >
          KLDDD
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 mt-4 max-w-xl text-gray-200"
        >
          Experience intense battle royale action. Fast-paced gameplay. High-quality graphics.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative z-10 mt-8"
        >
          <Button
            onClick={() => window.open(playStoreUrl, "_blank")}
            className="bg-yellow-400 text-black text-lg px-10 py-6 rounded-2xl hover:bg-yellow-500"
          >
            Download Free Fire MAX
          </Button>
        </motion.div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          "Ultra HD Graphics",
          "Fast Matchmaking",
          "Global Multiplayer",
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold">{feature}</h3>
            <p className="text-sm text-gray-400 mt-2">
              Optimized for smooth performance and competitive gameplay.
            </p>
          </motion.div>
        ))}
      </section>

      {/* About Us */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-12 text-gray-300">
        <h2 className="text-2xl font-bold text-white mb-4">About Us</h2>
        <p className="text-sm leading-relaxed">
          KLDDD is an independent promotional platform created for gaming fans who want quick and
          safe access to popular battle royale games like Free Fire MAX. We do not host game files
          or modified content. Our goal is to provide information and redirect users only to the
          official Google Play Store for secure downloads.
        </p>
        <p className="text-sm mt-4">
          Contact us: <a href="mailto:khachukbusiness.com@gmail.com" className="text-yellow-400">khachukbusiness.com@gmail.com</a>
        </p>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="max-w-4xl mx-auto px-6 py-12 text-gray-300">
        <h2 className="text-2xl font-bold text-white mb-4">Privacy Policy</h2>
        <p className="text-sm leading-relaxed">
          At KLDDD, we respect your privacy. We do not collect personal information unless you
          voluntarily contact us via email. This website may use cookies and third-party services
          such as Google AdSense to display advertisements. These services may use cookies or web
          beacons to show ads relevant to users.
        </p>
        <p className="text-sm mt-3 leading-relaxed">
          Google, as a third-party vendor, uses cookies (including the DART cookie) to serve ads to
          users based on their visits to this and other websites. Users may opt out of personalized
          advertising by visiting Google Ads Settings.
        </p>
        <p className="text-sm mt-3">
          If you have any questions about this Privacy Policy, you can contact us at
          <a href="mailto:khachukbusiness.com@gmail.com" className="text-yellow-400"> khachukbusiness.com@gmail.com</a>.
        </p>
      </section>

      {/* Disclaimer */}
      <footer className="text-center text-xs text-gray-500 pb-8 px-4">
        KLDDD is an unofficial promotional website. Free Fire MAX is a trademark of its respective owner.
        This site only redirects users to the official Google Play Store listing.
      </footer>
    </div>
  );
}
