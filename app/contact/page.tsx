// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Navbar from "@/components/Navbar";
// import { motion } from "framer-motion";

// type FormState = "idle" | "submitting" | "success" | "error";

// export default function ContactPage() {
//   const [formState, setFormState] = useState<FormState>("idle");
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     company: "",
//     interest: "",
//     message: "",
//     consent: false,
//   });

//   // 🔥 Animation variants
//   const slideUpVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.4,
//       },
//     },
//   };

//   function handleChange(
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >,
//   ) {
//     const { name, value, type } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]:
//         type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
//     }));
//   }

//   async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
//     e.preventDefault();
//     if (!form.consent) return;
//     setFormState("submitting");

//     try {
//       const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: `${form.firstName} ${form.lastName}`,
//           email: form.email,
//           company: form.company,
//           interest: form.interest,
//           message: form.message,
//         }),
//       });
//       if (res.ok) setFormState("success");
//       else setFormState("error");
//     } catch {
//       setFormState("error");
//     }
//   }

//   return (
//     <div className="min-h-screen bg-white font-rubik antialiased">
//       <Navbar />

//       {/* ── Hero ── */}
//       <div className="w-full relative pb-[60px] lg:pb-[80px]">
//         <div className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[580px] hero-diagonal-cut">
//           {/* Green panel */}
//           <div className="relative flex-1 lg:flex-[2] bg-[#00B341] overflow-hidden">
//             <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-tl from-black/10 to-transparent transform skew-y-1" />
//             <div className="w-full max-w-[740px] max-md:pt-10 mx-auto px-4 lg:px-8">
//               <motion.div
//                 className="relative z-10 flex flex-col justify-center h-full px-10 lg:px-16 pt-28 pb-12 lg:pt-32"
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//                 viewport={{ once: true }}
//               >
//                 {/* Title */}
//                 <motion.h1
//                   className="text-5xl lg:text-7xl font-black text-white uppercase leading-none tracking-tight mb-6"
//                   variants={slideUpVariants}
//                   transition={{
//                     duration: 1,
//                     ease: [0.25, 0.46, 0.45, 0.94],
//                   }}
//                 >
//                   License
//                   <br />a Title
//                 </motion.h1>

//                 {/* Description */}
//                 <motion.p
//                   className="text-white/90 text-sm lg:text-base leading-relaxed max-w-md"
//                   variants={slideUpVariants}
//                   transition={{
//                     duration: 1.1,
//                     ease: [0.25, 0.46, 0.45, 0.94],
//                   }}
//                 >
//                   Interested in bringing one of our games to your platform,
//                   store, or audience? We work with publishers, distributors, and
//                   platform partners worldwide. Let&apos;s talk.
//                 </motion.p>

//                 {/* Stats */}
//                 <motion.div
//                   className="mt-8 flex flex-col gap-3 max-w-sm"
//                   variants={slideUpVariants}
//                 >
//                   {[
//                     {
//                       icon: "🎮",
//                       label: "Portfolio",
//                       value: "16 titles available for licensing",
//                     },
//                     {
//                       icon: "🖥",
//                       label: "Platforms",
//                       value: "PC, Nintendo Switch, Mobile, Console",
//                     },
//                     {
//                       icon: "🤝",
//                       label: "Past partners",
//                       value: "GameStop, Target, Best Buy & more",
//                     },
//                   ].map((stat) => (
//                     <motion.div
//                       key={stat.label}
//                       variants={slideUpVariants}
//                       className="flex items-center gap-3 bg-white/15 border border-white/30 rounded-xl px-4 py-3"
//                     >
//                       <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center text-base flex-shrink-0">
//                         {stat.icon}
//                       </div>
//                       <div>
//                         <div className="text-white/70 text-[10px] font-bold uppercase tracking-widest">
//                           {stat.label}
//                         </div>
//                         <div className="text-white text-sm font-semibold mt-0.5">
//                           {stat.value}
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               </motion.div>
//             </div>
//           </div>

//           {/* Right panel */}
//           <div className="hidden lg:block flex-1 relative">
//             {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-100 flex items-center justify-center">
//               <div className="text-center opacity-20">
//                 <div className="text-8xl">🎮</div>
//               </div>
//             </div> */}
//             <Image
//               src="/hero-desktop.jpg"
//               alt="Gamers Digital Hero"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </div>
//       </div>

//       <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
//         <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
//           {/* Left — who we work with */}
//           <div>
//             <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#00B341] font-semibold mb-5">
//               Who we work with
//             </h2>
//             {/* <p className="text-[#00B341] text-xs font-bold uppercase tracking-widest mb-3">
//               Who we work with
//             </p> */}
//             <p className="text-gray-600 text-sm leading-relaxed mb-4">
//               Gamers Digital has spent decades building a catalog of proven
//               casual titles with broad audience appeal. We&apos;re a reliable
//               source for publishers and distributors looking for low-risk,
//               high-quality entertainment products.
//             </p>
//             <p className="text-gray-600 text-sm leading-relaxed mb-8">
//               Whether you&apos;re looking for downloadable PC games, mobile
//               titles, or console products — we have options that fit.
//             </p>

