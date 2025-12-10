---
sidebar_position: 1
---

# Contribute to Awesome App Modernization

We welcome contributions from the community! This guide will help you contribute your app modernization tasks to the gallery.

## How to Submit a Task

1. **Fork the Repository**
   
   Fork the [awesome-appmod](https://github.com/backwind1233/awesome-appmod) repository to your GitHub account.

2. **Add Your Task to tasks.json**
   
   Edit the file `website/static/data/tasks.json` and add your task information:

   ```json
   {
     "id": "your-task-id",
     "title": "Your Task Title",
     "description": "A brief description of your task",
     "author": "your-github-username",
     "source": "https://github.com/your-username/your-repo/blob/main/your-task.md",
     "vsInstallLink": "https://vscode.dev/redirect?url=vscode%3A%2F%2F...",
     "tags": ["tag1", "tag2", "tag3"],
     "language": "TypeScript",
     "framework": ["React", "Node.js"],
     "database": ["MongoDB"],
     "featured": false,
     "createdAt": "2024-12-10"
   }
   ```

3. **Create a Pull Request**
   
   Submit a pull request with your changes. Please include:
   - A clear title describing your task
   - A description of what your task does
   - Any special requirements or dependencies

## Field Descriptions

- **id**: Unique identifier (use kebab-case)
- **title**: Task name displayed in the gallery
- **description**: Brief description of what the task does
- **author**: Your GitHub username or organization name
- **source**: Direct link to the task markdown file in your repository
- **vsInstallLink**: VS Code deep link for one-click installation
- **tags**: Array of relevant tags (lowercase, hyphenated)
- **language**: Primary programming language (optional but recommended)
- **framework**: Framework(s) used - can be string or array (optional)
- **database**: Database(s) used - can be string or array (optional)
- **featured**: Boolean to highlight on homepage
- **createdAt**: Creation date in YYYY-MM-DD format

## Task Requirements

Your task should:

- ✅ Be related to application modernization
- ✅ Work with VS Code or Microsoft tools
- ✅ Include clear documentation
- ✅ Have a valid repository link
- ✅ Be properly tagged for discovery

## Task Metadata Fields

| Field | Description | Required |
|-------|-------------|----------|
| `id` | Unique identifier for your task | Yes |
| `title` | Display name of the task | Yes |
| `description` | Brief description (1-2 sentences) | Yes |
| `author` | GitHub username of the creator | Yes |
| `source` | Direct link to the task markdown file | Yes |
| `vsInstallLink` | VS Code installation deep link | No |
| `tags` | Array of relevant tags | Yes |
| `language` | Primary programming language | No |
| `featured` | Whether to feature on homepage (set by maintainers) | No |
| `createdAt` | Date added to gallery | Yes |

## Questions?

If you have questions or need help, please:
- [Open an issue](https://github.com/backwind1233/awesome-appmod/issues)
- Check our [FAQ](/docs/faq/what-is-appmod)

Thank you for contributing to the App Modernization community! 🎉
