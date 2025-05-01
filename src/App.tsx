
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { useState } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/hooks/useTheme";
import ProtectedRoute from "@/components/ProtectedRoute";
import Dashboard from "@/pages/Dashboard";
import Campaigns from "@/pages/Campaigns";
import Integrations from "@/pages/Integrations";
import Products from "@/pages/Products";
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
        <ThemeProvider>
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
                <Route path="/integrations" element={
                  <ProtectedRoute>
                    <Integrations />
                  </ProtectedRoute>
                } />
                <Route path="/products" element={
                  <ProtectedRoute>
                    <Products />
                  </ProtectedRoute>
                } />
                <Route path="/admin" element={
                  <ProtectedRoute>
                    <Admin />
                  </ProtectedRoute>
                } />
                
                {/* New routes for sidebar menu items */}
                <Route path="/google" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
                <Route path="/utms" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
                <Route path="/rules" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
                <Route path="/taxes" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
                <Route path="/expenses" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
                <Route path="/reports" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
                <Route path="/notifications" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
                <Route path="/subscription" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
                <Route path="/account" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
                <Route path="/advanced" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
                <Route path="/referral" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
                <Route path="/support" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
                <Route path="/app" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
                <Route path="/retrospective" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
                <Route path="/status" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
                
                {/* Redirect to login for undefined routes */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </TooltipProvider>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
