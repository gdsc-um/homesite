import { siteConfig } from "@/data/site-config";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: siteConfig.siteUrl || "https://gdsc-website.vercel.app/",
};
