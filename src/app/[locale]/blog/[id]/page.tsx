"use client";
import { Avatar, Button, Flex, Heading, Icon, IconButton, SmartImage, Tag, Text } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import { useState, useEffect } from 'react';
// import styles from '@/components/blog/blog-detail.module.scss'

// Sample blog data - replace with your actual data source
const getBlogPost = (id: string) => {
    const blogPosts = [
        {
            id: "1",
            title: "Building Scalable Microservices with Docker and Kubernetes",
            excerpt: "Learn how to containerize your applications and orchestrate them at scale using modern DevOps practices.",
            content: `
# Building Scalable Microservices with Docker and Kubernetes

In today's fast-paced development environment, the ability to build, deploy, and scale applications efficiently has become crucial for business success. Microservices architecture, combined with containerization technologies like Docker and orchestration platforms like Kubernetes, provides a robust foundation for modern applications.

## Why Microservices Matter

Microservices architecture breaks down monolithic applications into smaller, independent services that can be developed, deployed, and scaled separately. This approach offers several advantages:

- **Independent deployment**: Each service can be deployed without affecting others
- **Technology diversity**: Different services can use different programming languages and databases
- **Fault isolation**: If one service fails, it doesn't bring down the entire application
- **Team autonomy**: Different teams can own different services

## Docker: Containerizing Your Services

Docker provides a lightweight, portable way to package your applications along with their dependencies. Here's a basic Dockerfile for a Node.js microservice:

\`\`\`dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

USER node

CMD ["npm", "start"]
\`\`\`

### Best Practices for Docker

1. **Use multi-stage builds** to reduce image size
2. **Run as non-root user** for security
3. **Use .dockerignore** to exclude unnecessary files
4. **Leverage layer caching** for faster builds

## Kubernetes: Orchestrating at Scale

Kubernetes takes containerization to the next level by providing:

- **Service discovery** and load balancing
- **Automatic scaling** based on demand
- **Rolling updates** with zero downtime
- **Health checks** and self-healing

### Sample Deployment Configuration

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
      - name: user-service
        image: your-registry/user-service:latest
        ports:
        - containerPort: 3000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: url
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "256Mi"
            cpu: "200m"
\`\`\`

## Service Communication Patterns

When building microservices, choosing the right communication pattern is crucial:

### Synchronous Communication
- **REST APIs**: Simple and widely understood
- **GraphQL**: Efficient data fetching for complex queries
- **gRPC**: High-performance for internal service communication

### Asynchronous Communication
- **Message queues**: For decoupled, reliable communication
- **Event streaming**: For real-time data processing
- **Pub/Sub patterns**: For event-driven architectures

## Monitoring and Observability

A microservices architecture requires comprehensive monitoring:

- **Distributed tracing**: Track requests across services
- **Centralized logging**: Aggregate logs from all services
- **Metrics collection**: Monitor performance and health
- **Service mesh**: Provides observability and security

Tools like Prometheus, Grafana, and Jaeger can provide these capabilities.

## Security Considerations

Security in a microservices environment requires attention to:

- **Service-to-service authentication**: Use mutual TLS or service tokens
- **API gateway**: Centralized authentication and rate limiting
- **Network policies**: Control traffic between services
- **Secret management**: Use Kubernetes secrets or external vaults

## Conclusion

Building scalable microservices with Docker and Kubernetes requires careful planning and implementation. Start small, focus on proper service boundaries, and gradually evolve your architecture as your application grows.

The combination of containerization and orchestration provides the foundation for building resilient, scalable applications that can adapt to changing business requirements.

Remember: microservices are not a silver bullet. They introduce complexity that should be justified by your specific use case and organizational structure.
            `,
            publishedAt: "2024-03-15",
            updatedAt: "2024-03-16",
            readTime: "8 min read",
            category: "DevOps",
            tags: ["Docker", "Kubernetes", "Microservices", "CI/CD", "DevOps", "Containers"],
            image: {
                src: "/images/blog/docker-kubernetes.jpg",
                alt: "Docker and Kubernetes containers",
                width: 800,
                height: 400
            },
            author: {
                name: "Your Name",
                avatar: "/images/avatar.jpg",
                bio: "Full-stack developer and DevOps engineer with 5+ years of experience building scalable applications."
            },
            seo: {
                metaDescription: "Complete guide to building scalable microservices using Docker containers and Kubernetes orchestration. Learn best practices, patterns, and implementation strategies.",
                keywords: ["microservices", "docker", "kubernetes", "devops", "containers", "scalability"]
            },
            likes: 42,
            comments: [
                {
                    id: "1",
                    author: {
                        name: "Sarah Johnson",
                        avatar: "/images/comments/sarah.jpg",
                        title: "Senior DevOps Engineer"
                    },
                    content: "Excellent article! The Docker multi-stage build example is particularly useful. We've implemented something similar in our production environment and seen significant improvements in build times.",
                    publishedAt: "2024-03-16T10:30:00Z",
                    likes: 8,
                    replies: [
                        {
                            id: "1-1",
                            author: {
                                name: "Your Name",
                                avatar: "/images/avatar.jpg",
                                title: "Author"
                            },
                            content: "Thanks Sarah! Multi-stage builds are indeed a game-changer. What kind of improvements did you see in your build times?",
                            publishedAt: "2024-03-16T11:15:00Z",
                            likes: 3
                        },
                        {
                            id: "1-2",
                            author: {
                                name: "Sarah Johnson",
                                avatar: "/images/comments/sarah.jpg",
                                title: "Senior DevOps Engineer"
                            },
                            content: "We reduced our Docker image sizes by about 60% and build times by 40%. The key was properly ordering the layers to maximize cache hits.",
                            publishedAt: "2024-03-16T12:00:00Z",
                            likes: 5
                        }
                    ]
                },
                {
                    id: "2",
                    author: {
                        name: "Mike Chen",
                        avatar: "/images/comments/mike.jpg",
                        title: "Full Stack Developer"
                    },
                    content: "Great breakdown of the service communication patterns. I'm curious about your thoughts on using service mesh for smaller teams - is the complexity worth it?",
                    publishedAt: "2024-03-16T14:20:00Z",
                    likes: 12,
                    replies: []
                },
                {
                    id: "3",
                    author: {
                        name: "Elena Rodriguez",
                        avatar: "/images/comments/elena.jpg",
                        title: "Platform Engineer"
                    },
                    content: "The monitoring section is spot on. We learned the hard way that you need proper observability before going to production with microservices. Distributed tracing saved us countless hours of debugging.",
                    publishedAt: "2024-03-16T16:45:00Z",
                    likes: 6,
                    replies: []
                }
            ]
        },
        // Add more blog posts here...
    ];
    
    return blogPosts.find(post => post.id === id);
};

