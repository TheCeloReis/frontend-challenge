import { defineStore } from "pinia";
import { getProduct } from "../api/product";
import { Item, Section } from "../api/types";

export const useProductStore = defineStore("product", {
  state: () => ({
    company: {
      name: "",
      logo: "",
    },
    itemInfo: {} as Exclude<Item, "sections">,
    sections: [] as Section[],
    sectionsValues: {} as Record<
      string,
      string | string[] | Record<string, number>
    >,
    orderQuantity: 0,
    additionalRequests: "",
  }),
  actions: {
    async fetchProductData() {
      const product = await getProduct(19282147);

      this.company = product.company;
      this.sections = product.item.sections;
      this.itemInfo = { ...product.item, sections: [] };

      this.sections.forEach((section) => {
        if (section.type === "RADIO") {
          this.sectionsValues[section.id] = "";
        } else if (section.type === "CHECKBOX") {
          this.sectionsValues[section.id] = [];
        } else if (section.type === "COUNTER") {
          this.sectionsValues[section.id] = section.options.reduce(
            (acc, option) => {
              acc[option.id] = 0;
              return acc;
            },
            {} as Record<string, number>
          );
        }
      });
    },
  },
  getters: {
    showOrderTicket: (state) => state.orderQuantity > 0,
  },
});
