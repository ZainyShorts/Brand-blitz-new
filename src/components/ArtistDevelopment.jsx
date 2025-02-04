
// import { Sparkles, Star, TrendingUp, Music, Zap } from "lucide-react";

// export default function ArtistDevelopment() {
//   return (
//     <div className="min-h-screen bg-black relative overflow-hidden">
//       {/* Animated background lines */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl -top-48 -left-24 animate-pulse" />
//         <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -bottom-48 -right-24 animate-pulse delay-700" />
//       </div>

//       <div className="container mx-auto px-4 py-16 relative z-10">
//         <div className="text-center mb-16 space-y-6">
//           <div className="flex items-center justify-center gap-2 text-yellow-400 animate-bounce">
//             <Sparkles className="w-6 h-6" />
//             <span className="text-sm uppercase tracking-wider">Level Up Your Game</span>
//             <Sparkles className="w-6 h-6" />
//           </div>
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400">
//             Artist Development Programs
//           </h1>
//           <p className="text-xl text-blue-200 max-w-2xl mx-auto">
//             Ready to blow up? Our programs are designed to take you from underground to mainstream. No cap, just
//             straight fire results! 🔥
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
//           {/* Program Card */}
//           {[
//             {
//               title: "6 Months Program",
//               description: "The Ultimate Glow Up 💫",
//               icon: <Star className="w-5 h-5 text-yellow-400" />, 
//               imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-31%20at%204.57.00%20PM-MvowtqWkPYw64XTE5rafZRNf2iImXB.jpeg",
//               buttonText: "Start Your Journey",
//               badgeColors: ["purple", "blue", "green", "pink"],
//               badges: ["Spotify Campaign", "YouTube Campaign", "NFT Creation", "Website SEO"],
//             },
//             {
//               title: "3 Months Program",
//               description: "Fast Track to Fame 🚀",
//               icon: <TrendingUp className="w-5 h-5 text-blue-400" />, 
//               imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-31%20at%204.56.59%20PM%20(1)-DBufGt7psBtJAhAS5I0ANBOEzhbHLx.jpeg",
//               buttonText: "Level Up Now",
//               badgeColors: ["purple", "red", "pink"],
//               badges: ["Spotify Campaign", "YouTube Campaign", "Instagram Campaign"],
//             }
//           ].map((program, index) => (
//             <div key={index} className="group bg-black/40 backdrop-blur-xl text-white border border-white/10 hover:border-opacity-50 transition-all duration-300 hover:shadow-2xl hover:shadow-opacity-20 p-6 rounded-lg">
//               <div className="flex items-center gap-2 mb-4">{program.icon}<h3 className="text-xl font-semibold">{program.title}</h3></div>
//               <p className="text-blue-200 mb-4">{program.description}</p>
//               <div className="relative group-hover:scale-[1.02] transition-transform duration-300 mb-4">
//                 <img src={program.imageSrc} alt={program.title}  className="rounded-lg w-full" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
//               </div>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {program.badges.map((badge, i) => (
//                   <span key={i} className={`px-3 py-1 rounded-full border border-${program.badgeColors[i]}-500 text-${program.badgeColors[i]}-400 text-sm bg-${program.badgeColors[i]}-500/10`}>
//                     {badge}
//                   </span>
//                 ))}
//               </div>
//               <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-2 rounded-lg flex items-center justify-center gap-2">
//                 <Zap className="w-4 h-4" /> {program.buttonText}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// import { Badge } from "@/components/ui/badge"

