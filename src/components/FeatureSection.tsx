import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Car, Coffee, Waves, Bed, TreePine } from "lucide-react";

const features = [
  {
    icon: Waves,
    title: "Private Hot Tub",
    description: "Relax in your own hot tub while enjoying stunning lake views"
  },
  {
    icon: Bed,
    title: "Luxury Lodge",
    description: "Spacious Dolmen Lodge with premium furnishings and comfort"
  },
  {
    icon: TreePine,
    title: "Lakeside Location",
    description: "Exclusive access to pristine lake and Irish countryside"
  },
  {
    icon: Coffee,
    title: "Full Kitchen",
    description: "Complete kitchen facilities for your convenience"
  },
  {
    icon: Wifi,
    title: "WiFi & Amenities",
    description: "Modern conveniences in a natural setting"
  },
  {
    icon: Car,
    title: "Private Parking",
    description: "Secure parking included with your stay"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Dolmen Lodge Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every detail crafted for your perfect lakeside retreat at The Secret Lake
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