//             <hr className="border-gray-200 mb-8" />

//             <p className="text-gray-900 text-sm font-semibold mb-4">
//               Good fits include:
//             </p>
//             <ul className="space-y-3">
//               {[
//                 "Game publishers looking to expand their casual catalog",
//                 "Digital storefronts and platform operators",
//                 "Physical retailers adding downloadable game codes",
//                 "Mobile publishers seeking established IP",
//                 "Bundle and subscription service curators",
//               ].map((item) => (
//                 <li key={item} className="flex items-start gap-3">
//                   <div className="w-1.5 h-1.5 rounded-full bg-[#00B341] flex-shrink-0 mt-2" />
//                   <span className="text-gray-600 text-sm leading-relaxed">
//                     {item}
//                   </span>
//                 </li>
//               ))}
//             </ul>

//             {/* Founder card */}
//             <div className="mt-10 bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center gap-4">
//               <div className="size-12 rounded-full bg-[#00B341] flex items-center justify-center text-white font-black text-sm flex-shrink-0 ">
//                 <Image
//                   src={"/founder.png"}
//                   alt=""
//                   className="size-10 object-contain"
//                   height={1000}
//                   width={1000}
//                 />
//               </div>
//               <div className="">
//                 <div className="font-bold text-gray-900 text-sm">
//                   Scott Zerby
//                 </div>
//                 <div className="text-gray-500 text-xs mt-0.5">
//                   Founder, Gamers Digital
//                 </div>
//                 <a
//                   href="https://www.linkedin.com/in/scottzerby"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-1 text-[#00B341]! text-xs font-semibold mt-1.5 hover:underline"
//                 >
//                   LinkedIn ↗
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Right — contact form */}
//           <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-sm">
//             {formState === "success" ? (
//               <div className="flex flex-col items-center justify-center py-12 text-center">
//                 <div className="w-16 h-16 rounded-full bg-[#00B341]/10 flex items-center justify-center text-3xl mb-4">
//                   ✅
//                 </div>
//                 <h2 className="text-xl font-black text-gray-900 mb-2">
//                   Message sent!
//                 </h2>
//                 <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
//                   Scott will follow up within 2 business days. In the meantime,
//                   feel free to browse the full catalog.
//                 </p>
//                 <Link
//                   href="/#projects"
//                   className="mt-6 inline-block bg-[#00B341] text-white font-black text-sm px-6 py-3 rounded-full hover:bg-[#009935] transition-colors"
//                 >
//                   Browse the catalog
//                 </Link>
//               </div>
//             ) : (
//               <>
//                 <h2 className="text-lg font-black text-gray-900 mb-1">
//                   Start a licensing conversation
//                 </h2>
//                 <p className="text-gray-500 text-sm mb-6 leading-relaxed">
//                   Fill out the form and Scott will follow up within 2 business
//                   days.
//                 </p>

//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
//                       First name
//                     </label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={form.firstName}
//                       onChange={handleChange}
//                       placeholder="Jane"
//                       className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B341]/30 focus:border-[#00B341]"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
//                       Last name
//                     </label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={form.lastName}
//                       onChange={handleChange}
//                       placeholder="Smith"
//                       className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B341]/30 focus:border-[#00B341]"
//                     />
//                   </div>
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
//                     Work email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     placeholder="jane@yourcompany.com"
//                     className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B341]/30 focus:border-[#00B341]"
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
//                     Company
//                   </label>
//                   <input
//                     type="text"
//                     name="company"
//                     value={form.company}
//                     onChange={handleChange}
//                     placeholder="Acme Games Inc."
//                     className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B341]/30 focus:border-[#00B341]"
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
//                     I&apos;m interested in
//                   </label>
//                   <select
//                     name="interest"
//                     value={form.interest}
//                     onChange={handleChange}
//                     className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00B341]/30 focus:border-[#00B341] appearance-none bg-white"
//                   >
//                     <option value="">Select one...</option>
//                     <option value="specific-title">
//                       Licensing a specific title
//                     </option>
//                     <option value="full-catalog">
//                       Exploring the full catalog
//                     </option>
//                     <option value="mobile">A mobile publishing deal</option>
//                     <option value="retail">
//                       A retail / distribution partnership
//                     </option>
//                     <option value="other">Something else</option>
//                   </select>
//                 </div>

//                 <div className="mb-5">
//                   <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
//                     Message{" "}
//                     <span className="normal-case font-normal tracking-normal">
//                       (optional)
//                     </span>
//                   </label>
//                   <textarea
//                     name="message"
//                     value={form.message}
//                     onChange={handleChange}
//                     rows={4}
//                     placeholder="Tell us a bit about your platform or what you're looking for..."
//                     className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B341]/30 focus:border-[#00B341] resize-none"
//                   />
//                 </div>

