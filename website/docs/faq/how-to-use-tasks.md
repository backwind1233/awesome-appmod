---
sidebar_position: 3
---

# How to Use App Modernization Tasks

Using app modernization tasks is straightforward. Follow this guide to get started.

## Prerequisites

Before using tasks, ensure you have:

- ✅ [Visual Studio Code](https://code.visualstudio.com/) installed
- ✅ [Git](https://git-scm.com/) installed
- ✅ An [Azure account](https://azure.microsoft.com/free/) (for Azure-related tasks)
- ✅ [Node.js](https://nodejs.org/) (if required by the task)

## Step 1: Find a Task

Browse the [Task Gallery](/getting-started) to find tasks that match your modernization needs.

Use filters to search by:
- Technology stack
- Task type
- Azure services
- Programming language

## Step 2: Clone the Task Repository

Once you've found a task, clone its repository:

```bash
git clone https://github.com/author/task-name.git
cd task-name
```

## Step 3: Review Documentation

Read the task's `README.md` to understand:
- What the task does
- Prerequisites and dependencies
- Configuration options
- Usage instructions

## Step 4: Configure the Task

Most tasks require some configuration:

1. **Install dependencies**
   ```bash
   npm install
   # or
   pip install -r requirements.txt
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your settings
   ```

3. **Configure task settings**
   Edit the task configuration file as needed.

## Step 5: Run the Task

Execute the task according to its documentation:

**VS Code Task:**
```
Press Ctrl+Shift+P (Cmd+Shift+P on Mac)
Type "Tasks: Run Task"
Select your task from the list
```

**Command Line:**
```bash
npm run task
# or
python task.py
```

**VS Code Extension:**
Some tasks are distributed as VS Code extensions. Install them from the marketplace.

## Step 6: Review Results

After running the task:
1. Check the output for any errors or warnings
2. Review the changes made to your code
3. Test your application
4. Commit the changes to Git

## Common Use Cases

### Migrating to Azure
1. Find an Azure migration task
2. Run the assessment script
3. Review the migration report
4. Apply recommended changes
5. Deploy to Azure

### Updating Dependencies
1. Use a dependency update task
2. Run the update script
3. Review package changes
4. Run tests
5. Commit updates

### Containerizing an Application
1. Find a containerization task
2. Run the Docker generation script
3. Review Dockerfile and docker-compose.yml
4. Build and test containers
5. Deploy to Kubernetes/AKS

## Getting Help

If you encounter issues:
- Check the task's repository issues
- Review the task documentation
- Ask questions in the repository's discussions
- [Report bugs](https://github.com/backwind1233/awesome-appmod/issues) if needed

## Next Steps

- [Contribute your own task](/docs/contribute)
- [Explore more tasks](/getting-started)
- Share your experience with the community
