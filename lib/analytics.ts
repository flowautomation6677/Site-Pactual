export const pushToDataLayer = (event: string, payload: Record<string, any> = {}) => {
  if (typeof window !== "undefined") {
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore
    window.dataLayer.push({
      event,
      ...payload,
    });
  }
};
