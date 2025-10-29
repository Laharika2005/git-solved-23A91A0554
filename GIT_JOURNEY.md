
## Student Information
- Name: Ponnana Laharika
- Student ID: 23A91A0554
- Repository: https://github.com/Laharika2005/git-solved-23A91A0554
- Date Started: 28-10-2025
- Date Completed: 29-10-2025

## Task Summary
Cloned instructor's repository with pre-built conflicts and resolved all 
merge conflicts across multiple branches using proper Git workflows.

## Commands Used

| Command | Times Used | Purpose |
|---------|------------|----------|
| git clone | 1 | Clone instructor's repository |
| git checkout | 20+ | Switch between branches |
| git branch | 10+ | View and manage branches |
| git merge | 2 | Merge dev and conflict-simulator into main |
| git add | 30+ | Stage resolved conflicts |
| git commit | 15+ | Commit resolved changes |
| git push | 10+ | Push to my repository |
| git fetch | 2 | Fetch updates from instructor |
| git pull | 1 | Pull updates |
| git stash | 2 | Save temporary work |
| git cherry-pick | 1 | Copy specific commit |
| git rebase | 1 | Rebase feature branch |
| git reset | 3 | Undo commits (soft/mixed/hard) |
| git revert | 1 | Safe undo |
| git tag | 2 | Create release tags |
| git status | 50+ | Check repository state |
| git log | 30+ | View history |
| git diff | 20+ | Compare changes |

## Conflicts Resolved

### Merge 1: main + dev (6 files)

#### Conflict 1: config/app-config.yaml
- **Issue**: Production used port 8080, development used 3000  
- **Resolution**: Created unified config with environment-based settings  
- **Strategy**: Keep production as default, add dev as optional  
- **Difficulty**: Medium  
- **Time**: 15 minutes  

#### Conflict 2: config/database-config.json
- **Issue**: Different database hosts and SSL modes  
- **Resolution**: Created separate profiles for production and development  
- **Strategy**: Restructured JSON to support both environments  
- **Difficulty**: Medium  
- **Time**: 10 minutes  

#### Conflict 3: scripts/deploy.sh
- **Issue**: Different deployment strategies (production vs docker-compose)  
- **Resolution**: Added conditional logic based on DEPLOY_ENV variable  
- **Strategy**: Made script handle both environments dynamically  
- **Difficulty**: Hard  
- **Time**: 20 minutes  

#### Conflict 4: scripts/monitor.js
- **Issue**: Different monitoring intervals and log formats  
- **Resolution**: Environment-based configuration object  
- **Strategy**: Used process.env.NODE_ENV to determine behavior  
- **Difficulty**: Medium  
- **Time**: 15 minutes  

#### Conflict 5: docs/architecture.md
- **Issue**: Different architectural descriptions  
- **Resolution**: Merged both descriptions into comprehensive document  
- **Strategy**: Created sections for each environment  
- **Difficulty**: Easy  
- **Time**: 10 minutes  

#### Conflict 6: README.md
- **Issue**: Different feature lists and version numbers  
- **Resolution**: Combined all features with clear environment labels  
- **Strategy**: Organized features by category  
- **Difficulty**: Easy  
- **Time**: 10 minutes  

---

### Merge 2: main + conflict-simulator (6 files)

#### Conflict 1: scripts/monitor.js
- **Issue**: Experimental logging system vs stable production monitor  
- **Resolution**: Kept production monitor, added experimental code as commented feature  
- **Strategy**: Prioritized stability with optional experimental toggle  
- **Difficulty**: Medium  
- **Time**: 20 minutes  

#### Conflict 2: scripts/deploy.sh
- **Issue**: New experimental Docker deployment vs traditional SSH deploy  
- **Resolution**: Integrated both using DEPLOY_MODE variable  
- **Strategy**: Added conditional path with documentation  
- **Difficulty**: Hard  
- **Time**: 25 minutes  

#### Conflict 3: config/env-config.yaml
- **Issue**: Duplicate environment variables between staging and production  
- **Resolution**: Consolidated into unified block with clear key separation  
- **Strategy**: Kept all variables, renamed duplicates logically  
- **Difficulty**: Medium  
- **Time**: 15 minutes  

#### Conflict 4: docs/architecture.md
- **Issue**: Extra architecture flowcharts conflicting with main version  
- **Resolution**: Combined both diagrams and added labels  
- **Strategy**: Used the most complete version as base  
- **Difficulty**: Easy  
- **Time**: 10 minutes  

#### Conflict 5: README.md
- **Issue**: Feature version mismatch (v3.0 vs v3.1)  
- **Resolution**: Updated to latest stable version (v3.1)  
- **Strategy**: Unified description with correct version number  
- **Difficulty**: Easy  
- **Time**: 5 minutes  

#### Conflict 6: config/settings.json
- **Issue**: Missing parameters in one branch  
- **Resolution**: Merged both with complete key-value structure  
- **Strategy**: Retained all missing keys from both versions  
- **Difficulty**: Medium  
- **Time**: 10 minutes  

---

## Most Challenging Parts

1. **Understanding Conflict Markers** — Initially confused by `<<<<<<<`, `=======`, and `>>>>>>>`. Learned that HEAD means my current branch and the other is the incoming one.  
2. **Deciding What to Keep** — Needed to carefully compare both versions before merging.  
3. **Complex Logic Conflicts** — deploy.sh and monitor.js required deeper logic understanding.  
4. **Testing After Resolution** — Verifying code behavior after merging was key.  

---

## Key Learnings

### Technical Skills
- Understood and practiced real-world conflict resolution  
- Learned `git rebase`, `git cherry-pick`, and `git reset` practically  
- Got comfortable with reflog recovery  
- Learned that Git commands can undo almost anything safely  

### Best Practices
- Read both sides before merging  
- Test after resolving  
- Use clear commit messages  
- Commit often and logically  
- Keep backup branches before rebasing  

### Git Workflow Insights
- Conflicts are part of teamwork, not mistakes  
- Take time to understand changes  
- Use `git diff` and `git status` frequently  
- Use `stash` to safely switch tasks  
- Reflog is your safety net  

---

## Reflection
This challenge taught me that merge conflicts are not errors — they are opportunities to understand changes better.  
By using rebase, cherry-pick, reset, and revert, I now fully understand how Git history and branches interact.  

The best part was realizing that **Git reflog can recover anything** — no work is truly lost.  
Now I feel confident managing complex Git workflows in real projects.  
