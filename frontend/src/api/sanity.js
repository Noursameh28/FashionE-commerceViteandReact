import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: 't4l8ghvq', // Should be replaced with actual ID
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-05-03',
});
