# Critical Path Test Checklist for Portfolio Project

## Frontend Tests
1. **Testimonials Images**
   - Verify that all testimonial images load correctly on the Testimonials section.
   - Confirm images display properly on desktop and mobile.

2. **Contact Form UI**
   - Check that all required fields (Name, Email, Message) are present.
   - Validate optional fields (Phone, Subject) are present.
   - Verify form layout and responsiveness on desktop and mobile.

3. **Contact Form Submission**
   - Submit the form with valid data.
   - Confirm success message is displayed.
   - Confirm error messages appear for missing required fields.

## Backend Tests
4. **POST /api/contact**
   - Send a POST request with valid contact data.
   - Verify data is saved in MongoDB.
   - Confirm email notification is sent to configured email.

5. **Visitor Tracking**
   - Confirm visitor logging middleware creates entries in MongoDB.
   - Test GET /api/visitors returns total visitor count and last visit date.

6. **MongoDB Connection**
   - Verify backend logs show successful MongoDB connection.
   - Confirm no connection errors in logs.

## Integration Tests
7. **Email Notifications**
   - Confirm emails are received in the inbox or spam folder.
   - Verify email content matches submitted contact form data.

---

# Postman Collection Setup Guide

1. **Create a new Postman collection** named "Portfolio API Tests".

2. **Add a POST request** to `/api/contact`:
   - URL: `http://localhost:5000/api/contact`
   - Method: POST
   - Body: raw JSON
   ```json
   {
     "name": "Test User",
     "email": "testuser@example.com",
     "phone": "1234567890",
     "subject": "Test Subject",
     "message": "This is a test message."
   }
   ```
   - Verify response status 200 and success message.

3. **Add a GET request** to `/api/visitors`:
   - URL: `http://localhost:5000/api/visitors`
   - Method: GET
   - Verify response contains `totalVisitors` and `lastVisitor`.

4. **Run the requests** and verify expected results.

---

Once you complete these tests, please share the results. Based on the outcomes, we can plan full coverage testing including UI validations and automation.
