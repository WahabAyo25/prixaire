"use client";
import { motion } from "framer-motion";
import { Pickaxe, Building2, Landmark, Leaf } from "lucide-react";

const services = [
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "Government Agencies",
    desc: "Resource audits, policy advisory, and compliance frameworks for national growth."
  },
  {
    icon: <Pickaxe className="w-8 h-8" />,
    title: "Mining Companies",
    desc: "Feasibility studies, financing strategies, and technical solutions for extraction."
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Private Asset Holders",
    desc: "Independent valuations and investor-ready development packages."
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "ESG Strategy",
    desc: "Sustainable impact assessments ensuring exploration benefits local communities."
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-geo-light">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-geo-dark mb-4">From Raw Prospects to <br />Bankable Projects</h2>
          <p className="text-gray-600">
            We bridge the gap between discovery and development with comprehensive data intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="bg-geo-green/10 w-16 h-16 rounded-xl flex items-center justify-center text-geo-green mb-6 group-hover:bg-geo-green group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-geo-dark mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}