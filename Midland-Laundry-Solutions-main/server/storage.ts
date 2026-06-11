import { db } from "./db";
import {
  services,
  equipment,
  contactMessages,
  type InsertContactMessage,
  type ContactMessage,
  type Service,
  type Equipment,
  type InsertService,
  type InsertEquipment
} from "@shared/schema";

export interface IStorage {
  getServices(): Promise<Service[]>;
  getEquipment(): Promise<Equipment[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  // Seed helpers
  createService(service: InsertService): Promise<Service>;
  createEquipment(item: InsertEquipment): Promise<Equipment>;
}

export class DatabaseStorage implements IStorage {
  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async getEquipment(): Promise<Equipment[]> {
    return await db.select().from(equipment);
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }

  async createService(service: InsertService): Promise<Service> {
    const [newService] = await db.insert(services).values(service).returning();
    return newService;
  }

  async createEquipment(item: InsertEquipment): Promise<Equipment> {
    const [newItem] = await db.insert(equipment).values(item).returning();
    return newItem;
  }
}

export const storage = new DatabaseStorage();
