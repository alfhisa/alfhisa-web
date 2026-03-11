import fm from 'front-matter';
import { Marked } from 'marked';

const marked = new Marked();

// Import all markdown files eagerly using Vite's glob import
const blogFiles = import.meta.glob('/src/content/blog/*.md', { query: '?raw', import: 'default', eager: true });
const projectFiles = import.meta.glob('/src/content/projects/*.md', { query: '?raw', import: 'default', eager: true });
const researchFiles = import.meta.glob('/src/content/research/*.md', { query: '?raw', import: 'default', eager: true });
const teachingFiles = import.meta.glob('/src/content/teaching/*.md', { query: '?raw', import: 'default', eager: true });
const aboutFile = import.meta.glob('/src/content/about.md', { query: '?raw', import: 'default', eager: true });

function parseContent(files) {
    return Object.entries(files).map(([path, content]) => {
        // extract filename as slug
        const filename = path.split('/').pop().replace('.md', '');
        const { attributes, body } = fm(content);

        return {
            slug: filename,
            ...attributes,
            htmlContent: marked.parse(body || '', { async: false }),
        };
    });
}

// Export parsed singleton for about page
export const aboutPage = parseContent(aboutFile)[0];

// Export parsed and sorted content
export const allPosts = parseContent(blogFiles).sort((a, b) => new Date(b.date) - new Date(a.date));
export const allProjects = parseContent(projectFiles).sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0; // Then keep order
});
export const allResearch = parseContent(researchFiles).sort((a, b) => new Date(b.year) - new Date(a.year));
export const allTeaching = parseContent(teachingFiles).sort((a, b) => {
    // 1. Academic Year (Descending: e.g. 2025/2026 before 2024/2025)
    const yearA = a.academicYear || "";
    const yearB = b.academicYear || "";
    if (yearA !== yearB) return yearB.localeCompare(yearA);

    // 2. Semester (Even before Odd)
    const semA = (a.semester || "").toLowerCase();
    const semB = (b.semester || "").toLowerCase();
    const isEvenA = semA.includes('even');
    const isEvenB = semB.includes('even');
    if (isEvenA && !isEvenB) return -1;
    if (!isEvenA && isEvenB) return 1;

    // 3. Title (Alphabetical)
    return (a.title || "").localeCompare(b.title || "");
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
