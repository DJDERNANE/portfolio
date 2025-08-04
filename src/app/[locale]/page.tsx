import React from 'react';
import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Icon, Tag, SmartImage } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';
import { baseURL, routes, renderContent } from '@/app/resources';
import { Mailchimp } from '@/components';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations();
  const { home } = renderContent(t);
  return {
    title: home.title,
    description: home.description,
    openGraph: {
      images: `https://${baseURL}/og?title=${encodeURIComponent(home.title)}`
    }
  };
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  const { home, about, person, newsletter } = renderContent(t);

  // Professional services data
  const services = [
    {
      icon: "code",
      title: "Custom Web Development",
      description: "Tailored web applications built with React, Next.js, and Node.js for optimal performance and scalability.",
      highlights: [
        "Full-stack development",
        "API integration",
        "Performance optimization",
        "Responsive design"
      ]
    },
    {
      icon: "cloud",
      title: "DevOps & Cloud Solutions",
      description: "End-to-end cloud infrastructure and CI/CD pipelines for seamless deployments.",
      highlights: [
        "AWS/GCP architecture",
        "Docker & Kubernetes",
        "Infrastructure as Code",
        "Monitoring & logging"
      ]
    }
  ];

  const processSteps = [
    { icon: "search", title: "Consultation", description: "Understand your requirements and business goals" },
    { icon: "penTool", title: "Proposal", description: "Detailed project plan with timeline and budget" },
    { icon: "code", title: "Development", description: "Agile development with regular updates" },
    { icon: "server", title: "Deployment", description: "Seamless launch with ongoing support" }
  ];

  return (
    <Flex direction="column" fillWidth maxWidth="l" gap="xl">
<Flex direction="column" paddingY="xl" gap="l" alignItems="center" textAlign="center">
  <RevealFx translateY="4">
    <Heading variant="display-strong-xl">
      Web Development & DevOps Solutions
    </Heading>
  </RevealFx>
  <RevealFx translateY="8" delay={0.2}>
    <Text variant="display-default-l" onBackground="neutral-weak" maxWidth={40}>
      Scalable apps and cloud infrastructure for growing businesses
    </Text>
  </RevealFx>
  <RevealFx translateY="12" delay={0.4}>
    <Flex gap="m">
      <Button href="#services" variant="primary" size="l">
        View Services
      </Button>
      <Button href={`/${locale}/contact`} variant="secondary" size="l">
        Get Free Quote
      </Button>
    </Flex>
  </RevealFx>
</Flex>

     

      {/* Services Section */}
      <Flex id="services" direction="column" gap="xl" paddingY="xl">
        <Heading variant="display-strong-m" textAlign="center">Professional Services</Heading>
        
        <Flex gap="l" wrap>
          {services.map((service, index) => (
            <Flex 
              key={index}
              direction="column"
              flex={1}
              minWidth="300"
              padding="xl"
              border="neutral-medium"
              borderStyle="solid-1"
              radius="l"
              gap="l"
            >
              <Flex gap="m" alignItems="center">
                <Flex padding="s" radius="s" background="brand-weak">
                  <Icon name={service.icon} size="l" onBackground="brand-strong" />
                </Flex>
                <Heading variant="heading-strong-l">{service.title}</Heading>
              </Flex>
              
              <Text variant="body-default-m">{service.description}</Text>
              
              <Flex direction="column" gap="s">
                <Text variant="body-strong-s">Key Features:</Text>
                <Flex as="ul" direction="column" gap="s">
                  {service.highlights.map((item, i) => (
                    <Flex key={i} gap="s" alignItems="center">
                      <Icon name="check" size="s" onBackground="accent-strong" />
                      <Text as="li" variant="body-default-s">{item}</Text>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
              
              <Button 
                href={`/${locale}/contact?service=${service.title.toLowerCase().replace(/ /g, '-')}`}
                variant="secondary" 
                size="m"
                marginTop="m"
              >
                Inquire About This Service
              </Button>
            </Flex>
          ))}
        </Flex>
      </Flex>

      {/* Work Process */}
      <Flex direction="column" gap="xl" paddingY="xl" background="neutral-weakest" radius="l">
        <Heading variant="display-strong-m" textAlign="center">My Work Process</Heading>
        <Flex gap="l" wrap justifyContent="center">
          {processSteps.map((step, index) => (
            <Flex 
              key={index}
              direction="column"
              alignItems="center"
              textAlign="center"
              gap="m"
              minWidth="200"
              flex={1}
            >
              <Flex width="64" height="64" radius="full" background="brand-strong" justifyContent="center" alignItems="center">
                <Icon name={step.icon} size="l" onBackground="brand-on-strong" />
              </Flex>
              <Heading variant="heading-strong-m">{step.title}</Heading>
              <Text variant="body-default-s">{step.description}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>

      {/* Featured Projects */}
      <Flex direction="column" gap="l" paddingY="xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading variant="display-strong-m">Featured Work</Heading>
          <Button href={`/${locale}/projects`} variant="tertiary" size="m">
            View All Projects
          </Button>
        </Flex>
        <Projects range={[1, 3]} locale={locale} />
      </Flex>
{/* About Section - Improved */}
<Flex direction="column" gap="l" paddingY="xl">
  <Flex gap="xl" wrap alignItems="center">
    {/* Image Container - Now with constrained proportions */}
    <Flex flex={1} minWidth="300" maxWidth="400">
      <SmartImage 
        src={person.avatar} 
        alt={person.name}
        aspectRatio="1/1"  // Makes it square
        radius="l"
        style={{ objectFit: "cover" }}  // Ensures proper cropping
      />
    </Flex>
    
    {/* Content */}
    <Flex direction="column" gap="m" flex={2} minWidth="300">
      <Tag variant="brand">About Me</Tag>
      <Heading variant="display-strong-m">{person.name}</Heading>
      
      <Text variant="body-default-l">
        Full-stack developer and DevOps specialist with {new Date().getFullYear() - 2018}+ years experience. 
        I build scalable web applications and optimize cloud infrastructure for startups and enterprises.
      </Text>
      
      <Flex gap="m" wrap marginTop="m">
        <Button href={`/${locale}/about`} variant="primary" size="m">
          My Full Story
        </Button>
        <Button href={`/${locale}/contact`} variant="secondary" size="m">
          <Flex gap="s" alignItems="center">
            <Icon name="mail" size="s" />
            Contact Me
          </Flex>
        </Button>
      </Flex>
    </Flex>
  </Flex>
</Flex>

     {/* Testimonials Section */}
<Flex direction="column" gap="l" paddingY="xl" background="neutral-weakest" radius="l">
  <Heading variant="display-strong-m" textAlign="center">What Clients Say</Heading>
  
  <Flex gap="l" wrap justifyContent="center">
    {/* Testimonial 1 - Web Development */}
    <Flex 
      direction="column"
      flex={1}
      minWidth="300"
      padding="xl"
      border="neutral-medium"
      borderStyle="solid-1"
      radius="l"
      background="surface"
      gap="m"
    >
      <Flex gap="m" alignItems="center">
        <Avatar 
          src="/clients/client1.jpg" 
          size="m"
        />
        <Flex direction="column">
          <Text variant="heading-strong-s">Alex Turner</Text>
          <Text variant="body-default-xs" onBackground="neutral-weak">
            CTO, FinTech Startup
          </Text>
        </Flex>
      </Flex>
      <Text variant="body-default-m" style={{ fontStyle: 'italic' }}>
        "Djilali rebuilt our legacy React application with Next.js and TypeScript, improving performance by 40%. His clean code and documentation made future updates effortless."
      </Text>
      <Tag variant="brand" width="fit-content">Web Development</Tag>
    </Flex>

    {/* Testimonial 2 - DevOps */}
    <Flex 
      direction="column"
      flex={1}
      minWidth="300"
      padding="xl"
      border="neutral-medium"
      borderStyle="solid-1"
      radius="l"
      background="surface"
      gap="m"
    >
      <Flex gap="m" alignItems="center">
        <Avatar 
          src="/clients/client2.jpg" 
          size="m"
        />
        <Flex direction="column">
          <Text variant="heading-strong-s">Maria Gonzalez</Text>
          <Text variant="body-default-xs" onBackground="neutral-weak">
            Director of Engineering, SaaS Company
          </Text>
        </Flex>
      </Flex>
      <Text variant="body-default-m" style={{ fontStyle: 'italic' }}>
        "Our AWS costs were out of control. Djilali implemented Kubernetes with auto-scaling and monitoring, reducing our cloud bill by 65% while improving reliability."
      </Text>
      <Tag variant="accent" width="fit-content">DevOps</Tag>
    </Flex>

    {/* Testimonial 3 - Full Project */}
    <Flex 
      direction="column"
      flex={1}
      minWidth="300"
      padding="xl"
      border="neutral-medium"
      borderStyle="solid-1"
      radius="l"
      background="surface"
      gap="m"
    >
      <Flex gap="m" alignItems="center">
        <Avatar 
          src="/clients/client3.jpg" 
          size="m"
        />
        <Flex direction="column">
          <Text variant="heading-strong-s">James Wilson</Text>
          <Text variant="body-default-xs" onBackground="neutral-weak">
            Founder, HealthTech Platform
          </Text>
        </Flex>
      </Flex>
      <Text variant="body-default-m" style={{ fontStyle: 'italic' }}>
        "From initial architecture to CI/CD pipeline, Djilali delivered our entire stack in 3 months. The system handles 50K daily users with zero downtime."
      </Text>
      <Flex gap="s">
        <Tag variant="brand" width="fit-content">Full-Stack</Tag>
        <Tag variant="accent" width="fit-content">DevOps</Tag>
      </Flex>
    </Flex>
  </Flex>

  {/* View More Button */}
  <Button 
    href={`/${locale}/testimonials`} 
    variant="tertiary" 
    size="m"
    marginX="auto"
    marginTop="m"
    suffixIcon="arrowRight"
  >
    View All Testimonials
  </Button>
</Flex>
      {/* Final CTA */}
      <Flex 
        direction="column" 
        paddingY="xl" 
        paddingX="l"
        background="brand-weak"
        radius="l"
        alignItems="center"
        textAlign="center"
        gap="m"
      >
        <Heading variant="display-strong-m">Ready to Start Your Project?</Heading>
        <Text variant="body-default-l" maxWidth={48}>
          Contact me today for a free consultation and let's discuss how I can help bring your vision to life.
        </Text>
        <Button 
          href={`/${locale}/contact`} 
          variant="primary" 
          size="l"
          prefixIcon="messageCircle"
          marginTop="m"
        >
          Get in Touch
        </Button>
      </Flex>

      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Flex>
  );
}