//                 <div className="flex items-start gap-3 mb-5">
//                   <input
//                     type="checkbox"
//                     id="consent"
//                     name="consent"
//                     checked={form.consent}
//                     onChange={handleChange}
//                     className="mt-0.5 accent-[#00B341] cursor-pointer"
//                   />
//                   <label
//                     htmlFor="consent"
//                     className="text-gray-500 text-xs leading-relaxed cursor-pointer"
//                   >
//                     I&apos;m happy to be contacted about licensing opportunities
//                     from Gamers Digital.
//                   </label>
//                 </div>

//                 <button
//                   onClick={handleSubmit}
//                   disabled={!form.consent || formState === "submitting"}
//                   className="w-full bg-[#00B341] text-white font-black text-sm py-3 rounded-lg hover:bg-[#009935] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
//                 >
//                   {formState === "submitting" ? "Sending..." : "Send inquiry"}
//                 </button>

//                 {formState === "error" && (
//                   <p className="text-red-500 text-xs text-center mt-3">
//                     Something went wrong. Please try again or email us directly.
//                   </p>
//                 )}

//                 <p className="text-gray-400 text-xs text-center mt-3 leading-relaxed">
//                   No spam, no pressure. Just a conversation about what might
//                   work.
//                 </p>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  // 🔥 Animation variants
  const slideUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white font-rubik antialiased">
      <Navbar />

      {/* ── Hero ── */}
      <div className="w-full relative pb-[60px] lg:pb-[80px]">
        <div className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[580px] hero-diagonal-cut">
          {/* Green panel */}
          <div className="relative flex-1 lg:flex-[2] bg-[#00B341] overflow-hidden">
            <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-tl from-black/10 to-transparent transform skew-y-1" />
            <div className="w-full max-w-[740px] max-md:pt-10 mx-auto px-4 lg:px-8">
              <motion.div
                className="relative z-10 flex flex-col justify-center h-full px-10 lg:px-16 pt-28 pb-12 lg:pt-32"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
              >
                {/* Title */}
                <motion.h1
                  className="text-5xl lg:text-7xl font-black text-white uppercase leading-none tracking-tight mb-6"
                  variants={slideUpVariants}
                  transition={{
                    duration: 1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  License
                  <br />a Title
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="text-white/90 text-sm lg:text-base leading-relaxed max-w-md"
                  variants={slideUpVariants}
                  transition={{
                    duration: 1.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  Interested in bringing one of our games to your platform,
                  store, or audience? We work with publishers, distributors, and
                  platform partners worldwide. Let&apos;s talk.
                </motion.p>

                {/* Stats */}
                <motion.div
                  className="mt-8 flex flex-col gap-3 max-w-sm"
                  variants={slideUpVariants}
                >
                  {[
                    {
                      icon: "🎮",
                      label: "Portfolio",
                      value: "16 titles available for licensing",
                    },
                    {
                      icon: "🖥",
                      label: "Platforms",
                      value: "PC, Nintendo Switch, Mobile, Console",
                    },
                    {
                      icon: "🤝",
                      label: "Past partners",
                      value: "GameStop, Target, Best Buy & more",
                    },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      variants={slideUpVariants}
                      className="flex items-center gap-3 bg-white/15 border border-white/30 rounded-xl px-4 py-3"
                    >
                      <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center text-base flex-shrink-0">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-white/70 text-[10px] font-bold uppercase tracking-widest">
                          {stat.label}
                        </div>
                        <div className="text-white text-sm font-semibold mt-0.5">
                          {stat.value}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right panel */}
          <div className="hidden lg:block flex-1 relative">
            <Image
              src="/hero-desktop.jpg"
              alt="Gamers Digital Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          {/* Left — who we work with */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#00B341] font-semibold mb-5">
              Who we work with
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Gamers Digital has spent decades building a catalog of proven
              casual titles with broad audience appeal. We&apos;re a reliable
              source for publishers and distributors looking for low-risk,
              high-quality entertainment products.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Whether you&apos;re looking for downloadable PC games, mobile
              titles, or console products — we have options that fit.
            </p>

            <hr className="border-gray-200 mb-8" />

            <p className="text-gray-900 text-sm font-semibold mb-4">
              Good fits include:
            </p>
            <ul className="space-y-3">
              {[
                "Game publishers looking to expand their casual catalog",
                "Digital storefronts and platform operators",
                "Physical retailers adding downloadable game codes",
                "Mobile publishers seeking established IP",
                "Bundle and subscription service curators",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00B341] flex-shrink-0 mt-2" />
                  <span className="text-gray-600 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Founder card */}
            <div className="mt-10 bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center gap-4">
              <div className="size-12 rounded-full bg-[#00B341] flex items-center justify-center text-white font-black text-sm flex-shrink-0 ">
                <Image
                  src={"/founder.png"}
                  alt=""
                  className="size-10 object-contain"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className="">
                <div className="font-bold text-gray-900 text-sm">
                  Scott Zerby
                </div>
                <div className="text-gray-500 text-xs mt-0.5">
                  Founder, Gamers Digital
                </div>
                <a
                  href="https://www.linkedin.com/in/scottzerby "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#00B341]! text-xs font-semibold mt-1.5 hover:underline"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
