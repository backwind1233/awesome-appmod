# Contributing to Awesome App Modernization

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Ways to Contribute

### 1. Add Your Task to the Gallery

The primary way to contribute is by adding your app modernization task to the gallery:

1. Fork the repository
2. Edit `website/static/data/tasks.json`
3. Add your task following the schema below
4. Submit a pull request

**Task Schema:**
```json
{
  "id": "unique-task-id",
  "title": "Task Title",
  "description": "Brief description (1-2 sentences)",
  "author": "github-username",
  "repo": "https://github.com/username/repo",
  "tags": ["tag1", "tag2", "tag3"],
  "language": "TypeScript",
  "featured": false,
  "createdAt": "YYYY-MM-DD"
}
```

### 2. Improve Documentation

Help improve the documentation:
- Fix typos or clarify instructions
- Add examples or tutorials
- Translate content (future)
- Add FAQs

### 3. Report Issues

Found a bug or have a suggestion?
- [Open an issue](https://github.com/backwind1233/awesome-appmod/issues/new)
- Provide clear reproduction steps
- Include screenshots if applicable

### 4. Enhance the Website

Contributions to the website itself:
- Improve UI/UX
- Add new features
- Fix bugs
- Optimize performance

## Pull Request Process

1. **Fork & Clone**
   ```bash
   git clone https://github.com/YOUR-USERNAME/awesome-appmod.git
   cd awesome-appmod
   ```

2. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**
   - Follow existing code style
   - Test your changes locally
   - Update documentation if needed

4. **Test Locally**
   ```bash
   cd website
   npm install
   npm start
   ```

5. **Commit Changes**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

6. **Push & Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```
   Then create a Pull Request on GitHub.

## Code Style Guidelines

### JavaScript/TypeScript
- Use consistent formatting (Prettier recommended)
- Add comments for complex logic
- Follow React best practices

### Markdown
- Use proper heading hierarchy
- Include code examples where helpful
- Keep line length reasonable

### JSON
- Validate JSON syntax
- Use consistent formatting
- Keep alphabetical order when possible

## Task Quality Guidelines

Your task should:

✅ **Be Relevant** - Related to app modernization  
✅ **Be Well-Documented** - Clear README with usage instructions  
✅ **Be Maintained** - Active repository with recent updates  
✅ **Work** - Tested and functional  
✅ **Add Value** - Solve a real problem or provide useful automation  

## Review Process

1. **Automated Checks** - GitHub Actions will run automated tests
2. **Maintainer Review** - A maintainer will review your PR
3. **Feedback** - Address any requested changes
4. **Merge** - Once approved, your PR will be merged

## Getting Help

Need help with your contribution?

- 💬 [Open a Discussion](https://github.com/backwind1233/awesome-appmod/discussions)
- 📧 Comment on your PR
- 📖 Check the [Setup Guide](SETUP.md)

## Code of Conduct

This project follows the [Microsoft Open Source Code of Conduct](CODE_OF_CONDUCT.md). Please be respectful and constructive.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Recognition

Contributors will be:
- Listed in the repository's contributor list
- Credited in their task submissions
- Part of the growing app modernization community

Thank you for contributing! 🎉
