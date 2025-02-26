import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  name: text("name").notNull(),
  company: text("company").notNull(),
  title: text("title"),
  phone: text("phone"),
  source: text("source").notNull(),
  enrichedData: jsonb("enriched_data"),
  engagementScore: integer("engagement_score"),
  leadScore: integer("lead_score"),
  currentAgent: text("current_agent"),
  status: text("status").notNull(),
  isQualified: boolean("is_qualified").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertLeadSchema = createInsertSchema(leads).pick({
  email: true,
  name: true,
  company: true,
  title: true,
  phone: true,
  source: true,
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;

export const agentLogs = pgTable("agent_logs", {
  id: serial("id").primaryKey(),
  leadId: integer("lead_id").notNull(),
  agentName: text("agent_name").notNull(),
  action: text("action").notNull(),
  details: jsonb("details"),
  timestamp: timestamp("timestamp").defaultNow(),
});

export const insertLogSchema = createInsertSchema(agentLogs).pick({
  leadId: true,
  agentName: true,
  action: true,
  details: true,
});

export type InsertLog = z.infer<typeof insertLogSchema>;
export type AgentLog = typeof agentLogs.$inferSelect;
