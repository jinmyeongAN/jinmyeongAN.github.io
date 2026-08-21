export default class Post {
  constructor(node) {
    const { id, html, excerpt, frontmatter, fields } = node;
    const { title, date, categories } = frontmatter;

    this.id = id;
    this.html = html;
    this.excerpt = excerpt;
    this.slug = fields.slug;
    this.title = title;
    this.date = date;
    this.categories = categories ? categories.split(' ').filter(Boolean) : [];
  }
}
