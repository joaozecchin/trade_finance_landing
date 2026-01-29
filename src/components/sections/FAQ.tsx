"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { Card, SectionHeader } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { faqItems, faqCategories } from "@/data/faq";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const t = useTranslations("faq");
  const [activeCategory, setActiveCategory] = useState<string>("product");

  const filteredItems = faqItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="faq" className="relative bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        {/* Category Tabs */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                )}
              >
                {t(`categories.${category.id}`)}
              </button>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="p-6 md:p-8">
              <Accordion>
                {filteredItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    title={item.question}
                    defaultOpen={index === 0}
                  >
                    {item.answer}
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