const getRelatedPosts = (currentPostId: string, category: string) => {
    // Sample related posts - replace with your actual logic
    return [
        {
            id: "2",
            title: "Modern React Patterns for Enterprise Applications",
            excerpt: "Discover advanced React patterns and best practices for building maintainable large-scale applications.",
            publishedAt: "2024-03-10",
            readTime: "12 min read",
            category: "Frontend",
            image: {
                src: "/images/blog/react-patterns.jpg",
                alt: "React application architecture",
                width: 300,
                height: 200
            }
        },
        {
            id: "3",
            title: "CI/CD Pipeline Optimization with Jenkins",
            excerpt: "Streamline your deployment process and reduce build times with advanced Jenkins configurations.",
            publishedAt: "2024-03-05",
            readTime: "10 min read",
            category: "DevOps",
            image: {
                src: "/images/blog/jenkins-pipeline.jpg",
                alt: "Jenkins CI/CD pipeline",
                width: 300,
                height: 200
            }
        },
        {
            id: "4",
            title: "Infrastructure as Code with Terraform and AWS",
            excerpt: "Automate your cloud infrastructure deployment and management using Terraform best practices.",
            publishedAt: "2024-02-20",
            readTime: "14 min read",
            category: "Cloud",
            image: {
                src: "/images/blog/terraform-aws.jpg",
                alt: "Terraform and AWS infrastructure",
                width: 300,
                height: 200
            }
        }
    ].filter(post => post.id !== currentPostId).slice(0, 3);
};

