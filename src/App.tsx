import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import LgpdPage from "./pages/LgpdPage.tsx";
import CookiesPage from "./pages/CookiesPage.tsx";
import PoliticaPage from "./pages/PoliticaPage.tsx";
import FaqPage from "./pages/FaqPage.tsx";
import Navbar from "./components/Navbar.tsx";
import CookieBanner from "./components/CookieBanner.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lgpd" element={<LgpdPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/politica-privacidade" element={<PoliticaPage />} />
          <Route path="/faq" element={<FaqPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
