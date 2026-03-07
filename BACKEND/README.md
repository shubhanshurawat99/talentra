# Talentra Backend API

Node.js/Express MVC backend for Talentra Recruitment Platform with MongoDB and email queue functionality.

## Features

- **MVC Architecture**: Clean separation of concerns with Models, Views, and Controllers
- **MongoDB Integration**: Mongoose ODM for data persistence
- **File Upload**: Multer for CV/resume uploads
- **Email Queue**: Bull queue with Redis for reliable email delivery
- **Input Validation**: Joi schema validation
- **Security**: Helmet, CORS, rate limiting
- **Error Handling**: Comprehensive error handling middleware

## API Endpoints

### Candidates
- `POST /api/candidates` - Submit candidate application (with CV upload)
- `GET /api/candidates` - Get all candidates (with pagination)
- `GET /api/candidates/:id` - Get candidate by ID
- `PATCH /api/candidates/:id/status` - Update candidate status
- `DELETE /api/candidates/:id` - Delete candidate

### Recruiters
- `POST /api/recruiters` - Submit employer form
- `GET /api/recruiters` - Get all recruiters (with pagination)
- `GET /api/recruiters/:id` - Get recruiter by ID
- `PATCH /api/recruiters/:id/status` - Update recruiter status
- `DELETE /api/recruiters/:id` - Delete recruiter

### Health Check
- `GET /api/health` - API health status

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your configuration:
   - MongoDB connection string
   - Redis configuration
   - Email service credentials
   - Admin email address

3. **Start Services**
   - MongoDB: Ensure MongoDB is running
   - Redis: Ensure Redis is running for email queue

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Run Production Server**
   ```bash
   npm start
   ```

## Environment Variables

- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `REDIS_HOST`: Redis host (default: localhost)
- `REDIS_PORT`: Redis port (default: 6379)
- `EMAIL_SERVICE`: Email service (e.g., gmail)
- `EMAIL_USER`: Email username
- `EMAIL_PASS`: Email password/app password
- `ADMIN_EMAIL`: Admin email for notifications
- `FRONTEND_URL`: Frontend URL for CORS

## Email Functionality

The system automatically sends structured emails to the admin when:
- New candidate applications are submitted
- New employer forms are submitted

Emails are processed through a Bull queue with Redis for reliability and retry logic.

## File Upload

- CV files are uploaded to `/uploads` directory
- Supported formats: PDF, DOC, DOCX
- Maximum file size: 5MB
- Files are stored with unique names to prevent conflicts

## Database Models

### Candidate
- Personal information (name, email, phone, location)
- Professional details (company, CTC, experience, skills)
- CV file information
- Application status tracking

### Recruiter
- Company information
- Contact details
- Message/requirements
- Status tracking

## Error Handling

- Comprehensive error handling with appropriate HTTP status codes
- Validation errors return detailed field-specific messages
- Development environment includes stack traces
- Production environment returns generic error messages

## Security Features

- Helmet.js for security headers
- CORS configuration
- Rate limiting (100 requests per 15 minutes)
- Input validation and sanitization
- File upload restrictions
