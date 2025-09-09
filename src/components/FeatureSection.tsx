import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Car, Coffee, Utensils, Bed, TreePine } from "lucide-react";

const features = [
  {
    icon: Bed,
    title: "Luxury Accommodations",
    description: "King-size bed with premium linens and memory foam mattress"
  },
  {
    icon: Utensils,
    title: "Full Kitchen",
    description: "Complete kitchen with modern appliances and cookware"
  },
  {
    icon: Coffee,
    title: "Morning Coffee",
    description: "Premium coffee and tea service with stunning forest views"
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Stay connected with complimentary high-speed internet"
  },
  {
    icon: Car,
    title: "Private Parking",
    description: "Dedicated parking space right next to your glamping unit"
  },
  {
    icon: TreePine,
    title: "Nature Access",
    description: "Direct access to hiking trails and forest activities"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Luxury Meets Nature</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for the perfect glamping experience, thoughtfully designed for your comfort
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-nature-soft">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-nature-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;