// export default function ArtistDevelopment() {
//   return (
//     <section className="py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-white mb-8">Artist Development Programs</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//           <div className="group bg-black/40 backdrop-blur-xl text-white border border-white/10 hover:border-opacity-50 transition-all duration-300 hover:shadow-2xl hover:shadow-opacity-20 p-8 rounded-lg">
//             <h3 className="text-2xl font-bold mb-4">6-Month Intensive Program</h3>
//             <div className="relative mb-6">
//               <img
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-31%20at%204.57.00%20PM%20(1)-l9PzMFpEIY2pBhOTNZv7AhH27wk805.jpeg"
//                 alt="6 Month Program Timeline"
//                 className="w-full rounded-lg shadow-lg"
//               />
//               <div className="absolute top-4 right-4 bg-yellow-400 text-black font-bold px-4 py-2 rounded-full">
//                 $4299
//               </div>
//             </div>
//             <div className="flex flex-wrap gap-2 mb-4">
//               {/* <Badge variant="green">Spotify</Badge>
//               <Badge variant="blue">YouTube</Badge>
//               <Badge variant="purple">TikTok</Badge>
//               <Badge variant="yellow">Instagram</Badge>
//               <Badge variant="red">Apple Music</Badge> */}
//             </div>
//             <div className="space-y-4 mt-4 text-sm">
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <h4 className="font-semibold mb-2">Month 1:</h4>
//                   <ul className="list-disc pl-4 text-blue-200">
//                     <li>Spotify Campaign Launch</li>
//                     <li>YouTube Campaign Setup</li>
//                     <li>Apple Music Distribution</li>
//                     <li>Instagram Campaign Start</li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold mb-2">Month 2:</h4>
//                   <ul className="list-disc pl-4 text-blue-200">
//                     <li>Spotify Campaign Optimization</li>
//                     <li>YouTube Content Strategy</li>
//                     <li>TikTok Campaign Launch</li>
//                     <li>Instagram Growth Focus</li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <h4 className="font-semibold mb-2">Month 3:</h4>
//                   <ul className="list-disc pl-4 text-blue-200">
//                     <li>Spotify Playlist Pushing</li>
//                     <li>Apple Music Promotion</li>
//                     <li>Shopify Store Setup</li>
//                     <li>Electronic Press Kit</li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold mb-2">Month 4:</h4>
//                   <ul className="list-disc pl-4 text-blue-200">
//                     <li>Spotify Analytics Review</li>
//                     <li>YouTube Monetization</li>
//                     <li>Instagram Ads Scale</li>
//                     <li>Genius Blog Creation</li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <h4 className="font-semibold mb-2">Month 5:</h4>
//                   <ul className="list-disc pl-4 text-blue-200">
//                     <li>YouTube Campaign Boost</li>
//                     <li>Facebook Campaign Launch</li>
//                     <li>Shopify Store Marketing</li>
//                     <li>Website Development</li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold mb-2">Month 6:</h4>
//                   <ul className="list-disc pl-4 text-blue-200">
//                     <li>Wikipedia Placement</li>
//                     <li>Website SEO Optimization</li>
//                     <li>NFT Collection Launch</li>
//                     <li>Store Marketing Scale</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="group bg-black/40 backdrop-blur-xl text-white border border-white/10 hover:border-opacity-50 transition-all duration-300 hover:shadow-2xl hover:shadow-opacity-20 p-8 rounded-lg">
//             <h3 className="text-2xl font-bold mb-4">3-Month Accelerated Program</h3>
//             <div className="relative mb-6">
//               <img
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-31%20at%204.56.59%20PM%20(2)-y0iWHqqTji0vPwSwvoLr3iS1MUwL9b.jpeg"
//                 alt="3 Month Program Timeline"
//                 className="w-full rounded-lg shadow-lg"
//               />
//               <div className="absolute top-4 right-4 bg-yellow-400 text-black font-bold px-4 py-2 rounded-full">
//                 $1599
//               </div>
//             </div>
//             <div className="flex flex-wrap gap-2 mb-4">
//               {/* <Badge variant="green">Spotify</Badge>
//               <Badge variant="blue">YouTube</Badge>
//               <Badge variant="purple">TikTok</Badge>
//               <Badge variant="yellow">Instagram</Badge>
//               <Badge variant="red">Apple Music</Badge> */}
//             </div>
//             <div className="space-y-4 mt-4 text-sm">
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <h4 className="font-semibold mb-2">Month 1:</h4>
//                   <ul className="list-disc pl-4 text-blue-200">
//                     <li>Spotify Campaign Launch</li>
//                     <li>YouTube Channel Setup</li>
//                     <li>Apple Music Distribution</li>
//                     <li>Instagram Strategy Start</li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold mb-2">Month 2:</h4>
//                   <ul className="list-disc pl-4 text-blue-200">
//                     <li>Spotify Playlist Push</li>
//                     <li>YouTube Monetization</li>
//                     <li>TikTok Content Plan</li>
//                     <li>Instagram Growth Scale</li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <h4 className="font-semibold mb-2">Month 3:</h4>
//                   <ul className="list-disc pl-4 text-blue-200">
//                     <li>YouTube Campaign Boost</li>
//                     <li>Genius Blog Feature</li>
//                     <li>Shopify Store Launch</li>
//                     <li>Press Kit Creation</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }




