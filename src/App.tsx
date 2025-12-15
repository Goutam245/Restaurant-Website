import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Locations from "./pages/Locations";
import LocationDetail from "./pages/LocationDetail";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivateDining from "./pages/PrivateDining";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/about" element={<About />} />
          <Route path="/location/:slug" element={<LocationDetail />} />
          <Route path="/location/:slug/menu" element={<Menu />} />
          <Route path="/location/:slug/reservations" element={<Reservations />} />
          <Route path="/location/:slug/events" element={<Events />} />
          <Route path="/location/:slug/contact" element={<Contact />} />
          <Route path="/location/:slug/private-dining" element={<PrivateDining />} />
          <Route path="/location/:slug/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
