import path from 'node:path'
import fs from 'node:fs'
import { sync } from 'glob'
import matter from 'gray-matter'

const getObjectPath = object => path.join(process.cwd(), object)

export const getSlugs = object => {
  const paths = sync(`${getObjectPath(object)}/*.mdx`)

  return paths.map(path => {
    const parts = path.split('/')
    const fileName = parts[parts.length - 1]
    const [slug] = fileName.split('.')
    return slug
  })
}

export const getAllPosts = object => {
  const posts = getSlugs(object)
    .map(slug => getPostFromSlug(slug, object))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1
      if (a.meta.date < b.meta.date) return -1
      return 0
    })
    .reverse()
  return posts
}

export const getPostFromSlug = (slug, object) => {
  const postPath = path.join(getObjectPath(object), `${slug}.mdx`)
  const source = fs.readFileSync(postPath)
  const { content, data } = matter(source)

  return {
    content,
    meta: {
      slug,
      title: data.title ?? slug,
      desc: data.desc ?? '',
      image: data.image ?? '',
      date: (data.date ?? new Date()).toString()
    }
  }
}
