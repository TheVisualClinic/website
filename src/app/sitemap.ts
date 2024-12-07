import axios from 'axios'

// Interfaces
interface ServiceSlug {
  slug_th: string
  slug_en: string
  public_at: string
}

interface BlogSlug {
  slug_th: string
  slug_en: string
  public_at: string
}

// Constants
const baseUrl = 'https://thevisual-clinic.com'
const languages = ['en', 'th']
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toISOString().split('T')[0]
}

const staticUrls = [
  { path: '/home', changeFrequency: 'monthly', priority: 1.0 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/about-us', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/medical-team', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/promotions', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/reviews', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.5 },
]

// API Fetching Functions
const fetchServiceSlug = async (): Promise<ServiceSlug[]> => {
  try {
    const { data: response } = await axios.get(
      `${process.env.MAIN_SERVICES_URL}/api/v1/website/sitemap/services`
    )
    return response.data
  } catch (error) {
    console.error('Error fetching service slugs:', error)
    return []
  }
}

const fetchBlogSlug = async (): Promise<BlogSlug[]> => {
  try {
    const { data: response } = await axios.get(
      `${process.env.MAIN_SERVICES_URL}/api/v1/website/sitemap/blogs`
    )
    return response.data
  } catch (error) {
    console.error('Error fetching blog slugs:', error)
    return []
  }
}

// Utility Functions
const createStaticUrls = () =>
  languages.flatMap((locale) =>
    staticUrls.map(({ path, changeFrequency, priority }) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: formatDate(new Date().toISOString()),
      changeFrequency,
      priority,
    }))
  )

const createDynamicServiceUrls = (serviceSlugs: ServiceSlug[]) =>
  serviceSlugs.flatMap(({ slug_th, slug_en, public_at }) =>
    languages.map((locale) => ({
      url: `${baseUrl}/${locale}/services/${locale === 'th' ? slug_th : slug_en}`,
      changeFrequency: 'monthly',
      priority: 0.9,
      lastModified: formatDate(public_at),
    }))
  )

const createDynamicBlogUrls = (blogSlugs: BlogSlug[]) =>
  blogSlugs.flatMap(({ slug_th, slug_en, public_at }) =>
    languages.map((locale) => ({
      url: `${baseUrl}/${locale}/blog/${locale === 'th' ? slug_th : slug_en}`,
      changeFrequency: 'weekly',
      priority: 0.7,
      lastModified: formatDate(public_at),
    }))
  )

// Main Function
export default async function sitemap() {
  const serviceSlugs = await fetchServiceSlug()
  const blogSlugs = await fetchBlogSlug()

  const staticPages = createStaticUrls()
  const servicePages = createDynamicServiceUrls(serviceSlugs)
  const blogPages = createDynamicBlogUrls(blogSlugs)

  return [...staticPages, ...servicePages, ...blogPages]
}