import React from 'react';
import { Badge } from './Badge';
import { Sparkles } from 'lucide-react'
function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-12">


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl -top-48 -left-24 animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -bottom-48 -right-24 animate-pulse delay-700" />
        </div>
       <div className="container mx-auto px-4 py-16 relative z-10">
         <div className="text-center mb-16 space-y-6">
           <div className="flex items-center justify-center gap-2 text-yellow-400 animate-bounce">
             <Sparkles className="w-6 h-6" />
             <span className="text-sm uppercase tracking-wider">Level Up Your Game</span>
             <Sparkles className="w-6 h-6" />
           </div>
           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400">
             Artist Development Programs
           </h1>
           <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Ready to blow up? Our programs are designed to take you from underground to mainstream. No cap, just
             straight fire results! 🔥
           </p>
         </div>
     </div>
          {/* <h2 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Artist Development Programs</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-b from-zinc-900/80 to-black/80 backdrop-blur-xl text-white border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">6-Month Intensive Program</h3>
              <div className="relative mb-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-31%20at%204.57.00%20PM%20(1)-l9PzMFpEIY2pBhOTNZv7AhH27wk805.jpeg"
                  alt="Recording Studio Setup"
                  className="w-full  object-cover rounded-xl shadow-lg"
                />
                {/* <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-4 py-2 rounded-full">
                  $4299
                </div> */}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="green">Spotify</Badge>
                <Badge variant="blue">YouTube</Badge>
                <Badge variant="purple">TikTok</Badge>
                <Badge variant="yellow">Instagram</Badge>
                <Badge variant="red">Apple Music</Badge>
              </div>
              <div className="space-y-4 mt-4 text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-purple-400">Month 1-2:</h4>
                    <ul className="list-disc pl-4 text-zinc-400">
                      <li>Spotify Campaign Launch</li>
                      <li>YouTube Campaign Setup</li>
                      <li>Apple Music Distribution</li>
                      <li>Instagram Campaign Start</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-purple-400">Month 3-4:</h4>
                    <ul className="list-disc pl-4 text-zinc-400">
                      <li>Spotify Analytics Review</li>
                      <li>YouTube Monetization</li>
                      <li>TikTok Campaign Launch</li>
                      <li>Instagram Growth Focus</li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-purple-400">Month 5:</h4>
                    <ul className="list-disc pl-4 text-zinc-400">
                      <li>YouTube Campaign Boost</li>
                      <li>Facebook Campaign Launch</li>
                      <li>Shopify Store Marketing</li>
                      <li>Website Development</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-purple-400">Month 6:</h4>
                    <ul className="list-disc pl-4 text-zinc-400">
                      <li>Wikipedia Placement</li>
                      <li>Website SEO Optimization</li>
                      <li>NFT Collection Launch</li>
                      <li>Store Marketing Scale</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-b from-zinc-900/80 to-black/80 backdrop-blur-xl text-white border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">3-Month Accelerated Program</h3>
              <div className="relative mb-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-31%20at%204.56.59%20PM%20(2)-y0iWHqqTji0vPwSwvoLr3iS1MUwL9b.jpeg"
                  alt="Music Production Setup"
                  className="w-full  object-cover rounded-xl shadow-lg"
                />
                {/* <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-4 py-2 rounded-full">
                  $1599
                </div> */}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="green">Spotify</Badge>
                <Badge variant="blue">YouTube</Badge>
                <Badge variant="purple">TikTok</Badge>
                <Badge variant="yellow">Instagram</Badge>
                <Badge variant="red">Apple Music</Badge>
              </div>
              <div className="space-y-4 mt-4 text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-purple-400">Month 1:</h4>
                    <ul className="list-disc pl-4 text-zinc-400">
                      <li>Spotify Campaign Launch</li>
                      <li>YouTube Channel Setup</li>
                      <li>Apple Music Distribution</li>
                      <li>Instagram Strategy Start</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-purple-400">Month 2-3:</h4>
                    <ul className="list-disc pl-4 text-zinc-400">
                      <li>Spotify Playlist Push</li>
                      <li>YouTube Monetization</li>
                      <li>TikTok Content Plan</li>
                      <li>Instagram Growth Scale</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;