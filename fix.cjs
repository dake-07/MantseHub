const fs = require('fs');
let c = fs.readFileSync('src/components/Hero.tsx', 'utf8');

c = c.replace(/className="relative w-full max-w-\[300px\] sm:max-w-md lg:max-w-lg xl:max-w-xl aspect-square z-10 origin-center transition-transform duration-700 overflow-visible group"/g, 'className="relative w-full max-w-[280px] sm:max-w-md lg:max-w-lg xl:max-w-xl lg:scale-110 xl:scale-125 aspect-square sm:aspect-[4/3] z-10 origin-center transition-transform duration-700 overflow-visible group"');

c = c.replace(/className="absolute w-\[82%\] top-\[5%\] left-0 z-0"/g, 'className="absolute w-[80%] sm:w-[85%] lg:w-[88%] top-[2%] sm:top-[5%] left-0 z-0"');
c = c.replace(/initial={{ opacity: 0, x: -30, rotate: -3 }}/g, 'initial={{ opacity: 0, y: 40 }}');
c = c.replace(/animate={{ opacity: 1, x: 0, rotate: 0 }}/g, 'animate={{ opacity: 1, y: 0 }}');
c = c.replace(/transition={{ duration: 1.2, ease: \[0.32, 0.72, 0, 1\] }}/g, 'transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1], delay: 0 }}');

c = c.replace(/className="w-full h-auto drop-shadow-\[0_35px_35px_rgba\(0,0,0,0.2\)\] object-contain"/g, 'className="w-full h-auto drop-shadow-2xl object-contain relative group-hover:-translate-y-2 group-hover:rotate-1 transition-transform duration-700 ease-out"');
c = c.replace(/animate={{\s*y: \[0, -15, 0\],\s*rotate: \[0, 0.5, 0\]\s*}}/g, 'animate={{ y: [0, -10, 0] }}');
c = c.replace(/transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}/g, 'transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: 0 }}');
c = c.replace(/\s*whileHover={{ scale: 1.02 }}/g, '');

c = c.replace(/className="absolute w-\[48%\] bottom-\[12%\] right-\[-2%\] z-10"/g, 'className="absolute w-[45%] sm:w-[50%] lg:w-[55%] bottom-[12%] sm:bottom-[5%] right-0 sm:-right-[5%] z-10"');
c = c.replace(/initial={{ opacity: 0, x: 30, rotate: 5 }}/g, 'initial={{ opacity: 0, y: 40 }}');
c = c.replace(/transition={{ duration: 1.2, ease: \[0.32, 0.72, 0, 1\], delay: 0.2 }}/g, 'transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1], delay: 0.15 }}');

c = c.replace(/className="w-full h-auto drop-shadow-\[0_35px_35px_rgba\(0,0,0,0.25\)\] object-contain"/g, 'className="w-full h-auto drop-shadow-2xl object-contain relative group-hover:translate-x-2 group-hover:-rotate-2 transition-transform duration-700 ease-out"');
c = c.replace(/animate={{\s*y: \[0, -22, 0\],\s*rotate: \[0, -1.5, 0\]\s*}}/g, 'animate={{ y: [0, -15, 0] }}');
c = c.replace(/transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 0.3 }}/g, 'transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 0.2 }}');
c = c.replace(/\s*whileHover={{ scale: 1.05, x: 5 }}/g, '');

fs.writeFileSync('src/components/Hero.tsx', c);
