import { Link } from "react-router";

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../components/ui/carousel";

import { BarChart, Compass, Download, FileText, Moon, User } from "lucide-react";

const Landing = () => {

    const features = [
        { id: 1, title: "Signup & Login", desc: "Secure authentication to access your account anytime.", icon: User },
        { id: 3, title: "Expense Management", desc: "Add, edit, and delete expenses with ease.", icon: FileText },
        { id: 4, title: "Set Budget", desc: "Define your monthly budget and track spending progress.", icon: BarChart },
        { id: 6, title: "Dark Mode", desc: "Switch to a sleek dark theme anytime.", icon: Moon },
        { id: 7, title: "Export Data", desc: "Download your transactions as CSV or PDF files.", icon: Download },
        { id: 8, title: "AI Summary", desc: "Let AI give you smart insights about your finances.", icon: Compass }
    ];

    const testimonials = [
        {
          name: "John Doe",
          feedback: "This app helped me take control of my finances like never before. The expense tracking is seamless, and I love the AI insights.",
          company: "Product Manager at TechCorp",
          image: "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww"
        },
        {
          name: "Jane Smith",
          feedback: "I finally have a clear view of my monthly spending. The dark mode is a nice touch, and the budgeting tool is a lifesaver.",
          company: "Software Engineer at CodeWorks",
          image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww"
        },
        {
          name: "Samantha Lee",
          feedback: "The ability to export my data and analyze it with graphs is fantastic. This tool has truly made budgeting easy and intuitive.",
          company: "Financial Advisor at WealthBridge",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww"
        },
        {
          name: "Michael Tan",
          feedback: "Love the user interface and how intuitive everything feels. I recommend this app to anyone trying to save money smarter.",
          company: "UX Designer at PixelPerfect",
          image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
          name: "Priya Sharma",
          feedback: "It’s like having a financial advisor in your pocket. The AI suggestions are freakishly accurate and genuinely helpful.",
          company: "Entrepreneur",
          image: "https://images.unsplash.com/photo-1688888745596-da40843a8d45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
        },
        {
          name: "Carlos Rivera",
          feedback: "Exporting expenses for tax season has never been easier. This app is a game-changer for freelancers.",
          company: "Freelance Developer",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
          name: "Aisha Khalid",
          feedback: "Saves me time and mental energy every month. I love the budgeting breakdown and daily expense summaries.",
          company: "Marketing Strategist",
          image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww"
        },
        {
          name: "David Kim",
          feedback: "I used to hate tracking expenses — now I look forward to checking my progress. It’s genuinely motivating.",
          company: "Engineer at CloudSync",
          image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        }
    ];

    return (
        <main className="">
            <section className="
                px-6 py-4 md:px-16 min-h-[calc(100vh-4.25rem)] text-center bg-muted
                flex flex-col justify-center items-center
                "
            >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Track Every Rupee With Ease</h1>
                <p className="text-lg md:text-xl mt-3 text-muted-foreground max-w-xl">
                Your all-in-one expense tracker to manage budgets, visualize spending, and get AI-powered insights.
                </p>
                <Button asChild className="mt-8 md:text-lg md:p-5 w-fit text-center">
                    <Link to="/signup">Get Started for Free</Link>
                </Button>
            </section>
            <section 
                className="px-6 py-12 md:px-16 min-h-[calc(100vh-4.25rem)]"
            >
                <h2 className="text-3xl font-semibold text-center mb-8">Features</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {features.map((item) => (
                        <Card key={item.id} className="w-full sm:w-[48%] lg:w-[30%]">
                            <CardContent className="p-6 flex flex-col items-start">
                                <item.icon className="w-6 h-6 mb-3 text-primary" />
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>         
            <section className="w-full min-h-screen px-6 py-12 md:px-16 flex flex-col items-center justify-center">
                <h2 className="text-3xl font-semibold text-center mb-8">What Our Users Say</h2>
                <div className="w-full max-w-6xl mx-auto space-y-8">
                    <Carousel className="w-full px-2">
                        <CarouselContent>
                            {testimonials
                                .map((testimonial, index) => (
                                <CarouselItem key={index} className="w-full sm:basis-1/2 lg:basis-1/3 px-2">
                                    <Card className="p-6 flex flex-col md:flex-row items-center gap-4 h-full text-center md:text-left">
                                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-full">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center md:items-start">
                                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                        <p className="text-sm text-muted-foreground mb-2">{testimonial.company}</p>
                                        <p className="text-sm">{testimonial.feedback}</p>
                                    </div>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full z-10" />
                        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full z-10" />
                    </Carousel>
                    <Carousel className="w-full px-2">
                        <CarouselContent>
                            {testimonials.reverse()
                                .map((testimonial, index) => (
                                <CarouselItem key={index} className="w-full sm:basis-1/2 lg:basis-1/3 px-2">
                                    <Card className="p-6 flex flex-col md:flex-row items-center gap-4 h-full text-center md:text-left">
                                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-full">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center md:items-start">
                                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                        <p className="text-sm text-muted-foreground mb-2">{testimonial.company}</p>
                                        <p className="text-sm">{testimonial.feedback}</p>
                                    </div>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full z-10" />
                        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full z-10" />
                    </Carousel>
                </div>
            </section>
        </main>
    )
}

export default Landing;