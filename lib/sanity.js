import { sanityClient } from "@sanity/client";

export const client = sanityClient({
    projectId: 'eprxgltg',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skHLCFydsADZkcRmaMj6VuxbaLLwrdJfEWUNnHSK8gWZcuLaiq5og03cXliTnHbYqWgDnOkkNWTAYzXa3gC20l2qpXqIhYYNtkYoSYDP7E48vMGWAVdE1fXhpOkyORwA7gbOFQJfd8gf2M9U93kqVM338kctCfobiiKKTnjPDfvnPgeEPSwV',
    useCdn: false,
})