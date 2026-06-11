import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.services.list.path, async (req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  app.get(api.equipment.list.path, async (req, res) => {
    const equipment = await storage.getEquipment();
    res.json(equipment);
  });

  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const message = await storage.createContactMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors[0].message });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingServices = await storage.getServices();
  if (existingServices.length === 0) {
    await storage.createService({
      title: "Self-Service Laundry",
      description: "State-of-the-art coin operated machines for all your laundry needs. Open 24/7/365.",
      icon: "WashingMachine"
    });
    await storage.createService({
      title: "Wash & Fold",
      description: "Too busy? Drop off your laundry and let our friendly staff handle it for you.",
      icon: "Shirt"
    });
    await storage.createService({
      title: "Commercial Cleaning",
      description: "Reliable service for Vacation Rentals, BNBs, and local businesses.",
      icon: "Building2"
    });
  }

  const existingEquipment = await storage.getEquipment();
  if (existingEquipment.length === 0) {
    await storage.createEquipment({
      name: "Washers",
      count: 30,
      description: "High-capacity washers accommodating everything from small quick loads to king-sized comforters."
    });
    await storage.createEquipment({
      name: "Dryers",
      count: 28,
      description: "Efficient, large-capacity dryers to get your clothes ready quickly."
    });
  }
}
