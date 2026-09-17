"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function CalComInit() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return null;
}
