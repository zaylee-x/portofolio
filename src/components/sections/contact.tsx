"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Send } from "lucide-react"

export function Contact() {
  return (
    <section
      id="contact"
      className="relative w-[90%] max-w-6xl mx-auto py-28 font-nunito text-[#EAF2FF]"
    >
      <div className="space-y-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-[42px] md:text-[56px] font-extrabold">
            Let’s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A5AE0] to-[#BB86FC]">
              Connect
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#EAF2FF]/70 max-w-2xl mx-auto">
            Open for collaboration, project opportunities, or full-time roles.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-14">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "sylvazilyasri@gmail.com",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Medan, Indonesia",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="bg-[#151515] border border-white/10 hover:border-[#BB86FC]/40 transition-colors">
                  <CardContent className="p-5 flex items-center gap-5">
                    <div className="w-11 h-11 rounded-full bg-[#BB86FC]/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-[#C9BCFF]" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-[#EAF2FF]/60">
                        {item.label}
                      </p>
                      <p className="text-base font-medium text-[#EAF2FF]">
                        {item.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#151515] border border-white/10">
              <CardContent className="p-8 space-y-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm text-[#EAF2FF]/70">
                        Your Name
                      </label>
                      <Input
                        placeholder="Sylva Zilyasri"
                        className="h-12 bg-[#101010] border-white/10"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-[#EAF2FF]/70">
                        Your Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="h-12 bg-[#101010] border-white/10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-[#EAF2FF]/70">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      className="min-h-[150px] resize-none bg-[#101010] border-white/10"
                    />
                  </div>

                  <Button
                    size="lg"
                    className="w-full h-12 bg-gradient-to-r from-[#6A5AE0] to-[#8E7CFF] text-white text-base font-semibold hover:opacity-90"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
