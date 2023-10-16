---
title: 'How to Make Pre Tags Responsive in CSS'
excerpt: 'Learn how to make your HTML pre tags responsive by adding a couple of CSS properties'
image: 'https://cdn.pixabay.com/photo/2016/11/30/20/44/computer-1873831_960_720.png'
createdAt: '2022-09-10T15:10:18.366Z'
author:
  name: Kain Nhantumbo
  picture: '/assets/author.jpg'
  description: 'Web Developer and Marketeer'
topic: 'Web Development'
---

When I was building this site, I had a hard time styling the `pre` tags. That problem lead long code snippets (which are wrapped by `pre` tags) to overflow the width of the page, and cause the page layout to break. So I decided to share the solution I found and that worked for me.

I found that happens because by default `pre` tags have the CSS `white-space` property set to `normal`, like this:

```css
pre {
	white-space: normal;
}
```

To fix the issue you simple change `normal` property to `pre-wrap`:

```css
pre {
	white-space: pre-wrap;
}
```

This will improve the appearance, but doesn’t solve the overflow issue completely, because `pre-wrap` only addresses whole lines of code (a collection of code terms on a line, separated by white space).

What happens if individual words in your code lines are so long that they go beyond the width of your page?

Then your layout still breaks, because `pre-wrap` doesn’t address individual words.

To fix this issue, we need to add another CSS properties to the `pre` tag, called `word-break` then assign a value of `break-all` and `word-wrap` property then assign a value of `break-word`. Like this:

```css
pre {
	white-space: pre-wrap;
	word-break: break-all;
  word-wrap: break-word;
}
```

Now your `pre` tags should be responsive. I hope this article helped you.