// export async function generateMetadata(
//     {params: {locale, id}}: { params: { locale: string, id: string }}
// ) {
//     const post = getBlogPost(id);
    
//     if (!post) {
//         return {
//             title: 'Post Not Found',
//             description: 'The requested blog post could not be found.'
//         };
//     }

//     const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(post.title)}`;

//     return {
//         title: post.title,
//         description: post.seo.metaDescription,
//         keywords: post.seo.keywords.join(', '),
//         openGraph: {
//             title: post.title,
//             description: post.seo.metaDescription,
//             type: 'article',
//             url: `https://${baseURL}/${locale}/blog/${id}`,
//             images: [
//                 {
//                     url: ogImage,
//                     alt: post.title,
//                 },
//             ],
//             publishedTime: post.publishedAt,
//             modifiedTime: post.updatedAt,
//             authors: [post.author.name],
//             tags: post.tags,
//         },
//         twitter: {
//             card: 'summary_large_image',
//             title: post.title,
//             description: post.seo.metaDescription,
//             images: [ogImage],
//         },
//     };
// }

export default function BlogDetail(
    { params: {locale, id}}: { params: { locale: string, id: string }}
) {
    // unstable_setRequestLocale(locale);
    const t = useTranslations();
    const {person} = renderContent(t);
    
    const post = getBlogPost(id);
    
    if (!post) {
        notFound();
    }
    
    const relatedPosts = getRelatedPosts(id, post.category);

    // Interactive state management
    const [postData, setPostData] = useState(post);
    const [newComment, setNewComment] = useState('');
    const [replyTo, setReplyTo] = useState<string | null>(null);
    const [replyContent, setReplyContent] = useState('');
    const [userLikes, setUserLikes] = useState<string[]>([]);
    const [showComments, setShowComments] = useState(true);

    // Mock user data - replace with actual authentication
    const currentUser = {
        name: "John Doe",
        avatar: "/images/users/john.jpg",
        title: "Software Engineer"
    };

    // Handle post like/unlike
    const handlePostLike = () => {
        const hasLiked = userLikes.includes('post');
        if (hasLiked) {
            setUserLikes(prev => prev.filter(id => id !== 'post'));
            setPostData(prev => ({ ...prev, likes: prev.likes - 1 }));
        } else {
            setUserLikes(prev => [...prev, 'post']);
            setPostData(prev => ({ ...prev, likes: prev.likes + 1 }));
        }
    };

    // Handle comment like/unlike
    const handleCommentLike = (commentId: string) => {
        const hasLiked = userLikes.includes(commentId);
        
        setPostData(prev => ({
            ...prev,
            comments: prev.comments.map(comment => {
                if (comment.id === commentId) {
                    return {
                        ...comment,
                        likes: hasLiked ? comment.likes - 1 : comment.likes + 1
                    };
                }
                // Handle reply likes
                if (comment.replies.some(reply => reply.id === commentId)) {
                    return {
                        ...comment,
                        replies: comment.replies.map(reply => 
                            reply.id === commentId 
                                ? { ...reply, likes: hasLiked ? reply.likes - 1 : reply.likes + 1 }
                                : reply
                        )
                    };
                }
                return comment;
            })
        }));

        if (hasLiked) {
            setUserLikes(prev => prev.filter(id => id !== commentId));
        } else {
            setUserLikes(prev => [...prev, commentId]);
        }
    };

    // Handle new comment submission
    const handleCommentSubmit = () => {
        if (!newComment.trim()) return;

        const comment = {
            id: Date.now().toString(),
            author: currentUser,
            content: newComment,
            publishedAt: new Date().toISOString(),
            likes: 0,
            replies: []
        };

        setPostData(prev => ({
            ...prev,
            comments: [comment, ...prev.comments]
        }));

        setNewComment('');
    };

    // Handle reply submission
    const handleReplySubmit = (parentCommentId: string) => {
        if (!replyContent.trim()) return;

        const reply = {
            id: `${parentCommentId}-${Date.now()}`,
            author: currentUser,
            content: replyContent,
            publishedAt: new Date().toISOString(),
            likes: 0
        };

        setPostData(prev => ({
            ...prev,
            comments: prev.comments.map(comment => 
                comment.id === parentCommentId
                    ? { ...comment, replies: [...comment.replies, reply] }
                    : comment
            )
        }));

        setReplyContent('');
        setReplyTo(null);
    };

    // Format date for display
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
        
        if (diffInHours < 1) return 'Just now';
        if (diffInHours < 24) return `${diffInHours}h ago`;
        if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
        return date.toLocaleDateString();
    };

    return (
        <Flex
            fillWidth maxWidth="m"
            direction="column">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        headline: post.title,
                        description: post.seo.metaDescription,
                        image: `${baseURL}${post.image.src}`,
                        datePublished: post.publishedAt,
                        dateModified: post.updatedAt,
                        author: {
                            '@type': 'Person',
                            name: post.author.name,
                        },
                        publisher: {
                            '@type': 'Person',
                            name: person.name,
                        },
                        mainEntityOfPage: {
                            '@type': 'WebPage',
                            '@id': `https://${baseURL}/blog/${id}`,
                        },
                        keywords: post.seo.keywords.join(', '),
                    }),
                }}
            />

            {/* Back Navigation */}
            <Flex
                fillWidth
                marginBottom="l">
                <Button
                    href="/blog"
                    prefixIcon="arrowLeft"
                    label="Back to Blog"
                    variant="ghost"
                    size="s"/>
            </Flex>

            {/* Article Header */}
            <Flex
                fillWidth
                direction="column"
                marginBottom="xl">
                <Flex
                    gap="8"
                    alignItems="center"
                    marginBottom="m">
                    <Tag size="m">{post.category}</Tag>
                    <Text
                        variant="body-default-s"
                        onBackground="neutral-weak">
                        {post.publishedAt} • {post.readTime}
                    </Text>
                </Flex>
                
                <Heading
                    variant="display-strong-xl"
                    marginBottom="m">
                    {post.title}
                </Heading>
                
                <Text
                    variant="display-default-s"
                    onBackground="neutral-weak"
                    marginBottom="l">
                    {post.excerpt}
                </Text>

                {/* Author Info */}
                <Flex
                    gap="12"
                    alignItems="center"
                    marginBottom="l">
                    <Avatar
                        src={post.author.avatar}
                        size="m"/>
                    <Flex
                        direction="column">
                        <Text
                            variant="heading-strong-s">
                            {post.author.name}
                        </Text>
                        <Text
                            variant="body-default-xs"
                            onBackground="neutral-weak">
                            {post.author.bio}
                        </Text>
                    </Flex>
                </Flex>

                {/* Tags */}
                <Flex
                    gap="8"
                    wrap
                    marginBottom="l">
                    {post.tags.map((tag, index) => (
                        <Tag
                            key={index}
                            size="s"
                            variant="neutral">
                            {tag}
                        </Tag>
                    ))}
                </Flex>

                {/* Social Share */}
                <Flex
                    gap="8"
                    alignItems="center">
                    <Text
                        variant="body-default-s"
                        onBackground="neutral-weak">
                        Share:
                    </Text>
                    <IconButton
                        icon="twitter"
                        variant="ghost"
                        size="s"
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(postData.title)}&url=${encodeURIComponent(`${baseURL}/blog/${id}`)}`}/>
                    <IconButton
                        icon="linkedin"
                        variant="ghost"
                        size="s"
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${baseURL}/blog/${id}`)}`}/>
                    <IconButton
                        icon="copy"
                        variant="ghost"
                        size="s"/>
                </Flex>
            </Flex>

            {/* Featured Image */}
            <Flex
                fillWidth
                marginBottom="xl"
                radius="l"
                overflow="hidden">
                <SmartImage
                    src={postData.image.src}
                    alt={postData.image.alt}
                    sizes="800px"
                    priority/>
            </Flex>

            {/* Article Content */}
            <Flex
                fillWidth
                direction="column"
                // className={styles.articleContent}
                textVariant="body-default-l"
                marginBottom="l">
                <div dangerouslySetInnerHTML={{ __html: postData.content.split('\n').map(paragraph => {
                    if (paragraph.startsWith('# ')) {
                        return `<h1>${paragraph.substring(2)}</h1>`;
                    } else if (paragraph.startsWith('## ')) {
                        return `<h2>${paragraph.substring(3)}</h2>`;
                    } else if (paragraph.startsWith('### ')) {
                        return `<h3>${paragraph.substring(4)}</h3>`;
                    } else if (paragraph.startsWith('```')) {
                        return paragraph.includes('```') && !paragraph.startsWith('```') ? '</code></pre>' : '<pre><code>';
                    } else if (paragraph.startsWith('- ')) {
                        return `<li>${paragraph.substring(2)}</li>`;
                    } else if (paragraph.trim() === '') {
                        return '<br>';
                    } else {
                        return `<p>${paragraph}</p>`;
                    }
                }).join('')}} />
            </Flex>

            {/* Like and Engagement Bar */}
            <Flex
                fillWidth
                justifyContent="space-between"
                alignItems="center"
                padding="l"
                radius="l"
                background="neutral-weak"
                marginBottom="xl">
                <Flex
                    gap="l"
                    alignItems="center">
                    <Button
                        label={`${postData.likes} likes`}
                        prefixIcon={userLikes.includes('post') ? "heart" : "heart"}
                        variant={userLikes.includes('post') ? "primary" : "ghost"}
                        size="s"
                        onClick={handlePostLike}/>
                    <Button
                        label={`${postData.comments.length} comments`}
                        prefixIcon="messageCircle"
                        variant="ghost"
                        size="s"
                        onClick={() => setShowComments(!showComments)}/>
                </Flex>
                <Flex
                    gap="8">
                    <Button
                        label="Share on Twitter"
                        prefixIcon="twitter"
                        variant="secondary"
                        size="s"
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(postData.title)}&url=${encodeURIComponent(`${baseURL}/blog/${id}`)}`}/>
                    <Button
                        label="Share on LinkedIn"
                        prefixIcon="linkedin"
                        variant="secondary"
                        size="s"
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${baseURL}/blog/${id}`)}`}/>
                </Flex>
            </Flex>

            {/* Comments Section */}
            {showComments && (
                <Flex
                    fillWidth
                    direction="column"
                    marginBottom="xl">
                    <Heading
                        variant="display-strong-s"
                        marginBottom="l">
                        Comments ({postData.comments.length})
                    </Heading>

                    {/* Add Comment Form */}
                    <Flex
                        fillWidth
                        direction="column"
                        padding="l"
                        radius="l"
                        border="neutral-medium"
                        borderStyle="solid-1"
                        background="surface"
                        gap="m"
                        marginBottom="l">
                        <Flex
                            gap="12"
                            alignItems="center">
                            <Avatar
                                src={currentUser.avatar}
                                size="s"/>
                            <Text
                                variant="heading-strong-s">
                                {currentUser.name}
                            </Text>
                        </Flex>
                        <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Share your thoughts about this article..."
                            style={{
                                width: '100%',
                                minHeight: '80px',
                                padding: '12px',
                                border: '1px solid var(--neutral-border-medium)',
                                borderRadius: '8px',
                                backgroundColor: 'var(--neutral-background-medium)',
                                color: 'var(--neutral-text-default)',
                                resize: 'vertical',
                                fontFamily: 'inherit'
                            }}
                        />
                        <Flex
                            justifyContent="flex-end">
                            <Button
                                label="Post Comment"
                                variant="primary"
                                size="s"
                                onClick={handleCommentSubmit}
                                disabled={!newComment.trim()}/>
                        </Flex>
                    </Flex>

                    {/* Comments List */}
                    <Flex
                        fillWidth
                        direction="column"
                        gap="l">
                        {postData.comments.map((comment) => (
                            <Flex
                                key={comment.id}
                                fillWidth
                                direction="column"
                                padding="l"
                                radius="l"
                                border="neutral-medium"
                                borderStyle="solid-1"
                                background="surface"
                                gap="m">
                                {/* Comment Header */}
                                <Flex
                                    fillWidth
                                    justifyContent="space-between"
                                    alignItems="flex-start">
                                    <Flex
                                        gap="12"
                                        alignItems="center">
                                        <Avatar
                                            src={comment.author.avatar}
                                            size="s"/>
                                        <Flex
                                            direction="column">
                                            <Text
                                                variant="heading-strong-s">
                                                {comment.author.name}
                                            </Text>
                                            <Text
                                                variant="body-default-xs"
                                                onBackground="neutral-weak">
                                                {comment.author.title} • {formatDate(comment.publishedAt)}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Flex>

                                {/* Comment Content */}
                                <Text
                                    variant="body-default-m">
                                    {comment.content}
                                </Text>

                                {/* Comment Actions */}
                                <Flex
                                    gap="m"
                                    alignItems="center">
                                    <Button
                                        label={comment.likes.toString()}
                                        prefixIcon={userLikes.includes(comment.id) ? "heart" : "heart"}
                                        variant={userLikes.includes(comment.id) ? "primary" : "ghost"}
                                        size="xs"
                                        onClick={() => handleCommentLike(comment.id)}/>
                                    <Button
                                        label="Reply"
                                        prefixIcon="cornerDownRight"
                                        variant="ghost"
                                        size="xs"
                                        onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}/>
                                </Flex>

                                {/* Reply Form */}
                                {replyTo === comment.id && (
                                    <Flex
                                        fillWidth
                                        direction="column"
                                        padding="m"
                                        radius="m"
                                        background="neutral-weak"
                                        gap="m"
                                        marginTop="s">
                                        <textarea
                                            value={replyContent}
                                            onChange={(e) => setReplyContent(e.target.value)}
                                            placeholder={`Reply to ${comment.author.name}...`}
                                            style={{
                                                width: '100%',
                                                minHeight: '60px',
                                                padding: '8px',
                                                border: '1px solid var(--neutral-border-medium)',
                                                borderRadius: '6px',
                                                backgroundColor: 'var(--neutral-background-medium)',
                                                color: 'var(--neutral-text-default)',
                                                resize: 'vertical',
                                                fontFamily: 'inherit'
                                            }}
                                        />
                                        <Flex
                                            gap="8"
                                            justifyContent="flex-end">
                                            <Button
                                                label="Cancel"
                                                variant="ghost"
                                                size="xs"
                                                onClick={() => {
                                                    setReplyTo(null);
                                                    setReplyContent('');
                                                }}/>
                                            <Button
                                                label="Reply"
                                                variant="primary"
                                                size="xs"
                                                onClick={() => handleReplySubmit(comment.id)}
                                                disabled={!replyContent.trim()}/>
                                        </Flex>
                                    </Flex>
                                )}

                                {/* Replies */}
                                {comment.replies.length > 0 && (
                                    <Flex
                                        fillWidth
                                        direction="column"
                                        gap="m"
                                        paddingLeft="l"
                                        marginTop="s">
                                        {comment.replies.map((reply) => (
                                            <Flex
                                                key={reply.id}
                                                fillWidth
                                                direction="column"
                                                padding="m"
                                                radius="m"
                                                background="neutral-weak"
                                                gap="s">
                                                <Flex
                                                    gap="8"
                                                    alignItems="center">
                                                    <Avatar
                                                        src={reply.author.avatar}
                                                        size="xs"/>
                                                    <Text
                                                        variant="heading-strong-xs">
                                                        {reply.author.name}
                                                    </Text>
                                                    <Text
                                                        variant="body-default-xs"
                                                        onBackground="neutral-weak">
                                                        • {formatDate(reply.publishedAt)}
                                                    </Text>
                                                </Flex>
                                                <Text
                                                    variant="body-default-s">
                                                    {reply.content}
                                                </Text>
                                                <Flex
                                                    gap="s"
                                                    alignItems="center">
                                                    <Button
                                                        label={reply.likes.toString()}
                                                        prefixIcon={userLikes.includes(reply.id) ? "heart" : "heart"}
                                                        variant={userLikes.includes(reply.id) ? "primary" : "ghost"}
                                                        size="xs"
                                                        onClick={() => handleCommentLike(reply.id)}/>
                                                </Flex>
                                            </Flex>
                                        ))}
                                    </Flex>
                                )}
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            )}

            {/* Article Footer */}
            <Flex
                fillWidth
                padding="l"
                radius="l"
                background="neutral-weak"
                direction="column"
                gap="m"
                marginBottom="xl">
                <Text
                    variant="body-default-s"
                    onBackground="neutral-weak">
                    Last updated: {postData.updatedAt}
                </Text>
                <Flex
                    gap="m"
                    alignItems="center">
                    <Text
                        variant="body-default-m">
                        Found this helpful? Share it with others!
                    </Text>
                </Flex>
            </Flex>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <Flex
                    fillWidth
                    direction="column"
                    marginBottom="xl">
                    <Heading
                        variant="display-strong-s"
                        marginBottom="l">
                        Related Articles
                    </Heading>
                    <Flex
                        fillWidth
                        wrap
                        gap="l">
                        {relatedPosts.map((relatedPost) => (
                            <Flex
                                key={relatedPost.id}
                                // className={styles.relatedPostCard}
                                minWidth="280"
                                flex={1}
                                direction="column"
                                border="neutral-medium"
                                borderStyle="solid-1"
                                radius="l"
                                background="surface"
                                style={{ cursor: 'pointer' }}>
                                <Flex
                                    fillWidth
                                    minHeight="160">
                                    <SmartImage
                                        radius="l l 0 0"
                                        sizes="300px"
                                        alt={relatedPost.image.alt}
                                        src={relatedPost.image.src}/>
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
                                        <Tag size="s">{relatedPost.category}</Tag>
                                        <Text
                                            variant="body-default-xs"
                                            onBackground="neutral-weak">
                                            {relatedPost.readTime}
                                        </Text>
                                    </Flex>
                                    <Heading
                                        variant="heading-strong-m">
                                        {relatedPost.title}
                                    </Heading>
                                    <Text
                                        variant="body-default-s"
                                        onBackground="neutral-weak">
                                        {relatedPost.excerpt}
                                    </Text>
                                    <Flex
                                        fillWidth
                                        justifyContent="space-between"
                                        alignItems="center"
                                        paddingTop="s">
                                        <Text
                                            variant="body-default-xs"
                                            onBackground="neutral-weak">
                                            {relatedPost.publishedAt}
                                        </Text>
                                        <IconButton
                                            href={`/blog/${relatedPost.id}`}
                                            icon="arrowRight"
                                            variant="ghost"
                                            size="s"/>
                                    </Flex>
                                </Flex>
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            )}

            {/* Newsletter CTA */}
            <Flex
                fillWidth
                padding="xl"
                radius="l"
                background="brand-weak"
                direction="column"
                alignItems="center"
                gap="m">
                <Icon
                    name="bell"
                    size="l"
                    onBackground="brand-strong"/>
                <Heading
                    variant="display-strong-s"
                    textAlign="center">
                    Never Miss an Update
                </Heading>
                <Text
                    variant="body-default-l"
                    textAlign="center"
                    maxWidth={24}
                    onBackground="neutral-weak">
                    Subscribe to get the latest articles on web development, DevOps, and software engineering delivered to your inbox.
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