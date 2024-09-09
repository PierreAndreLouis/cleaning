import React from 'react'
import HeroBlog from './HeroBlog'
import BlogList from './BlogList'
import BlogSeo from '../../seo/BlogSeo'

export default function BlogPage() {
  return (
    <div>
      <BlogSeo />
      <HeroBlog />
      <BlogList />
    </div>
  )
}
