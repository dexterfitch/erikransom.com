# erikransom.com

**erikransom.com** is a dynamic and responsive web application serving as the personal portfolio for Erik J. Ransom, an accomplished voice actor and writer. The application empowers Erik to showcase his work and manage content effortlessly through an intuitive admin interface.

## Features

- **Admin Interface**: Provides Erik with a user-friendly dashboard to update and manage portfolio content without requiring coding skills.
- **Dynamic Content Management**: Enables seamless addition, modification, and removal of portfolio items, ensuring the site remains current.
- **Responsive Design**: Utilizes Bootstrap CSS to ensure optimal viewing across various devices, from desktops to mobile phones.

## Technologies Used

- **MySQL**: Serves as the relational database management system for storing portfolio data.
- **Django**: Powers the backend, handling business logic and database interactions.
- **Django Admin Panel with Jazzmin UI**: Offers an enhanced administrative interface for efficient content management.
- **React**: Drives the frontend, delivering a dynamic and engaging user experience.
- **Bootstrap CSS**: Provides a responsive and aesthetically pleasing design framework.

## Getting Started

To set up the project locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- Python 3.x
- Node.js and npm
- MySQL

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/dexterfitch/erikransom.com.git
   cd erikransom.com
   ```
   
2. **Backend Setup**:

    - Create a virtual environment:

      ```bash
      python3 -m venv venv
      source venv/bin/activate  # On Windows use `venv\Scripts\activate`
      ```

    - Install Python dependencies:

      ```bash
      pip install -r requirements.txt
      ```

    - Configure the database:
      - Create a MySQL database named erikransom_db.
      - Update the DATABASES settings in settings.py with your MySQL credentials.
  
    - Apply migrations:
    
      ```bash
      python manage.py migrate
      ```
  
    - Create a superuser for admin access:
    
      ```bash
      python manage.py createsuperuser
      ```
  
    - Start the Django development server:
    
      ``` bash
      python manage.py runserver
      ```

3. Frontend Setup:

    - Navigate to the frontend directory:
    
      ```bash
      cd frontend
      ```

    - Install Node.js dependencies:
    
      ```bash
      npm install
      ```
  
    - Start the React development server:
    
      ```bash
      npm start
      ```

The React app should now be running on http://localhost:3000 and will interact with the Django backend at http://localhost:8000.

## Usage
Access the admin panel at http://localhost:8000/admin using the superuser credentials created earlier. Here, Erik can manage portfolio content dynamically.

The main portfolio site will reflect updates made through the admin panel in real-time.

## Acknowledgments
Special thanks to Erik J. Ransom for the opportunity to develop this portfolio platform.
