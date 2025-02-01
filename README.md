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
