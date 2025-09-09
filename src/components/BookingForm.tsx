import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Users, Star } from "lucide-react";
import { format, differenceInDays, addDays } from "date-fns";
import { cn } from "@/lib/utils";

const BookingForm = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const pricePerNight = 299;
  const cleaningFee = 75;
  const serviceFee = 45;

  const nights = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0;
  const subtotal = nights * pricePerNight;
  const total = subtotal + cleaningFee + serviceFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log({ checkIn, checkOut, guests, name, email, phone });
  };

  return (
    <section id="booking-section" className="py-16 px-4 bg-nature-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Reserve Your Experience</h2>
          <p className="text-xl text-muted-foreground">Book your luxury glamping adventure today</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Booking Form */}
          <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-nature-cream">
            <CardHeader>
              <CardTitle className="text-2xl text-nature-primary">Booking Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Date Selection */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="checkin">Check-in</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkIn && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkIn ? format(checkIn, "MMM dd, yyyy") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={(date) => {
                            setCheckIn(date);
                            if (date && checkOut && date >= checkOut) {
                              setCheckOut(addDays(date, 1));
                            }
                          }}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="checkout">Check-out</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkOut && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? format(checkOut, "MMM dd, yyyy") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          disabled={(date) => !checkIn || date <= checkIn}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <Label htmlFor="guests">Guests</Label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger>
                      <Users className="mr-2 h-4 w-4" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-nature-primary">Contact Information</h3>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-nature-primary hover:bg-nature-primary/90 text-white py-6 text-lg font-semibold"
                  disabled={!checkIn || !checkOut || !name || !email || !phone}
                >
                  Reserve Now - ${total}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Pricing Summary */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-nature-cream">
              <CardHeader>
                <CardTitle className="text-2xl text-nature-primary">Pricing Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {nights > 0 ? (
                  <>
                    <div className="flex justify-between">
                      <span>${pricePerNight} × {nights} night{nights > 1 ? 's' : ''}</span>
                      <span>${subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cleaning fee</span>
                      <span>${cleaningFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service fee</span>
                      <span>${serviceFee}</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>${total}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-muted-foreground text-center py-8">Select dates to see pricing</p>
                )}
              </CardContent>
            </Card>

            {/* Reviews Preview */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-nature-cream">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-nature-accent text-nature-accent" />
                  <span>4.9</span>
                  <span className="text-sm text-muted-foreground">(127 reviews)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-sm italic text-muted-foreground">
                  "An absolutely magical experience! The perfect blend of luxury and nature. We'll definitely be back!"
                </blockquote>
                <cite className="text-xs text-muted-foreground mt-2 block">- Sarah M.</cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;