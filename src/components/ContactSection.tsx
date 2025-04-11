
import { Phone, Mail, Linkedin, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormReady, setIsFormReady] = useState(false);
  const { toast } = useToast();

  // Initialize EmailJS once the component mounts
  useEffect(() => {
    // You'll need to replace these with your actual EmailJS credentials
    emailjs.init("ISko-53GvzPiwBSvs"); // Replace with your actual user ID
    setIsFormReady(true);
    // console.log("Form ready");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(formData);
    if (!isFormReady) {
      toast({
        title: "Error",
        description: "Email service is not initialized yet. Please try again.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const now = new Date();
      const dateTime = now.toLocaleString();

      // Send the email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        sent_at : dateTime
      };
      
      await emailjs.send(
        "service_xpu99u8", // Replace with your EmailJS service ID
        "template_bko4dj8", // Replace with your EmailJS template ID
        templateParams
      );
      
      // Display success message
      toast({
        title: "Success",
        description: "Your message has been sent successfully. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold text-portfolio-navy-blue mb-6">Get In Touch</h3>
            <p className="text-gray-700 mb-8">
              Feel free to contact me for any work or suggestions. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-portfolio-navy-blue p-3 rounded-full text-white mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <p className="text-gray-600">+91 9168520943</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-navy-blue p-3 rounded-full text-white mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600">dholemahesh199@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-navy-blue p-3 rounded-full text-white mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Location</h4>
                  <p className="text-gray-600">Maharashtra, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-navy-blue p-3 rounded-full text-white mr-4">
                  <Linkedin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/mahesh-dhole-bb5997244" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-portfolio-navy-blue hover:underline"
                  >
                    linkedin.com/in/mahesh-dhole-bb5997244
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-portfolio-navy-blue mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-navy-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-navy-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-navy-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-navy-blue"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting || !isFormReady}
                      className="bg-portfolio-navy-blue text-white px-6 py-3 rounded-md font-medium hover:bg-portfolio-light-blue transition-colors disabled:opacity-70 disabled:cursor-not-allowed w-full"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
