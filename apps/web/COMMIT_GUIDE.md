```markdown
# 📝 Commit Message Guidelines

This repo follows the [Conventional Commits](https://www.conventionalcommits.org/) specification to standardize commit messages and enable automated versioning via `semantic-release`.

All commits **must** follow the format below.

---

## ✨ Format

```bash
<type>[optional scope]: <short, imperative summary>

[optional body]

[optional footer]
```

---

## 🔧 Types

Use one of the following types:

| Type        | Purpose                                | Version Impact        |
|-------------|----------------------------------------|------------------------|
| `feat`      | A new feature                          | 🚀 Minor version bump  |
| `fix`       | A bug fix                              | 🛠 Patch version bump  |
| `chore`     | Maintenance (e.g. deps, configs)       | 🚫 No version bump     |
| `docs`      | Documentation changes                  | 🚫 No version bump     |
| `style`     | Code style changes (formatting, etc.)  | 🚫 No version bump     |
| `refactor`  | Code refactoring (no behavior change)  | 🚫 No version bump     |
| `perf`      | Performance improvements               | 🚫 No version bump     |
| `test`      | Adding or updating tests               | 🚫 No version bump     |
| `build`     | Changes to build tools or CI/CD        | 🚫 No version bump     |

---

## 🔍 Examples

```bash
feat: add search filters to listings page
fix: correct image path in property card
chore: update Tailwind to v4
docs: add README section on commit standards
style: format components using Prettier
refactor(web): simplify listing pagination logic
```

---

## ⚠️ Breaking Changes

To indicate a breaking change, add `BREAKING CHANGE:` in the commit body or use `!` after the type:

```bash
feat!: remove support for legacy auth flow

BREAKING CHANGE: Authentication now uses Auth0 only.
```

> This will trigger a **major** version bump.

---

## 💡 Tips

- Use the **imperative** mood ("add", not "added" or "adds").
- Keep summaries to **50 characters or less**.
- Leave an empty line between the subject and body (if body is included).
- Use the body to explain **why**, not just **what**.

---

## 🚀 Use the `.gitmessage` Template (Optional but Recommended)

1. Create a `.gitmessage` file at the root of your repo with this content:

    ```bash
    # <type>(optional-scope): short, imperative summary

    # Example:
    # feat(listings): add filter by property type
    # fix(header): correct logo alignment on mobile
    # chore: update Tailwind to v4

    # Types:
    # feat | fix | chore | docs | style | refactor | perf | test | build

    <type>(scope): your concise message here

    # Optional body:
    # - What changed and why?
    # - Any relevant context or links.

    # BREAKING CHANGE: Describe breaking change here
    ```

2. Configure Git to use this template:

    ```bash
    git config commit.template .gitmessage
    ```

3. Then, when committing, run:

    ```bash
    git commit
    ```

    Git will open the template in your default text editor for editing.

---

## ✅ Why It Matters

- Enables automated versioning and changelog generation via semantic-release.
- Improves project history readability.
- Makes PRs and releases easier to scan and understand.

---

## 📚 Resources

- [Conventional Commits Spec](https://www.conventionalcommits.org/)
- [semantic-release](https://semantic-release.gitbook.io/semantic-release/)
- [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)

---

_This guide is the single source of truth for commit message standards in this repo._