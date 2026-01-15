import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'zgo49znz', // Get from sanity.io dashboard
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: true, // Set to false if you need fresh data
})

// Helper function to generate image URLs
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}

// Fetch functions for each content type
export async function getPersonalInfo() {
    return await client.fetch('*[_type == "personalInfo"][0]{..., "cv": cv.asset->url}')
}

export async function getProjects() {
    return await client.fetch('*[_type == "project"] | order(order asc)')
}

export async function getExperience() {
    return await client.fetch('*[_type == "experience"] | order(order asc)')
}

export async function getEducation() {
    return await client.fetch('*[_type == "education"] | order(order asc)')
}

export async function getSkills() {
    return await client.fetch('*[_type == "skillCategory"] | order(order asc)')
}

export async function getContact() {
    return await client.fetch('*[_type == "contact"][0]')
}

export async function getCreativeUniverses() {
    return await client.fetch('*[_type == "creativeUniverses"][0]')
}
