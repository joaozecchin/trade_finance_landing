"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, Layers } from "lucide-react";
import { Button, Badge } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { pipelineMetrics } from "@/data/deals";
import { formatCurrency } from "@/lib/utils";
import dynamic from "next/dynamic";

// Dynamically import the globe to avoid SSR issues
const TradeRoutesGlobe = dynamic(
  () => import("@/components/maps/TradeRoutesGlobe"),
  { ssr: false, loading: () => <GlobePlaceholder /> }
);

function GlobePlaceholder() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-900/30 to-purple-900/30 animate-pulse" />
    </div>
  );
}

export default function Hero() {
  const t = useTranslations("hero");

  const stats = [
    {
      label: t("stats.pipeline"),
      value: formatCurrency(pipelineMetrics.totalValue),
      icon: TrendingUp,
    },
    {
      label: t("stats.activeDeals"),
      value: pipelineMetrics.activeDeals.toString(),
      icon: Layers,
    },
    {
      label: t("stats.avgDuration"),
      value: `${pipelineMetrics.avgDuration} ${t("stats.days")}`,
      icon: Clock,
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6">{t("badge")}</Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            >
              {t("title")}{" "}
              <span className="gradient-text">{t("titleHighlight")}</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-slate-400 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <a href="#pipeline">
                <Button size="lg">
                  {t("cta.primary")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="#how-it-works">
                <Button variant="secondary" size="lg">
                  {t("cta.secondary")}
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-4 lg:gap-8"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center lg:text-left p-3 sm:p-4 rounded-xl bg-slate-900/50 border border-slate-800"
                >
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mx-auto lg:mx-0 mb-1 sm:mb-2" />
                  <div className="text-base sm:text-xl lg:text-2xl font-bold text-white financial-number truncate">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-slate-400 truncate">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Globe - hidden on small mobile, shown from sm breakpoint */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] hidden xs:block"
          >
            <TradeRoutesGlobe />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-slate-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
