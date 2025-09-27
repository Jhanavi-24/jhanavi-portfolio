import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Input, Textarea, Button, addToast } from "@heroui/react";
import { Icon } from "@iconify/react";
import { SectionTitle } from "./section-title";

export const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      addToast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        icon: <Icon icon="lucide:check-circle" className="text-success" />,
      });
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <section id="contact" className="scroll-mt-20">
      <SectionTitle title="Contact Me" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="overflow-visible">
          <CardBody className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-default-600 mb-6">
                  I'm always open to discussing new projects, opportunities, or collaborations. 
                  Feel free to reach out using the contact form or through any of my social channels.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon icon="lucide:mail" className="text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-default-500">jhanavip@buffalo.edu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon icon="lucide:map-pin" className="text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-default-500">Buffalo, NY, USA</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon icon="lucide:github" className="text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-medium">GitHub</h4>
                      <p className="text-default-500">Jhanavi-24</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    label="Name"
                    placeholder="Your name"
                    value={name}
                    onValueChange={setName}
                    isRequired
                    variant="bordered"
                  />
                  
                  <Input
                    label="Email"
                    placeholder="your.email@example.com"
                    value={email}
                    onValueChange={setEmail}
                    isRequired
                    type="email"
                    variant="bordered"
                  />
                  
                  <Textarea
                    label="Message"
                    placeholder="How can I help you?"
                    value={message}
                    onValueChange={setMessage}
                    isRequired
                    variant="bordered"
                    minRows={4}
                  />
                  
                  <Button
                    type="submit"
                    color="primary"
                    className="w-full"
                    isLoading={isSubmitting}
                    startContent={!isSubmitting && <Icon icon="lucide:send" />}
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </section>
  );
};