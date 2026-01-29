"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Shield, Users } from "lucide-react";
import { Card, Badge, Button, SectionHeader } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { deals, pipelineMetrics } from "@/data/deals";
import { formatCurrency } from "@/lib/utils";

export default function Pipeline() {
  const t = useTranslations("pipeline");

  const metrics = [
    {
      label: t("metrics.total"),
      value: formatCurrency(pipelineMetrics.totalValue),
    },
    {
      label: t("metrics.active"),
      value: pipelineMetrics.activeDeals.toString(),
    },
    {
      label: t("metrics.avgDuration"),
      value: `${pipelineMetrics.avgDuration} ${t("deal.days")}`,
    },
    {
      label: t("metrics.commodities"),
      value: pipelineMetrics.commodities.length.toString(),
    },
  ];

  return (
    <section id="pipeline" className="relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        {/* Metrics */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          {metrics.map((metric, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="text-center p-3 sm:p-4 md:p-6" hover={false}>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white financial-number mb-1 truncate">
                  {metric.value}
                </div>
                <div className="text-slate-400 text-xs sm:text-sm truncate">{metric.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Deal Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {deals.map((deal) => (
            <motion.div key={deal.id} variants={fadeInUp}>
              <Card className="overflow-hidden">
                <div className="p-4 sm:p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-2xl sm:text-3xl md:text-4xl">{deal.commodityIcon}</span>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                          {deal.commodity} Trade Facility
                        </h3>
                        <p className="text-slate-400 text-xs sm:text-sm">
                          {deal.counterparty.country}-based{" "}
                          {deal.counterparty.type}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant={deal.status === "active" ? "success" : "default"}
                    >
                      {t(`status.${deal.status}`)}
                    </Badge>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
                    <div className="min-w-0">
                      <div className="text-slate-400 text-xs sm:text-sm mb-1">
                        {t("deal.amount")}
                      </div>
                      <div className="text-sm sm:text-base md:text-xl font-bold text-white financial-number truncate">
                        {formatCurrency(deal.amount)}
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="text-slate-400 text-xs sm:text-sm mb-1">
                        {t("deal.duration")}
                      </div>
                      <div className="text-sm sm:text-base md:text-xl font-bold text-white flex items-center gap-1 sm:gap-2">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500 flex-shrink-0" />
                        <span className="truncate">{deal.duration} {t("deal.days")}</span>
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="text-slate-400 text-xs sm:text-sm mb-1">
                        {t("deal.security")}
                      </div>
                      <div className="text-sm sm:text-base md:text-xl font-bold text-white flex items-center gap-1 sm:gap-2">
                        <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
                        <span className="truncate">{deal.security}</span>
                      </div>
                    </div>
                    {deal.deliveries && (
                      <div className="min-w-0">
                        <div className="text-slate-400 text-xs sm:text-sm mb-1">
                          {t("deal.deliveries")}
                        </div>
                        <div className="text-sm sm:text-base md:text-xl font-bold text-white flex items-center gap-1 sm:gap-2">
                          <Users className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500 flex-shrink-0" />
                          <span className="truncate">{deal.deliveries >= 1000 ? "1000s" : deal.deliveries}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Route */}
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-300">{deal.origin.country}</span>
                    <ArrowRight className="w-4 h-4 text-slate-600" />
                    <span className="text-slate-300">
                      {deal.destinations.map((d) => d.country).join(", ")}
                    </span>
                  </div>

                  {/* Order Range */}
                  {(deal.minOrder || deal.maxOrder) && (
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-800">
                      <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-slate-400">
                        {deal.minOrder && (
                          <span>
                            Min: {formatCurrency(deal.minOrder)}
                          </span>
                        )}
                        {deal.maxOrder && (
                          <span>
                            Max: {formatCurrency(deal.maxOrder)}
                          </span>
                        )}
                        {deal.counterparty.established && (
                          <span className="text-emerald-400">
                            Est: {deal.counterparty.established}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="https://brx.finance" target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              View All Opportunities
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
