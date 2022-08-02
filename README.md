# POM

POM (Process & Ownership Model) is a cryptographic sign-off system for handling mission critical procedures

## How it Works

Every instance of a mission critical process will have a checklist document, laying out the important steps that need to be taken before the process is considered complete. For example, we may have a critical deployment that needs to go through a set of checks and balances before execution. This process may have the following checklist:

- Ensure that intended features have QA sign off
- Ensure that correct safety procedures have been followed for minimal down time
- Check that deployment environments are currently running and can receive new updates
- Ensure that the CI test coverage is sufficient

Each of these steps could be “signed off”. This can be a simple “x” in the box for each of these steps as they’re performed. 
