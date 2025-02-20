
import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/pages.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });

  const validateForm = () => {
    const newErrors = {
      name: !formData.name ? 'Name is required' : '',
      email: !formData.email ? 'Email is required' : 
             !/\S+@\S+\.\S+/.test(formData.email) ? 'Invalid email format' : '',
      message: !formData.message ? 'Message is required' : ''
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleBlur = (field: keyof typeof formData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    
    if (!validateForm()) {
      setStatus('Please fix the errors before submitting.');
      return;
    }
    
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div className={styles.page}>
      <Head>
        <title>Contact Us - 2048 Game</title>
        <script src="https://www.google.com/recaptcha/enterprise.js?render=YOUR_SITE_KEY"></script>
      </Head>
      <h1>Contact Us</h1>
      <div className={styles.content}>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.required}>Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              onBlur={() => handleBlur('name')}
              className={touched.name && errors.name ? styles.invalid : ''}
            />
            {touched.name && errors.name && <div className={styles.error}>{errors.name}</div>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.required}>Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              onBlur={() => handleBlur('email')}
              className={touched.email && errors.email ? styles.invalid : ''}
            />
            {touched.email && errors.email && <div className={styles.error}>{errors.email}</div>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.required}>Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              onBlur={() => handleBlur('message')}
              className={touched.message && errors.message ? styles.invalid : ''}
            ></textarea>
            {touched.message && errors.message && <div className={styles.error}>{errors.message}</div>}
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
          {status && <p className={styles.status}>{status}</p>}
        </form>
      </div>
    </div>
  );
}
