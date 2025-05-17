import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Simple health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Qzin API is running' });
  });

  // Basic contact form endpoint (if needed in the future)
  app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email and message are required' });
    }
    
    // In a real app, you would save this to a database or send an email
    // For now, just return success
    res.status(200).json({ message: 'Message received successfully' });
  });

  const httpServer = createServer(app);

  return httpServer;
}
