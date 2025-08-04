import { Avatar, Button, Flex, Heading, Icon, SmartImage, Tag, Text } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export async function generateMetadata(
    {params: {locale}}: { params: { locale: string }}
) {
    const t = await getTranslations();
    const {person, services } = renderContent(t);
    const title = services.title;
    const description = services.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/services`,
            images: [
                {
                    url: ogImage,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function Services(
    { params: {locale}}: { params: { locale: string }}
) {
    const t = useTranslations();
    const {person, services } = renderContent(t);

    // Service offerings with examples
    const serviceOfferings = [
        {
            icon: "code",
            title: "Web Application Development",
            description: "Full-stack web applications built with modern frameworks.",
            features: [
                "React/Next.js frontend development",
                "Node.js/Express backend development",
                "API development & integration"
            ],
            technologies: ["React", "Next.js", "Node.js"]
        },
        {
            icon: "smartphone",
            title: "Mobile App Development",
            description: "Cross-platform mobile applications for iOS and Android.",
            features: [
                "React Native development",
                "Native iOS/Android when needed",
                "Offline functionality"
            ],
            technologies: ["React Native", "Swift", "Kotlin"]
            
        },
        {
            icon: "server",
            title: "DevOps & Cloud Solutions",
            description: "Infrastructure as code and cloud deployment.",
            features: [
                "CI/CD pipeline setup",
                "Containerization with Docker",
                "Cloud deployment (AWS/GCP)"
            ],
            technologies: ["Docker", "Kubernetes", "AWS"]
            
        }
    ];

    // Process steps with icons
    const processSteps = [
        {
            step: "1",
            icon: "search",
            title: "Discovery",
            description: "We'll discuss your project requirements and goals.",
            example: "Example: 1-hour consultation call to define project scope"
        },
        {
            step: "2",
            icon: "penTool",
            title: "Planning",
            description: "I'll create a detailed project plan and proposal.",
            example: "Example: Deliver architecture diagrams and timeline"
        },
        {
            step: "3",
            icon: "code",
            title: "Development",
            description: "Regular updates with demo versions for feedback.",
            example: "Example: Weekly sprint demos with progress updates"
        },
        {
            step: "4",
            icon: "checkCircle",
            title: "Delivery",
            description: "Final testing, deployment, and handover.",
            example: "Example: Training session and documentation provided"
        }
    ];

    // Testimonials with real examples
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO",
            company: "TechStart Inc.",
            content: "The web application delivered exceeded our expectations. The attention to detail and performance optimization was impressive.",
            avatar: "/avatars/sarah-johnson.jpg",
            project: "Custom CRM System"
        },
        {
            name: "Michael Chen",
            role: "CTO",
            company: "DataFlow",
            content: "Our mobile app development was completed ahead of schedule with excellent communication throughout the process.",
            avatar: "/avatars/michael-chen.jpg",
            project: "Data Analytics Dashboard"
        },
        {
            name: "Emily Rodriguez",
            role: "Marketing Director",
            company: "GreenLife",
            content: "The e-commerce platform increased our conversion rate by 35% in the first month post-launch.",
            avatar: "/avatars/emily-rodriguez.jpg",
            project: "Organic Products Store"
        }
    ];

    return (
        <Flex fillWidth maxWidth="l" direction="column" gap="xl" padding="xl">
            {/* Hero Section */}
            <Flex direction="column" alignItems="center" gap="m" textAlign="center">
                <Heading variant="display-strong-xl">{services.title || "Professional Services"}</Heading>
                <Text variant="display-default-m" onBackground="neutral-weak" maxWidth={40}>
                    {services.description || "Custom solutions tailored to your business needs"}
                </Text>
                <Button label="View Case Studies" variant="secondary" size="m" marginTop="m" />
            </Flex>

            {/* Services Section */}
            <Flex direction="column" gap="xl">
                <Heading variant="display-strong-m">My Expertise</Heading>
                
                <Flex wrap gap="l">
                    {serviceOfferings.map((service, index) => (
                        <Flex 
                            key={index}
                            direction="column" 
                            flex={1} 
                            minWidth="300"
                            border="neutral-medium" 
                            borderStyle="solid-1" 
                            radius="l"
                            overflow="hidden"
                        >
                            <Flex direction="column" padding="l" gap="m">
                                <Flex gap="m" alignItems="center">
                                    <Icon name={service.icon} size="m" onBackground="brand-strong" />
                                    <Heading variant="heading-strong-l">{service.title}</Heading>
                                </Flex>
                                <Text variant="body-default-m">{service.description}</Text>
                                
                                <Flex direction="column" gap="s" marginTop="m">
                                    <Text variant="heading-strong-s">Key Features:</Text>
                                    <Flex as="ul" direction="column" gap="s">
                                        {service.features.map((feature, i) => (
                                            <Flex key={i} gap="s" alignItems="center">
                                                <Icon name="check" size="s" onBackground="accent-strong" />
                                                <Text as="li" variant="body-default-s">{feature}</Text>
                                            </Flex>
                                        ))}
                                    </Flex>
                                </Flex>
                                
                                <Flex direction="column" gap="s" marginTop="m">
                                    <Text variant="heading-strong-s">Technologies:</Text>
                                    <Flex gap="s" wrap>
                                        {service.technologies.map((tech, i) => (
                                            <Tag key={i} size="s" variant="neutral">{tech}</Tag>
                                        ))}
                                    </Flex>
                                </Flex>
                                
                                <Flex justifyContent="space-between" marginTop="m">
                                    <Flex direction="column">
                                        <Text variant="body-strong-s">Starting at:</Text>
                                        <Text variant="heading-strong-s">{service.startingPrice}</Text>
                                    </Flex>
                                    <Flex direction="column" alignItems="flex-end">
                                        <Text variant="body-strong-s">Timeline:</Text>
                                        <Text variant="heading-strong-s">{service.timeline}</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                            
                          
                            
                            <Button 
                                label="Get Quote" 
                                variant="primary" 
                                size="m" 
                                margin="m" 
                                suffixIcon="arrowRight" 
                            />
                        </Flex>
                    ))}
                </Flex>
            </Flex>

            {/* Process Section */}
            <Flex direction="column" gap="xl" padding="l" background="neutral-weakest" radius="l">
                <Heading variant="display-strong-m" textAlign="center">My Process</Heading>
                <Text variant="body-default-m" textAlign="center" maxWidth={48} marginX="auto">
                    A transparent, step-by-step approach to ensure your project's success
                </Text>
                
                <Flex wrap gap="l" marginTop="m">
                    {processSteps.map((step, index) => (
                        <Flex 
                            key={index}
                            direction="column"
                            flex={1}
                            minWidth="240"
                            gap="m"
                            padding="l"
                            background="surface"
                            border="neutral-medium"
                            borderStyle="solid-1"
                            radius="l"
                        >
                            <Flex 
                                width="48" 
                                height="48" 
                                radius="full" 
                                background="brand-strong" 
                                alignItems="center" 
                                justifyContent="center"
                                marginBottom="s"
                            >
                                <Text variant="heading-strong-m" onBackground="brand-on-strong">
                                    {step.step}
                                </Text>
                            </Flex>
                            <Flex gap="m" alignItems="center">
                                <Icon name={step.icon} size="m" onBackground="brand-strong" />
                                <Heading variant="heading-strong-m">{step.title}</Heading>
                            </Flex>
                            <Text variant="body-default-s">{step.description}</Text>
                            <Flex 
                                padding="s" 
                                background="neutral-weak" 
                                radius="s" 
                                marginTop="auto"
                            >
                                <Text variant="body-default-xs" onBackground="neutral-strong">
                                    {step.example}
                                </Text>
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
            </Flex>

            {/* Testimonials Section */}
            <Flex direction="column" gap="xl">
                <Heading variant="display-strong-m">Client Success Stories</Heading>
                
                <Flex wrap gap="l">
                    {testimonials.map((testimonial, index) => (
                        <Flex 
                            key={index}
                            direction="column"
                            flex={1}
                            minWidth="300"
                            gap="m"
                            padding="l"
                            background="surface"
                            border="neutral-medium"
                            borderStyle="solid-1"
                            radius="l"
                        >
                            <Flex gap="m" alignItems="center">
                                <Avatar src={testimonial.avatar} size="m" />
                                <Flex direction="column">
                                    <Text variant="heading-strong-s">{testimonial.name}</Text>
                                    <Text variant="body-default-xs" onBackground="neutral-weak">
                                        {testimonial.role}, {testimonial.company}
                                    </Text>
                                </Flex>
                            </Flex>
                            
                            <Text variant="body-default-m" style={{ fontStyle: 'italic' }}>
                                "{testimonial.content}"
                            </Text>
                            
                            <Flex 
                                padding="s" 
                                background="neutral-weakest" 
                                radius="s" 
                                marginTop="auto"
                            >
                                <Text variant="body-default-xs">
                                    <Text as="span" variant="body-strong-xs">Project:</Text> {testimonial.project}
                                </Text>
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
            </Flex>

          {/* CTA Section */}
<Flex 
    direction="column" 
    alignItems="center" 
    gap="m" 
    padding="xl" 
    background="brand-weak" 
    radius="l"
    textAlign="center"
>
    <Icon name="messageCircle" size="xl" onBackground="brand-strong" />
    <Heading variant="display-strong-m">Let's Work Together</Heading>
    <Text variant="body-default-m" maxWidth={40}>
        Have a project in mind? Reach out to discuss how I can help bring your vision to life.
    </Text>
    
    <Flex gap="m" marginTop="m" wrap justifyContent="center">
        <Link href="https://calendly.com/derndjilali38" target="_blank" passHref>
            <Button 
                as="a"
                label="Schedule Call" 
                variant="primary" 
                size="m" 
                prefixIcon="calendar"
            />
        </Link>
       <Button
  as="a"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=derndjilali38@gmail.com"
  label="Email Me"
  variant="secondary"
  size="m"
  prefixIcon="mail"

/>
    </Flex>
</Flex>
        </Flex>
    );
}