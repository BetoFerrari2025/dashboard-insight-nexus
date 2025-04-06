
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { useState } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Dashboard from "@/pages/Dashboard";
import Campaigns from "@/pages/Campaigns";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import Landing from "./pages/Landing";

const App = () => {
  // Move queryClient inside the component to fix the hooks error
  const [queryClient] = useState(() => new QueryClient());

  // Determine if we should use HashRouter instead of BrowserRouter
  // GitHub Pages works better with HashRouter
  const isGitHubPages = window.location.hostname.includes('github.io');
  
  // Choose the appropriate router component
  const Router = isGitHubPages ? HashRouter : BrowserRouter;

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Router>
            <Routes>
              {/* Landing page */}
              <Route path="/landing" element={<Landing />} />
              
              {/* Public routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Protected routes */}
              <Route path="/" element={
                <ProtectedRoute>
                  <Index />
                </ProtectedRoute>
              } />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/campaigns" element={
                <ProtectedRoute>
                  <Campaigns />
                </ProtectedRoute>
              } />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } />
              
              {/* Redirect to login for undefined routes */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
