/// <reference types="react-scripts" />

// extend express-session data with userId
declare module "express-session" {
  interface SessionData {
    userId: number;
  }
}
