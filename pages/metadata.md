---
title: metadata
permalink: /metadata
---
- `site.github.build_revision` – **`{{ site.github.build_revision }}`**

## URLs

- `site.url` – {{ site.url }}
- `site.baseurl` – {{ site.baseurl }}
- `page.url` – {{ page.url }}
- `page.permalink` – {{ page.permalink }}
- `page.path` – {{ page.path }}

## Repository

- `site.github.repository_url` – {{ site.github.repository_url }}
- `site.github.owner_name` – {{ site.github.owner_name }}
- `site.github.project_title` – {{ site.github.project_title }}
- `site.github.project_tagline` – {{ site.github.project_tagline }}
- `site.github.repository_nwo` – {{ site.github.repository_nwo }}
- `site.github.url` – {{ site.github.url }}
- `site.github.language` – {{ site.github.language }}
- `site.github.is_user_page` – {{ site.github.is_user_page }}
- `site.github.is_project_page` – {{ site.github.is_project_page }}

## Releases

- `site.github.releases` – {{ site.github.releases.size }}
{% for r in site.github.releases %}  - `{{ r.tag_name }}` – {{ r.name | xml_escape }} *({{ r.created_at | date_to_string }})*
{% endfor %}

## Repositories

{% for r in site.github.public_repositories %}- **[`{{ r.name }}`]({{ r.html_url }})**
  - `created_at` – {{ r.created_at | date_to_string }}
  - `updated_at` – {{ r.updated_at | date_to_string }}
  - `size` – {{ r.size }}
  - `language` – {{ r.language }}
  - `fork` – {{ r.fork }}
  - `has_wiki` – {{ r.has_wiki }}

{% endfor %}
