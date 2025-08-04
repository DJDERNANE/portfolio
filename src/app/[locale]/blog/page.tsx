import { Avatar, Button, Flex, Heading, Icon, IconButton, SmartImage, Tag, Text } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
    {params: {locale}}: { params: { locale: string }}
) {
    const t = await getTranslations();
    const {person, blog } = renderContent(t);
	const title = blog.title;
	const description = blog.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}/blog`,
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

export default function Blog(
    { params: {locale}}: { params: { locale: string }}
) {
    unstable_setRequestLocale(locale);
    const t = useTranslations();
    const {person, blog } = renderContent(t);

    // Sample blog posts - replace with your actual data source
    const blogPosts = [
        {
            id: 1,
            title: "Building Scalable Microservices with Docker and Kubernetes",
            excerpt: "Learn how to containerize your applications and orchestrate them at scale using modern DevOps practices.",
            publishedAt: "2024-03-15",
            readTime: "8 min read",
            category: "DevOps",
            tags: ["Docker", "Kubernetes", "Microservices", "CI/CD"],
            image: {
                src: "/images/blog/docker-kubernetes.jpg",
                alt: "Docker and Kubernetes containers",
                width: 400,
                height: 200
            },
            featured: true
        },
        {
            id: 2,
            title: "Modern React Patterns for Enterprise Applications",
            excerpt: "Discover advanced React patterns and best practices for building maintainable large-scale applications.",
            publishedAt: "2024-03-10",
            readTime: "12 min read",
            category: "Frontend",
            tags: ["React", "TypeScript", "Architecture", "Performance"],
            image: {
                src: "/images/blog/react-patterns.jpg",
                alt: "React application architecture",
                width: 400,
                height: 200
            },
            featured: false
        },
        {
            id: 3,
            title: "CI/CD Pipeline Optimization with Jenkins",
            excerpt: "Streamline your deployment process and reduce build times with advanced Jenkins configurations.",
            publishedAt: "2024-03-05",
            readTime: "10 min read",
            category: "DevOps",
            tags: ["Jenkins", "CI/CD", "Automation", "Deployment"],
            image: {
                src: "/images/blog/jenkins-pipeline.jpg",
                alt: "Jenkins CI/CD pipeline",
                width: 400,
                height: 200
            },
            featured: false
        },
        {
            id: 4,
            title: "Mobile-First Development with React Native",
            excerpt: "Best practices for building cross-platform mobile applications that feel native on both iOS and Android.",
            publishedAt: "2024-02-28",
            readTime: "15 min read",
            category: "Mobile",
            tags: ["React Native", "Mobile", "Cross-platform", "Performance"],
            image: {
                src: "/images/blog/react-native.jpg",
                alt: "React Native mobile development",
                width: 400,
                height: 200
            },
            featured: false
        },
        {
            id: 5,
            title: "Infrastructure as Code with Terraform and AWS",
            excerpt: "Automate your cloud infrastructure deployment and management using Terraform best practices.",
            publishedAt: "2024-02-20",
            readTime: "14 min read",
            category: "Cloud",
            tags: ["Terraform", "AWS", "Infrastructure", "Automation"],
            image: {
                src: "/images/blog/terraform-aws.jpg",
                alt: "Terraform and AWS infrastructure",
                width: 400,
                height: 200
            },
            featured: false
        },
        {
            id: 6,
            title: "Monitoring and Observability in Production",
            excerpt: "Implement comprehensive monitoring solutions to ensure your applications run smoothly in production.",
            publishedAt: "2024-02-15",
            readTime: "11 min read",
            category: "DevOps",
            tags: ["Monitoring", "Observability", "Production", "Metrics"],
            image: {
                src: "/images/blog/monitoring.jpg",
                alt: "Application monitoring dashboard",
                width: 400,
                height: 200
            },
            featured: false
        }
    ];

    const categories = ["All", "DevOps", "Frontend", "Mobile", "Cloud"];
    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

    return (
        <Flex
            fillWidth maxWidth="l"
            direction="column">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Blog',
                        name: `${person.name} - Blog`,
                        description: blog.description,
                        url: `https://${baseURL}/blog`,
                        author: {
                            '@type': 'Person',
                            name: person.name,
                        },
                        blogPost: blogPosts.map(post => ({
                            '@type': 'BlogPosting',
                            headline: post.title,
                            description: post.excerpt,
                            datePublished: post.publishedAt,
                            author: {
                                '@type': 'Person',
                                name: person.name,
                            },
                            url: `https://${baseURL}/blog/${post.id}`,
                        })),
                    }),
                }}
            />

            {/* Header Section */}
            <Flex
                fillWidth
                direction="column"
                alignItems="center"
                marginBottom="xl">
                <Heading
                    variant="display-strong-xl"
                    textAlign="center"
                    marginBottom="m">
                    {blog.title || "Blog"}
                </Heading>
                <Text
                    variant="display-default-s"
                    onBackground="neutral-weak"
                    textAlign="center"
                    maxWidth={32}>
                    {blog.description || "Insights on web development, DevOps, and modern software engineering practices"}
                </Text>
            </Flex>

            {/* Category Filter */}
            <Flex
                fillWidth
                justifyContent="center"
                marginBottom="xl">
                <Flex
                    gap="8"
                    wrap>
                    {categories.map((category, index) => (
                        <Button
                            key={index}
                            label={category}
                            size="s"
                            variant={index === 0 ? "primary" : "secondary"}/>
                    ))}
                </Flex>
            </Flex>

            {/* Featured Post */}
            {featuredPost && (
                <Flex
                    fillWidth
                    marginBottom="xl">
                    <Flex
                        // className={styles.featuredPost}
                        fillWidth
                        border="neutral-medium"
                        borderStyle="solid-1"
                        radius="l"
                        padding="l"
                        direction="column"
                        background="surface">
                        <Flex
                            fillWidth
                            gap="4"
                            alignItems="center"
                            marginBottom="s">
                            <Icon
                                name="star"
                                size="s"
                                onBackground="accent-strong"/>
                            <Text
                                variant="label-default-s"
                                onBackground="accent-strong">
                                Featured Post
                            </Text>
                        </Flex>
                        <Flex
                            fillWidth
                            mobileDirection="column"
                            gap="l">
                            <Flex
                                flex={3}
                                direction="column"
                                gap="m">
                                <Flex
                                    gap="8"
                                    alignItems="center"
                                    marginBottom="s">
                                    <Tag size="s">{featuredPost.category}</Tag>
                                    <Text
                                        variant="body-default-xs"
                                        onBackground="neutral-weak">
                                        {featuredPost.publishedAt} • {featuredPost.readTime}
                                    </Text>
                                </Flex>
                                <Heading
                                    variant="display-strong-m"
                                    marginBottom="s">
                                    {featuredPost.title}
                                </Heading>
                                <Text
                                    variant="body-default-l"
                                    onBackground="neutral-weak"
                                    marginBottom="m">
                                    {featuredPost.excerpt}
                                </Text>
                                <Flex
                                    gap="8"
                                    wrap>
                                    {featuredPost.tags.map((tag, index) => (
                                        <Tag
                                            key={index}
                                            size="s"
                                            variant="neutral">
                                            {tag}
                                        </Tag>
                                    ))}
                                </Flex>
                                <Flex
                                    paddingTop="m">
                                    <Button
                                        href={`/blog/${featuredPost.id}`}
                                        label="Read Article"
                                        variant="primary"
                                        size="m"
                                        suffixIcon="arrowRight"/>
                                </Flex>
                            </Flex>
                            <Flex
                                flex={2}
                                minHeight="200">
                                <SmartImage
                                    enlarge
                                    radius="m"
                                    sizes="400px"
                                    alt={featuredPost.image.alt}
                                    src={featuredPost.image.src}/>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            )}

            {/* Blog Posts Grid */}
            <Flex
                fillWidth
                direction="column"
                gap="l">
                <Heading
                    variant="display-strong-s"
                    marginBottom="m">
                    Latest Articles
                </Heading>
                <Flex
                    fillWidth
                    wrap
                    gap="l">
                    {regularPosts.map((post) => (
                        <Flex
                            key={post.id}
                            // className={styles.blogCard}
                            minWidth="320"
                            flex={1}
                            direction="column"
                            border="neutral-medium"
                            borderStyle="solid-1"
                            radius="l"
                            background="surface"
                            style={{ cursor: 'pointer' }}>
                            <Flex
                                fillWidth
                                minHeight="200">
                                <SmartImage
                                    radius="l l 0 0"
                                    sizes="400px"
                                    alt={post.image.alt}
                                    src={post.image.src}/>
                            </Flex>
                            <Flex
                                fillWidth
                                direction="column"
                                padding="l"
                                gap="m">
                                <Flex
                                    fillWidth
                                    justifyContent="space-between"
                                    alignItems="center">
                                    <Tag size="s">{post.category}</Tag>
                                    <Text
                                        variant="body-default-xs"
                                        onBackground="neutral-weak">
                                        {post.readTime}
                                    </Text>
                                </Flex>
                                <Heading
                                    variant="heading-strong-l">
                                    {post.title}
                                </Heading>
                                <Text
                                    variant="body-default-m"
                                    onBackground="neutral-weak">
                                    {post.excerpt}
                                </Text>
                                <Flex
                                    gap="8"
                                    wrap>
                                    {post.tags.slice(0, 3).map((tag, index) => (
                                        <Tag
                                            key={index}
                                            size="s"
                                            variant="neutral">
                                            {tag}
                                        </Tag>
                                    ))}
                                </Flex>
                                <Flex
                                    fillWidth
                                    justifyContent="space-between"
                                    alignItems="center"
                                    paddingTop="m">
                                    <Text
                                        variant="body-default-xs"
                                        onBackground="neutral-weak">
                                        {post.publishedAt}
                                    </Text>
                                    <IconButton
                                        href={`/blog/${post.id}`}
                                        icon="arrowRight"
                                        variant="ghost"
                                        size="s"/>
                                </Flex>
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
            </Flex>

            {/* Newsletter Subscription */}
            <Flex
                fillWidth
                marginTop="xl"
                padding="xl"
                radius="l"
                background="brand-weak"
                direction="column"
                alignItems="center"
                gap="m">
                <Icon
                    name="mail"
                    size="l"
                    onBackground="brand-strong"/>
                <Heading
                    variant="display-strong-s"
                    textAlign="center">
                    Stay Updated
                </Heading>
                <Text
                    variant="body-default-l"
                    textAlign="center"
                    maxWidth={24}
                    onBackground="neutral-weak">
                    Get the latest articles and insights on web development and DevOps delivered to your inbox.
                </Text>
                <Flex
                    gap="m"
                    fillWidth
                    maxWidth={20}
                    mobileDirection="column">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        style={{
                            flex: 1,
                            padding: '12px 16px',
                            border: '1px solid var(--neutral-border-medium)',
                            borderRadius: '8px',
                            backgroundColor: 'var(--neutral-background-medium)',
                            color: 'var(--neutral-text-default)'
                        }}
                    />
                    <Button
                        label="Subscribe"
                        variant="primary"
                        size="m"/>
                </Flex>
            </Flex>
        </Flex>
    );
}