# Awesome App Modernization [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)

> A curated list of Microsoft App Modernization tasks, tools, and resources for VS Code

**View the gallery**: [https://backwind1233.github.io/awesome-appmod/](https://backwind1233.github.io/awesome-appmod/)

## 📖 Introduction

This repository showcases a collection of reusable Microsoft App Modernization tasks and workflows designed to help developers modernize their applications using VS Code extensions and Azure services.

### What is App Modernization?

App Modernization is the process of updating legacy applications to leverage modern technologies, cloud-native architectures, and best practices. This includes:

- 🏗️ Migrating to cloud platforms (Azure)
- 🐳 Containerization and Kubernetes
- 🔄 Updating frameworks and dependencies
- 🔐 Implementing modern security practices
- 📊 Adding monitoring and observability

## 🚀 Getting Started

Visit the [Task Gallery](https://backwind1233.github.io/awesome-appmod/getting-started) to discover and explore available tasks.

### Quick Links

- 📚 [Documentation](https://backwind1233.github.io/awesome-appmod/docs/contribute)
- 🎯 [My Tasks Repository](https://github.com/backwind1233/app-mod-my-tasks)
- 💡 [How to Use Tasks](https://backwind1233.github.io/awesome-appmod/docs/faq/how-to-use-tasks)

## 🤝 Contributing

We welcome contributions! To add your task to the gallery:

1. Fork this repository
2. Add your task to `website/static/data/tasks.json`
3. Submit a pull request

See our [Contribution Guide](https://backwind1233.github.io/awesome-appmod/docs/contribute) for detailed instructions.

### Task Submission Template

```json
{
  "id": "your-task-id",
  "title": "Your Task Title",
  "description": "Brief description of your task",
  "author": "your-github-username",
  "repo": "https://github.com/your-username/your-task-repo",
  "tags": ["vscode", "azure", "automation"],
  "language": "TypeScript",
  "featured": false,
  "createdAt": "2024-12-10"
}
```

## 🏗️ Local Development

### Prerequisites

- Node.js 18 or higher
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/backwind1233/awesome-appmod.git
cd awesome-appmod

# Install dependencies
cd website
npm install

# Start development server
npm start

# Build for production
npm run build
```

The site will be available at `http://localhost:3000/awesome-appmod/`

## 📦 Project Structure

```
awesome-appmod/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Pages deployment
├── website/
│   ├── docs/                    # Documentation pages
│   ├── src/
│   │   ├── components/          # React components
│   │   ├── css/                 # Styles
│   │   └── pages/               # Website pages
│   ├── static/
│   │   ├── data/
│   │   │   └── tasks.json       # Tasks database
│   │   └── img/                 # Images and assets
│   ├── docusaurus.config.js     # Docusaurus configuration
│   ├── sidebars.js              # Documentation sidebar
│   └── package.json             # Dependencies
└── README.md
```

## 🌟 Featured Tasks

- **[App Mod My Tasks](https://github.com/backwind1233/app-mod-my-tasks)** - A collection of Microsoft tasks for application modernization workflows in VS Code

## 📖 Resources

### Documentation

- [What is App Modernization?](https://backwind1233.github.io/awesome-appmod/docs/faq/what-is-appmod)
- [What is a Task?](https://backwind1233.github.io/awesome-appmod/docs/faq/what-is-a-task)
- [How to Use Tasks](https://backwind1233.github.io/awesome-appmod/docs/faq/how-to-use-tasks)

### Microsoft Resources

- [Azure App Modernization](https://azure.microsoft.com/solutions/application-modernization/)
- [Microsoft Cloud Adoption Framework](https://learn.microsoft.com/azure/cloud-adoption-framework/)
- [Azure Migrate](https://azure.microsoft.com/services/azure-migrate/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

This project is inspired by [awesome-azd](https://github.com/Azure/awesome-azd) and follows similar patterns for showcasing community contributions.

## 📞 Support

- 🐛 [Report Issues](https://github.com/backwind1233/awesome-appmod/issues)
- 💬 [Discussions](https://github.com/backwind1233/awesome-appmod/discussions)
- 📧 Contact: Open an issue for questions

## 🔒 Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the Code of Conduct FAQ or contact opencode@microsoft.com with any additional questions or comments.

---

**Built with** ❤️ **using** [Docusaurus](https://docusaurus.io/)
