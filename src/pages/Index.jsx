import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-blue-50">
        <h1 className="text-4xl font-bold text-blue-900">RevOps Services</h1>
        <p className="mt-4 text-lg text-blue-700">Optimize your revenue operations with our expertise</p>
        <Button className="mt-8 bg-blue-600 text-white">Get Started Now</Button>
      </section>

      {/* Summary Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-900">Our Expertise</h2>
          <p className="mt-4 text-lg text-blue-700">
            We specialize in improving marketing and sales effectiveness, technology integration, and data analytics.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-900">Features</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Lead Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Streamline your lead management process to boost efficiency and conversion rates.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Operational Process Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Enhance your operational processes to achieve better performance and results.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Revenue Enhancement</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Implement strategies to increase your revenue and drive business growth.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-900">Benefits</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent>
                <p>Increase revenue through optimized operations and effective strategies.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p>Optimize your operations for better efficiency and performance.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p>Achieve better marketing results with data-driven insights and technology integration.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-900">What Our Clients Say</h2>
          <div className="mt-8 space-y-8">
            <Card>
              <CardContent>
                <p>"RevOps services have transformed our business operations and increased our revenue significantly."</p>
                <p className="mt-4 text-right">- Satisfied Client</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p>"Their expertise in technology integration and data analytics is unparalleled."</p>
                <p className="mt-4 text-right">- Happy Customer</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-900">Ready to Transform Your Business?</h2>
          <Button className="mt-8 bg-blue-600 text-white">Sign Up for a Consultation</Button>
        </div>
      </section>

      {/* Cooperation Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-900">Partner with Us</h2>
          <p className="mt-4 text-lg text-blue-700">Schedule a meeting with us to explore partnership opportunities.</p>
          <div className="mt-8">
            <iframe
              src="https://calendly.com/your-calendly-link"
              width="100%"
              height="600"
              frameBorder="0"
              className="mx-auto"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-900">Contact Us</h2>
          <div className="mt-8 space-y-8">
            <div>
              <p className="text-lg text-blue-700">Address: 123 RevOps Street, Business City, BC 12345</p>
              <p className="text-lg text-blue-700">Phone: (123) 456-7890</p>
              <p className="text-lg text-blue-700">Email: contact@revops.com</p>
            </div>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button className="bg-blue-600 text-white">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;