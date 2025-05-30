"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="min-h-scree text-white flex items-center justify-center">
      <motion.div 
      className="flex flex-col items-center space-y-4"
       initial={{ opacity: 0}}
       animate={{ opacity: 1}}
       transition={{ duration: 0.5 }}
      >

      <motion.div 
      className="w-14 h-14 border-2 "
       animate={{ rotate: 360}}
       transition={{repeat: Infinity, duration: 1, ease: "linear"}}
      />
       <motion.div 
      className="text-lg"
       initial={{ opacity: 0}}
       animate={{ opacity: 1}}
       transition={{ delay: 0.5 }}
      >
        Loading...

      </motion.div>
      </motion.div>
    </div>
  )
}
