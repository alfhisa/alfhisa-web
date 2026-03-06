import fm from 'front-matter';
import { marked } from 'marked';

// Import all markdown files eagerly using Vite's glob import
const blogFiles = import.meta.glob('/src/content/blog/*.md', { query: '?raw', import: 'default', eager: true });
const projectFiles = import.meta.glob('/src/content/projects/*.md', { query: '?raw', import: 'default', eager: true });
const researchFiles = import.meta.glob('/src/content/research/*.md', { query: '?raw', import: 'default', eager: true });
const teachingFiles = import.meta.glob('/src/content/teaching/*.md', { query: '?raw', import: 'default', eager: true });

function parseContent(files) {
    return Object.entries(files).map(([path, content]) => {
        // extract filename as slug
        const filename = path.split('/').pop().replace('.md', '');
        const { attributes, body } = fm(content);

        return {
            slug: filename,
            ...attributes,
            htmlContent: marked.parse(body || ''),
        };
    });
}

// Export parsed and sorted content
export const allPosts = parseContent(blogFiles).sort((a, b) => new Date(b.date) - new Date(a.date));
export const allProjects = parseContent(projectFiles).sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0; // Then keep order
});
export const allResearch = parseContent(researchFiles).sort((a, b) => new Date(b.year) - new Date(a.year));
export const allTeaching = parseContent(teachingFiles).sort((a, b) => {
    if (a.type === 'Course' && b.type !== 'Course') return -1;
    if (a.type !== 'Course' && b.type === 'Course') return 1;
    return 0;
});

// Helper functions to get specific items
export function getPostBySlug(slug) {
    return allPosts.find(p => p.slug === slug);
}

export function getProjectBySlug(slug) {
    return allProjects.find(p => p.slug === slug);
}

export function getResearchBySlug(slug) {
    return allResearch.find(p => p.slug === slug);
}

export function getTeachingBySlug(slug) {
    return allTeaching.find(p => p.slug === slug);
}
