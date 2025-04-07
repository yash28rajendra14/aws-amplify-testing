# AWS Amplify Monorepo Example

This is a monorepo containing a frontend application configured with AWS Amplify.

## Project Structure

```
.
├── frontend/          # React application with Amplify integration
└── package.json       # Root package.json for workspace management
```

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Amplify Deployment

1. Install the Amplify CLI:
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. Configure Amplify:
   ```bash
   amplify configure
   ```

3. Initialize Amplify in the frontend directory:
   ```bash
   cd frontend
   amplify init
   ```

4. Push the changes:
   ```bash
   amplify push
   ```

5. Publish to hosting:
   ```bash
   amplify publish
   ``` 