import servicesData from "@/services/mockData/services.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const servicesService = {
  async getAll() {
    await delay(300);
    return [...servicesData];
  },

  async getById(id) {
    await delay(200);
    const service = servicesData.find(item => item.Id === parseInt(id));
    if (!service) {
      throw new Error("Service not found");
    }
    return { ...service };
  },

  async getFeatured() {
    await delay(250);
    return servicesData.filter(service => service.featured).map(service => ({ ...service }));
  }
};