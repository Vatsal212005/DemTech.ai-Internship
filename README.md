
# Mailing Scheduler (Next.js)

This project implements a mailing scheduling feature using Next.js. The application allows users to schedule email campaigns to be sent to specific lists of recipients. Each campaign is defined by a template (mailer), a recipient list, and a scheduled time for sending.

## Features
- **Mailer Templates:** Choose from a list of pre-existing email templates (mailers).
- **Recipient Lists:** Select a list of recipients (lists) to send the mailer to.
- **Schedule:** Set a specific date and time when the mailer should be sent.

## Assumptions
- Mailer templates and recipient lists are fetched from an API by their ID and name.
- The actual content of the mailer and the emails in the list are picked up by a separate mail-sending module.
- CRUD operations for creating, reviewing, and scheduling mailings are performed via an API (mocked for demo purposes).

## Technologies Used
- **Next.js:** Framework for building the application.
- **React:** JavaScript library for building the user interface.
- **API Mocking:** Mocked API calls to simulate fetching mailers, lists, and handling CRUD operations for scheduling.

## Prerequisites
Before you can run the project, make sure you have the following installed:
- **Node.js** (preferably v14 or later)
- **npm** (or Yarn, if you prefer)

## Setup and Installation

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/your-username/mailing-scheduler.git
cd mailing-scheduler
```

### 2. Install Dependencies

Install the necessary dependencies for the project by running:

```bash
npm install
```

### 3. Run the Development Server

To run the project locally, use the following command:

```bash
npm run dev
```

This will start the Next.js development server at `http://localhost:3000`.

### 4. Open the Application

Once the server is running, open your browser and navigate to:

```
http://localhost:3000
```

You should see the mailing scheduling interface where you can choose mailers, lists, and schedule campaigns.

## API Mocking

For the purpose of the demo, the required APIs (mailers, lists, and scheduling) are mocked. These mock API endpoints are pre-configured to simulate fetching mailers, lists, and scheduling mailings. You can modify these mocks if you want to integrate with real APIs in the future.

## URL of Live Demo

You can access the live demo of this project at the following URL:

[Live Demo](https://dem-tech-ai-internship.vercel.app/)

## Folder Structure

Here's a brief overview of the folder structure:

```
/pages            # Contains the app's pages
  /index.js       # The main page for the mailing scheduler
/api              # Mock API routes to simulate mailer, list, and schedule APIs
  /mailers.js     # API mock for fetching mailer templates
  /lists.js       # API mock for fetching recipient lists
  /schedule.js    # API mock for scheduling mailings
/components       # Reusable components like the form, lists, etc.
/styles           # Global styles and CSS files
```

## Testing

If you'd like to test or add additional features, consider using Jest or React Testing Library for unit tests and component tests. The project currently doesn't have automated tests, but they can be added as needed.

## Contributing

Feel free to fork this repository and submit issues or pull requests. If you'd like to contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

